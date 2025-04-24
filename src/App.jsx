import "./App.css"
import { useState } from "react";
import ContactList from "./components/ContactList";

function App() {
    const [selectedContactId, setSelectedContactId] = useState(null);

    return (
        <>
        {
            selectedContactId ? (<div>Show a Contact</div>) : (<ContactList setSelectedContactId={setSelectedContactId}/>)
        }
        </>
    );
}

export default App;
