import React from "react";

const Menu = ({ setSelectedTab }) => {
    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };
    return (
        <nav>
            <ul>
                <li>
                    <button onClick={() => handleTabClick("Karina")}>
                        Karina
                    </button>
                </li>
                <li>
                    <button onClick={() => handleTabClick("Winter")}>
                        Winter
                    </button>
                </li>
                <li>
                    <button onClick={() => handleTabClick("Giselle")}>
                        Giselle
                    </button>
                </li>
                <li>
                    <button onClick={() => handleTabClick("Ningning")}>
                        Ningning
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
