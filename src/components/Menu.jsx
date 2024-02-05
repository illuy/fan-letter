import React from "react";

const Menu = ({ setSelectedTab }) => {
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };
    return (
        <nav>
            <ul>
                <li onClick={() => handleTabClick("Karina")}>Karina</li>
                <li onClick={() => handleTabClick("Winter")}>Winter</li>
                <li onClick={() => handleTabClick("Giselle")}>Giselle</li>
                <li onClick={() => handleTabClick("Ningning")}>Ningning</li>
            </ul>
        </nav>
    );
};

export default Menu;
