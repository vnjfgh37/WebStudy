// import logo from './logo.svg';
import './App.css';
import BlogList from './BlogList';
import {useState} from "react"

function App() {

  // arr1:{title:"오늘은 React 공부", date:"3월 22일 작성", do:"clone-coding 연습하기"},
  //     arr2:{title:"오늘은 Vue 복습", date:"3월 23일 작성", do:"Vue 문법 복습하기"},
  //     arr3:{title:"오늘은 Linux 명령어 복습", date:"3월 24일 작성", do:"서버 명령어 복습하기"},

  let [data1] = useState({ title: "오늘은 React 공부", date: "3월 22일 작성", do: "clone-coding 연습하기" });
  let [data2] = useState({ title: "오늘은 Vue 복습", date: "3월 23일 작성", do: "Vue 문법 복습하기" });
  let [data3] = useState({ title: "오늘은 Linux 명령어 복습", date: "3월 24일 작성", do: "서버 명령어 복습하기" });

  return (
    <div className="App">
      <div className="blog-nav">My Blog</div>
      <BlogList data={data1}></BlogList>
      <BlogList data={data2}></BlogList>
      <BlogList data={data3}></BlogList>
    </div>
  );
}

export default App;
