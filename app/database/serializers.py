from rest_framework import serializers
from .models import User, Board


class UserSerializer(serializers.ModelSerializer):
    """
    specifies the model to work with and the fields
    we want to be converted to JSON
    """

    class Meta:
        """

        """
        model = User
        fields = ('username', 'password', 'name')


class BoardSerializer(serializers.ModelSerializer):
    """
    specifies the model to work with and the fields
    we want to be converted to JSON
    """

    class Meta:
        """

        """
        model = Board
        fields = ('id', 'username', 'title', 'description', 'date')
