import React, { useEffect, createRef } from "react";
import BetterScroll from "better-scroll";
import MusicItem from "../MusicItem";
import styles from "./index.less";
function Index(props) {
  const { list } = props;
  const { data } = list;
  const itemContext = createRef();
  const wrapper = createRef();
  const context = createRef();
  const init = () => {
    // 最大的行高
    let maxRowH;
    let maxRowW;
    const maxRowCount = 3;
    const padding =
      parseFloat(getComputedStyle(itemContext.current)["paddingLeft"]) * 2;

    // 拿到所有的item元素
    const itemS = context.current.children;
    // 子元素的个数
    const itemCount = itemS.length;

    // 获取一个item的高度
    const item = itemS[0].children[0];
    const itemW = parseFloat(getComputedStyle(item)["width"]);
    const itemH = parseFloat(getComputedStyle(item)["height"]);

    if (itemCount > maxRowCount) {
      maxRowH = itemH * maxRowCount;
      maxRowW = Math.ceil(itemCount / maxRowCount) * itemW;
    } else {
      maxRowH = itemH * itemCount;
      maxRowW = itemW;
    }
    context.current.style.height = `${maxRowH}px`;
    context.current.style.width = `${maxRowW}px`;
    new BetterScroll(wrapper.current, {
      scrollX: true,
      click: true,
      freeScroll: true,
      eventPassthrough: 'vertical'
    });
  };
  useEffect(() => {
    init();
  });
  return (
    <div className={styles.threeRowList}>
      <header className={styles.listHeader}>
        <div className={styles.title}>{list.title}</div>
        <button className={styles.xyButton} onClick={()=>console.log(11111)}>GET</button>
      </header>
      <main className={styles.itemContext} ref={itemContext}>
        <div className={styles.wrapper} ref={wrapper}>
          <ul className={styles.context} ref={context}>
            {/* <li className={styles.item}></li> */}
            {data.length > 0
              ? data.map((item, index) => (
                  <li className={styles.item} key={index}>
                    <MusicItem itemData={item} />
                  </li>
                ))
              : ""}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default Index;
