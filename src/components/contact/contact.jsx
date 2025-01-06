/********************************************************
 * File Name: contact.jsx
 * Date: 1/5/2025
 * Description: JSX file for contact
 * Dependencies: React
 *               contact/module.css
 *               utitlities.js
 * Author(s): Ivan Wong
 ********************************************************/


import React from "react";
import styles from "./contact.module.css";
import { get_image_url } from "../../utilities.js";


export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={get_image_url("mail_icon.png")} alt="Mail icon" />
                    <a href="mailto:ivanwong169@gmail.com">ivanwong169@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={get_image_url("linkedin_icon.png")} alt="Mail icon" />
                    <a href="https://www.linkedin.com/in/ivan-wong-43561b342/">linkedin.com/ivan-wong</a>
                </li>
                <li className={styles.link}>
                    <img src={get_image_url("git_icon.png")} alt="Mail icon" />
                    <a href="https://github.com/IvanW5X">github.com/ivanw5x</a>
                </li>
            </ul>
        </footer>
    );
};
