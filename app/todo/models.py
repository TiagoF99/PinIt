from django.db import models


# Create your models here.
class Todo(models.Model):
	"""
	properties of the todo model
	"""
	username = models.CharField(max_length=20, unique=True)
	password = models.CharField(max_length=20)
	name = models.TextField()

	def __str__(self):
		return self.username
