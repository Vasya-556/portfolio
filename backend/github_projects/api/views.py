import requests
import re
from django.http import JsonResponse
from .token import token

def get_github_data(request):
    username = 'Vasya-556'
    
    headers = {
        'Authorization': f'token {token}'
    }
    
    base_url = f'https://api.github.com/users/{username}/repos'
    repos_response = requests.get(base_url, headers=headers)
    
    if repos_response.status_code != 200:
        error_message = repos_response.json().get('message', 'Unknown error')
        return JsonResponse({'error': f'Failed to fetch repositories: {error_message}'}, status=repos_response.status_code)
    
    repos_data = repos_response.json()
    detailed_data = []
    
    excluded_repos = ['AP', 'CG', 'DBS', 'CPP', 'Vasya-556', 'OOP1', 'PDS', 'PGI', 'portfolio', 'tic-tac-toe', 'To-Do-List']
    
    for repo in repos_data:
        if repo['name'] in excluded_repos:
            continue
        
        repo_name = repo['name']
        repo_url = f'https://api.github.com/repos/{username}/{repo_name}'
        repo_html_url = repo['html_url']  # Base URL for resolving relative paths
        
        # Fetch README
        readme_url = f'https://raw.githubusercontent.com/{username}/{repo_name}/master/README.md'
        readme_response = requests.get(readme_url)
        readme_content = readme_response.text if readme_response.status_code == 200 else None

        # Extract and resolve image links from README
        image_urls = re.findall(r'!\[.*?\]\((.*?)\)', readme_content) if readme_content else []
        
        # Base URL for raw images in GitHub repositories
        base_image_url = f'https://raw.githubusercontent.com/{username}/{repo_name}/master/'
        resolved_image_urls = [url if url.startswith('http') else f'{base_image_url}{url}' for url in image_urls]
        
        # Fetch languages
        languages_url = f'{repo_url}/languages'
        languages_response = requests.get(languages_url, headers=headers)
        
        if languages_response.status_code != 200:
            languages_data = {}
        else:
            languages_data = languages_response.json()
            total_bytes = sum(languages_data.values())
            languages_percentage = {lang: (bytes / total_bytes) * 100 for lang, bytes in languages_data.items()} if total_bytes > 0 else {}
        
        # Check for deployment link
        deployment_url = f'{repo_url}/deployments'
        deployment_response = requests.get(deployment_url, headers=headers)
        
        if deployment_response.status_code != 200:
            deployments = []
        else:
            deployments = deployment_response.json()
        
        deploy_link = None
        if deployments:
            for deployment in deployments:
                if deployment['environment'] == 'github-pages':
                    deploy_link = f'https://{username}.github.io/{repo_name}'
                    break
        
        detailed_data.append({
            'name': repo['name'],
            'description': repo['description'],
            'html_url': repo['html_url'],
            'readme': readme_content,
            'images': resolved_image_urls,
            'languages': languages_percentage,
            'deploy_link': deploy_link,
        })
    
    return JsonResponse(detailed_data, safe=False)