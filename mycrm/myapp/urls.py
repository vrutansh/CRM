from django.urls import path
from .views import RegisterAPI, LoginAPI, UserRoleAPI
from knox import views as knox_views

urlpatterns = [
    path('register/', RegisterAPI.as_view(), name='register'),
    path('login/', LoginAPI.as_view(), name='login'),
    path('user-role/', UserRoleAPI.as_view(), name='user-role'),
    path('logout/', knox_views.LogoutView.as_view(), name='logout'),
]