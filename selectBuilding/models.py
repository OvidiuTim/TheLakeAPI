from django.db import models

# Create your models here.

class Building(models.Model):
        BuildingId = models.AutoField(primary_key=True) 
        BuildingName = models.CharField(max_length=100)
        BuildingPhoto= models.CharField(max_length=100) 
        BuildingFloor = models.CharField(max_length=100)
        BuildingFloorPhoto= models.CharField(max_length=100)
        ApartmentNumb = models.CharField(max_length=100)
        ApartmentPhoto= models.CharField(max_length=100)
        ApartmentSurface = models.CharField(max_length=100)
        ApartmentRooms= models.CharField(max_length=100)
        ApartmentPrice= models.CharField(max_length=100)

