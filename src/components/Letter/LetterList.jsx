import React from "react";

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
                        <strong>{letter.name}</strong> ({letter.recipient}):{" "}
                        {letter.content}
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default LetterList;
