import React, { useState } from "react";

const LetterForm = () => {
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
        // 여기에서 입력값 활용 또는 상위 컴포넌트로 전달할 수 있습니다.
        console.log("Name:", name);
        console.log("Content:", content);
        console.log("Recipient:", recipient);
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
