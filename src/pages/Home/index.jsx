import React,{ useState } from "react";
import HeaderBar from "../../components/HeaderBar";
import HeaderVideoView from "../../components/HeaderVideoView";
import TowColList from "../../components/TowColList";
import ThreeColList from "../../components/ThreeColList";
import ThreeRowList from "../../components/ThreeRowList";
import WaterfallLits from "../../components/WaterfallLits";
import ModelView from '../../components/ModelView';
import GETButtonView from '../../components/GETButtonView';
function Index() {
  const [isShowModel, setIsShowModel] = useState(false);
  const [modelData, setModelData] = useState();
  const list = {
    title: "Theme",
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
  const list1 = {
    title: "Music",
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
  const list2 = {
    title: "Sticker",
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
  const list3 = {
    title: "Text",
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
  const list4 = {
    title: "Transition",
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
  const list5 = {
    title: "Filter",
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
  const list6 = {
    title: "FX",
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
  const list7 = {
    title: "Template",
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
  const setShowModelView = (data) => {
    setIsShowModel(!isShowModel);
    setModelData(data);
  }
  return (
    <div style={{ position: "relative" }}>
      <HeaderBar/>
      <HeaderVideoView />
      <TowColList list={list} showIcon={true} setShowModelView={setShowModelView}/>
      <ThreeRowList list={list1} setShowModelView={setShowModelView}/>
      <ThreeColList list={list2} setShowModelView={setShowModelView}/>
      <ThreeColList list={list3} setShowModelView={setShowModelView}/>
      <ThreeColList list={list4} type={1} setShowModelView={setShowModelView}/>
      <TowColList list={list5} showIcon={false} setShowModelView={setShowModelView}/>
      <ThreeColList list={list6}  setShowModelView={setShowModelView}/>
      <WaterfallLits list={list7} />
      {isShowModel ? <ModelView setIsShowModel={setIsShowModel} data={modelData}/> : ''}
      <GETButtonView />
    </div>
  );
}

export default Index;
