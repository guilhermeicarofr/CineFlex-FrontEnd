import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function MovieDay({day}) {
    return (
        <DayContainer>
            <h3>{day.weekday} - {day.date}</h3>
            <div>
                {day.showtimes.map((showtime, index) =>
                    <Link key={index} to={`/sessao/${showtime.id}`} >
                        <SessionButton>
                            {showtime.name}
                        </SessionButton>
                    </Link>
                )}
            </div>
        </DayContainer>
    );
}

const DayContainer = styled.li`
    width: 100%;
    height: 150px;
    padding: 10px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around   ;
    h3 {
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 25px;
    }
    div {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        a {
            text-decoration: none;
        }
    }
`;

const SessionButton = styled.button`
    width: 82px;
    height: 43px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E8833A;
    font-size: 18px;
    color: #FFFFFF;
    border: solid 1px #E8833A;
    border-radius: 3px;
    margin-right: 10px;
`;