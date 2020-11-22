import React,{useEffect, useState} from 'react'
import Movieitem from './Movieitem';
import axios from 'axios';

const MovieList =()=> {
    const[items,setitems]=useState([]);
    useEffect(() => {
        const key= "061a9c2c7c1c970be14002957a004fd2"
        const getmoviedata = async()=>{
        const res= await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
        setitems(res.data.results);
        console.log(res.data.results);
    };
    getmoviedata();
    }, []);
    return (
        <div>
            <div className="container">
                <div className="row">
                    {items.map((item)=>(
                        <Movieitem key={item.id} item={item}/>
                    ))}
                </div>
            </div> 
        </div>
    )
}

export default MovieList
