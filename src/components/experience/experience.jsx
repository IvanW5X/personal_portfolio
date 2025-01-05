/********************************************************
 * File Name: 
 * Date: 1/3/2025
 * Description: 
 * Dependencies: 
 * Author(s): Ivan Wong
 ********************************************************/


import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { get_image_url } from "../../utilities";
import styles from "./experience.module.css";


export const Experience = () => {
    return (
    <section id="experience" className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill, id) => {
                    return (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skill_image_container}>
                                <img src={get_image_url(skill.image_src)} alt={skill.title}/>
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    );
                })
            }</div>
            <ul className={styles.history}>{
                history.map((history_item, id) => {
                    return (
                        <li key={id} className={styles.history_item}>
                            <div className={styles.history_item_details}>
                                <h3>{`${history_item.role}, ${history_item.organization}`}</h3>
                                <p>{`${history_item.start_date} - ${history_item.end_date}`}</p>
                                <ul>{history_item.experiences.map((experience, id) => {
                                    return (
                                        <li key={id}>{experience}</li>
                                    );
                                })}</ul>
                            </div>
                        </li>
                    );
                })
            }</ul>
        </div>
    </section>
    );
}