import React from "react"
import "./style.css"

function Book(props){
    

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
            <button type="button" className="btn btn-warning" onClick={() => props.deleteBook(props._id)}>Delete Book</button>
            </div>
            

        </div>
    )

}

export default Book