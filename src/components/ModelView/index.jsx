import React, { useEffect, createRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"

// Import Swiper styles
import styles from "./index.less";


function Index(props) {
  const { setIsShowModel, data } = props;
  const [page, setPage] = useState('');
  const share = createRef();
  const swiperWrapper = createRef();
  const swiper = createRef();
  // 初始化 设置弹出层的高度
  const init = () => {
    const WinW = window.innerHeight;
    share.current.style.height = `${WinW}px`;

    // 获取要展示数据的数量
    const itemCount = data.data.length;
    // 设置初始要显示的值
    setPage(`1/${itemCount}`)
  }
  useEffect(() => {
    // 取消触摸默认事件
    swiperWrapper.current.ontouchstart = e => {
      e.preventDefault();
    }
    // 取消默认事件
    share.current.ontouchmove = e => {
      e.preventDefault();
    }
    init();
  },[]);
  // 点击空白区域的回调
  const close = () => {
    setIsShowModel(false);
  };
  // 当轮播图滑动的回调
  const onSlideChange = (e) => {
    const currentIndex = e.realIndex + 1;
    setPage(`${currentIndex}/${data.data.length}`)
  }
  return (
    <div ref={share} className={styles.shareWrapper} onClick={close}>
      <div className={styles.swiperWrapper} ref={swiperWrapper}>
        <Swiper 
          spaceBetween={30} 
          ref={swiper}
          onSlideChange={(e) => onSlideChange(e)}
        >
          {data.data.length > 0 ? data.data.map((item, index) => (
            <SwiperSlide key={index} className={styles.item}>Slide {index}</SwiperSlide>
          )) : "" }
        </Swiper>
        <div className={styles.footer}>
          <button className={styles.button}>GET</button>
          <h2 className={styles.pageIndex}>{page}</h2>
        </div>

      </div>


    </div> );
}

export default Index;
