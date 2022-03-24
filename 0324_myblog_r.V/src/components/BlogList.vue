<template>
  <div class="BlogList">
      <div class="BlogContainer">
          <div class="title-container">
            <h3>{{data.title}} <span class="Heart" @click="plusNum">❤</span> {{likeCnt}} </h3> 
          </div>
          <div>
            <span>{{data.date}}</span>  
            <div>{{data.do}}</div>
          </div>
          <hr>
      </div>
  </div>
</template>

<script>
export default {
    name:"BlogList",
    props:["data"],
    data(){
        return{
            likeCnt:0,
        }
    },
    methods:{
        plusNum(){
            this.likeCnt++;
        },
    }
}
</script>

<style>
    /* .title-container{
        display: flex;
        align-content: center;
    } */
    .Heart{
        cursor:pointer;
        margin-left: 20px;
    }

</style>