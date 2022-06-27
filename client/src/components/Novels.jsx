import React, { useState, useEffect } from 'react'
import NovelsList from './NovelsList'
import Search from './Search'
import axios from 'axios'

const Novels = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [novelsArray, setNovelsArray] = useState([])

    useEffect(() => {
        fetchNovels()
    }, [])

    const fetchNovels = async () => {
        let fetchedData = await axios.get('http://localhost:1337/api/novels')
        setNovelsArray(fetchedData.data)
    }

    return (
        <div>
            <div className='title'>
                <h1>Great Novels</h1>
            </div>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            <NovelsList novelsArray={novelsArray} searchTerm={searchTerm}/>
        </div>
    )
}

export default Novels