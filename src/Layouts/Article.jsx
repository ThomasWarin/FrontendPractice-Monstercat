// Import du style
import './Article.scss'

// Import d'images
const baseURL = import.meta.env.BASE_URL
const albumCover = `${baseURL}images/album.webp`
import { PlaySVG, PauseSVG, ShareSVG, MonstercatSVG, BandcampSVG, SoundcloudSVG, AppleSVG, YoutubeSVG, SpotifySVG, MonsterCatSVG2 } from '../Components/SVG'

import songs from '../data/songs'

export const Article = () => {
    return (
        <article className="Article">
            <section className="Article-album section">
                <div className="Article-album_cover">
                    <img src={albumCover} alt="Album Level Days" />
                    <p className="Article-album_releaseDate"><strong>Instinct</strong> — Released May 22, 2020</p>
                </div>
                <div className="Article-album_infos">
                    <h1 className="Article-album_infos_album">Level Days</h1>
                    <p className="Article-album_infos_artist">Conro</p>
                    <div className="Article-album_infos_actions">
                        <button className='listenNow' type="button">
                            <PlaySVG />
                            {/* <PauseSVG /> */}
                            <span>Listen Now</span>
                        </button>
                        <button className='share' type="button">
                            <ShareSVG />
                            <span>Share</span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="Article-platforms section">
                <h2 className="Article-platforms_title">Stream it your way</h2>
                <ul className="Article-platforms_list">
                    <li>
                        <a href="/">
                            <i><MonsterCatSVG2 /></i>
                            <span className="tooltip">Stream on Monstercat Player</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i><BandcampSVG /></i>
                            <span className="tooltip">Stream on Bandcamp</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i><SoundcloudSVG /></i>
                            <span className="tooltip">Stream on Soundcloud</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i><AppleSVG /></i>
                            <span className="tooltip">Stream on Apple Music</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i><YoutubeSVG /></i>
                            <span className="tooltip">Stream on Youtube</span>
                        </a>
                    </li>
                    <li>
                        <a href="/">
                            <i><SpotifySVG /></i>
                            <span className="tooltip">Stream on Spotify</span>
                        </a>
                    </li>
                </ul>

            </section>
            <section className="Article-songs section">
                <h2 className="Article-songs_title">Track List</h2>
                <ol className="Article-songs_list">
                    {songs.map((song) => (
                        <li key={song.number}>
                            <span className="trackNumber">{song.number}</span>
                            <button className="trackPlay"><PlaySVG/></button>
                            <div className="trackInfos">
                                <span className="trackInfos_title">{song.title}</span>
                                <span className="trackInfos_artist">{song.artist}</span>
                            </div>
                            <span className="trackTime">{song.duration}</span>
                            <button className="trackShare"><ShareSVG/></button>
                        </li>
                    ))}
                </ol>
            </section>
        </article>
    )
}

