import React,{useRef} from 'react';
import '../Header.css';
import SearchBar from './SearchBar';
import {FaTimes,FaBars} from 'react-icons/fa'

function Header() {
    // Function to handle the search logic
    const handleSearch = (searchTerm) => {
        console.log(`Searching for: ${searchTerm}`);
        // Add your search logic here
    };
    
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    return (
        <header>
          
                <div className="logo">Esubalew's Blog</div>
                <SearchBar onSearch={handleSearch} /> {/* Include the SearchBar component */}
                <nav  ref={navRef}>
                   
                         <a href="/">Home</a>
                         <a href="/about">About</a>
                        <a href="/services">Services</a>
                        <a href="/contact">Contact</a>
                    
                    <button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
                </nav>
             <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
        </header>
    );
}

export default Header;
