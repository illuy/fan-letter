// LetterDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const LetterDetail = ({ letters, updateLetter, deleteLetter }) => {
    const { letterId } = useParams();
    const navigate = useNavigate();

    const [editing, setEditing] = useState(false);
    const [editedContent, setEditedContent] = useState("");

    useEffect(() => {
        // letterId에 해당하는 편지를 찾아서 editedContent에 설정합니다.
        const selectedLetter = letters.find(
            (letter) => letter.name === letterId
        );
        if (selectedLetter) {
            setEditedContent(selectedLetter.content);
        }
    }, [letters, letterId]);

    const selectedLetter = letters.find((letter) => letter.name === letterId);

    if (!selectedLetter) {
        return <div>편지를 찾을 수 없습니다.</div>;
    }

    const handleGoBack = () => {
        navigate("/");
    };

    const handleEdit = () => {
        setEditing(true);
    };

    const handleSave = () => {
        updateLetter(selectedLetter.name, editedContent);
        setEditing(false);
    };

    const handleDelete = () => {
        deleteLetter(selectedLetter.name);
        navigate("/");
    };

    return (
        <div>
            <h2>{selectedLetter.name}에게 보낸 편지</h2>
            {editing ? (
                <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                />
            ) : (
                <p>내용: {selectedLetter.content}</p>
            )}
            <p>받는 사람: {selectedLetter.recipient}</p>

            {editing ? (
                <button onClick={handleSave}>저장</button>
            ) : (
                <button onClick={handleEdit}>수정</button>
            )}
            <button onClick={handleDelete}>삭제</button>
            <Link to="/">홈으로 돌아가기</Link>
        </div>
    );
};

export default LetterDetail;
