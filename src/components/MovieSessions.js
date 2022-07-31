import { get } from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';

import MovieDay from "./MovieDay";
import SessionFooter from "./SessionFooter";

export default function MovieSessions() {

    const [movieinfo, setMovieinfo] = useState({days:[]});
    const { movieId } = useParams();

    useEffect(() => {
        const promise = get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`);
        promise.then(get => setMovieinfo(get.data));
    }, [movieId]);

    return (
        <SessionsContainer>
            <h2>Selecione o horário</h2>
            <ul>
                {movieinfo.days.map((day, index) => <MovieDay key={index} day={day} />)}
            </ul>
            <SessionFooter title={movieinfo.title} img={movieinfo.posterURL} />
        </SessionsContainer>
    );
}

const SessionsContainer = styled.main`
     width: 100%;
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
        margin: 177px 0px 115px 0px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
`;