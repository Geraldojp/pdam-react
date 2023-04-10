import Header from './pages/Header';
import { NavBar } from './components/NavBar';
import Blog from './pages/Blog';

import GlobalStyles from './components/styles/Global';
import About from "./pages/About/About.jsx";
import {Reason} from "./pages/Reasons/Reason.jsx";

function App() {
    return (
        <>
            <GlobalStyles />
            <NavBar />
            <Header />
            <Reason/>
            <Blog />
            <About />
        </>
    );
}

export default App;
