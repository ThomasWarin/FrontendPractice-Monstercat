// Import du style
import './App.scss'

import { Header } from '../Layouts/Header'
import { Article } from '../Layouts/Article'

// Import d'images
const baseURL = import.meta.env.BASE_URL
const albumCover = `${baseURL}images/album.webp`


export const App = () => {
    return (
        <div className="App">
            <div className="App-background" style={{backgroundImage: `url(${albumCover})`}}/>

            <Header />
            <Article />
        </div>
    )
}
