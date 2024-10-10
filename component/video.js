// react-player

// дістати картинку з відео
https://noembed.com/
fetch(`http://noembed.com/embed?url=https://www.youtube.com/watch?v=WNeLUngb-Xg`)
    .then((response) => {
        return response.json();
        })
        .then((data) => {
        console.log(data);
});




//Оприділити тривалість відео і перший кадер
import React, { useState } from 'react';

const VideoUploader = () => {
  const [videoDuration, setVideoDuration] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const videoUrl = URL.createObjectURL(file);
      const videoElement = document.createElement('video');

      videoElement.src = videoUrl;

      videoElement.onloadedmetadata = () => {
        setVideoDuration(videoElement.duration);

        // Створення канвасу для відображення першого кадру
        const canvas = document.createElement('canvas');
        canvas.width = videoElement.videoWidth;
        canvas.height = videoElement.videoHeight;
        
        const context = canvas.getContext('2d');
        
        // Очікування на завантаження першого кадру
        videoElement.currentTime = 0;
        
        videoElement.onloadeddata = () => {
          context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
          const thumbnailUrl = canvas.toDataURL('image/png');
          setThumbnail(thumbnailUrl);
          URL.revokeObjectURL(videoUrl); // Очищаємо URL після використання
        };
      };
    }
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleVideoUpload} />
      {videoDuration && <p>Тривалість відео: {videoDuration} секунд</p>}
      {thumbnail && <img src={thumbnail} alt="First frame thumbnail" />}
    </div>
  );
};

export default VideoUploader;

