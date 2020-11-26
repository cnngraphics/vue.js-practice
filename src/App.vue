<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Header/>
    <b-container class="bv-example-row">
      <b-row>
        <b-col sm="6" offset="3">
           <QuestionBot/>
        </b-col>
        
      </b-row>
    </b-container>
   
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import QuestionBot from './components/QuestionBot.vue'

  export default {
    name: 'App',
    components: {
      Header,
      QuestionBot,
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
