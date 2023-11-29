import { createContext, useContext } from "react";
import audio1 from "../audio/addUpdateClickSoundEffect.wav";
import audio2 from "../audio/filterChangeSoundEffect.wav";
import audio3 from "../audio/trashSoundEffect.wav";
import audio4 from "../audio/toggleSoundEffect.wav";
import audio5 from "../audio/editSoundEffect.wav";

const playSoundContext = createContext();

const GlobalplaySoundProvider = ({ children }) => {
  function playSound(audio) {
    const sound = new Audio(audio);
    return () => sound.play();
  }

  const onAddClickSound = playSound(audio1);
  const onFilterChangeSound = playSound(audio2);
  const onDeleteSound = playSound(audio3);
  const onToggleSound = playSound(audio4);
  const onEditSound = playSound(audio5);

  return (
    <playSoundContext.Provider
      value={{
        onAddClickSound,
        onFilterChangeSound,
        onDeleteSound,
        onToggleSound,
        onEditSound,
      }}
    >
      {children}
    </playSoundContext.Provider>
  );
};

export const usePlaySound = () => useContext(playSoundContext);
export default GlobalplaySoundProvider;
