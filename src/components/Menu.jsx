import React, { useState } from "react";
import styled from "styled-components";

const TabList = ({ tabs, handleTabClick, activeTab }) => (
    <MenuWrapBox>
        {tabs.map((tab) => (
            <TabItem
                key={tab}
                tab={tab}
                handleTabClick={handleTabClick}
                isActive={activeTab === tab}
            />
        ))}
    </MenuWrapBox>
);

const TabItem = ({ tab, handleTabClick, isActive }) => (
    <MenuWrapItem className={isActive ? "active" : ""}>
        <MenuWrapBtn onClick={() => handleTabClick(tab)}>{tab}</MenuWrapBtn>
    </MenuWrapItem>
);

const Menu = ({ setSelectedTab }) => {
    const [activeTab, setActiveTab] = useState("Karina");

    const handleTabClick = (tab) => {
        console.log("Tab Clicked:", tab);
        setActiveTab(tab);
        setSelectedTab(tab); // setSelectedTab을 호출하여 App 컴포넌트의 state를 변경
    };

    const tabs = ["Karina", "Winter", "Giselle", "Ningning"];

    return (
        <MenuWrap>
            <TabList
                tabs={tabs}
                handleTabClick={handleTabClick}
                activeTab={activeTab}
            />
        </MenuWrap>
    );
};

export default Menu;

const MenuWrap = styled.nav`
    display: flex;
    justify-content: center;
    margin: 1rem;
`;
const MenuWrapBox = styled.ul`
    display: flex;
    justify-content: center;
    background-color: #212121cc;
    border-radius: 0.5rem;
    padding: 1rem;
`;

const MenuWrapItem = styled.li`
    margin-left: 1rem;
    color: #fff;
    &:nth-child(1) {
        margin-left: 0rem;
    }
    &.active {
        color: orange;
    }
`;

const MenuWrapBtn = styled.button`
    background-color: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
    &:hover {
        color: orange;
    }
`;
