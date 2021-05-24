import React, { createRef, useEffect } from 'react';
import styles from './index.less';

function Index() {
  const getButton = createRef();
  const init = () => {
    const { current: targetDOM } = getButton;
    let targetH = parseFloat(getComputedStyle(targetDOM)['height']);
    let winW = window.innerHeight;
    targetDOM.style.top = `${winW - targetH}px`;

    // 页面发送滚动的时候 也要重新计算一下
    window.onscroll = function() {
      targetH = parseFloat(getComputedStyle(targetDOM)['height']);
      winW = window.innerHeight;
      targetDOM.style.top = `${winW - targetH}px`;
    }
  };
  useEffect(() => {
    init();
  })
  return (
    <div className={styles.wrapper} ref={getButton}>
      <button className={styles.button}>GET</button>
    </div>
  )
}

export default Index;
