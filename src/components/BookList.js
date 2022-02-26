import Book from "./Book";
import '../index.css';
import React, { useState } from 'react';

export const books = [{
    id: "1",
    title: "Dark Hunter’s Boon",
    img: "https://m.media-amazon.com/images/I/41krEoTkxkL._SY375_.jpg",
    price: 599
},
{
    id: "2",
    title: "Say You Swear ",
    img: "https://m.media-amazon.com/images/I/511yaFVNIKL._SY375_.jpg",
    price: 499
},
{
    id: "3",
    title: "Switch On Your Brain: The Key to... ",
    img: "https://m.media-amazon.com/images/I/51hyrp28dPL._SY375_.jpg",
    price: 799
},
{
    id: "4",
    title: "A Train to Moscow: A Novel ",
    img: "https://m.media-amazon.com/images/I/51-drnhcLnL._SY375_.jpg",
    price: 399
}
];




function BookList() {
    const [searchWord, setSearchWord] = useState("");
    const filteredBook = books.filter((book) => {
        return book.title.toLowerCase().startsWith(searchWord.toLowerCase());

    });

    return (
        <>
            <input className="searchBar" type="text" name="search" placeholder="Wings of Fire .." onChange={(event) => { setSearchWord(event.target.value) }} />

            <section className="booklist">
                {
                    filteredBook.map((book, id) => {
                        return <Book book={book} key={id} />
                    })
                }
            </section>
        </>

    );

}
export default BookList;