import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import LanguageChart from './LanguageChart';

function Projects() {
    const [repos, setRepos] = useState([]);
    const [showReadme, setShowReadme] = useState({});

    useEffect(() => {
        const fetchGithubProjects = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/get_github_data/');
                setRepos(response.data);
            } catch (error){
                console.error('There was an error fetching data!', error);
            }
        };

        fetchGithubProjects();
      }, []);


  const toggleShowReadme = (repoName) => {
    setShowReadme((prevState) => ({
        ...prevState,
        [repoName]: !prevState[repoName],
    }));
  };
  return (
    <div className='Projects'>
        
        {repos.length === 0 ? (
            <p className='loading'>Loading...</p>
        ) : (
            <div>
                {repos.map(repo => (
                <div className='ProjectsDetail' key={repo.name}>
                    <h2>{repo.name}</h2>
                    <div className='ProjectsTopRow'>
                        <div className='ProjectDetailRow'>
                        {repo.images && repo.images.length > 0 ? (
                            <div>
                                {repo.images.map((image, index) => (
                                    <img key={index} src={image} alt={`Image ${index + 1} in ${repo.name}`} style={{ maxWidth: '100%', height: 'auto' }} />
                                ))}
                            </div>
                        ) : (
                            <div>
                                <p className='NoImage'>No images available :(</p>
                            </div>
                        )}
                        </div>
                        <div className='ProjectDetailRow'>
                        <p>{repo.description}</p>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            Github page
                        </a>
                        {repo.deploy_link && (
                                <div>
                                    <h3>Deployment</h3>
                                    <a href={repo.deploy_link} target="_blank" rel="noopener noreferrer">
                                        Visit Deployment
                                    </a>
                                </div>
                            )}
                        </div>
                        <div className='ProjectDetailRow'>
                        {repo.languages && Object.keys(repo.languages).length > 0 && (
                            <LanguageChart data={repo.languages} />
                        )}
                        </div>
                    </div>
                    <div className='ProjecrReadmeDetail'>
                        <button className='ShowReadmeButton' onClick={() => toggleShowReadme(repo.name)}>
                            {showReadme[repo.name] ? 'Hide Readme' : 'Show Readme'}
                        </button>
                        {showReadme[repo.name] && <div className="ReadmeRow">
                            {repo.readme && (
                                <div>
                                    <h3>README</h3>
                                    <pre><ReactMarkdown>{repo.readme}</ReactMarkdown></pre>
                                </div>
                            )}
                            </div>}
                    </div>
                </div>
                ))}
            </div>
      )}
    </div>
  )
}

export default Projects