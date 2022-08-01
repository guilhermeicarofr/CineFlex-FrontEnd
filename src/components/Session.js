import { get } from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SelectTitle from './SelectTitle';
import SessionSeats from './SessionSeats';
import SessionCheckout from './SessionCheckout';
import SessionFooter from './SessionFooter';

export default function Session({setReservation}) {
    
    const [sessioninfo, setSessioninfo] = useState('');
    const {sessionId} = useParams();

    useEffect(() => {
        const promise = get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`);
        promise.then(req => setSessioninfo(req.data));
    }, [sessionId]);

    const [selectedSeats, setSelectedSeats] = useState([]);

    if(sessioninfo!=='') {
        return (
            <>
                <SelectTitle>Selecione o(s) assento(s)</SelectTitle>
                <SessionSeats seats={sessioninfo.seats} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
                <SessionCheckout selectedSeats={selectedSeats} setReservation={setReservation} />
                <SessionFooter title={sessioninfo.movie.title} img={sessioninfo.movie.posterURL} weekday={sessioninfo.day.weekday} time={sessioninfo.name} />
            </>
        );
    }
}