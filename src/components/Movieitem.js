import React from 'react'
import './Movieitem.css'

function Movieitem({item}) {
    const baseurl="https://image.tmdb.org/t/p/w500/";
    return (
        <div className="card col-lg-3 moviecard">
            <img src={`${baseurl}${item.poster_path}`} className="img-fluid" alt="img" />
            <div className="card-body">
                <h5>Name: {item.original_title}{item.original_name}</h5>
                <h6>Type: {item.media_type}</h6>
                <h6>Rating: {item.vote_average}</h6>
            </div>
        </div>
    )
}

export default Movieitem
