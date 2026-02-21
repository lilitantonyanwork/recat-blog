import './Search.css'
import {useState} from "react";

function Search({search, setSearchInput}){
    const [searchOpen, setSearchOpen] = useState(false);
    function openSearch(){
        setSearchOpen(true);
    }

    function clearSearch(){
        setSearchInput('');
        setSearchOpen(false);
    }
    return(
        <div className="search">
            <form action="">
                <input type="text" className={`search__input ${searchOpen ? "open" : ""}`}
                       value={search}
                       placeholder="Search..."
                       onChange={(e) => setSearchInput(e.target.value)}
                />
                <button className={`search__btn ${searchOpen ? "hide" : ""}`} onClick={
                    (e) => {
                        e.preventDefault();
                        openSearch();
                    }
                }>
                </button>
                <button className={`search__close ${searchOpen ? "show" : ""}`} onClick={
                    (e) => {
                        e.preventDefault();
                        clearSearch();
                    }
                }>
                    x
                </button>
            </form>
        </div>
    )
}
export default Search