import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'

function App(){
	let [message, setMessage] = useState('Search for Music!')
	let [data, setData] = useState([])
    let searchInput = useRef('')
    

    const API_URL = 'https://itunes.apple.com/search?term='

    const handleSearch = (e, term) => {
        e.preventDefault()
        const fetchData = async () => {
            document.title = `${term} Music`
            const response = await fetch(API_URL + term)
            const resData = await response.json()
            if (resData.results.length > 0) {
                return setData(resData.results)
            } else {
                return setMessage('Not Found')
            }
        }
        fetchData()
    }

    return (
        <div>
            <SearchBar handleSearch = {handleSearch}/>
            {message}
            <Gallery data={data}/>
        </div>
    );
}

export default App
