import React from "react";

const LetterList = ({ letters }) => {
    return (
        <section>
            <h2>펜레터 목록</h2>
            <ul>
                {letters.map((letter, index) => (
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
