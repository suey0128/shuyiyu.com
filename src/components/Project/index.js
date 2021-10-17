import React from 'react';
import projects from './projects';
import Spaesthetic from '../../assets/images/Spaesthetic.png';
import NailCode from '../../assets/images/NailCode.png';
import SkillMatch from '../../assets/images/SkillMatch.png';
import SuperTeam from '../../assets/images/SuperTeam-macscreen.png';
import ThreeDaysAtATime from '../../assets/images/3daysatatime-macscreen.png';
import {
    ProjectSectionContainer,
    ProjectSectionTitle,
    ProjectContainer,
    ProjectGrid,
    ProjectImg, 
    ProjectTitle,
    ProjectP,
    ProjectUl,
    ProjectBarGrid,
    ProjectH4,
    ProjectBarChart,
    BarBlock,
    ProjectCategoryUl,
    ProjectCategoryLi,
    ProjectBtnGrid,
    ProjectLink,
    ProjectBtn,
  
} from './ProjectElements';

// projects[1].links.map(l => console.log(Object.values(l) ))

const Project = () => {
    return (
        <ProjectSectionContainer id='project'>
            <ProjectSectionTitle>Projects</ProjectSectionTitle>

            <ProjectContainer >
                    <ProjectGrid >
                        <ProjectImg src={Spaesthetic} alt={projects[0].name}/>
                    </ProjectGrid>

                    <ProjectGrid >
                        <ProjectTitle>{projects[0].name}</ProjectTitle>
                        <ProjectP>{projects[0].description}</ProjectP>
                        <ProjectUl>
                            <li>Conducted research on both small businesses and local influencers’ struggle to grow and provide potential solutions.</li>
                            <li>Developed with <span style={{ fontWeight: 'bold' }}>JavaScript/React/Redux </span> front-end and modeled custom database schema and REST API with <span style={{ fontWeight: 'bold' }}>Active Record, Postgres, and Ruby on Rails</span>.</li>
                            <li>Equipped with searchable listings, various sorting, and personalized filtering mechanisms.</li>
                            <li>Implemented <span style={{ fontWeight: 'bold' }}>a real-time notification system</span>.</li>
                        </ProjectUl>

                        {/* barchart https://codepen.io/richardramsay/pen/ZKmQJv */}
                        <ProjectBarGrid> 
                            <ProjectH4>Languages</ProjectH4>

                            <ProjectBarChart>
                                { projects[0].languages.map(l => 
                                <BarBlock key={Object.keys(l)} className={Object.keys(l)} style={{width:`${(Number(Object.values(l))*100).toFixed(2)}%` }}>
                                </BarBlock>
                                )}
                            </ProjectBarChart>

                            <ProjectCategoryUl>
                                { projects[0].languages.map(l => 
                                    <ProjectCategoryLi key={Object.keys(l)} className={Object.keys(l)}>{Object.keys(l)}:{(Number(Object.values(l))*100).toFixed(2)}% </ProjectCategoryLi>
                                )}
                            </ProjectCategoryUl>
                        </ProjectBarGrid>


                        <ProjectBtnGrid>
                        { projects[0].links.map(l => 
                            <ProjectLink key={Object.keys(l)} href={Object.values(l)[0] !== "" ? Object.values(l) : null} target='_blank' className={Object.values(l)[0] === "" ? "disabled" : null}>
                                <ProjectBtn className={Object.values(l)[0] === "" ? "disabled" : null} >{Object.keys(l)}</ProjectBtn>
                            </ProjectLink>
                        )}
                        </ProjectBtnGrid>
                    </ProjectGrid>
            </ProjectContainer>

            <ProjectContainer >
                    <ProjectGrid >
                        <ProjectImg src={NailCode} alt={projects[1].name}/>
                    </ProjectGrid>

                    <ProjectGrid >
                        <ProjectTitle>{projects[1].name}</ProjectTitle>
                        <ProjectP>{projects[1].description}</ProjectP>
                        <ProjectUl>
                            <li>Established safe and easy user signup and authentication with <span style={{ fontWeight: 'bold' }}> hashed passwords</span> .</li>
                            <li>Provided users login convenience with <span style={{ fontWeight: 'bold' }}>cookies login </span>.</li>
                            <li>Compacted the hosting space needed by designing the backend table incorporating <span style={{ fontWeight: 'bold' }}>polymorphic relationships </span>.</li>
                            <li>Developed with <span style={{ fontWeight: 'bold' }}>JavaScript/React </span> front-end and modeled custom database schema and REST API with <span style={{ fontWeight: 'bold' }}>Active Record, Postgres, and Ruby on Rails</span>.</li>
                        </ProjectUl>

                        <ProjectBarGrid> 
                            <ProjectH4>Languages</ProjectH4>

                            <ProjectBarChart>
                                { projects[1].languages.map(l => 
                                <BarBlock key={Object.keys(l)} className={Object.keys(l)} style={{width:`${(Number(Object.values(l))*100).toFixed(2)}%` }}>
                                </BarBlock>
                                )}
                            </ProjectBarChart>

                            <ProjectCategoryUl>
                                { projects[1].languages.map(l => 
                                    <ProjectCategoryLi key={Object.keys(l)} className={Object.keys(l)}>{Object.keys(l)}:{(Number(Object.values(l))*100).toFixed(2)}% </ProjectCategoryLi>
                                )}
                            </ProjectCategoryUl>
                        </ProjectBarGrid>

                        <ProjectBtnGrid>
                        { projects[1].links.map(l => 
                            <ProjectLink key={Object.keys(l)} href={Object.values(l)[0] !== "" ? Object.values(l) : null} target='_blank' className={Object.values(l)[0] === "" ? "disabled" : null}>
                                <ProjectBtn className={Object.values(l)[0] === "" ? "disabled" : null} >{Object.keys(l)}</ProjectBtn>
                            </ProjectLink>
                        )}
                        </ProjectBtnGrid>
                    </ProjectGrid>
            </ProjectContainer>

            <ProjectContainer >
                    <ProjectGrid >
                        <ProjectImg src={SkillMatch} alt={projects[2].name}/>
                    </ProjectGrid>

                    <ProjectGrid >
                        <ProjectTitle>{projects[2].name}</ProjectTitle>
                        <ProjectP>{projects[2].description}</ProjectP>
                        <ProjectUl>
                            <li>Achieved a user-friendly and fully responsive interface combining <span style={{ fontWeight: 'bold' }}>CSS </span>and styled components from <span style={{ fontWeight: 'bold' }}>Material-UI</span>.</li>
                            <li>Designed <span style={{ fontWeight: 'bold' }}> personalized recommendation listing </span> based on the number of skills matched between the recruiter and job seekers for both types of users.</li>
                            <li>Utilizes <span style={{ fontWeight: 'bold' }}> Redux toolkit</span> to manage all the state variables and debug with efficiency.</li>
                            <li>Developed with <span style={{ fontWeight: 'bold' }}>JavaScript/React/Redux </span> front-end and modeled custom database schema and REST API with <span style={{ fontWeight: 'bold' }}>Active Record, Postgres, and Ruby on Rails</span>.</li>
                        </ProjectUl>

                        <ProjectBarGrid> 
                            <ProjectH4>Languages</ProjectH4>

                            <ProjectBarChart>
                                { projects[2].languages.map(l => 
                                <BarBlock key={Object.keys(l)} className={Object.keys(l)} style={{width:`${(Number(Object.values(l))*100).toFixed(2)}%` }}>
                                </BarBlock>
                                )}
                            </ProjectBarChart>

                            <ProjectCategoryUl>
                                { projects[2].languages.map(l => 
                                    <ProjectCategoryLi key={Object.keys(l)} className={Object.keys(l)}>{Object.keys(l)}:{(Number(Object.values(l))*100).toFixed(2)}% </ProjectCategoryLi>
                                )}
                            </ProjectCategoryUl>
                        </ProjectBarGrid>

                        <ProjectBtnGrid>
                        { projects[2].links.map(l => 
                            <ProjectLink key={Object.keys(l)} href={Object.values(l)[0] !== "" ? Object.values(l) : null} target='_blank' className={Object.values(l)[0] === "" ? "disabled" : null}>
                                <ProjectBtn className={Object.values(l)[0] === "" ? "disabled" : null} >{Object.keys(l)}</ProjectBtn>
                            </ProjectLink>
                        )}
                        </ProjectBtnGrid>
                    </ProjectGrid>
            </ProjectContainer>

            <ProjectContainer >
                    <ProjectGrid >
                        <ProjectImg src={SuperTeam} alt={projects[3].name}/>
                    </ProjectGrid>

                    <ProjectGrid >
                        <ProjectTitle>{projects[3].name}</ProjectTitle>
                        <ProjectP>{projects[3].description}</ProjectP>
                        <ProjectUl>
                            <li>Provided users all the Marvel superheroes to choose from by utilizing the <span style={{ fontWeight: 'bold' }}>Marvel API</span>.</li>
                            <li>Stored user information, as well as the team information with <span style={{ fontWeight: 'bold' }}>JSON backend database</span>.</li>
                            <li>User can create their own superheroes to add to the team</li>
                            <li>Developed with <span style={{ fontWeight: 'bold' }}>JavaScript/React </span> front-end.</li>
                        </ProjectUl>

                        <ProjectBarGrid> 
                            <ProjectH4>Languages</ProjectH4>

                            <ProjectBarChart>
                                { projects[3].languages.map(l => 
                                <BarBlock key={Object.keys(l)} className={Object.keys(l)} style={{width:`${(Number(Object.values(l))*100).toFixed(2)}%` }}>
                                </BarBlock>
                                )}
                            </ProjectBarChart>

                            <ProjectCategoryUl>
                                { projects[3].languages.map(l => 
                                    <ProjectCategoryLi key={Object.keys(l)} className={Object.keys(l)}>{Object.keys(l)}:{(Number(Object.values(l))*100).toFixed(2)}% </ProjectCategoryLi>
                                )}
                            </ProjectCategoryUl>
                        </ProjectBarGrid>

                        <ProjectBtnGrid>
                        { projects[3].links.map(l => 
                            <ProjectLink key={Object.keys(l)} href={Object.values(l)[0] !== "" ? Object.values(l) : null} target='_blank' className={Object.values(l)[0] === "" ? "disabled" : null}>
                                <ProjectBtn className={Object.values(l)[0] === "" ? "disabled" : null} >{Object.keys(l)}</ProjectBtn>
                            </ProjectLink>
                        )}
                        </ProjectBtnGrid>
                    </ProjectGrid>
            </ProjectContainer>

            <ProjectContainer >
                    <ProjectGrid >
                        <ProjectImg src={ThreeDaysAtATime} alt={projects[4].name}/>
                    </ProjectGrid>

                    <ProjectGrid >
                        <ProjectTitle>{projects[4].name}</ProjectTitle>
                        <ProjectP>{projects[4].description}</ProjectP>
                        <ProjectUl>
                            <li>First project! Full of sentimental value.</li>
                            <li>Designed “likable” content cards displaying photos and videos fetching from <span style={{ fontWeight: 'bold' }}> NASA Photo of the Day API </span> with <span style={{ fontWeight: 'bold' }}>JavaScript and HTML</span>.</li>
                            <li>Equipped with searchable listings, various sorting, and personalized filtering mechanisms.</li>
                            <li>Implemented <span style={{ fontWeight: 'bold' }}>a real-time notification system</span>.</li>
                        </ProjectUl>

                        <ProjectBarGrid> 
                            <ProjectH4>Languages</ProjectH4>

                            <ProjectBarChart>
                                { projects[4].languages.map(l => 
                                <BarBlock key={Object.keys(l)} className={Object.keys(l)} style={{width:`${(Number(Object.values(l))*100).toFixed(2)}%` }}>
                                </BarBlock>
                                )}
                            </ProjectBarChart>

                            <ProjectCategoryUl>
                                { projects[4].languages.map(l => 
                                    <ProjectCategoryLi key={Object.keys(l)} className={Object.keys(l)}>{Object.keys(l)}:{(Number(Object.values(l))*100).toFixed(2)}% </ProjectCategoryLi>
                                )}
                            </ProjectCategoryUl>
                        </ProjectBarGrid>

                        <ProjectBtnGrid>
                        { projects[4].links.map(l => 
                            <ProjectLink key={Object.keys(l)} href={Object.values(l)[0] !== "" ? Object.values(l) : null} target='_blank' className={Object.values(l)[0] === "" ? "disabled" : null}>
                                <ProjectBtn  className={Object.values(l)[0] === "" ? "disabled" : null} >{Object.keys(l)}</ProjectBtn>
                            </ProjectLink>
                        )}
                        </ProjectBtnGrid>
                    </ProjectGrid>
            </ProjectContainer>

        </ProjectSectionContainer>
    )
}

export default Project
