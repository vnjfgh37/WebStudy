<template>
  <div class="home">
    <BlogList :data="arr1"></BlogList>
    <BlogList :data="arr2"></BlogList>
    <BlogList :data="arr3"></BlogList>
  </div>
</template>

<script>
// @ is an alias to /src
import BlogList from "../components/BlogList.vue";
export default {
  name: 'Home',
  data(){
    return{
      arr1:{title:"오늘은 React 공부", date:"3월 22일 작성", do:"clone-coding 연습하기"},
      arr2:{title:"오늘은 Vue 복습", date:"3월 23일 작성", do:"Vue 문법 복습하기"},
      arr3:{title:"오늘은 Linux 명령어 복습", date:"3월 24일 작성", do:"서버 명령어 복습하기"},
    }
  },
  components: {
   BlogList,
  }
}
</script>
