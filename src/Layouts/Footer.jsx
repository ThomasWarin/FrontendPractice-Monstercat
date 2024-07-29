// Import du style
import './Footer.scss'

// Import d'images
import { AppleSVG, ArrowRight, DiscordSVG, FacebookSVG, InstagramSVG, MonstercatSVG, SpotifySVG, TiktokSVG, TrillerSVG, TwitchSVG, XSVG, YoutubeSVG } from '../Components/SVG'

export const Footer = () => {
    return (
        <footer className="Footer">
            <nav className="Footer-navigation">
                <ul className="Footer-navigation_list">
                    <li className="Footer-navigation_item"><a href="/">About Monstercat</a></li>
                    <li className="Footer-navigation_item"><a href="/">Contact Us</a></li>
                    <li className="Footer-navigation_item"><a href="/">Careers</a></li>
                    <li className="Footer-navigation_item"><a href="/">News</a></li>
                    <li className="Footer-navigation_item"><a href="/">Press</a></li>
                </ul>
                <ul className="Footer-navigation_list">
                    <li className="Footer-navigation_item"><a href="/">Terms of Service</a></li>
                    <li className="Footer-navigation_item"><a href="/">Privacy Policy</a></li>
                </ul>
                <div className="Footer-navigation_form">
                    <p className="Footer-navigation_form_title">Monstercat News</p>
                    <p className="Footer-navigation_form_sentence">Don't miss a thing, stay up to date with the latest news from us.</p>
                    <form onSubmit={(event) => event.preventDefault()}>
                        <input type="email" placeholder="Enter email" name="email" />
                        <button type="submit"><ArrowRight /></button>
                    </form>
                </div>
            </nav>
            <hr className="divider medium" />
            <div className="Footer-infos">
                <span className='Footer-infos_copyright'>2011 - 2024 © Monstercat, All Rights Reserved</span>
                <ul className='Footer-infos_social'>
                    <li><a href="/" title="Monstercat on Youtube"><YoutubeSVG /></a></li>
                    <li><a href="/" title="Monstercat on Instagram"><InstagramSVG /></a></li>
                    <li><a href="/" title="Monstercat on Tiktok"><TiktokSVG /></a></li>
                    <li><a href="/" title="Monstercat on X"><XSVG /></a></li>
                    <li><a href="/" title="Monstercat on Spotify"><SpotifySVG /></a></li>
                    <li><a href="/" title="Monstercat on Apple Music"><AppleSVG /></a></li>
                    <li><a href="/" title="Monstercat on Twitch"><TwitchSVG /></a></li>
                    <li><a href="/" title="Monstercat on Facebook"><FacebookSVG /></a></li>
                    <li><a href="/" title="Monstercat on Discord"><DiscordSVG /></a></li>
                    <li><a href="/" title="Monstercat on Triller"><TrillerSVG /></a></li>
                    <li><a href="/" title="Monstercat Player"><MonstercatSVG /></a></li>
                </ul>
            </div>
            <p className="Footer-disclaimer"><small>This site is a reproduction of the <a href="https://www.monstercat.com/release/MCLP017">Monstercat album release page</a> based on an idea from <a href="https://www.frontendpractice.com/projects/monstercat">Frontend Practice</a> to showcase my frontend development skills.</small></p>
        </footer>
    )
}