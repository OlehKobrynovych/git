
// створює дів в який можна вставляти текс і редагувати  
import React, { useState } from 'react';

function HomeView2() {
    const [text, setText] = useState('sd sd sd ');
    const [editedText, setEditedText] = useState('');

    function handlePaste(event) {
        event.preventDefault();
        const pastedText = event.clipboardData.getData('text/plain');
        document.execCommand('insertHTML', false, pastedText);
    }

    function handleBlur(event) {
        setEditedText(event.target.innerHTML);
    }

    function replaceDivsWithBr(text) {
        return text.replace(/<div>/g, '<br>').replace(/<\/div>/g, '');
    }

return (
    <div>
        <div contentEditable onPaste={handlePaste} onBlur={handleBlur} style={{ fontFamily: 'Arial', fontWeight: 'bold' }} dangerouslySetInnerHTML={{ __html: text }} />
        <div dangerouslySetInnerHTML={{ __html: replaceDivsWithBr(editedText) }} />
    </div>
);
}


export default HomeView2;
