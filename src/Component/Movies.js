import React, { useContext } from 'react'
import { AppContext } from './Context'
import { NavLink } from 'react-router-dom';
import "./Movies.css"
// import Search from './Search';
const Movies = () => {
    const { movie } = useContext(AppContext);
    return (
        <>
        {/* <Search/> */}
            <section className='movie-page'>
                <div className="movie-page-container">
                {movie.map((curElem) => {
                    const {id, name, image} = curElem;
                    return (
                        <NavLink to={`/${id}`} key={id}>
                            <div className="card">
                                <div className="card-info">
                                    <h2>{name}</h2>
                                    <img src={image.medium} alt={id}/>
                                    {/* <button className='viewdet'>View Details</button> */}
                                </div>
                            </div>
                        </NavLink>
                    )
                })}
                </div>
            </section>
        </>
    )
}

export default Movies
