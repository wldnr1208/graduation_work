import React, { useState } from "react";
import ImageClickFlow from "./components/ImageClickFlow";
import MainScreen from "./components/MainScreen";
import Layout from "./components/layout/Layout";

const App = () => {
  const [isMainScreen, setIsMainScreen] = useState(false);
  console.log("dev용 내용");
  const handleEnterClick = () => {
    setIsMainScreen(true); // 엔터를 눌렀을 때 메인화면으로 이동
  };

  return (
    <Layout>
      {isMainScreen ? (
        <MainScreen /> // 메인 화면으로 이동
      ) : (
        <ImageClickFlow onEnter={handleEnterClick} /> // 메인 화면 진입 전
      )}
    </Layout>
  );
};

export default App;
