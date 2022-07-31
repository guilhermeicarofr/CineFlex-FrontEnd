//import { get } from "axios";
//import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
//import styled from 'styled-components';

export default function Session() {
    
    const { sessionId } = useParams();


    return (
        `Oi ${sessionId}`
    );
}