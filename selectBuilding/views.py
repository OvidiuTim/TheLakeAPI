from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from selectBuilding.models import Building
from selectBuilding.serializers import BuildingSerializer

from django.core.files.storage import default_storage


# Create your views here.
#api angajati

@csrf_exempt
def buildingAPI(request,id=0):
    if request.method=='GET':
        buildings = Building.objects.all()
        buildings_serializer = BuildingSerializer(buildings, many=True)
        return JsonResponse(buildings_serializer.data, safe=False)

    elif request.method=='POST':
        building_data=JSONParser().parse(request)
        building_serializer = BuildingSerializer(data=building_data)
        if building_serializer.is_valid():
            building_serializer.save()
            return JsonResponse("Added Successfully!!" , safe=False)
        return JsonResponse("Failed to Add.",safe=False)
    
    elif request.method=='PUT':
        building_data = JSONParser().parse(request)
        building=Building.objects.get(BuildingId=building_data['BuildingId'])
        building_serializer=BuildingSerializer(building,data=building_data)
        if building_serializer.is_valid():
            building_serializer.save()
            return JsonResponse("Updated Successfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method=='DELETE':
        building=Building.objects.get(BuildingId=id)
        building.delete()
        return JsonResponse("Deleted Succeffully!!", safe=False)

#api imagini

@csrf_exempt
def SaveFile(request):
    file=request.FILES['uploadedFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)