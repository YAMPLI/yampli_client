import React, { createContext, useContext, useRef } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const playerRef = useRef(null);

  return (
    <PlayerContext.Provider value={playerRef}>
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayerRef = () => {
  const context = useContext(PlayerContext);
  if (context === undefined) {
    throw new Error('usePlayerRef must be ..');
  }
  return context;
};
