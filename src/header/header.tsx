import React from 'react';
import './header.css';
import logo from '../assest/logo.jpg';

const Page_header = () => {
    return (
        <div className='Page-header'>
            <img src={logo} className='logo' alt='logo' />
            <h1>School dashboard</h1>
        </div>
    )
}

export default Page_header;