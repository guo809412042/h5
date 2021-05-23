import React from "react";
import styles from "./index.less";
function Index(props) {
  const { itemData } = props;
  return (
    <div className={styles.musicItemWrapper}>
      <div className={styles.itemLeftView}>
        <div className={styles.audioWrapper}>
          <audio src=""></audio>
          <div className={styles.play}>
            <span className="iconfont icon-bofang"></span>
          </div>
        </div>
      </div>
      <div className={styles.itemRightView}>
        <div className={styles.title}>1111111</div>
        <div className={styles.text}>asdasd · 04:34</div>
      </div>
    </div>
  );
}

export default Index;
