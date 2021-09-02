import React from 'react'
import {HashRouter as Router, NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {PATH} from "./Routes";


function Header() {
    return (
        <div className={s.header}>
            <Router>
                <NavLink className={s.link} activeClassName={s.active} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
                <NavLink className={s.link} activeClassName={s.active} to={PATH.JUNIOR}>Junior</NavLink>
                <NavLink className={s.link} activeClassName={s.active} to={PATH.JUNIOR_PLUS}>JuniorPlus</NavLink>
            </Router>
        </div>
    )
}

export default Header
