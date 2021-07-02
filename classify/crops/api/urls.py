from .views import CropsViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'crops',CropsViewSet)
urlpatterns = router.urls