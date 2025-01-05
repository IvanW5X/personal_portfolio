/********************************************************
 * File Name: education.jsx
 * Date: 1/4/2025
 * Description: JSX file for education section for
 *              portfolio website
 * Dependencies: React
 *               experience.module.css
 *               utilities.js
 *               courses.json
 * Author(s): Ivan Wong
 ********************************************************/


import React from "react";
import styles from "./education.module.css";
import { get_image_url } from "../../utilities";
import courses from "../../data/courses.json";


export const Education = () => {
    return (
        <section className={styles.container} id="education">
            <h2 className={styles.title}>Education</h2>
            <div className={styles.content}>
                <div className={styles.general_info}>
                    <div className={styles.school_image_container}>
                        <img
                            className={styles.osu_image}
                            src={get_image_url("osu_logo.png")}
                            alt="OSU logo"/>
                    </div>
                    <div className={styles.school_info_text}>
                        <h3>Degree:</h3>
                        <p>B.S. in Computer Science</p> <br/>
                        <h3>Specialization:</h3>
                        <p>Systems Option</p> <br/>
                        <h3>Minor:</h3>
                        <p>Mathematics</p> <br/>
                        <h3>Graduation Date:</h3>
                        <p>Expected June 2026</p> <br/>
                        <h3>Cumulative GPA:</h3>
                        <p>3.75</p>
                    </div>
                </div>
                <div className={styles.courses_container}>
                    <h3>Relavant Coursework:</h3>
                    <ul className={styles.course_list}>{
                        courses.map((course, id) => {
                            return (
                                <li key={id} className={styles.course_item}>
                                    <span className={styles.course_name}>{course.title}</span>
                                    <span className={styles.course_grade}>{course.grade}</span>
                                </li>
                            );
                        })    
                    }</ul>
                </div>
            </div>
        </section>
    );
};


// add major focus and minor
// add expected graduation date
// add gpa
// add specific courses taken
