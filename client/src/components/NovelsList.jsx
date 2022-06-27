import React from 'react'

const NovelsList = (props) => {
    const { novelsArray, searchTerm } = props

    return (
        <ul>
            {novelsArray.filter((novel) => {
                return novel.name.toLowerCase().includes(searchTerm.toLowerCase())
            }).map((novel) => {
                return <li>{novel.title} by {novel.author.nameFirst} {novel.author.nameLast}</li>
            })}
        </ul>
    )
}

export default NovelsList