import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./pages/Header.jsx";
import {NavBar} from "./pages/NavBar.jsx";
import Blog from "./pages/Blog";

import GlobalStyles from "./components/styles/Global"

function App() {

    return (
        <>
            <GlobalStyles/>
            <NavBar/>
            <Header/>
            <Blog/>
        </>
    )
}

export default App
