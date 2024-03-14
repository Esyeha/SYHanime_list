"use client"

import { useState } from "react"
import Youtube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVidioPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "250"
    }

    const Player = () => {
      return (
            <div className="fixed bottom-2 right-2">
                <button
                onClick={handleVidioPlayer}
                className="text-color-primary float-right bg-color-secondary px-3 mb-1">X</button>
                <Youtube
                videoId={youtubeId} 
                onReady={(event) => event.target.pauseVideo()}
                opts={option}
                />
            </div> 
      )
    }

    const ButtonOpenTrailer = () => {
        return (
            <button onClick={handleVidioPlayer} className="fixed bottom-3 right-3 w-32 bg-color-accent text-color-dark rounded text-xl shadow-xl hover:text-color-primary transition-all">
            tonton trailer
        </button>
        )
    }

    return isOpen ? <Player /> : <ButtonOpenTrailer />
   
}

export default VideoPlayer