import { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'

const AudioPlayer = () => {
  const [audio] = useState(new Audio('../../../src/assets/bgm/bg-music.mp3'))
  const [isPlaying, setIsPlaying] = useState(false)

  const playAudio = () => {
    audio.loop = true
    audio.play()
    setIsPlaying(true)
  }

  const stopAudio = () => {
    audio.pause()
    setIsPlaying(false)
  }

  useEffect(() => {
    stopAudio()
  }, [])

  return (
    <Button
      variant='text'
      onClick={isPlaying ? stopAudio : playAudio}
    >
      {isPlaying ? <VolumeUpIcon/> : <VolumeOffIcon/>}
    </Button>
  )
}

export default AudioPlayer