import React from 'react';
import Grid from '@mui/material/Grid';

const ProjectItem = ({ project }) => {

    return (

    <Grid container >
        <Grid item xs={12} lg={6}>
            <img></img>
        </Grid>
        <Grid item xs={12} lg={6}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <ul>
                {project.tech.map(tech=>
                <li>{tech}</li>
                )}
            </ul>
            {/* barchart https://codepen.io/richardramsay/pen/ZKmQJv */}
            <div>
                <button>Github</button>
                <button>Visit Site</button>
                <button>Demo</button>
            </div>
        </Grid>
    </Grid>

    )
}

export default ProjectItem
