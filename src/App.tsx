import React from "react";
import "./App.css";
import RootPage from "./pages/RootPage";
import {useAsync} from "react-async";
import loadList from "./utils/loadList";

function App() {
    const {data, error, isPending}= useAsync(loadList)
    const currentUser = "Nanatsu Yorou"

    return (
        <div className="App">
            <RootPage stringsArray={data} error={error} isPending={isPending} currentUser={currentUser}/>
        </div>
    );
}

export default App
