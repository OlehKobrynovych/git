
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