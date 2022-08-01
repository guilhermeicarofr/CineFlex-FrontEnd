import { useNavigate } from "react-router-dom";
import styled from 'styled-components';

export default function SuccessScreen({reservation}) {

    let navigate = useNavigate();

    return (
        <SuccessMessage>
            <h1>Pedido feito com sucesso!</h1>
            <h2>Filme e sessão</h2>
            <p>{reservation.title}</p>
            <p>{reservation.date} {reservation.time}</p>
            <h2>Ingressos</h2>
            {reservation.seats.map((seat, index) => <p key={index}>Assento {seat}</p>)}
            <h2>Comprador</h2>
            <p>Nome: {reservation.name}</p>
            <p>CPF: {reservation.cpf}</p>
            <button onClick={()=>navigate('/')}>Voltar pra Home</button>
        </SuccessMessage>
    );
}

const SuccessMessage = styled.main`
    width: 374px;
    margin: 67px auto;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        color: #247A6B;
    }
    h2 {
        width: 100%;
        margin: 30px 0px 10px 0px;
        font-size: 24px;
        font-weight: 700;
        text-align: left;
        color: #293845;
    }
    p {
        width: 100%;
        margin: 5px 0px;
        font-size: 22px;
        font-weight: 400;
        text-align: left;
        color: #293845;
    }
    button {
        width: 225px;
        height: 42px;
        margin: 50px auto 0px auto;
        background-color: #E8833A;
        font-size: 18px;
        color: #FFFFFF;
        border: 1px solid #E8833A;
        border-radius: 3px;
    }
`;