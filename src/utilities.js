/********************************************************
 * File Name: utilities.js
 * Date: 1/2/2025
 * Description: Utility functions JS file
 * Dependencies: NA
 * Author(s): Ivan Wong
 ********************************************************/


export const get_image_url = (path) => {
    return new URL(`/public/assets/${path}`, import.meta.url).href;
};
