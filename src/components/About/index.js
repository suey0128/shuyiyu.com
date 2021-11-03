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
    ScrollerWrapper,
    Scroller,
    Span
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
                <AboutP>👉 JavaScript | React | Redux | Ruby | Rails | Java | Node.js | Postgres | HTML | CSS | Git | Zsh 👈 
                    <br/>   
                    Have fun viewing my profile and hope to hear from you.
                </AboutP>
            </AboutContent>

            <ScrollerWrapper to='project'>
                <Scroller>
                    <Span></Span>
                    <Span></Span>
                    <Span></Span>
                </Scroller>
            </ScrollerWrapper>

        </AboutContainer >
    )
}

export default About;
