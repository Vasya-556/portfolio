from django.urls import path
from .views import get_github_data

urlpatterns = [
    path('get_github_data/', get_github_data, name='get_github_data'),
]