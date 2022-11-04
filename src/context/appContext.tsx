import * as React from "react";
import modalInfos, { ModalInfo } from "../data/modalInfo";
type AppState = { showModal: boolean; modalInfo: ModalInfo | null };

type AppContext = {
  state: AppState;
  showModal: (key: string) => void;
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
    modalInfo: null
  });

  const showModal = (key: string) => {
    const modalInfo = modalInfos.find((mi) => mi.keywords.includes(key));
    console.log(key, modalInfo);
    if (modalInfo) {
      setAppState({ showModal: true, modalInfo: modalInfo });
    }
  };

  const hideModal = () => setAppState({ showModal: false, modalInfo: null });

  return (
    <appContext.Provider value={{ state: appState, showModal, hideModal }}>
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;
