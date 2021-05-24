import React, { useEffect, createRef } from "react";
import BetterScroll from "better-scroll";
import SmallBaseItem from "../SmallBaseItem";
import TransotionItem from "../TransotionItem";
import styles from "./index.less";

function Index(props) {
  const { list, type } = props;
  const itemContext = createRef();
  const wrapper = createRef();
  const context = createRef();
  const init = () => {
    // 容器的最大高度
    let maxContextH;
    // 做多行数
    const maxRowCount = 2;
    const itemS = context.current.children;
    const itemCount = itemS.length;
    // 每一个item 的高 宽
    const itemW = parseFloat(getComputedStyle(itemS[0])["width"]);
    const itemH = parseFloat(getComputedStyle(itemS[0])["height"]);

    const maxContextW = Math.ceil(itemCount / 2);
    // 容器基本的宽度
    const pageW = itemW * 3;

    if (itemCount > 6) {
      maxContextH = itemH * maxRowCount;
      context.current.style.height = `${maxContextH}px`;
      context.current.style.width = `${itemW * maxContextW}px`;
    } else {
      context.current.style.height = `${itemH}px`;
      if (itemCount > 3) {
        context.current.style.height = `${itemH * 2}px`;
      }
      context.current.style.width = `${pageW}px`;
    }
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
    <div className={styles.threeColList}>
      <header className={styles.listHeader}>
        <div className={styles.title}>{list.title}</div>
        <button className={styles.xyButton} onClick={()=>console.log(11111)}>GET</button>
      </header>
      <main className={styles.itemContext} ref={itemContext}>
        <div id="10" className={styles.wrapper} ref={wrapper}>
          <ul className={styles.context} ref={context}>
            {list.data.length
              ? list.data.map((item, index) => (
                  <li key={index}>
                    {type === 1 ? (
                      <TransotionItem itemData={item} />
                    ) : (
                      <SmallBaseItem itemData={item} />
                    )}
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
