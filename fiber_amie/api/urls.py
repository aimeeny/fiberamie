from django.urls import path, include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()
router.register(r'yarns', views.AddYarnViewSet)
router.register(r'hooks', views.AddHookViewSet)
router.register(r'needles', views.AddNeedleViewSet)
router.register(r'users', views.UserViewSet)


urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]