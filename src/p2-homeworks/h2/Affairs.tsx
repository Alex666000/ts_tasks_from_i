import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: React.Dispatch<React.SetStateAction<FilterType>>
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    return (
        <div className={s.affairsDiv}>
            <div>
                {mappedAffairs}
            </div>
            <div className={s.buttonsDiv}>
                <SuperButton onClick={setAll}>All</SuperButton>
                <SuperButton onClick={setHigh}>High</SuperButton>
                <SuperButton onClick={setMiddle}>Middle</SuperButton>
                <SuperButton onClick={setLow}>Low</SuperButton>
            </div>
        </div>
    )
}

export default Affairs
