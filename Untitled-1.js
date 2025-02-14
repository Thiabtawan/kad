<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Valentine</title>
    <style>
        body {
            background-color: pink;
            text-align: center;
            font-family: Arial, sans-serif;
        }
        .envelope {
            cursor: pointer;
            position: relative;
            display: inline-block;
            margin-top: 100px;
        }
        .popup {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            padding: 20px;
            box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
            border-radius: 10px;
        }
        .popup img {
            width: 300px;
            height: auto;
        }
        .close {
            display: block;
            margin-top: 10px;
            padding: 5px 10px;
            cursor: pointer;
            background: red;
            color: white;
            border: none;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <h1>Happy Valentine’s Day</h1>
    <p>คลิกที่ซองจดหมายเพื่อเปิดเซอร์ไพรส์!</p>
    <div class="envelope" onclick="openLetter()">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Envelope.svg/1200px-Envelope.svg.png" width="150" alt="Envelope">
    </div>
    
    <div class="popup" id="popup">
        <img id="popupImage" src="" alt="Popup Image">
        <button class="close" onclick="nextImage()">คลิกเพื่อดูรูปถัดไป</button>
        <audio id="bgMusic" src="your-music.mp3"></audio>
    </div>
    
    <script>
        let images = ["image1.jpg", "image2.jpg", "image3.jpg"];
        let currentIndex = 0;
        let popup = document.getElementById("popup");
        let popupImage = document.getElementById("popupImage");
        let bgMusic = document.getElementById("bgMusic");

        function openLetter() {
            popup.style.display = "block";
            popupImage.src = images[currentIndex];
            bgMusic.play();
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            popupImage.src = images[currentIndex];
        }
    </script>
</body>
</html>
