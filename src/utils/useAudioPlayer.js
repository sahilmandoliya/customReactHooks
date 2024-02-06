import { useState, useEffect } from 'react';

const useAudioPlayer = (initialUrl) => {
  const [audio, setAudio] = useState(new Audio(initialUrl));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const togglePlay = () => setIsPlaying(!isPlaying);
    audio.addEventListener('ended', () => setIsPlaying(false));
    audio.addEventListener('pause', () => setIsPlaying(false));
    audio.addEventListener('play', () => setIsPlaying(true));

    return () => {
      audio.removeEventListener('ended', () => setIsPlaying(false));
      audio.removeEventListener('pause', () => setIsPlaying(false));
      audio.removeEventListener('play', () => setIsPlaying(true));
    };
  }, [audio, isPlaying]);

  const toggle = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
  };

  const setAudioUrl = (url) => {
    audio.pause();
    setAudio(new Audio(url));
  };

  const setVolume = (volume) => {
    audio.volume = volume;
  };

  return {
    isPlaying,
    toggle,
    setAudioUrl,
    setVolume
  };
};

export default useAudioPlayer;
