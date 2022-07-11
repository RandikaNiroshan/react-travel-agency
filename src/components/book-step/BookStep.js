import React from 'react';
import "./BookStep.css";

const BookStep = ({icon, title, text, colorClass}) => {
  return (
    <div className='book-step'>
        <div className={`book-step__icon ${colorClass}`}>
            {icon}
        </div>
        <div className='book-step__right'>
            <p>{title}</p>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default BookStep