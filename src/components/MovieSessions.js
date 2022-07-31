import { get } from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
//import styled from 'styled-components';

export default function MovieSessions() {

    const [sessions, setSessions] = useState({});
    const { movieId } = useParams();

    console.log(sessions);

    useEffect(() => {
        const promise = get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${ movieId }/showtimes`);
        promise.then(get => setSessions(get.data));
    }, [movieId]);

    return ('');
}