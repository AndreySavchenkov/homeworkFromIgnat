import React from 'react';
import {Message} from "./Message";

const messageData = {
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN65A44jiNLG-uaNMKeid1T7CXgZZRxiPDfw&usqp=CAU',
    name: 'Andrey Savchenkov',
    message: 'полетели! бомбим!',
    time: '22:00',
}

function HW1() {
    return (
        <div>
            <hr/>
            homeworks 1
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
        </div>
    )
}

export default HW1
