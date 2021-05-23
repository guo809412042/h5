import React from "react";
import styles from "./index.less";
function Index() {
  return (
    <div className={styles.headerVideoViewWrapper}>
      <div className={styles.videoViewWrapper}>
        <div className={styles.videoWrapper}>
          <video src="../1111.mp4" controls="controls"></video>
          {/* <div className={styles.playIcon}>
            <span className="iconfont icon-bofang"></span>
          </div> */}
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
