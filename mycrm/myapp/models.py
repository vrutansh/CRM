from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models



class User(AbstractUser):
    ROLE_CHOICES = [
        ('SuperUser', 'SuperUser'),
        ('Admin', 'Admin'),
        ('Supervisor', 'Supervisor'),
        ('Manager', 'Manager'),
        ('TeamLead', 'Team Leader'),
        ('TeamMember', 'Team Member'),
    ]
    role = models.CharField(max_length=20, choices=ROLE_CHOICES)
 


    # def __str__(self):
    #     return self
