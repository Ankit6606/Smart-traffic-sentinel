import cv2
import pytesseract
import time

pytesseract.pytesseract.tesseract_cmd = r'C:\Users\ANKIT\AppData\Local\Programs\Tesseract-OCR\tesseract.exe'

car_cascade = cv2.CascadeClassifier('haarcascade_car.xml')

def perform_ocr(image):
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    return pytesseract.image_to_string(gray)

video_path = 'rashmalai.mp4'
cap = cv2.VideoCapture(video_path)

time_gap = 2  

while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    
    cars = car_cascade.detectMultiScale(gray, 1.1, 1)
    
    for (x, y, w, h) in cars:
        car_image = frame[y:y+h, x:x+w]
        number_plate_text = perform_ocr(car_image)
        
        cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2)
        cv2.putText(frame, number_plate_text, (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)
    
    cv2.imshow('Number Plate Detection', frame)
    
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

cap.release()
cv2.destroyAllWindows()
