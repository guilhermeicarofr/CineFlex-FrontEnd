import { get } from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styled from 'styled-components';

import MovieDay from "./MovieDay";

export default function MovieSessions() {

    const [movieinfo, setMovieinfo] = useState({days:[]});
    const { movieId } = useParams();

    console.log(movieinfo);

    useEffect(() => {
        const promise = get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${ movieId }/showtimes`);
        promise.then(get => setMovieinfo(get.data));
    }, [movieId]);

    return (
        <SessionsContainer>
            <h2>Selecione o horário</h2>
            <ul>
                {movieinfo.days.map((day, index) => <MovieDay key={index} day={day} />)}
            </ul>
            <SessionFooter>
                <div>
                    <img src={movieinfo.posterURL} alt='' />
                </div>
                <h3>{movieinfo.title}</h3>
            </SessionFooter>
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

const SessionFooter = styled.footer`
    width: 100%;
    height: 115px;
    position: fixed;
    bottom: 0px;
    background-color: #DFE6ED;
    border-top: 1px solid #9EADBA;
    z-index: 1;
    display: flex;
    align-items: center;
    padding: 14px 10px;
    div {
        width: 64px;
        height: 89px;
        padding: 8px;
        background-color: #FFFFFF;
        border-radius: 2px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        margin-right: 14px;
        img {
            width: 48px;
            height: 72px;
        }
    }
    h3 {
        font-size: 26px;
        font-weight: 400;
    }
`;