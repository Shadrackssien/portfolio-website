import "./playerStats.css";
import favicon from "../assets/favicon.png"

function PlayerStats() {
  return (
    <>
    <div id="playerStats">
        <h1>Shadrack Essien</h1>
        <div id="playerStats__lines">
            <span id="playerStats__lines_thick"></span>
            <span id="playerStats__lines_thin"></span>
        </div>
        <h2>Front End Developer</h2>
    </div>
    <div>
      <a href="/">
      <img className="my-logo" src={favicon} alt="My Logo" />
      </a>
    </div>
    </>
    
  )
}

export default PlayerStats