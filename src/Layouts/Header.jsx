// Import du style
import './Header.scss'

// Import d'images
const baseURL = import.meta.env.BASE_URL
const monstercatLogo = `${baseURL}images/monstercat-logo.webp`
import { MonstercatSVG, InstagramSVG, TiktokSVG, XSVG, TwitchSVG, FacebookSVG, DiscordSVG, MenuSVG } from '../Components/SVG'

export const Header = () => {
    return (
        <header className="Header">
            <a className="Header-logo" href="/">
                <img src={ monstercatLogo } alt="Monstercat Logo" />
            </a>
            <ul className="Header-socialLinks">
                <li className="Header-socialLinks_icon"><a href="/" alt= "Instagram Logo" title="Monstercat on Instagram"><i><InstagramSVG /></i></a></li>
                <li className="Header-socialLinks_icon"><a href="/" alt= "Tiktok Logo" title="Monstercat on Tiktok"><i><TiktokSVG /></i></a></li>
                <li className="Header-socialLinks_icon"><a href="/" alt= "X Logo" title="Monstercat on X"><i><XSVG /></i></a></li>
                <li className="Header-socialLinks_icon"><a href="/" alt= "Twitch Logo" title="Monstercat on Twitch"><i><TwitchSVG /></i></a></li>
                <li className="Header-socialLinks_icon"><a href="/" alt= "Facebook Logo" title="Monstercat on Facebook"><i><FacebookSVG /></i></a></li>
                <li className="Header-socialLinks_icon"><a href="/" alt= "Discord Logo" title="Monstercat on Discord"><i><DiscordSVG /></i></a></li>
                <li className="Header-socialLinks_icon"><a href="/" alt= "Monstercat Player Logo" title="Monstercat Player"><i><MonstercatSVG /></i></a></li>
            </ul>
            <button className="Header-menu" type="button">
                <MenuSVG />
            </button>


        </header>
    )
}


