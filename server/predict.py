import tensorflow_hub as hub
import tensorflow as tf
import numpy as np

def predict_image(im):
    model = tf.keras.models.load_model('CNN_model.h5', custom_objects={'KerasLayer': hub.KerasLayer})
    im = np.asarray(im)
    image = tf.image.resize(im, (256, 256))
    img = image/255.0
    image = tf.expand_dims(img, axis=0)
    preds = model.predict(image)
    probs, class_idx = tf.math.top_k(preds, k=1)
    class_names = ['Tomato___Bacterial_spot','Tomato___Early_blight' ,'Tomato___Late_blight','Tomato___Leaf_Mold' ,'Tomato___Septoria_leaf_spot' ,'Tomato___Spider_mites Two-spotted_spider_mite' ,'Tomato___Target_Spot' ,'Tomato___Tomato_Yellow_Leaf_Curl_Virus' ,'Tomato___Tomato_mosaic_virus' ,'Tomato___healthy']
    classes=[]
    for i in class_idx.numpy()[0]:
        classes.append(class_names[i])
    return classes[0]