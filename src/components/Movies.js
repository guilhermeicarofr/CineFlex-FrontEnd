import { get } from "axios";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

import Movie from "./Movie";

export default function Catalog() {

    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        const promise = get('https://mock-api.driven.com.br/api/v7/cineflex/movies');
		promise.then(get => {
			setMovies(get.data);  
		});
	}, []);    

    return (
        <CatalogContainer>
            <h2>Selecione o filme</h2>
            <ul>
                {movies.map((movie, index) => 
                    <Link key={index} to={`/filme/${movie.id}`}>
                        <Movie img={movie.posterURL} />
                    </Link>
                )}
            </ul>
        </CatalogContainer>
    );
}

const CatalogContainer = styled.main`
    width: 100%;
    height: auto;
    h2 {
        width: 100%;
        height: 110px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: 400;
        position: fixed;
        top: 67px;
        background-color: #FFFFFF;
        z-index: 1;
    }
    ul {
        margin-top: 177px;
        display: flex;
        flex-wrap: wrap;
        padding: 0px 12px;
    }
`;