import React, { useEffect, createRef } from "react";
import styles from "./index.less";
function Index(props) {
  const { setIsShowModel, data } = props;

  const share = createRef();

  const init = () => {
    const WinW = window.innerHeight;
    share.current.style.height = `${WinW}px`;
  }
  useEffect(() => {
    // 取消默认事件
    share.current.ontouchmove = e => {
      e.preventDefault();
    }
    init();
  },[]);
  const close = () => {
    setIsShowModel(false)
  };
  return <div ref={share} className={styles.shareWrapper} onClick={close}>
    <div className={styles.swiperWrapper}>
      <ul>
        <li>adasd</li>
        <li>adasd</li>
        <li>adasd</li>
        <li>adasd</li>
        <li>adasd</li>
        <li>adasd</li>
      </ul>
    </div>
  </div>;
}

export default Index;
