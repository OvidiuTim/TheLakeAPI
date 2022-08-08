from rest_framework import serializers
from selectBuilding.models import Building

class BuildingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Building
        fields = ('BuildingId',
                  'BuildingName',
                  'BuildingPhoto',
                  'BuildingFloor',
                  'BuildingFloorPhoto',
                  'ApartmentNumb',
                  'ApartmentPhoto',
                  'ApartmentSurface',
                  'ApartmentRooms',
                  'ApartmentPrice',)

