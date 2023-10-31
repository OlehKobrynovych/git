
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


  // =========================================
  function getContrastColor(background) {
    // Функція приймає колір у форматі '#RRGGBB', 'rgb(r, g, b)' або 'rgba(r, g, b, a)'.
    // Перетворюємо колір у формат 'rgb(r, g, b)' для зручності обробки.
    if (background?.length) {
      if (background.startsWith('#')) {
        background = convertColorToRGB(background);
      }
    
      // Витягуємо значення кольору з 'rgb(r, g, b)' у масив.
      const colorValues = background.match(/\d+/g).map(Number);
    
      // Обчислюємо яскравість за стандартною формулою WCAG.
      const brightness = (colorValues[0] * 299 + colorValues[1] * 587 + colorValues[2] * 114) / 1000;
    
      // Вибираємо колір галочки в залежності від яскравості фону.
      return brightness > 128 ? 'black' : 'white';

    }
  }

  function convertColorToRGB(color) {
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
      // Якщо кольор представлений у шістнадцятковому форматі (#RRGGBB або #RGB)
      color = color.replace('#', '');
      if (color.length === 3) {
        color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
      }
  
      const r = parseInt(color.substring(0, 2), 16);
      const g = parseInt(color.substring(2, 4), 16);
      const b = parseInt(color.substring(4, 6), 16);
      return `rgb(${r}, ${g}, ${b})`;
    } else if (/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/.test(color)) {
      // Якщо кольор представлений у форматі rgb(r, g, b)
      return color;
    } else if (/^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d*(\.\d+)?)\)$/.test(color)) {
      // Якщо кольор представлений у форматі rgba(r, g, b, a)
      return color;
    } else {
      // Інакше повертаємо початковий кольор без змін
      return color;
    }
  }