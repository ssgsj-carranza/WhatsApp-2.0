import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";
import {auth} from '../firebase';

function Message({user, message}) {
    const [userLoggedIn] = useAuthState(auth);

    //Determening sender or reciever


    return (
        <Container>
            <p>{message.message}</p>
        </Container>
    )
}

export default Message


const Container = styled.div ``;

const MessageElement = styled.p `
    width: fit-content;
    padding: 15px;
    border-radius: 8px;
    margin: 10;
    min-width: 60px;
    padding-bottom: 26px;
    position: relative;
    text-align: center;
`;

const Sender = styled(MessageElement)`
    margin-left: auto;
    background-color: #dcf8c6;
`;

const Reciever = styled(MessageElement)`
    background-color: whitesmoke;
    text-align: left;
`;