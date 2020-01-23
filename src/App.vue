<template>
  <div id="app">

    <Header/>

    <div class="container">
<router-view/>
  <Footer/>

  </div>
  </div>
</template>



<script>
import Header from "./components/Header.vue"
import Body from "./components/Body.vue"
import Footer from './components/Footer.vue'
export default {
  data() {
    return {
      
    }
  },

  components:{
    Header,
    Body,
    Footer
  }
}
</script>
<style>




body{

  background-color:rgba(231, 202, 36, 0.281);

}
</style>
