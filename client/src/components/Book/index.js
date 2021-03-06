import React from "react"
import "./style.css"
import API from "../utils/API"

function Book(props){
    const bookInfo={title: props.title, subtitle: props.subtitle, image:props.image, synopsis: props.synopsis, author:props.author, url:props.url}

    function saveBook(){
        console.log(bookInfo);
        API.saveBook(bookInfo)
        .then(console.log(bookInfo))
        .catch(err => console.log(err))
    }
    return(
        <div className="bookCard">
            <h3>{props.title}</h3>
            <h6>{props.subtitle}</h6>
            <p>Written By {props.author.map((author) => (author +", "))}</p>
            <div className="row">
                <p><img src={props.image} alt={props.title} className="bookThumbnail"></img>
                {props.synopsis}</p>
            </div>
            <div className="row">
            <a type="button" className="btn btn-primary" href={props.url}>View Book</a>
            <button type="button" className="btn btn-success" onClick={saveBook}>Save Book</button>
            </div>
            

        </div>
    )

}

export default Book