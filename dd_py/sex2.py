import cv2
import pytesseract
import time

# Path to Tesseract executable (change this to your installation path)
pytesseract.pytesseract.tesseract_cmd = r'C:\Users\ANKIT\AppData\Local\Programs\Tesseract-OCR\tesseract.exe'

# Load the pre-trained cascade classifier for detecting vehicles
car_cascade = cv2.CascadeClassifier('haarcascade_car.xml')

# Function to perform OCR on an image region
def perform_ocr(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    return pytesseract.image_to_string(gray)

# Load the video file
video_path = r'.\rashmalai.mp4'
cap = cv2.VideoCapture(video_path)

# Set the desired time gap between frames (in seconds)
time_gap = 2  # Adjust this value as needed

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    
    # Convert the frame to grayscale for car detection
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    # Detect cars in the frame
    cars = car_cascade.detectMultiScale(gray, 1.1, 1)
    
    # Process each detected car
    for (x, y, w, h) in cars:
        car_image = frame[y:y+h, x:x+w]
        number_plate_text = perform_ocr(car_image)
        
        # Display the result on the frame
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
        cv2.putText(frame, number_plate_text, (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)
    
    # Display the frame
    cv2.imshow('Number Plate Detection', frame)
    
    # Press 'q' to exit
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Release the video capture and close windows
cap.release()
cv2.destroyAllWindows()
