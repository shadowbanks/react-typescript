import React, { Component } from "react";
import Page_footer from '../footer/footer';
import Page_header from '../header/header';
import Page_body from "../body/body";
import './App.css';


const app = () => {
    return(
        <div className="app-page">
            <header className="header">
                <Page_header />
            </header>
            <div className="app-body">
                <Page_body />
            </div>
            <footer className="footer">
                <Page_footer />
            </footer>
        </div>
    )
}

export default app;