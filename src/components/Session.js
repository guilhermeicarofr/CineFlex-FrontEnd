import { get } from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SelectTitle from './SelectTitle';
import SessionSeats from './SessionSeats';
import SessionFooter from './SessionFooter';

export default function Session() {
    
    const [sessioninfo, setSessioninfo] = useState('');
    const {sessionId} = useParams();

    useEffect(() => {
        const promise = get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`);
        promise.then(req => setSessioninfo(req.data));
    }, [sessionId]);

    if(sessioninfo!=='') {
        return (
            <>
                <SelectTitle>Selecione o(s) assento(s)</SelectTitle>
                <SessionSeats seats={sessioninfo.seats} />
                {/* <SessionCheckout /> */}
                <SessionFooter title={sessioninfo.movie.title} img={sessioninfo.movie.posterURL} weekday={sessioninfo.day.weekday} time={sessioninfo.name} />
            </>
        );
    }
}