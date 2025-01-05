/********************************************************
 * File Name: nav_bar.jsx
 * Date: 1/2/2025
 * Description: JSX file for nav bar for portfolio
 *              website
 * Dependencies: React
 *               nav_bar.module.css
 *               utilitiles.js
 * Author(s): Ivan Wong
 ********************************************************/


import React, { useState } from "react";
import styles from "./nav_bar.module.css";
import { get_image_url } from "../../utilities.js";


export const NavBar = () => {
    const [menu_open, set_menu_open] = useState(false);

    return (
    <nav className={styles.nav_bar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>

            {/* Expand menu button images */}
            <img
                className={styles.menu_button}
                src={menu_open
                    ? get_image_url("x_icon.png")
                    : get_image_url("menu_icon.png")
                }
                alt="Menu Button"
                onClick={() => set_menu_open(!menu_open)}
            />
            <ul className={`${styles.menu_items} ${menu_open && styles.menu_open}`}
                onClick={() => {
                    set_menu_open(false)
                }}>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};
