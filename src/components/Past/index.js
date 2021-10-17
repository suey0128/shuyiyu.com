//Photo by Marina Leonova from Pexels
//Photo by Karolina Grabowska from Pexels the abstract one
import backgroundPhoto from '../../assets/images/pexels-karolina-grabowska-4046791.jpg';
import pastExperience from './PastData'
import {
    PastSectionContainer,
    PastBg,
    ImgBg,
    PastContentBox,
    PastContentContainer,
    PastH1,
    PastContent,
    PastCompany,
    PastPosition,
    PastWorkSummary,
    PastWorkPoint,
    EducationContainer,
    Degree,
    Time,
} from './PastElements'

import React from 'react'

const Past = () => {
    return (
        <PastSectionContainer>
            <PastBg>
                <ImgBg src={backgroundPhoto} alt="background"/>
            </PastBg>

            <PastContentBox>
                <PastContentContainer>
                    <PastH1>Past Experience</PastH1>
                    {pastExperience.work.map(w =>
                        <PastContent key={w.company}>
                            <PastCompany>{w.company}, <PastPosition>{w.position}</PastPosition></PastCompany>
                            {/* <PastPosition>{w.position}</PastPosition> */}
                            <PastWorkSummary>
                            {w.summary.map(s => 
                                <PastWorkPoint key={w.summary.indexOf(s)}>{s}</PastWorkPoint>
                            )}
                            </PastWorkSummary>
 
                        </PastContent>
                    )}
                </PastContentContainer>

                <EducationContainer>
                    <PastH1>Education</PastH1>
                    {pastExperience.education.map(e =>
                        <PastContent key={e.school}>
                            <PastCompany>{e.school}</PastCompany>
                            <Degree>{e.degree}</Degree>
                            <Time>{e.time}</Time>
                            <br></br>
                        </PastContent>
                    )}
                </EducationContainer>
            </PastContentBox>



        </PastSectionContainer>
    )
}

export default Past;
