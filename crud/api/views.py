from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework import serializers
from rest_framework.response import Response
from . models import Post
from . serializers import PostSerializer
from rest_framework.parsers import JSONParser

# Create your views here.
@api_view(['GET'])
def posts(request):
    posts = PostSerializer(Post.objects.all(), many=True)
    return Response(posts.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_post(request):
    post = PostSerializer(data=request.data)
    if post.is_valid():
        post.save(author=request.user)
        return Response(post.data, status=200)
    return Response(post.errors)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def post_detail(request, pk):
    post = Post.objects.filter(pk=pk).first()
    if post:
        serializer = PostSerializer(post)
        return Response(serializer.data)
    return Response(status=404)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_post(request, pk):
    post = Post.objects.filter(pk=pk).first()
    if post:
        if post.author == request.user:
            serializer = PostSerializer(post, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=200)
            return Response(serializer.errors, status=400)
        return Response('You are not allowed to change', status=403)
    return Response(status=404)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def delete_post(request, pk):
    post = Post.objects.filter(pk=pk).first()
    if post:
        if post.author == request.user:
            post.delete()
            return Response('Deleted', status=200)
        return Response('You are not allowed to change', status=403)
    return Response(status=404)

    







    