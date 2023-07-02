import React, { Component, useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div>
                <section className="slider" id="tab-svelte">
                    <h1>SVELTE</h1>
                    <h2>another frontend JS framework</h2>
                </section>
                <section className="slider" id="tab-esbuild">
                    <h1>ESBUILD</h1>
                    <h2>an extremely fast JavaScript bundler</h2>
                </section>
                <section className="slider" id="tab-next">
                    <h1>NEXT.JS</h1>
                    <h2>framework for Production</h2>
                </section>
                <section className="slider" id="tab-typescript">
                    <h1>TYPESCRIPT</h1>
                    <h2>giving you better tooling at any scale</h2>
                </section>
                <section className="slider" id="tab-vite">
                    <h1>VITE</h1>
                    <h2>a frontend build tool</h2>
                </section>
          </div>
        );
    }
}
export default MainPage;


const container = document.getElementById("main");
const root = createRoot(container)
root.render(<MainPage/>)