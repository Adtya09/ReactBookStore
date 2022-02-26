import React,{useState} from 'react';
import {books} from './BookList';
function Header(){
    return (
        <header className="header">
         <Logo/>
         <SearchBar/>   
        </header>
    );

}

function Logo(){
    return (<h1>BookStore</h1>);
}
function SearchBar(){
    const [searchWord, setSearchWord]=useState("");
    console.log(searchWord);
    const filteredBook = books.filter((book)=>{
        return book.title.toLowerCase().includes(searchWord.toLowerCase());

    });

    return (
        <>
        <input className="searchBar" type="text" name="search" placeholder="Wings of Fire .." onChange={(event)=>{setSearchWord(event.target.value)}}/>
        </>
    );
}
export default Header;