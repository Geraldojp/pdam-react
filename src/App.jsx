import { useState } from 'react';
import Header from './pages/Header';
import NavBar from './components/NavBar';
import Blog from './pages/Blog';
import Carousel from './components/Carousel';

import GlobalStyles from './components/styles/Global';
import About from './pages/About/About.jsx';
import Reason from './pages/Reasons/Reason';
import Footer from './pages/Footer';

function App() {
    const [activeMenu, setActiveMenu] = useState(0);

    const handleClick = (menuIndex) => {
        setActiveMenu(menuIndex);
    };
    return (
        <>
            <GlobalStyles />
            <NavBar activeMenu={activeMenu} handleClickMenu={handleClick} />
            <Header />
            <Reason />
            <Blog />
            <Carousel />
            <About />
            <Footer activeMenu={activeMenu} handleClickMenu={handleClick} />
        </>
    );
}

export default App;
