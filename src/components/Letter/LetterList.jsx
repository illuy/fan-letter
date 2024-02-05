import React from "react";
import { Link } from "react-router-dom";

const LetterList = ({ letters, selectedTab }) => {
    const filteredLetters = selectedTab
        ? letters.filter((letter) => letter.recipient === selectedTab)
        : letters;
    return (
        <section>
            <h2>펜레터 목록</h2>
            <ul>
                {filteredLetters.map((letter, index) => (
                    <li key={index}>
                        <Link to={`/letters/${letter.name}`}>
                            <strong>{letter.name}</strong> ({letter.recipient}):{" "}
                            {letter.content}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default LetterList;
