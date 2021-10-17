import {
    FooterContainer,
    FooterContent,
    FooterH1,
    FooterP,
    SocialMediaContainer,
    SocialMediaIcon,
    Email,
} from './FooterElements';

import { FiLinkedin } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { AiFillMediumCircle } from 'react-icons/ai';

const Footer = () => {
    return (
        <FooterContainer id='contact'>
            <FooterContent>
                <FooterH1>Shuyi Yu</FooterH1>
                <FooterP>Email: <Email href = "mailto: syui0128@gmail.com">syui0128@gmail.com</Email></FooterP>
                <FooterP>Seattle, WA</FooterP>

                <SocialMediaContainer>
                    <SocialMediaIcon href="https://www.linkedin.com/in/sueyyu0128/" target="_blank">
                        <FiLinkedin />
                    </SocialMediaIcon>
                    <SocialMediaIcon href="https://github.com/suey0128" target="_blank">
                        <FaGithub />
                    </SocialMediaIcon>
                    <SocialMediaIcon href="http://syui0128.medium.com" target="_blank">
                        <AiFillMediumCircle />
                    </SocialMediaIcon>
                </SocialMediaContainer>
            </FooterContent>
        </FooterContainer>
    )
}

export default Footer
