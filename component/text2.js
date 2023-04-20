
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


/// варіант

import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import './AttitudeView.css';
import { useDispatch, useSelector } from 'react-redux';
import { getOwners, setShowMessageObj } from '../../store/homeSlice';
import { verifyToken } from '../../helpers/Utils';


function AttitudeView() {
    const [text, setText] = useState('Редагувати!!!');
    const [editedText, setEditedText] = useState('');
    console.log("text", text)
    console.log("editedText", editedText)

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
    <div className='attitude-view-wrap'>
        <div className='attitude-view container'>
            {
                true && 
                <div>
                    <h2>Вставте текс, або html і редагуйте його</h2>
                    <div className={`attitude-view__no-admin ${true ? 'attitude-view__admin' : ''}`} contentEditable onPaste={handlePaste} onBlur={handleBlur} style={{ fontFamily: 'Arial', fontWeight: 'bold' }} dangerouslySetInnerHTML={{ __html: text }} />
                    
                    {
                        !!editedText?.length && editedText !== 'Редагувати!!!' &&
                            <div className='attitude-view__result' contentEditable>
                                {editedText}
                            </div>
                    }
                </div>

            }

            <h3 className='attitude-view__title'>Правила і настанови Steam: обговорення, рецензії та користувацький вміст</h3>
            <div className='attitude-view__text' dangerouslySetInnerHTML={{ __html: replaceDivsWithBr(editedText) }} />
        </div>
    </div>
);
}

export default AttitudeView;