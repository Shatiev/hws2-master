import React from 'react'
import downIcon from './icons/icon1.png'
import upIcon from './icons/icon2.png'
import noneIcon from './icons/icon3.png'

// добавить в проект иконки и импортировать


export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    if (sort === '') return up
    if (sort === up) return down
    if (sort === down) return ''
    return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt="sort"
                style={{ width: '16px', height: '16px' }}
            />
        </span>
    )
}

export default SuperSort
