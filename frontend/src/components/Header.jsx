import React, { Component, useState, useEffect, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TSPR from './tspr.jsx';

class Header extends React.Component {
    constructor(props) {
        super(props);
    };
    render() {
        return(
            <div className="nav">
                <h1>Beginner fullstack</h1>
                    <h3 className="span loader">
                        <span className="m">W</span>
                        <span className="m">H</span>
                        <span className="m">O</span>
                        <span className="m">,</span>
                        <span className="m">F</span>
                        <span className="m">O</span>
                        <span className="m">R</span>
                        <span className="m">W</span>
                        <span className="m">H</span>
                        <span className="m">A</span>
                        <span className="m">T</span>
                        <span className="m">&nbsp;</span>
                        <span className="m">a</span>
                        <span className="m">n</span>
                        <span className="m">d</span>
                        <span className="m">&nbsp;</span>
                        <span className="m">W</span>
                        <span className="m">H</span>
                        <span className="m">Y</span>
                        <span className="m">?</span>
                    </h3>
            </div>
        );
    }
}
export default Header;


const container = document.getElementById("header");
const root = createRoot(container)
root.render(<Header/>)

const particles = document.getElementById("background");
const root_particles = createRoot(particles)
root_particles.render(
    <StrictMode>
        <TSPR/>
    </StrictMode>
)