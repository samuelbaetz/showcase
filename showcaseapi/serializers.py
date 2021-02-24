from rest_framework import serializers
from .models import Post, Item

class PostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'pub_date','body')

class ItemSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        fields = ('title', 'pub_date', 'body','image')