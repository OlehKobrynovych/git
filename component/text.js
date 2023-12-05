
// три крапки якщо текст непоміщається
import './TextWithEllipsis.css';
import { useState, useRef, useEffect, Fragment } from 'react';

function TextWithEllipsis({ text }) {
    const [isOverflowed, setIsOverflowed] = useState(false);
    const textWithEllipsistext = useRef(null);

    useEffect(() => {
        if (textWithEllipsistext.current.scrollHeight > textWithEllipsistext.current.offsetHeight) {
            setIsOverflowed(true);
        }
    }, [text]);

    return (
        <div
            className="text-with-ellipsis"
            style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: "#fff",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            }}
            ref={textWithEllipsistext}
        >
            {text}
            {isOverflowed && <span>...</span>}
        </div>
    );
}

export default TextWithEllipsis;

/// стилі
{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}


// При зміні на горизонтальне положенні в телефоні або в планшені міняються стилі на іншу точку медіазапиту і при повернені назад не міняється 
// фіксить зміну тексту
-webkit-text-size-adjust: 100%;


//  при наведені текст появляється 
.product-card-user__card-info-size {
    width: 100px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
}
.product-card-user__card-info-size:hover {
    overflow: visible;
    z-index: 1;
}

.product-card-user__card-info-size:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 100%;
    width: 9999px;
    height: 100%;
    background-color: white;
    z-index: -1;
  }