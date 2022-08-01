import { get } from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import SelectTitle from './SelectTitle';
import MoviePoster from './MoviePoster';

export default function Catalog() {

    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const promise = get('https://mock-api.driven.com.br/api/v7/cineflex/movies');
		promise.then(req => {
			setMovies(req.data);  
		});
	}, []);    

    return (
        <CatalogContainer>
            <SelectTitle>Selecione o filme</SelectTitle>
            <ul>
                {movies.map((movie, index) => 
                    <Link key={index} to={`/sessoes/${movie.id}`}>
                        <MoviePoster img={movie.posterURL} />
                    </Link>
                )}
            </ul>
        </CatalogContainer>
    );
}

const CatalogContainer = styled.main`
    width: 100%;
    height: auto;
    ul {
        margin-top: 177px;
        display: flex;
        flex-wrap: wrap;
        padding: 0px 12px;
    }
`;