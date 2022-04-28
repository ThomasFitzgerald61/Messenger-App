import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelListContainer, ChannelContainer, Auth } from './components';

import './App.css';

const apiKey = 'e8jsnb2st297';

const client = StreamChat.getInstance(apiKey);

const authToken = false;

const App = () => {

if(!authToken) return <Auth />

  return (
    <div className='app__wrapper'>
        <chat client={client} theme="team light" >
            <ChannelListContainer 
            
            />
            <ChannelContainer 
            
            />
        </chat>
    </div>
  );
}

export default App;
