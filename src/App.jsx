import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import LetterForm from "./components/Letter/LetterForm";
import LetterList from "./components/Letter/LetterList";

function App() {
    const [letters, setLetters] = useState([]);
    const [selectedTab, setSelectedTab] = useState("Karina"); // 초기값을 'Karina'로 설정

    const addLetter = (newLetter) => {
        setLetters([...letters, newLetter]);
    };

    useEffect(() => {
        // letters가 변경될 때마다 이 부분이 실행됩니다.
        console.log("Letters updated:", letters);
    }, [letters]);

    return (
        <>
            <Header></Header>
            <Menu setSelectedTab={setSelectedTab} />
            <LetterForm addLetter={addLetter} />
            <LetterList letters={letters} selectedTab={selectedTab} />
        </>
    );
}

export default App;
