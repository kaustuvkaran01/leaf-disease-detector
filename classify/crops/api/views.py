from rest_framework import viewsets
from ..models import Crops
from .serializers import CropsSerializer

class CropsViewSet(viewsets.ModelViewSet):
    serializer_class = CropsSerializer
    queryset = Crops.objects.all()