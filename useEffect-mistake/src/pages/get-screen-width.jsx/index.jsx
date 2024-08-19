import { useState, useEffect } from "react";

const Index = () => {
  const [screenWidth, setScreenWidth] = useState(null);
  const [delay, setDelay] = useState(null);

  useEffect(() => {
    // 定义一个函数来更新屏幕宽度
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // 组件加载时，获取初始的屏幕宽度
    handleResize();

    // 在窗口调整大小时，更新屏幕宽度
    window.addEventListener("resize", handleResize);

    // 在组件卸载时，清理事件监听器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDelay(true);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  console.log("screenWidth", screenWidth);
  if (screenWidth === null || delay === null) {
    return <div>Loading...</div>;
  }
  return <div>{screenWidth && delay && `Screen width: ${screenWidth}px`}</div>;
};

export default Index;
