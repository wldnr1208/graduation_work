import React, { useState } from "react";
import ImageClickFlow from "./components/ImageClickFlow";
import MainScreen from "./components/MainScreen";
import EnterScreen from "./components/EnterScreen";

const App = () => {
  const [isMainScreen, setIsMainScreen] = useState(false);
  const [isEnterScreen, setIsEnterScreen] = useState(false);

  const handleEnterClick = () => {
    setIsEnterScreen(true);
  };

  if (isMainScreen) {
    return <MainScreen />;
  }

  if (isEnterScreen) {
    return <EnterScreen onEnter={() => setIsMainScreen(true)} />;
  }

  return <ImageClickFlow onEnter={handleEnterClick} />;
};

export default App;
