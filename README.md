# Leaf Disease Detector

You can check out the application at : **https://www.youtube.com/watch?v=faVKc1n89rU**

The application is built using React.js, Flask, Tensorflow and Keras.

The model used in this project has been trained to identify the following classes:

1. Tomato Mosaic Virus 
2. Target Spot 
3. Bacterial spot 
4. Tomato Yellow Leaf Curl Virus 
5. Late Blight 
6. Leaf Mold 
7. Early Blight 
8. Spidermites Two-Spotted Spider Mite 
9. Tomato healthy 10. Septoria Leaf Spot

**Task :** Create a leaf disease detection application with both a prediction section and information about various diseases that it can predict.

## Data

The data has been taken from [here](https://www.kaggle.com/kaustubhb999/tomatoleaf)
The data has been modified by me to be used as example.

## List of all major frameworks/libraries utilized in the application:

1. ReactJS
2. Flask
3. Styled Components - For CSS & DarkMode/LightMode
4. TailwindCSS - Built on Tailwind and then migrated to styled components

## Highlights

1. Preprocessing

   - Used ImageDataGenerator to preprocess images from the train and test data.
   - Rescaled the images to 1/255 of their value and horizontally flipped the images randomly.
   - Resized the images to 256x256.

![Screenshot 2021-09-20 184501](https://user-images.githubusercontent.com/43791878/134008831-6121b47a-d293-4d24-9b63-96c357088320.png)

2. The Model
   - I have built a custom CNN of 10 layers with loss as categorical crossentropy and optimizer as the Adam Optimizer from Keras.

   ![image](https://user-images.githubusercontent.com/43791878/135286779-8076df14-4d8a-4ff4-a9ef-fa239a49f436.png)
   ![image](https://user-images.githubusercontent.com/43791878/135286914-b2496d9f-986a-4839-96d3-150568fcc765.png)
   Layers :
   ![image](https://user-images.githubusercontent.com/43791878/135287623-360536dc-b68b-4be8-89ea-f97c51148409.png)


3. Training
   ![image](https://user-images.githubusercontent.com/43791878/135287718-665afc28-c66d-40b5-afef-d82b072a9505.png)
   ![image](https://user-images.githubusercontent.com/43791878/135287832-43d86f91-6292-48f2-bbff-edf1905261e8.png)

4. Results
   ![image](https://user-images.githubusercontent.com/43791878/135287933-522427f6-d899-4cd5-b720-c16926b0de85.png)

5. Unique Points

## Screenshots

![image](https://user-images.githubusercontent.com/43791878/134009191-4c829d5e-cb04-4e71-a563-36a015246604.png)
![image](https://user-images.githubusercontent.com/43791878/134009237-59650b26-ec7e-4b61-9042-93a75058bc69.png)
![image](https://user-images.githubusercontent.com/43791878/134009407-704e94fb-2be0-45bf-9d85-a2c5e8653a86.png)
