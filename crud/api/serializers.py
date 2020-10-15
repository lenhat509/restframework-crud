from rest_framework import serializers
from . models import Post

class PostSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    content = serializers.CharField()
    author = serializers.PrimaryKeyRelatedField(read_only=True, required=False)

    class Meta:
        model = Post
        fields = '__all__' #['content']
