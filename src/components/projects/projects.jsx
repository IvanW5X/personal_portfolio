/********************************************************
 * File Name: 
 * Date: 1/4/2025
 * Description: 
 * Dependencies: 
 * Author(s): Ivan Wong
 ********************************************************/


import React from "react";
import styles from "./projects.module.css";
import projects from "../../data/projects.json";
import { get_image_url } from "../../utilities";
import { ProjectCard } from "./project_card";


export const Projects = () => {
    return (
        <section id="projects" className={styles.container}>
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>{
                projects.map((project, id) => {
                    return <ProjectCard key={id} project={project}/>
                })
            }</div>
        </section>
    );
};
