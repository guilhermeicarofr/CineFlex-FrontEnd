import { useState } from 'react';
import { post } from 'axios';
import styled from 'styled-components';

export default function SessionCheckout({selectedSeats, setReservation}) {

    const [name, setName] = useState("");
	const [cpf, setCpf] = useState("");

    function formSubmit(event) {
        event.preventDefault();
        setReservation({name, cpf, ids:selectedSeats});
        const promise = post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many',{name, cpf, ids:selectedSeats});
        promise.then((response)=>console.log(response.data));
        promise.catch((response)=>console.log(response.message));
    }

    return (
        <CheckoutForm>
            <form onSubmit={formSubmit}>
                <label htmlFor="name">Nome do comprador:</label>
                <input value={name} onChange={event => setName(event.target.value)} type="text" id="name" placeholder="Digite seu nome..." required />
                <label htmlFor="cpf">CPF do comprador:</label>
                <input value={cpf} onChange={event => setCpf(event.target.value)} type="number" id="cpf" placeholder="Digite seu CPF..." required />
                <button type="submit">Reservar assento(s)</button>
            </form>
        </CheckoutForm>
    );
}

const CheckoutForm = styled.div`
    width: 327px;
    margin: 40px auto 120px auto;
    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        label {
            margin: 10px 0px 5px 0px;
            text-align: left;
        }
        input {
            height: 51px;
            font-size: 18px;
        }
        button {
            margin: 55px auto 0px auto;
            width: 225px;
            height: 42px;
            background-color: #E8833A;
            color: #FFFFFF;
            border: 1px solid #E8833A;
            border-radius: 3px;
        }
    }
`;