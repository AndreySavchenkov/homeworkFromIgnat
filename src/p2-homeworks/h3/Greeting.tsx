import React, {KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: any
    setNameCallback: any
    addUser: any
    error: any
    totalUsers: any
    onEnter:(e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter}
) => {
    const inputClass = s.error ? s.errorInput : s.input

    return (
        <div>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyDown={onEnter}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
