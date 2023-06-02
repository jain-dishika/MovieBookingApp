import React, { useContext, useEffect,useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { AppContext } from './Context';
import Modal from 'react-modal'
import "./SingleMovie.css"
Modal.setAppElement('#root')
const API = "https://api.tvmaze.com/shows"
const SingleMovie = () => {
  const{isLoading, getSingleMovies, movieSingle} = useContext(AppContext)
  const {id} = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false)
  useEffect(()=>{
    getSingleMovies(`${API}/${id}`);
  }, [])
  
  const {
    id: alice,
    name,
    url,
    genres,
    language,
    image,
    premiered,
    rating,
    summary,
} = movieSingle

  return (
    <section className="single-movie-section">
      <div className="single-movie-container">
        <div className="image-section">
          <Link to={`${url}`}><img src={image && image.medium} alt={id} /></Link>
        </div>
        <div className="summary-section">
          <h1>{name}</h1>
          <div className="card-content">
            <p>Premiered : {premiered}</p>
            <p>Genres : {genres}</p>
            <p>Language : {language}</p>
            <p>Rating : {rating && rating.average}/10</p>
            {/* <p>{summary}</p> */}
          </div>
          <div className="btn-book">
            <button className='btn button_model book' onClick={() => setModalIsOpen(true)}>Book Now</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={{
                overlay: {
                  background: "rgba(0,0,0,.45)",
                  zIndex: 1,
                },
                content: {
                  padding: 0,
                  height: "fit-content",
                  inset: "0",
                  width: "60%",
                  marginTop: "12%",
                  marginLeft: "20%"
                }
              }}>
                <button onClick={() => setModalIsOpen(false)} className="dismiss cross" data-dismiss="modal">&times;</button>
                <div className="row model">
                  <div className= "modal_image">
                    <img className='big_img' src={image && image.medium} alt="" srcSet="" />
                    <h2>{name}</h2>
                  </div>
                  <div className="modal_content">
                    <form action="#" onSubmit={(e)=>e.preventDefault()}>
                      <div className="form-section">
                        <h4>Your Name : </h4>
                        <input placeholder='Name'/>
                        <h4>Your Email : </h4>
                        <input type="email" pattern='[a-z0-9]+@[a-z]+\.[a-z]{2,3}' name='email' placeholder="you@example.com"/>
                      </div>
                    </form>
                  </div>
                </div>
              </Modal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleMovie
