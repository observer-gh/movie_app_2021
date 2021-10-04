// // import logo from './logo.svg';
// // import './App.css';
// //import React from 'react'
// import PropTypes from 'prop-types'
// import React from 'react';
// import axios from 'axios';
// import Movie from './Movies';
// import "./App.css"
// import "./Movie.css"

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     console.log("this is call to constructor");
//   };
//   state = {
//     isLoading: true,
//     movies: []
//   };
//   add = ()=>{
//     this.setState(current => ({count: current.count+1}));
//   };
//   minus = ()=> {
//     this.setState(current => ({count: current.count-1}));
//   };
//   getMovies = async ()=>{
//     const {data:{data:{movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
//     console.log(movies);
//     this.setState({movies: movies, isLoading: false});
//   };
//   componentDidMount(){
//     this.getMovies();
//   };
//   componentDidUpdate(){
//     console.log("I did update");
//   };
//   componentWillUnmount(){
//     console.log("reasons to be missed");
//   };
//   render(){
//     console.log("render");
//     const {isLoading, movies} = this.state;
//     return (
//     <section className="container">
//       {isLoading
//       ?<div className="loader">
//         <span className="loader__text">
//           Loading...
//         </span>
//       </div> 
//       : movies.map(movie=>{
//         console.log(movie);
//         return (
//         <Movie 
//         key={movie.id}
//         id={movie.id} 
//         year={movie.year} 
//         title={movie.title} 
//         genres={movie.genres}
//         summary={movie.summary} 
//         poster={movie.medium_cover_image} />
//         );
//       })};

//     </section>
//     )
//   }
// }

// export default App;
import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;