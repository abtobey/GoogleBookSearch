import React, { useState, useEffect } from 'react';
import './App.css';
import Jumbotron from "./components/Jumbotron";
import { Input, TextArea, FormBtn } from "./components/SearchForm";
import API from './components/utils/API';
import bookList from "./books"
import Book from "./components/Book"

function App() {
  const [formObject, setFormObject] = useState({})
  const [apiBooks, setApiBooks] =useState([])

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    // if (formObject.title) {
    //   API.getBooks(formObject.title)
    //   .then(res => {
    //     const apiBooks=res.data.items
    //     console.log(apiBooks)})
    setApiBooks(bookList.items);

    
    //   API.saveBook({
    //     title: formObject.title,
    //     author: formObject.author,
    //     synopsis: formObject.synopsis
    //   })
    //     .then(res => loadBooks())
    //     .catch(err => console.log(err));
    // }
  };

  function saveBook(){
    // event.preventDefault()
    // console.log(target)
    // API.saveBook({
    //   title: formObject.title,
    //   author: formObject.author,
    //   synopsis: formObject.synopsis
    // })
    //   .then(res => loadBooks())
    //   .catch(err => console.log(err));
  }

  return (
    <div className="container">
    <Jumbotron>Google Book Search</Jumbotron>
    <form>
    <Input
      onChange={handleInputChange}
      name="title"
      placeholder="Title (required)"
    />
    <FormBtn
      disabled={!(formObject.title)}
      onClick={handleFormSubmit}
    >
      Submit Book
    </FormBtn>
  </form>
  <div className="results">
    <h2>Results</h2>
    {apiBooks.map((book, i) => (<Book title={book.volumeInfo.title} subtitle={book.volumeInfo.subtitle} author={book.volumeInfo.authors} image={book.volumeInfo.imageLinks.thumbnail} synopsis={book.volumeInfo.description} url={book.volumeInfo.infoLink} saveBook={saveBook} key={i}/>))}
  </div>
    </div>
  );
}

export default App;
