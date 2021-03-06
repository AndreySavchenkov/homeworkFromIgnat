import React from 'react'
import {AffairType} from "./HW2";
import styles from './Affair.module.scss'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div className={styles.affair}>
            <div className={styles.affairName}>{props.affair.name}</div>
            <div className={styles.affairPriority}>{props.affair.priority}</div>
            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
