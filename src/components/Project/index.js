import React from 'react';
import Container from '@mui/material/Container';
import ProjectItem from './ProjectItem';

const projects = [
    {
        "name": "Spaethethic",
        "img":"",
        "description": "A matchmaking platform for small local businesses and local influencers.",
        "tech": [
            "Conducted research on both small businesses and local influencers’ struggle to grow and provide potential solutions.",
            "Developed JavaScript/React/Redux front-end and modeled custom database schema and REST API with Active Record, Postgres, and Ruby on Rails.",
            "Equipped with searchable listings, various sorting, and personalized filtering mechanisms",
            "Implemented real-time notification system triggered by actions taken by others that are related to the current user."
        ],
        "languages":[
            {"Ruby": 0.449},
            {"JavaScript": 0.466},
            {"CSS": 0.0295},
            {"HTML": 0.0055}
        ] ,

    },

    {
        "name": "NailCode",
        "img":"",
        "description": "A press-on nail retail website with multiple product lines.",
        "tech": [
            "Established safe and easy user signup and authentication with hashed passwords.",
            "Provided users login convenience with cookies login.",
            "Compacted the hosting space needed by designing the backend table incorporating polymorphic relationships",
            "Formulated a smooth checkout process with a navigation stepper."
        ],
        "languages":[
            {"JavaScript": 0.501},
            {"Ruby": 0.45},
            {"CSS": 0.036},
            {"HTML": 0.013}
        ] ,
    },

    {
        "name": "SkillMatch",
        "img":"",
        "description": "A matchmaking website for tech recruiters and tech job seekers based on conding languages",
        "tech": [

        ],
        "languages":[
            {"Ruby": 0.198},
            {"JavaScript": 0.422},
            {"CSS": 0.0685},
            {"HTML": 0.0115}
        ] ,
    },

    {
        "name": "SuperTeam",
        "img":"",
        "description": "A Marvel superhero information website for fans to build their superhero teams.",
        "tech": [
            "Achieved a dashing, user-friendly, and responsive interface combining CSS and styled-components from Material-UI.",
            "Provided users with all the Marvel superheroes to choose from by utilizing the Marvel API.",
            "Stored user information with JSON backend database.",
        ],
        "languages":[
            {"Ruby": 0.198},
            {"JavaScript": 0.422},
            {"CSS": 0.0685},
            {"HTML": 0.0115}
        ] ,
    },

    {
        "name": "3 Days at a Time",
        "img":"",
        "description": `A website displays 3 NASA "photo of the day" at one page`,
        "tech": [

        ],
        "languages":[
            {"JavaScript": 0.744},
            {"CSS": 0.183},
            {"HTML": 0.073}
        ] ,
    },
];

const Project = () => {
    return (
        <Container maxWidth="sm" >
            {projects.map(project=>
                <ProjectItem key={project.name} project={project} />
            )}
        </Container>
    )
}

export default Project
