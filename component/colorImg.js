
// приймає силку на картинку і вертає основний колір картинки !!не використовую
export const mainColorImg = (url, callback) => {
    let img = new Image();
    img.crossOrigin = 'Anonymous';
    img.onload = function() {
      let canvas = document.createElement('canvas');
      let context = canvas.getContext('2d');
      canvas.width = this.width;
      canvas.height = this.height;
      context.drawImage(this, 0, 0);
      let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      let pixelArray = imageData.data;
      let colorCount = {};
      let maxColor = '';
      let maxCount = 0;
      for (let i = 0; i < pixelArray.length; i += 4) {
        let r = pixelArray[i];
        let g = pixelArray[i + 1];
        let b = pixelArray[i + 2];
        let color = `rgb(${r},${g},${b})`;
        if (colorCount[color]) {
          colorCount[color]++;
        } else {
          colorCount[color] = 1;
        }
        if (colorCount[color] > maxCount) {
          maxCount = colorCount[color];
          maxColor = color;
        }
      }
      callback(maxColor);
      console.log('maxColor' , maxColor)
    };
    img.src = url;
  }