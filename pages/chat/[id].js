import styled from 'styled-components';
import Head from 'next/head';
import Sidebar from '../../components/Sidebar';
import ChatScreen from '../../components/ChatScreen';
import { db } from '../../firebase';

function Chat({}) {
    return (
        <Container>
            <Head>
                <title>Chat</title>
            </Head>
            <Sidebar />
            <ChatContainer>
                <ChatScreen />
            </ChatContainer>
        </Container>
    )
}

export default Chat;

//server pre renders page and throws it out once it is requested
export async function getServerSideProps(context) {
    //goes into document of chat where id matches wildcard id
    const ref = db.collection('chats').doc(context.query.id);
    //prep the messages on the server side
    const messageRes = await ref.collection('messages').orderBy('timestamp', 'asc').get();
    const messages = messageRes.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
    .map((messages) => ({
        ...messages,
        timestamp: messages.timestamp.toDate().getTime()
    }));

    //prep chats
    const chatRes = await ref.get();
    const chat = {
        id: chatRes.id,
        ...chatRes.data(),
    };
    //all of the above render on the server returning props below
    return {
        props: {
            messages: JSON.stringify(messages),
            chat: chat
        },
    };
}


const Container = styled.div `
    display: flex;
`;

const ChatContainer = styled.div `
    flex: 1;
    overflow: scroll;
    height: 100vh;

    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;