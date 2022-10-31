import * as React from "react";
import { ModalInfos } from "../data/modalInfo";

type AppState = { showModal: boolean; modalInfoKey: string | null };

type AppContext = {
  state: AppState;
  showModal: (key: keyof ModalInfos) => void;
  hideModal: () => void;
};

export const appContext = React.createContext<AppContext | undefined>(
  undefined
);

export const useAppContext = () => {
  const appContextI = React.useContext(appContext);
  if (!appContextI)
    throw new Error("No appContext.Provider found when calling useAppContext.");
  return appContextI;
};

const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [appState, setAppState] = React.useState<AppState>({
    showModal: false,
    modalInfoKey: null
  });

  const showModal = (key: keyof ModalInfos) => {
    setAppState({ showModal: true, modalInfoKey: key });
  };

  const hideModal = () => setAppState({ showModal: false, modalInfoKey: null });

  return (
    <appContext.Provider value={{ state: appState, showModal, hideModal }}>
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;
