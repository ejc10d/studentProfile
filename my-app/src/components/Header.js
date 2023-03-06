import React, { useState } from 'react';
import Navigation from './Navigation';
import About from "./About";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Resume from "./Resume";

function Header() {
    const [currentPage, handlePageChange] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
            case "About": return <About />;
            case "Portfolio": return <Portfolio />;
            case "Contact": return <Contact />;
            case "Resume": return <Resume />;
            default: return <About />;
        }
    };

    return (
        <div>
            <div className=''>
            <h1 className='text-center text-3xl m-6'>Eliot Crandall</h1>
            </div>
            <Navigation 
            currentPage={currentPage}
            handlePageChange={handlePageChange} />

            <main>
                <div>{renderPage(currentPage)}
                </div>
            </main>
        </div>
    );
}

export default Header;