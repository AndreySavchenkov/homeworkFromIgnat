import React from 'react'

type MessageType = {

        avatar: string
        name: string
        message: string
        time: string

}

function Message(props: MessageType) {

    return (
        <div>
            <div>
                <img src={props.avatar} alt=""/>
            </div>
            <div>
                <div>
                    <p className="name">{props.name}</p>
                    <p className="message">{props.message}</p>
                </div>
                <div>
                    <p className="time">{props.avatar}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
