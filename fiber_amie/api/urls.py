from django.urls import path, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'yarn', views.AddYarnViewSet)
router.register(r'hooks', views.AddHookViewSet)
router.register(r'needles', views.AddNeedleViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]