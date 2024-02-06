import React from "react";
import styled from "styled-components";

const Header = () => {
    return (
        <HeaderWrap>
            <div>Login</div>
            <Logo>
                <a href="./">LOGO</a>
            </Logo>
            <div>Menu Icon</div>
        </HeaderWrap>
    );
};

export default Header;

const HeaderWrap = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #212121;
    color: #fff;
`;
const Logo = styled.h1`
    font-size: 2rem;
`;
