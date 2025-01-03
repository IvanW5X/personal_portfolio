/********************************************************
 * File Name: App.jsx
 * Date: 1/2/2025
 * Description: JS file for main website display
 * Dependencies: 
 * Author(s): Ivan Wong
 ********************************************************/


import styles from "./App.module.css"
import { NavBar} from "./components/nav_bar/nav_bar" 


function App() {
  return (
    <div className={styles.App}>
      <NavBar />
    </div>
  )
}

export default App
