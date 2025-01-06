/********************************************************
 * File Name: project_card.jsx
 * Date: 1/5/2025
 * Description: JSX file for project card component
 * Dependencies: React
 *               project_card.module.css
 *               utilties.css
 * Author(s): Ivan Wong
 ********************************************************/


import React from "react";
import styles from "./project_card.module.css";
import { get_image_url } from "../../utilities";


export const ProjectCard = ({project: {title, image_src, description, skills, demo, source}}) => {
    return (
        <div className={styles.container}>
            <img
                src={get_image_url(image_src)}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <ul className={styles.skills}>{
                skills.map((skill, id) => {
                    return (
                        <li key={id} className={styles.skill}>{skill}</li>
                    );
                })
            }</ul>
            <div className={styles.links}>
                <a href={source} className={styles.link}>Source</a>
            </div>
        </div>  
    );
};
