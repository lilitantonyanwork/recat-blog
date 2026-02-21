import { useState } from 'react'

import './App.css'
import Header from "./components/Header/Header.jsx";
import Blog from "./pages/Blog.jsx";

function App() {
    const [searchInput, setSearchInput] = useState("");
  return (
    <>
        <Header setSearchInput={setSearchInput} search={searchInput}/>
        <Blog search={searchInput} />
    </>
  )
}

export default App
