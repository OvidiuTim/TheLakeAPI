from django.urls import re_path as url
from selectBuilding import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^building/$',views.buildingAPI),
    url(r'^building/([0-9]+)$',views.buildingAPI),


    url(r'^SaveFile$', views.SaveFile)
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)