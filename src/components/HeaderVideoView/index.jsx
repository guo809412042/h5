import React,{ useEffect, useState } from "react";
import styles from "./index.less";
function Index() {
  const [isPlay, setIsPlay] = useState(false);
  useEffect(() => {
    
  })
  const handleClick = () => {
    setIsPlay(!isPlay);
    const mp4 = document.getElementById('video');
    // 如果是播放状态的话
    if(isPlay){
      // 暂停
      mp4.pause();
    }else{
      // 继续播放
      mp4.play();
    }
  }
  return (
    <div className={styles.headerVideoViewWrapper}>
      <div className={styles.videoViewWrapper}>
        <div className={styles.videoWrapper} onClick={handleClick}>
          <video src="../1111.mp4" id="video"
              webkit-playsinline="true" playsInline={true} x5-playsinline=""
          ></video>
          {!isPlay ? <div className={styles.playIcon}>
            <span className="iconfont icon-bofang"></span>
          </div> : ""}
        </div>
        <div className={styles.gradientDIV}></div>
      </div>

      <div className={styles.videoTextWrapper}>
        <header className={styles.title}>asdasdasdasdasd🌞asdasdasdsd</header>
        <div className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
          consequatur saepe fugiat voluptates. Accusamus sint quia in voluptatem
          quo? Dolorem eaque cupiditate vero modi ab laboriosam corrupti cum,
          quos illum.
        </div>
      </div>
    </div>
  );
}

export default Index;
