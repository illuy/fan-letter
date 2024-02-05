import Header from "./components/Header";
import Menu from "./components/Menu";
import LetterForm from "./components/Letter/LetterForm";
import LetterList from "./components/Letter/LetterList";

function App() {
    return (
        <>
            <div>
                <Header></Header>
                <Menu></Menu>
                <LetterForm />
                <LetterList />
            </div>
        </>
    );
}

export default App;
