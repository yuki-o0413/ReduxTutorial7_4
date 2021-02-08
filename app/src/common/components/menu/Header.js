'use strict';
import React from 'react';

export default function Header(props) {
    return (
        <header className="header-box-container">
            <div className="header-left-box">
                <img src="/img/logo.png" className="logo-img" />
            </div>
            <div className="header-right-box"></div>
        </header>
    );

}