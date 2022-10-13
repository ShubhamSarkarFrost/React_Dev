import React, {useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    // const dummyMovies = [
    //   {
    //     id: 1,
    //     title: 'Some Dummy Movie',
    //     openingText: 'This is the opening text of the movie',
    //     releaseDate: '2021-05-18',
    //   },
    //   {
    //     id: 2,
    //     title: 'Some Dummy Movie 2',
    //     openingText: 'This is the second opening text of the movie',
    //     releaseDate: '2021-05-19',
    //   },
    // ];

    const [movies, setmovies] = useState([]);
    const [isloading, setisloading] = useState(false)
    const [error, seterror] = useState(null)



    const  fetchmovieshandler = useCallback(async() => {
        setisloading(true);
        seterror(null)
        try {
            const response = await fetch('https://swapi.dev/api/films/')
            if (!response.ok) {
                throw new Error('Something Went Wrong!!')
            }
            const data = await response.json()


            const transformed_movies = data.results.map(movieData => {
                return {
                    id: movieData.episode_id,
                    title: movieData.title,
                    releaseDate: movieData.release_date,
                    openingText: movieData.opening_crawl
                }
            })
            setmovies(transformed_movies)

        } catch (error) {
            seterror(error.message)

        }
        setisloading(false)

    },[])

    useEffect(() =>{
        fetchmovieshandler()
    }, [fetchmovieshandler])

    let content = <p>Found no Movies!!</p>

    if (movies.length > 0) {
        content = <MoviesList movies={movies}/>
    }

    if (error) {
        content = <p>{error}</p>
    }

    if (isloading) {
        content = <p>Loading....</p>
    }


    return (
        <React.Fragment>
            <section>
                <button onClick={fetchmovieshandler}>Fetch Movies</button>
            </section>
            <section>
                {content}
            </section>
        </React.Fragment>
    );
}

export default App;
