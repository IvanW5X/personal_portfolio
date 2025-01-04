/********************************************************
 * File Name: App.jsx
 * Date: 1/2/2025
 * Description: JS file for main website display
 * Dependencies: 
 * Author(s): Ivan Wong
 ********************************************************/


import styles from "./App.module.css"
import { NavBar } from "./components/nav_bar/nav_bar" 
import { Profile } from "./components/profile/profile"
import { About } from "./components/about/about";


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Profile />
      <About />
    </div>
  );
};

export default App;
