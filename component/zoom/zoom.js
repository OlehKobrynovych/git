import './ZoomImage.css';
import React, { useState } from 'react';
import Zoom from 'react-img-hover-zoom'

const ZoomImage = ({imgStr}) => {
	const [isZoom, setIsZoom] = useState(false);
  
	const handleWidthWrap = () => {
		const parentElement = document.getElementById(`zoomImageWrap-${imgStr}`);
		if (parentElement) {
			return parentElement.offsetWidth
		}
		return 640
	}

	const style = {
		width: '650px',
		height: '640px'
	}

	const handleIsZoom = (id) => {
		setIsZoom(true)
		const parentElement = document.getElementById(id);
		if (!parentElement) {
		  return;
		}
		
		const firstChildDiv = parentElement.querySelector('div');
		if (!firstChildDiv) {
		  return;
		}
		
		const nestedDiv = firstChildDiv.querySelector('div');
		if (!nestedDiv) {
		  return;
		}
		
		firstChildDiv.classList.add('zoom_image__img-zoom--zoom-wrap');
		nestedDiv.classList.add('zoom_image__img-zoom--zoom');
	}

	return (
		<>
			<img
				id={`zoomImageWrap-${imgStr}`}
				className={`zoom_image__img ${isZoom ? 'zoom_image__img--is-zoom' : ''}`}
				src={imgStr}
				alt="Зображення"
				style={{
				width: '100%',
				height: '100%',
				objectFit: 'contain',
				}}
				onClick={() => handleIsZoom(`zoomImage-${imgStr}`)}
			/>
			<div id={`zoomImage-${imgStr}`} className={`zoom_image__img-zoom ${isZoom ? 'zoom_image__img-zoom--is-zoom' : ''}`} onClick={() => setIsZoom(false)}>
				<Zoom
					img={imgStr}
					zoomScale={2}
					style={style}
					width={handleWidthWrap()}
					height={handleWidthWrap()}
				/>
			</div>
		</>
	);
  };
  
  export default ZoomImage;