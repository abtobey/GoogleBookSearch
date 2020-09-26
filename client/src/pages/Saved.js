import React, { useState, useEffect } from 'react';
import API from '../components/utils/API';
import SavedBook from "../components/SavedBook"

function Saved(){
    const [books, setBooks] =useState([])

    useEffect(() => {
        loadBooks()
    }, [])

    function deleteBook(id) {
        API.deleteBook(id)
          .then(res => loadBooks())
          .catch(err => console.log(err));
      }

    function loadBooks() {
        API.getSavedBooks()
        .then(res => {
            console.log(res.data)
            setBooks(res.data);          
        })
            .catch(err => console.log(err))
    }

    return(
        <div>
            {books.map(book => <SavedBook {...book} deleteBook={deleteBook}/>)}
        </div>
    )

}

export default Saved;