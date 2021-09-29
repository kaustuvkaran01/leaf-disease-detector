# Leaf Disease Detector

You can check out the application at : **https://www.youtube.com/watch?v=faVKc1n89rU**

The application is built using React.js, Flask, Tensorflow and Keras.

The model used in this project has been trained to identify the following classes:

1. Tomato Mosaic Virus 2. Target Spot 3. Bacterial spot 4. Tomato Yellow Leaf Curl Virus 5. Late Blight 6. Leaf Mold 7. Early Blight 8. Spidermites Two-spottedspider_mite 9. Tomato healthy 10. Septoria Leaf Spot

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

   -
   - Removed unnecessary Components and reduced unused javascript to counter render-blocking.
   - With React's Virtual DOM, rendering components is fast & thus the **LCP Score** for the dashboard is just 1.0s.
   - **Caching with Service worker** improved performance on subsequent loads.
   - CLS(Cumulative Layout Shift) is 0.
   - Use of React.lazy() improved the performance greatly by lazy loading the Editor component which was decreasing site performance greatly.

![Screenshot 2021-09-20 184501](https://user-images.githubusercontent.com/43791878/134008831-6121b47a-d293-4d24-9b63-96c357088320.png)

2. Responsive

   - I have used media queries wherever possible so as to make the application look responive across desktops, tablets & mobile phones

3. Feature Set
   - The option to upload a new dataset (mock only)
   - The editor has a search on recently run query.
   - List of all columns in the table for all tables.
   - Visually appealing Light and Dark modes.

## Screenshots

![image](https://user-images.githubusercontent.com/43791878/134009191-4c829d5e-cb04-4e71-a563-36a015246604.png)
![image](https://user-images.githubusercontent.com/43791878/134009237-59650b26-ec7e-4b61-9042-93a75058bc69.png)
![image](https://user-images.githubusercontent.com/43791878/134009407-704e94fb-2be0-45bf-9d85-a2c5e8653a86.png)
