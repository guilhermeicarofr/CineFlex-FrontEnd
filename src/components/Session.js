import { get } from "axios";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
//import styled from 'styled-components';

export default function Session() {
    
    const [sessioninfo, setSessioninfo] = useState({seats:[]});
    const { sessionId } = useParams();

    useEffect(() => {
        const promise = get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`);
        promise.then(req => setSessioninfo(req.data));
    }, [sessionId]);

    console.log(sessioninfo);

    return (
        `Oi ${sessionId}`
    );
}