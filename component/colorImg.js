
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

  // ==========================================
  // перетворення кольору
  const countF = (str) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'f') {
        count++;
      }
    }
    return count;
  }

  function convertToHex(colorValue) {
      console.log('colorValue', colorValue)
      let colorString = colorValue.toLowerCase().trim();
      
      // Перетворення RGB формату в HEX
      if (colorString.startsWith('rgb')) {
          const rgbValues = colorString
          .substring(colorString.indexOf('(') + 1, colorString.lastIndexOf(')'))
          .split(',')
          .map(value => parseInt(value.trim(), 10));
          
          console.log('rgbValues', rgbValues)
      if (rgbValues.length >= 3) {
        const [r, g, b] = rgbValues;
         console.log(`#${padZeroes(r.toString(16))}${padZeroes(g.toString(16))}${padZeroes(b.toString(16))}`);
        return countF(`#${padZeroes(r.toString(16))}${padZeroes(g.toString(16))}${padZeroes(b.toString(16))}`);
      }
    }
  
    // Перетворення короткого HEX формату в повний HEX
    if (colorString.startsWith('#') && colorString.length === 4) {
      const shortHex = colorString.substring(1);
      const [r, g, b] = Array.from(shortHex, char => parseInt(`${char}${char}`, 16));
       console.log(`#${padZeroes(r.toString(16))}${padZeroes(g.toString(16))}${padZeroes(b.toString(16))}`);
      return countF(`#${padZeroes(r.toString(16))}${padZeroes(g.toString(16))}${padZeroes(b.toString(16))}`);
    }
  
    // Перетворення інших HEX форматів в стандартний HEX формат
    if (colorString.startsWith('#')) {
      const hex = colorString.substring(1);
      const hexValues = Array.from(hex, (char, index) => {
        if (index % 2 === 0) {
          return `${char}`;
        } else {
          return `${hex[index - 1]}${char}`;
        }
      });
    console.log(`#${hexValues.join('')}`);
      return countF(`#${hexValues.join('')}`);
    }
  
    // Якщо формат кольору не відповідає ні одному з вищезазначених, повертаємо вхідне значення без змін
     console.log(colorValue);
    return countF(colorValue);
  }
  
  function padZeroes(str) {
    return str.length === 1 ? `0${str}` : str;
  }