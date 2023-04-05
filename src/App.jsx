import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./pages/Header.jsx";
import {NavBar} from "./pages/NavBar.jsx";

function App() {

  return (
    <>
        <NavBar />
        <Header />
        <Header />
        <Header />

    </>
  )
}

export default App
