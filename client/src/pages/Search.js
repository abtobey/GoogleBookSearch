import React, { useState} from 'react';
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/SearchForm";
import API from '../components/utils/API';
import bookList from "../books.json"
import Book from "../components/Book"

function Search() {
    const [formObject, setFormObject] = useState({})
    const [apiBooks, setApiBooks] =useState([])
  
    function handleInputChange(event) {
      const { name, value } = event.target;
      setFormObject({...formObject, [name]: value})
    };
  
    function handleFormSubmit(event) {
      event.preventDefault();
      if (formObject.title) {
        API.getBooks(formObject.title)
        .then(res => {
            console.log(res.data.items.map(item => (!item.volumeInfo.imageLinks ? "nothing" : item.volumeInfo.imageLinks.thumbnail)))
          setApiBooks(res.data.items)})
        .catch(err => console.log(err))
        }
        // setApiBooks(bookList.items)
        // console.log(apiBooks)
    };

  
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
      {apiBooks.map((book, i) => (<Book title={book.volumeInfo.title} subtitle={book.volumeInfo.subtitle} author={book.volumeInfo.authors} image={(!book.volumeInfo.imageLinks? "" :book.volumeInfo.imageLinks.thumbnail)} synopsis={book.volumeInfo.description} url={book.volumeInfo.infoLink} key={i}/>))}
    </div>
      </div>
    );
  }
  
  export default Search;