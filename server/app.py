from flask import Flask, redirect, url_for, request,render_template
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer
import pandas as pd
import tensorflow as tf
import keras 
from keras.model import load_model
from keras.preprocessing import image
from PIL import Image
from io import BytesIO
import base64

# import CNN_model.h5
app = Flask(__name__)

#Model saved with Keras model.save()
MODEL_PATH = 'models/CNN_model.h5'

#Load your trained model
model = load_model(MODEL_PATH)
model._make_predict_function()


print('Model loaded, check http://localhost:5000')

def model_predict(img_path, model):
    img = image.load_img(img_path, target_size=(224,224))

    x = image.img_to_array(img)

    x = x /255

    x = np.expand_dims(x,axis=0)

    preds = model.predcit(x)
    reutrn preds

#defining a predict function as an endpoint
@app.route('/')
def index():
    return 'hello'

@app.route('/predict',methods=['GET','POST'])
def upload():

    if request.method == 'POST':
        f = request.files['file']

        basepath = os.path.dirname(__file__)
        file_path = os.path.join(
            basepath, 'uploads', secure_filename(f.filename)
        )
        f.save(file_path)

        #Make prediction
        preds = model_predict(file_path,model)

        #Process result for legibility
        pred_class = decode_predictions(preds,top=1)
        result = str(pred_class[0][0][1])
        return result
    return None

    # params = flask.request.json
    # data = request.get_json()
    # img = Image.open(BytesIO(base64.b64decode(data)))
    # result = str(model.predict(img))
    # return flask.jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
