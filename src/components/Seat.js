import { useState } from 'react';
import styled from 'styled-components';

export default function Seat({children, id, available, selectedSeats, setSelectedSeats}) {

    const [selected, setSelected] = useState(false);

    function handleSelection() {
        setSelected(!selected);
        if(selectedSeats.filter(seat => seat.id===id).length>0) {
            setSelectedSeats(selectedSeats.filter(seat => seat.id!==id));
        } else {
            setSelectedSeats([...selectedSeats, {id, number: children}]);
        }
    }

    if(available) {
        return (
            <SeatContainer onClick={handleSelection} selected={selected}>
                {children}
            </SeatContainer>
        );
    } else {
        return (
            <SeatContainer onClick={()=>alert('Esse assento não está disponível')} status={'reserved'}>
                {children}
            </SeatContainer>
        );
    }
}

const SeatContainer = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 13px;
    margin: 8px 4px;
    font-size: 11px;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #C3CFD9;
    border: 1px solid #808F9D;
    ${props => (props.status==='reserved') ? (
        'background-color: #FBE192; border: 1px solid #F7C52B;'
    ) : ''}
    ${props => (props.selected===true) ? (
        'background-color: #75cd43; border: 1px solid #759955;'
    ) : ''}
`;