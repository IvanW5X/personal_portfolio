/********************************************************
 * File Name: 
 * Date: 1/3/2025
 * Description: 
 * Dependencies: 
 * Author(s): Ivan Wong
 ********************************************************/


import React from "react";
import { get_image_url } from "../../utilities";
import styles from "./profile.module.css";


export const Profile = () => {
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ivan!</h1>
            <p className={styles.description}>I'm a third year Computer Science Student at Oregon State 
               University. Welcome to my portfolio! If you'd like more information, please reach out!
            </p>
            <a href="mailto:ivanwong169@gmail.com" className={styles.contact_button}>Contact Me!</a>
        </div>
        <img
            className={styles.profile_img}
            src={get_image_url("self_photo.jpg")}
            alt="Profile image of me"
        />
        <div className={styles.top_blur}/>
        <div className={styles.bottom_blur}/>
    </section>
    );
};