import "./Music.scss";
import MusicImage from "./music-3.jpg"
export const MusicApp = () => {
  return (
    <div className="Music-app-container">
      <div className="music-left-container"></div>
      <div className="music-right-container"></div>

      <div className="music-container-z-index1">
        <div className="z-index-box1"></div>
        <div className="z-index-box2"></div>
      </div>

      <div className="z-index2-container">
        <div className="z-index2-box1" ></div>
        <div className="z-index2-box2"></div>
      </div>
      <div className="z-index3-container">
        <div className="top-container">
          <div className="top-image-tag">
            <img src={MusicImage} alt="" />
          </div>
          <div className="top-music-details">
            {
              MusicDetails.map((_, i) => {
                return <div key={i} style={i===0?{fontSize:"40px"}:{fontSize:"16px"}}>{_}</div>
              })
            }
          </div>
          <div className="top-imp-links">
            {
              ImportLinks.map((_, i) => {
                return <div key={i}>{_}</div>
              })
            }
          </div>
        </div>

        <div className="bottom-container">
          <div className="progress-bar">
            <input type="range" />
            <div className="druations">
              <div>0:00</div>
              <div>3:34</div>
            </div>
          </div>

          <div className="media-buttons">
            {
              buttons.map((_) => {
                return <button>{_}</button>
              })
            }
          </div>
          <div className="dashbar"></div>
        </div>
      </div>
    </div>
  )
}


const MusicDetails = ["🎼", "Now Playing", "Song Name"]

const ImportLinks = ["❤", "+", "💌"]

const buttons = ["◀", "⏸", "▶"]