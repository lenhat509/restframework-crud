from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token
from . import views

urlpatterns = [
    path('posts', views.posts, name='get-all-posts'),
    path('post/new', views.create_post, name='create-post'),
    path('post/<int:pk>', views.post_detail, name='post-detail'),
    path('post/<int:pk>/update', views.update_post, name='update_post'),
    path('post/<int:pk>/delete', views.delete_post, name='delete_post'),
    path('token', obtain_auth_token, name='obtain-auth-token')
]