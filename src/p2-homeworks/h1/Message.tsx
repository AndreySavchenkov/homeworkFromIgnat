import React from 'react'
import s from './Message.module.css'

type MessageType = {

        avatar: string
        name: string
        message: string
        time: string

}

function Message(props: MessageType) {

    return (
        <div className={s.container}>
            <div className={s.imageContainer}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={s.textContainer}>
                <div>
                    <p className={s.name}>{props.name}</p>
                    <p className={s.message}>{props.message}</p>
                </div>
                <div>
                    <p className={s.time}>{props.time}</p>
                </div>
            </div>
        </div>
    )
}

export default Message
