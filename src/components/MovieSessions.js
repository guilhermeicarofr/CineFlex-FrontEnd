import { get } from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import SelectTitle from './SelectTitle';
import MovieDay from './MovieDay';
import SessionFooter from './SessionFooter';
import Loading from './Loading';

export default function MovieSessions({setReturnbtn}) {

    const [movieinfo, setMovieinfo] = useState('');
    const {movieId} = useParams();

    setReturnbtn(true);

    useEffect(() => {
        const promise = get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`);
        promise.then(req => setMovieinfo(req.data));
    }, [movieId]);

    return (
        <>
            {(movieinfo!=='') ? 
                <SessionsContainer>
                    <SelectTitle>Selecione o horário</SelectTitle>
                    <ul>
                        {movieinfo.days.map((day, index) => <MovieDay key={index} day={day} />)}
                    </ul>
                    <SessionFooter title={movieinfo.title} img={movieinfo.posterURL} />
                </SessionsContainer>
            : <Loading />
            }
        </>
    );
}

const SessionsContainer = styled.main`
    width: 100%;
    height: auto;
    ul {
        margin: 177px 0px 115px 0px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
`;