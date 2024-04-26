// https://codepen.io/b0y/pen/qNazQV
// https://codepen.io/therealDaze/pen/ZaoErp
// https://codepen.io/frcodecamp/pen/OEovqx
// https://www.npmjs.com/package/react-draggable-list



import React, { useState, useEffect } from 'react';
import './DraggableComponent.css';

const ImageBox = ({ image, draggable, onDragStart, onDragOver, onDrop }) => {
    return (
        <img
            className="draggable-component__image"
            src={image}
            draggable={draggable}
            onDragStart={onDragStart(image)}
            onDragOver={onDragOver}
            onDrop={onDrop}
        />
    );
};

const DraggableComponent = ({images, setImages}) => {
    // const [images, setImages] = useState([]); //масив посилань
    console.log('images', images)

    const swapImages = (fromIndex, toIndex) => {
        setImages((prevImages) => {
            const updatedImages = [...prevImages];
            const temp = updatedImages[fromIndex];
            updatedImages[fromIndex] = updatedImages[toIndex];
            updatedImages[toIndex] = temp;
            return updatedImages;
        });
    };

    const handleDragStart = (image) => (event) => {
        event.dataTransfer.setData('dragContent', image);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (toIndex) => (event) => {
        event.preventDefault();

        const fromImage = event.dataTransfer.getData('dragContent');
        const fromIndex = images.findIndex((image) => image === fromImage);

        if (fromIndex !== -1) {
            swapImages(fromIndex, toIndex);
        }
    };

    const makeImageBoxes = () => {
        return images.map((image, index) => (
            <ImageBox
                key={index}
                image={image}
                draggable="true"
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop(index)}
            />
        ));
    };

    return <div className="draggable-component__group">{makeImageBoxes()}</div>;
};

export default DraggableComponent;



//------------------------------- css
// .draggable-component__group {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 10px;
//   }
  
//   .draggable-component__image {
//     width: 100px;
//     height: 100px;
//     cursor: pointer;
//   }
  