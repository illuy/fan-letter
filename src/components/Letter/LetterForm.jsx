import React, { useState } from "react";

const LetterForm = ({ addLetter }) => {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [recipient, setRecipient] = useState("");

    const HandleNameChange = (e) => {
        setName(e.target.value);
    };
    const HandleContentChange = (e) => {
        setContent(e.target.value);
    };
    const HandleRecipientChange = (e) => {
        setRecipient(e.target.value);
    };
    const HandleSubmit = (e) => {
        e.preventDefault();

        // 새로운 편지 객체 생성
        const newLetter = {
            name: name,
            content: content,
            recipient: recipient,
        };

        // 부모 컴포넌트로 새로운 편지 전달
        addLetter(newLetter);

        // 입력값 초기화
        setName("");
        setContent("");
        setRecipient("");
    };

    return (
        <form onSubmit={HandleSubmit}>
            <div>
                <label htmlFor="name">이름:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={HandleNameChange}
                />
            </div>
            <div>
                <label htmlFor="content">내용:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={HandleContentChange}
                />
            </div>
            <div>
                <label htmlFor="recipient">누구에게 보낼지:</label>
                <select
                    id="recipient"
                    value={recipient}
                    onChange={HandleRecipientChange}
                >
                    <option value="Karina">Karina</option>
                    <option value="Winter">winter</option>
                    <option value="Giselle">Giselle</option>
                    <option value="Ningning">Ningning</option>
                </select>
            </div>
            <button type="submit">글 작성</button>
        </form>
    );
};

export default LetterForm;
