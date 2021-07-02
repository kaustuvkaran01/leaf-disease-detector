from rest_framework import serializers
from ..models import Crops

class CropsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Crops
        fields = ('id','image','result')