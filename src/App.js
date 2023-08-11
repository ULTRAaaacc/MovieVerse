/*import {useState ,useEffect} from 'react' ; 

import MovieCard from './MovieCard';

//c0fa120
import './App.css';
import SearchIcon from './search.svg' ; 
const API_URL = 'http://www.omdbapi.com?c0fa120' ;

const movie1 = {
    "Title" : "Amazing Spiderman Syndrome",
    "Year"  : "2012" ,
    "imdbID": "tt2586634",
    "Type"  : "movie",
    "Poster": "N/A"
}
const App = () => {
  const [movies, setMovies] = useState([]) ; 
    const searchMovies = async (title) => {
        const response = await fetch('${API_URL}$s=${title}'); 
        const data = await response.json() ; 

        setMovies(data.Search);
    }
    useEffect(() => {
        setMovies('SpiderMan');
    },[]) ; 

    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input 
                placeholder = "Search for movies"
                value = "Superman"
                onchange = {() => {}}
                />
                <img
                src={SearchIcon} 
                alt = "search"
                onClick={() => {}}
                />
            </div>

              {
                movies?.length > 0
                 ? (
                   <div className="container">
                     {movies.map((movie) =>(
                      <MovieCard movie={movie}/>
                     ))}
                   </div>)
                  ) : (
                      <div className="empty">
                        <h2>No movies found</h2>
                      </div>
                  )

              }
        </div>
    ) ; 
}

export default App ; 
*/

/*
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=c0fa120';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('SpiderMan');
  }, []);

  return (
    <div className="app">
      <h1>MovieVerse</h1>

      <div className='search'>
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
         // alt="search"
         alt = 'SearchIcon'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;*/



///////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////// use this:
/*
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'https://www.omdbapi.com?apikey=c0fa120';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search || []);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className="app">
      <h1>MovieVerse</h1>

      <div className='search'>
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt='SearchIcon'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
*/


////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////use lifo2
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
import MovieDetails from './MovieDetails';

const API_URL = 'https://www.omdbapi.com?apikey=c0fa120';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log('API Search Response:', data);

    setMovies(data.Search || []);
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  return (
    <Router>
      <div className="app">
        <h1>MovieVerse</h1>

        <div className="search">
          <input
            placeholder="Search for movies"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            src={SearchIcon}
            alt="SearchIcon"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>

        <Routes>
          <Route path="/movie/:imdbID" element={<MovieDetails />} />
          <Route
            path="/"
            element={
              movies?.length > 0 ? (
                <div className="container">
                  {movies.map((movie) => (
                    <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                      <MovieCard movie={movie} />
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="empty">
                  <h2>No movies found</h2>
                </div>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
























































//version 1.2
/*
import React, { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';

//const API_KEY = 'c0fa120';
const API_URL = `http://www.omdbapi.com?apikey=$c0fa120`;

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    try {
      const response = await fetch(`${API_URL}&s=${title}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();

      setMovies(data.Search);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    searchMovies('SpiderMan');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      <div className="container">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie">
            <div>
              <p>{movie.Year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
*/


/////////////////////////////////version 2 

/*import React, { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';

const API_KEY = 'c0fa120';
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies('Creed');
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)} // Call searchMovies with the entered searchTerm
        />
      </div>

      <div className="container"></div>
    </div>
  );
};

export default App;
*/




//////////////////////////////////////////////version 3 
/*
import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=c0fa120";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
*/








/*

import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=c0fa120";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;   */


//chatgpt version ; 
/*
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard"; // Make sure the import path is correct
import SearchIcon from "./search.svg";
import "./App.css";

const API_KEY = "c0fa120"; // Your provided API key
const API_URL = `http://www.omdbapi.com?apikey=$c0fa120`;

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}; 

export default App; */


