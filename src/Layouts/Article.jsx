import { useEffect, useRef, useState } from 'react'

// Import du style
import './Article.scss'

// Import d'images
const baseURL = import.meta.env.BASE_URL
const albumCover = `${baseURL}images/album.webp`
import { PlaySVG, PauseSVG, ShareSVG, MonstercatSVG, BandcampSVG, SoundcloudSVG, AppleSVG, YoutubeSVG, SpotifySVG, MonsterCatSVG2 } from '../Components/SVG'

import tracks from '../data/tracks'

export const Article = () => {
    const audioRef = useRef(new Audio())
    const currentTrackIdRef = useRef(null)
    const [currentTrack, setCurrentTrack] = useState(null)
    const [currentTrackId, setCurrentTrackId] = useState(null)
    const [isPlaying, setIsPlaying] = useState(false)

    
    // Mise à jour de la référence chaque fois que currentTrackId change
    useEffect(() => {
        currentTrackIdRef.current = currentTrackId;
    }, [currentTrackId]);
    
    // Ajoute un écouteur d'événement pour détecter la fin de la piste actuelle
    useEffect(() => {
        const audio = audioRef.current
        const handleEnded = () => {
            nextTrack();
        };
        
        audio.addEventListener('ended', handleEnded)
        
        return () => {
            audio.removeEventListener('ended', handleEnded)
        }
    }, [])
    
    
    // Fonction pour jouer ou mettre en pause la piste
    const playTrack = (track = currentTrack) => {
        if (currentTrackId === track.id) {
            if (isPlaying) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
            setIsPlaying(!isPlaying)
        } else {
            audioRef.current.src = track.src
            audioRef.current.volume = 0.5
            audioRef.current.play()
            setCurrentTrack(track)
            setCurrentTrackId(track.id)
            setIsPlaying(true)
        }
    }

    // Fonction pour passer à la piste suivante
    const nextTrack = () => {
        const currentId = currentTrackIdRef.current
        const currentIndex = tracks.findIndex(track => track.id === currentId)

        const nextIndex = currentIndex + 1;
        if (nextIndex < tracks.length) {
            const nextTrack = tracks[nextIndex];
            playTrack(nextTrack);
        } else {
            // Arrêter la lecture si c'est la dernière piste
            audioRef.current.pause();
            setIsPlaying(false);
            setCurrentTrack(null);
            setCurrentTrackId(null);
        }
    };


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
                        <button className='listenNow' type="button" onClick={() => playTrack(currentTrack ? currentTrack : tracks[0])}>
                            { isPlaying ? <PauseSVG/> : <PlaySVG/> }
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
                    {tracks.map((track) => (
                        <li key={track.id}>
                            <span className="trackNumber">{track.id}</span>
                            <button className="trackPlay" onClick={() => playTrack(track)}>
                                { isPlaying && currentTrackId === track.id ? <PauseSVG/> : <PlaySVG/> }
                            </button>
                            <div className="trackInfos">
                                <span className="trackInfos_title">{track.title}</span>
                                <span className="trackInfos_artist">{track.artist}</span>
                            </div>
                            <span className="trackTime">{track.duration}</span>
                            <button className="trackShare"><ShareSVG/></button>
                        </li>
                    ))}
                </ol>
            </section>
            <section className="Article-video section">
                <h2 className="Article-video_title">Music Video</h2>
                <iframe
                    className="Article-video_frame"
                    src="https://www.youtube.com/embed/7nObtWENgxA"
                    title="Conro - Therapy [Monstercat Lyric Video]"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </section>
            <hr className="divider large" />
        </article>
    )
}

