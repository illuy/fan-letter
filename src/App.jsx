import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./shared/GlobalStyle";
import Header from "./components/Header";
import Menu from "./components/Menu";
import LetterForm from "./components/Letter/LetterForm";
import LetterList from "./components/Letter/LetterList";
import LetterDetail from "./components/Letter/LetterDetail"; // 새로운 컴포넌트 추가

function App() {
    const [letters, setLetters] = useState([]);
    const [selectedTab, setSelectedTab] = useState("Karina");

    const addLetter = (newLetter) => {
        setLetters([...letters, newLetter]);
    };

    const updateLetter = (name, content) => {
        // 특정 편지를 업데이트하는 로직을 추가하세요.
        // name에 해당하는 편지를 찾아서 내용을 content로 업데이트합니다.
        setLetters((prevLetters) =>
            prevLetters.map((letter) =>
                letter.name === name ? { ...letter, content } : letter
            )
        );
    };

    const deleteLetter = (name) => {
        // 특정 편지를 삭제하는 로직을 추가하세요.
        // name에 해당하는 편지를 필터링하여 삭제합니다.
        setLetters((prevLetters) =>
            prevLetters.filter((letter) => letter.name !== name)
        );
    };

    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Header />
                            <Menu setSelectedTab={setSelectedTab} />
                            <LetterForm addLetter={addLetter} />
                            <LetterList
                                letters={letters}
                                selectedTab={selectedTab}
                            />
                        </>
                    }
                />
                <Route
                    path="/letters/:letterId"
                    element={
                        <LetterDetail
                            letters={letters}
                            updateLetter={updateLetter}
                            deleteLetter={deleteLetter}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
