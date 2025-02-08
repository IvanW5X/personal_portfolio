/********************************************************
 * File Name: about.jsx
 * Date: 1/3/2025
 * Description: JSX file for about section for portfolio
 *              website
 * Dependencies: React
 *               about.module.css
 *               utilitles.js
 * Author(s): Ivan Wong
 ********************************************************/

import React from "react";
import styles from "./about.module.css";
import { get_image_url } from "../../utilities";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          className={styles.skills_image}
          src={get_image_url("skills_image.png")}
          alt="Skills logo"
        />
        <ul className={styles.about_list}>
          <li className={styles.about_item}>
            <img
              className={styles.hardware_logo_image}
              src={get_image_url("hardware_logo.png")}
              alt="Computer hardware logo"
            />
            <div className={styles.about_item_text}>
              <h3>Focus on Computer Systems:</h3>
              <p>
                Studying and exploring how hardware and software interact with
                each other using C programming, design software, and hardware
                devices such as integrated circuits and microcontrollers.
              </p>
            </div>
          </li>
          <li className={styles.about_item}>
            <img
              className={styles.full_stack_image}
              src={get_image_url("full_stack_logo.png")}
              alt="Full stack logo"
            />
            <div className={styles.about_item_text}>
              <h3>Experience w/ Full Stack Development:</h3>
              <p>
                Developed GUI applications, primarily focusing on UI
                design/functionality, configuring build environments, and
                integration with business logic. Currently focusing on full
                stack development with web applications.
              </p>
            </div>
          </li>
          <li className={styles.about_item}>
            <img
              className={styles.c_image}
              src={get_image_url("c_logo.png")}
              alt="C and C++ logo"
            />
            <div className={styles.about_item_text}>
              <h3>Profficient in Low Level Programming:</h3>
              <p>
                Developed multi threaded and multi process programs, as wells as
                using sockets to run client/server programs in C and learning
                capabilities of the Linux operating systems.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
