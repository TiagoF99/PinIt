from django.db import models


# Create your models here.
class User(models.Model):
    """
    properties of the database model
    """
    username = models.CharField(max_length=20, primary_key=True)
    password = models.CharField(max_length=20)
    name = models.TextField()

    def __str__(self):
        return self.username


class Board(models.Model):
    """
    properties of the database model
	"""
    id = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=20)
    title = models.CharField(max_length=20)
    description = models.CharField(max_length=200)
    date = models.DateField()
