import React, { Component, useState, useEffect, StrictMode } from "react";
import { createRoot } from "react-dom/client";

const HeaderMenu = () => {
  const [currentId, setCurrentId] = useState(null);
  const [currentTab, setCurrentTab] = useState(null);
  const tabContainerHeight = 70;
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const navTabs = document.querySelectorAll(".nav-tab");
    navTabs.forEach((tab) => {
      tab.addEventListener("click", (event) => onTabClick(event, tab));
    });
    window.addEventListener("scroll", onScroll);

    return () => {
      navTabs.forEach((tab) => {
        tab.removeEventListener("click", (event) => onTabClick(event, tab));
      });
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onTabClick = (event, element) => {
    event.preventDefault();
    const scrollTop =
      document.querySelector(element.getAttribute("href")).offsetTop -
      tabContainerHeight +
      1;
    window.scrollTo({ top: scrollTop, behavior: "smooth" });
  };

  const onScroll = () => {
    checkHeaderPosition();
    findCurrentTabSelector();
    setLastScroll(window.scrollY);
  };


  const checkHeaderPosition = () => {
    const headerHeight = 75;
    const navContainer = document.querySelector(".nav-container");
    const nav = document.querySelector(".nav");
    if (window.scrollY > headerHeight) {
      navContainer.classList.add("nav-container--scrolled");
    } else {
      navContainer.classList.remove("nav-container--scrolled");
    }
    const offset =
      nav.offsetTop + nav.offsetHeight - tabContainerHeight - headerHeight;
    if (window.scrollY > lastScroll && window.scrollY > offset) {
      navContainer.classList.add("nav-container--move-up");
      navContainer.classList.remove("nav-container--top-first");
      navContainer.classList.add("nav-container--top-second");
    } else if (window.scrollY < lastScroll && window.scrollY > offset) {
      navContainer.classList.remove("nav-container--move-up");
      navContainer.classList.remove("nav-container--top-second");
      navContainer.classList.add("nav-container--top-first");
    } else {
      navContainer.classList.remove("nav-container--move-up");
      navContainer.classList.remove("nav-container--top-first");
      navContainer.classList.remove("nav-container--top-second");
    }
  };

  const findCurrentTabSelector = () => {
    let newCurrentId;
    let newCurrentTab;
    const navTabs = document.querySelectorAll(".nav-tab");
    const self = this;
    navTabs.forEach((tab) => {
      const id = tab.getAttribute("href");
      const offsetTop =
        document.querySelector(id).offsetTop - tabContainerHeight;
      const offsetBottom =
        document.querySelector(id).offsetTop +
        document.querySelector(id).offsetHeight -
        tabContainerHeight;
      if (window.scrollY > offsetTop && window.scrollY < offsetBottom) {
        newCurrentId = id;
        newCurrentTab = tab;
      }
    });
    if (currentId !== newCurrentId || currentId === null) {
      setCurrentId(newCurrentId);
      setCurrentTab(newCurrentTab);
    }
  };


  return (
    <div className="nav-container">
          <a className="nav-tab" href="#tab-svelte">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-file-earmark-person"
              viewBox="0 0 16 16"
            >
              <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
            </svg>
            <div>ABOUT</div>
          </a>
          <a className="nav-tab" href="#tab-esbuild">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-terminal"
              viewBox="0 0 16 16"
            >
              <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
              <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z" />
            </svg>
            <div>PROJECTS</div>
          </a>
          <a className="nav-tab" href="#tab-next">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-box2-heart"
              viewBox="0 0 16 16"
            >
              <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982Z" />
              <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5Zm0 1H7.5v3h-6l2.25-3ZM8.5 4V1h3.75l2.25 3h-6ZM15 5v10H1V5h14Z" />
            </svg>
            <div>Portfolio</div>
          </a>
          <a className="nav-tab" href="#tab-typescript">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-box-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"
              />
            </svg>

            <div>What this shit?</div>
          </a>
          <a className="nav-tab" href="#tab-vite">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-code-slash"
              viewBox="0 0 16 16"
            >
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
            </svg>

            <div>...</div>
          </a>
    </div>
  );
};

export default HeaderMenu;

const container = document.getElementById("header-menu");
const root = createRoot(container);
root.render(<HeaderMenu />);
