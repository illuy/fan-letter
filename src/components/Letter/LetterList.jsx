import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LetterList = ({ letters, selectedTab }) => {
    const filteredLetters = selectedTab
        ? letters.filter((letter) => letter.recipient === selectedTab)
        : letters;
    return (
        <ListWrap>
            <h2>펜레터 목록</h2>
            <ul>
                {filteredLetters.map((letter, index) => (
                    <li key={index}>
                        <Link to={`/letters/${letter.name}`}>
                            <strong>{letter.name}</strong> ({letter.recipient}):{" "}
                            {letter.content} - {letter.time.toLocaleString()}{" "}
                            {/* 시간 추가 */}
                        </Link>
                    </li>
                ))}
            </ul>
        </ListWrap>
    );
};

export default LetterList;

const ListWrap = styled.section`
    margin: 0 auto;
    width: 400px;
`;
