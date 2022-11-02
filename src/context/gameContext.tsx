import * as React from "react";

type GameSettings = { maxStats: number; maxEffort: number };

type GameContext = {
  settings: GameSettings;
};

export const gameContext = React.createContext<GameContext | undefined>(
  undefined
);

export const useGameContext = () => {
  const gameContextI = React.useContext(gameContext);
  if (!gameContextI)
    throw new Error(
      "No gameContext.Provider found when calling useGameContext."
    );
  return gameContextI;
};

const GameProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [gameSettings, setGameSettings] = React.useState<GameSettings>({
    maxEffort: 4,
    maxStats: 6
  });

  return (
    <gameContext.Provider value={{ settings: gameSettings }}>
      {children}
    </gameContext.Provider>
  );
};

export default GameProvider;
