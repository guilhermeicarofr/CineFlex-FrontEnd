import styled from 'styled-components';

import Seat from './Seat';

export default function SessionSeats({seats, selectedSeats, setSelectedSeats}) {
    return (
        <>
            <SeatsContainer>
                {seats.map((seat, index) => <Seat key={index} id={seat.id} available={seat.isAvailable} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}>{seat.name}</Seat>)}
            </SeatsContainer>
            <SeatsSubtitles>
                <span>
                    <SeatExample type={'selected'}> </SeatExample>
                    Selecionado
                </span>
                <span>
                    <SeatExample> </SeatExample>
                    Disponível
                </span>
                <span>
                    <SeatExample type={'reserved'}> </SeatExample>
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

const SeatExample = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 13px;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
    margin-bottom: 5px;
    ${props => (props.type==='reserved') ? (
        'background-color: #FBE192; border: 1px solid #F7C52B;'
    ) : ''}
    ${props => (props.type==='selected') ? (
        'background-color: #75cd43; border: 1px solid #759955;'
    ) : ''}
`;