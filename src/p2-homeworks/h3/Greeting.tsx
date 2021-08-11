import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: any // need to fix any
    setNameCallback: any // need to fix any
    addUser: any // need to fix any
    error: any // need to fix any
    totalUsers: any // need to fix any
    onEnter:(e: any) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyDown={onEnter}/>
            <span>{error}</span>
            <button onClick={addUser}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
