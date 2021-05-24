import React,{useEffect,useState} from "react";
import styles from "./index.less";
function Index(props) {
  const { itemData } = props;
  const [timer, setTimer] = useState()
  const [isPlay, setIsPlay] = useState(false)
  useEffect(()=>{

  },[]);
  const handleClick = () => {
    const mp3 = document.getElementById('mp3')
    
    console.log(mp3.duration)
    setIsPlay(!isPlay)
    // 如果是播放状态的话
    if(isPlay){
      // 暂停
      mp3.pause();
    }else{
      // 继续播放
      mp3.play();
    }

  }
  return (
    <div className={styles.musicItemWrapper}>
      <div className={styles.itemLeftView}>
        <div className={styles.audioWrapper}>
          <audio src="../41813.mp3" id="mp3" controls style={{display:"none"}}></audio>
          <div className={styles.play} onClick={handleClick}>
            <span className={isPlay ? "iconfont icon-zanting" : "iconfont icon-bofang"}></span>
          </div>
        </div>
      </div>
      <div className={styles.itemRightView}>
        <div className={styles.title}>1111111</div>
        <div className={styles.text}>asdasd · {timer}</div>
      </div>
    </div>
  );
}
// icon-zanting
export default Index;
