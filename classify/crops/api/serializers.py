from rest_framework import serializers
from ..models import Crops
import base64
import uuid
from django.core.files.base import ContentFile
#Base64encoding of image

class Base64ImageField(serializers.ImageField):

    def to_internal_value(self,data):
        print('data',data)
        _format, str_img = data.split(';base64')
        print('format : ',_format)
        decoded_file = base64.b64decode(str_img)
        print('decoded_file',decoded_file)
        print('type_decoded_file',type(decoded_file))
        fname = f"{str(uuid.uuid4())[:10]}.png"
        print('fname : ',fname)
        data = ContentFile(decoded_file,name=fname)
        return super().to_internal_value(data)

class CropsSerializer(serializers.ModelSerializer):
    image  = Base64ImageField() # remove this if image is not coming in b64 format
    class Meta:
        model = Crops
        fields = ('id','image','result')