import styled from "styled-components";
import Head from 'next/head';
import {Button} from '@material-ui/core';

function Login() {
    return (
        <Container>
            <Head>
                <title>Login</title>
            </Head>

            <LoginContainer>
                <Logo 
                    src='https://cdn.iconscout.com/icon/free/png-256/whatsapp-circle-1868968-1583132.png'
                />
                <Button variant='outlined'>Sign in with Google</Button>
            </LoginContainer>
        </Container>
    )
}

export default Login

const Container = styled.div `

`;


const LoginContainer = styled.div `

`;


const Logo = styled.img `
    height: 200px;
    width: 200px;
`;
