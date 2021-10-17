import NailCode from '../../assets/images/NailCode.png';
import SkillMatch from '../../assets/images/SkillMatch.png';
import Spaesthetic from '../../assets/images/Spaesthetic.png';


const projects = [
    {
        "name": "Spaesthetic",
        "img":{Spaesthetic},
        "description": "A matchmaking platform for small local businesses and local influencers.",
        "tech": [
            "Conducted research on both small businesses and local influencers’ struggle to grow and provide potential solutions.",
            "Developed JavaScript/React/Redux front-end and modeled custom database schema and REST API with Active Record, Postgres, and Ruby on Rails.",
            "Equipped with searchable listings, various sorting, and personalized filtering mechanisms.",
            "Implemented real-time notification system triggered by actions taken by others that are related to the current user."
        ],
        "languages":[
            {"Ruby": 0.499},
            {"JavaScript": 0.466},
            {"CSS": 0.0295},
            {"HTML": 0.0055}
        ],
        "links":[
            {"Github Backend": "https://github.com/suey0128/spaesthetic_backend"},
            {"Github Front": "https://github.com/suey0128/spaesthetic_frontend"},
            {"Demo": "https://youtu.be/wZnqgVad800"},
            {"Site": ""},
        ],

    },

    {
        "name": "NailCode",
        "img":{NailCode},
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
        "links":[
            {"Github": "https://github.com/suey0128/nailcode"},
            {"Demo": "https://youtu.be/TqADbEgtfPQ"},
            {"Site": ""},
        ],
    },

    {
        "name": "SkillMatch",
        "img":{SkillMatch},
        "description": "A matchmaking website for tech recruiters and tech job seekers based on conding languages",
        "tech": [

        ],
        "languages":[
            {"Ruby": 0.498},
            {"JavaScript": 0.422},
            {"CSS": 0.0685},
            {"HTML": 0.0115}
        ] ,
        "links":[
            {"Github Backend": "https://github.com/suey0128/skillmatch_backend"},
            {"Github Front": "https://github.com/suey0128/skillmatch_frontend"},
            {"Demo": "https://youtu.be/EimMbBFtxkM"},
            {"Site": "https://skillmatch.netlify.app/"},
        ],
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
            {"JavaScript": 0.738},
            {"CSS": 0.156},
            {"HTML": 0.106}
        ] ,
        "links":[
            {"Github": "https://github.com/suey0128/superteam"},
            {"Demo": ""},
            {"Site": ""},
        ],
    },

    {
        "name": "3 Days at a Time",
        "img":"",
        "description": `A website displays 3 NASA "photo of the day" at one page`,
        "tech": [
            "First project! Full of sentimental value",
            "Optimized user experience with pleasing page design with CSS.",
            "Designed “likable” content cards displaying photos and videos fetching from NASA Photo of the Day API with JavaScript and HTML."
        ],
        "languages":[
            {"JavaScript": 0.744},
            {"CSS": 0.183},
            {"HTML": 0.073}
        ] ,
        "links":[
            {"Github": "https://github.com/suey0128/3-days-at-a-time"},
            {"Demo": ""},
            {"Site": ""},
        ],
    },
];

export default projects;