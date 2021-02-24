from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets

from .serializers import PostSerializer, ItemSerializer
from .models import Post, Item

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('title')
    serializer_class = PostSerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all().order_by('title')
    serializer_class = ItemSerializer