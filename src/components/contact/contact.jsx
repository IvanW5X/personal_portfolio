/********************************************************
 * File Name: 
 * Date: 1/5/2025
 * Description: 
 * Dependencies: 
 * Author(s): Ivan Wong
 ********************************************************/


import React from "react";
import styles from "./contact.module.css";


export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <a href="mailto:ivanwong169@gmail.com">ivanwong169@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <a href="https://www.linkedin.com/in/ivan-wong-43561b342/">linkedin.com/ivan-wong</a>
                </li>
                <li className={styles.link}>
                    <a href="https://github.com/IvanW5X">github.com/ivanw5x</a>
                </li>
            </ul>
        </footer>
    );
};
