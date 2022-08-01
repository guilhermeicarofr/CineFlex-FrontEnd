import styled from 'styled-components';

import Seat from './Seat';

export default function SessionSeats({seats}) {

    return (
        <>
            <SeatsContainer>
                {seats.map((seat) => <Seat key={seat.id} available={seat.isAvailable} >{seat.name}</Seat>)}
            </SeatsContainer>
            <SeatsSubtitles>
                <span>
                    <Seat> </Seat>
                    Selecionado
                </span>
                <span>
                    <Seat> </Seat>
                    Disponível
                </span>
                <span>
                    <Seat> </Seat>
                    Indisponível
                </span>
            </SeatsSubtitles>
        </>
    );
}

const SeatsContainer = styled.div`
    margin: 177px auto 20px auto;
    width: 375px;
    height: 203px;
    padding: 0px 16px;
    display: flex;
    flex-wrap: wrap;
`;

const SeatsSubtitles = styled.div`
    width: 375px;
    margin: 0px auto;
    display: flex;
    justify-content: space-evenly;
    span {
        font-size: 13px;
        color: #4E5A65;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;