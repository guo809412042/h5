import React from "react";
import styles from "./index.less";
import BetterScroll from "better-scroll";
import HeaderBar from "../../components/HeaderBar";
import HeaderVideoView from "../../components/HeaderVideoView";
import TowColList from "../../components/TowColList";
import ThreeColList from "../../components/ThreeColList";
import ThreeRowList from "../../components/ThreeRowList";
import WaterfallLits from "../../components/WaterfallLits";

function Index() {
  const list = {
    title: "asdasdas",
    data: [
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
      {
        url:
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3870964477,3746012709&fm=26&gp=0.jpg",
        title: "a11111",
      },
    ],
  };
  return (
    <div style={{ position: "relative" }}>
      <HeaderBar />
      <HeaderVideoView />
      <TowColList list={list} showIcon={true} />
      <ThreeColList list={list} />
      <ThreeRowList list={list} />
      <ThreeColList list={list} type={1} />
      <WaterfallLits list={list} />
    </div>
  );
}

export default Index;
