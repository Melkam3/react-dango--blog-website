from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# Create a router object
router = DefaultRouter()

# Register the PostViewSet with the router
router.register(r'posts', views.PostViewSet)

# Define urlpatterns for the app
urlpatterns = [
    # Include the URLs generated by the router
    path('', include(router.urls)),
    # Add custom URL pattern for retrieving post by slug
    path('post/<slug:slug>/', views.PostBySlugAPIView.as_view(), name='post-by-slug'),

]
