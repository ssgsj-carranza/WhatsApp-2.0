import styled from "styled-components";
import Head from 'next/head';
import {Button} from '@material-ui/core';
import { auth, provider } from "../firebase";

function Login() {
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }

    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo 
                    src='https://cdn.iconscout.com/icon/free/png-256/whatsapp-circle-1868968-1583132.png'
                />
                <Button onClick={signIn} variant='outlined'>Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login

const Container = styled.div `
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: white;
`;


const LoginContainer = styled.div `
    display: flex;
    flex-direction: column;
    padding: 100px;
    align-items: center;
    background-color: whitesmoke;
    border-radius: 5px;
    box-shadow: 0 4px 14px -3px rgba(0, 0, 0, 0.7)
`;


const Logo = styled.img `
    height: 200px;
    width: 200px;
    margin-bottom: 50px;
`;