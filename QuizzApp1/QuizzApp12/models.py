from django.db import models

class Member(models.Model):
  firstname = models.CharField(max_length=255)
  lastname = models.CharField(max_length=255)
  email = models.EmailField(null=True)
  password = models.CharField(max_length=128, null = True)

  def __str__(self):
    return f"{self.firstname} {self.lastname} ({self.email})"

