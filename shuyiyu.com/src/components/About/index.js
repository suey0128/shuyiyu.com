import React from 'react'
import Video from '../../assets/videos/video.mp4'
import { 
    AboutContainer,
    AboutBg,
    VideoBg
} from './AboutElements'

const About = () => {
    return (
        <AboutContainer id='about'>
            <AboutBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </AboutBg>

            {/* <AboutContentContainer>
                <AboutImghContainer>
                    <AboutImg />
                </AboutImghContainer>

                <AboutRightContainer>
                    <AboutH1> Software Engineer</AboutH1>
                    <AboutP> whatever blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</AboutP>
                </AboutRightContainer>

            </AboutContentContainer> */}
        </AboutContainer >
    )
}

export default About;
