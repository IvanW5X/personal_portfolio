/********************************************************
 * File Name: index.css
 * Date: 1/2/2025
 * Description: Utility functions file
 * Dependencies: NA
 * Author(s): Ivan Wong
 ********************************************************/


export const get_image_url = (path) => {
    return new URL(`/assets/${path}`, import.meta.url).href;
};