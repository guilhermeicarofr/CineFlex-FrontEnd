import { get } from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import SelectTitle from './SelectTitle';
import SessionSeats from './SessionSeats';
import SessionCheckout from './SessionCheckout';
import SessionFooter from './SessionFooter';
import Loading from './Loading';

export default function Session({setReservation, reservation, setReturnbtn}) {
    
    const [sessioninfo, setSessioninfo] = useState('');
    const {sessionId} = useParams();

    setReturnbtn(true);

    useEffect(() => {
        const promise = get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`);
        promise.then(req => {
            setSessioninfo(req.data);
            setReservation({title: req.data.movie.title, date: req.data.day.date, time: req.data.name});
        });
    }, [sessionId, setReservation]);

    const [selectedSeats, setSelectedSeats] = useState([]);

    return (
        <>
            {(sessioninfo!=='') ? 
                <>
                    <SelectTitle>Selecione o(s) assento(s)</SelectTitle>
                    <SessionSeats seats={sessioninfo.seats} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats} />
                    <SessionCheckout selectedSeats={selectedSeats} setReservation={setReservation} reservation={reservation}/>
                    <SessionFooter title={sessioninfo.movie.title} img={sessioninfo.movie.posterURL} weekday={sessioninfo.day.weekday} time={sessioninfo.name} />
                </>
            : <Loading />
            }
        </>
    );
}