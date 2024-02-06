import React, { useState } from "react";
import styled from "styled-components";

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
        <FormWrap onSubmit={HandleSubmit}>
            <FormCont>
                <FormContLabel htmlFor="name">닉네임:</FormContLabel>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={handleChange}
                />
            </FormCont>
            <FormCont>
                <FormContLabel htmlFor="content">내용:</FormContLabel>
                <textarea
                    id="content"
                    value={content}
                    onChange={handleChange}
                />
            </FormCont>
            <FormCont>
                <FormContLabel htmlFor="recipient">To:</FormContLabel>
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
            </FormCont>
            <FormBtn type="submit">글 작성</FormBtn>
        </FormWrap>
    );
};

export default LetterForm;

const FormWrap = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    background-color: #212121cc;
    padding: 1rem;
    border-radius: 0.5rem;
    width: 400px;
    margin: 0 auto;
    color: #fff;
    margin-bottom: 1rem;
`;
const FormCont = styled.div`
    display: flex;
    margin-bottom: 1rem;
    width: 100%;
`;
const FormContLabel = styled.label`
    width: 4rem;
    text-align: justify;
    & + input {
        width: calc(100% - 4rem);
    }
    & + textarea {
        width: calc(100% - 4rem);
        height: 4rem;
    }
    & + select {
        width: calc(100% - 4rem);
    }
`;

const FormBtn = styled.button`
    align-self: self-end;
`;
