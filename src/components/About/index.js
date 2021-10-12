import React from 'react'
import Video from '../../assets/videos/video.mp4'
import { 
    AboutContainer,
    AboutBg,
    VideoBg,
    AboutContent,
    AboutH2,
    AboutH1,
    AboutP,
} from './AboutElements'

const About = () => {
    return (
        <AboutContainer id='about'>
            <AboutBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </AboutBg>

            <AboutContent>
                <AboutH2>Software Engineer</AboutH2>
                <AboutH1>Shuyi Yu</AboutH1>
                <AboutP>👉 JavaScript | React | Redux | Ruby | Rails | Postgres | HTML | CSS | Git | Zsh 👈 
                    <br/>   
                    Have fun viewing my profile and hope to hear from you.
                </AboutP>
            </AboutContent>

        </AboutContainer >
    )
}

export default About;
