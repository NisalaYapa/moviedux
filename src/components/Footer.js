import React from 'react';
import '../styles.css';

export default function Footer(){
    const currentyear =new Date().getFullYear;

    return (
    <div className='footer'>
        <p className='footer-text'>   
            © {currentyear} MovieDux, All right reserved.
             
        </p>

    </div>

    );
}
