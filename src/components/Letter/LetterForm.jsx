import React, { useState } from "react";

const LetterForm = ({ addLetter }) => {
    const [name, setName] = useState("");
    const [content, setContent] = useState("");
    const [recipient, setRecipient] = useState("Karina"); // 초기값을 'Karina'로 설정

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === "name") {
            setName(value);
        } else if (id === "content") {
            setContent(value);
        } else if (id === "recipient") {
            setRecipient(value);
        }
    };
    const HandleSubmit = (e) => {
        e.preventDefault();

        const currentTime = new Date();

        // 새로운 편지 객체 생성
        const newLetter = {
            name: name,
            content: content,
            recipient: recipient,
            time: currentTime, // 현재 시간 추가
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
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="content">내용:</label>
                <textarea
                    id="content"
                    value={content}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="recipient">누구에게 보낼지:</label>
                <select
                    id="recipient"
                    value={recipient}
                    onChange={handleChange}
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
