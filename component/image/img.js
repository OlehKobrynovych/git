// різниця між тим що картинку можна задати через бекграунд і тег img 
// 1 через бекграунд дозволяє більш гнучкіше настроювати відображення картинки її повторення і розмір. картинки на бекграунд не кешуються якщо це не силка
// 2 через img її можа через праву клавішу мишки відкрити в іншому вікні або скачати


// завжди вказуємо розміра картинок щоб при загрузці сайта він не пригав коли картинка загрузиться

Стиснення фотографій, зображення, картинок.
https://compressor.io/


Скачати іконки, icons, svg
https://www.ibm.com/design/language/iconography/ui-icons/library/

https://remixicon.com/#editor

https://www.svgrepo.com/vectors/arrow-down/

https://fontawesome.com/icons

https://www.flaticon.com/ru/




фотошоп програма для роботи з картинками верстка
https://www.photopea.com/



Створення скріншодів
https://www.youtube.com/watch?v=Qgzgq_VZM-0&list=PLOQDek48BpZG0kpcUAoy5Z5ZvZN1HYt3Z
http://html2canvas.hertzen.com/


// вирізання частини картинки
https://www.npmjs.com/package/react-easy-crop
https://www.npmjs.com/package/react-filepond




// Визначення розмірів картинки
function getImageDimensions(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        resolve({ width: img.width, height: img.height });
      };
      img.onerror = (err) => {
        reject(err);
      };
      img.src = url;
    });
  }
  
  const url = 'https://pro-coach-media.s3.eu-central-1.amazonaws.com/qumqc97ag86hrlc9';
  
  getImageDimensions(url)
    .then(dimensions => {
      console.log('Width:', dimensions.width);
      console.log('Height:', dimensions.height);
    })
    .catch(error => {
      console.error('Error loading image:', error);
    });


// стиснення картинки
// https://www.npmjs.com/package/compressorjs
const handleUploadImg = async (file = null) => {
  if (file && file[0]?.name?.length) {
    new Compressor(file[0], {
      quality: 0.1,
      success: async (result) => {
        try {
          let str = await handleSaveMedia(token, result);
          if (str?.length) {
            setImage(str);
          }
        } catch (err) {
          console.error('Error saving media:', err);
        }
      },
      error(err) {
        console.error(err.message);
      },
    });
  }
};
