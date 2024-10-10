//завантажити декілька картинок
<input className="order-view__form-input-upload" onChange={(e) => handleUploudImg(e.target.files)} multiple type="file" accept="image/*" id="orderViewImg"/>

const handleUploudImg = (img = null) => {
    let valuesArray = [];
    for (let key in img) {
        if (img.hasOwnProperty(key)) {
            valuesArray.push(img[key]);
        }
    }
    setImgArr([...imgArr, ...valuesArray])
}



//завантажити по 1 картинці
<input className="order-view__form-input-upload" onChange={(e) => handleUploudImg(e.target.files[0])} type="file" accept="image/*" id="orderViewImg"/>

const handleUploudImg = (file) => {
    if (file?.name?.length) {
        setImgArr([...imgArr, file])
    }
}

// видалення картинки  і повторне її завантаження
event.target.value = ''; 
