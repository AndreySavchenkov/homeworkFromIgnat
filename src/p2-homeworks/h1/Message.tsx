import React from 'react'
import style from './Message.module.scss'

type MessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

export const Message = (props: MessagePropsType) => {

    return (
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img src={props.avatar} alt=""/>
            </div>
            <div className={style.textContainer}>
                <div className={style.messageContainer}>
                    <p className={style.name}>{props.name}</p>
                    <p className={style.message}>{props.message}</p>
                </div>
                <p className={style.time}>{props.time}</p>
            </div>
        </div>
    )
}

