import {MultiChatSocket, MultiChatWindow, useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) =>{
    const chatProps =useMultiChatLogic(
        '985cfabf-3a4e-4ec5-9912-8a38c381b6dc',
        props.user.username, 
        props.user.secret
        );
    return (
        <div style={{height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
        </div> 
    )
}

export default ChatsPage