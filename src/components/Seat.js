import { useState } from 'react';
import styled from 'styled-components';

export default function Seat({children, available}) {

    const [selected, setSelected] = useState(false);

    if(available) {
        return (
            <SeatContainer onClick={()=>setSelected(!selected)} selected={selected}>
                {children}
            </SeatContainer>
        );
    } else {
        return (
            <SeatContainer status={'reserved'}>
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
        'background-color: #8DD7CF; border: 1px solid #45BDB0;'
    ) : ''}
`;