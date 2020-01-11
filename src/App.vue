<template>
  <div id="app">

    <Header/>

    <div class="container">
<router-view/>
  </div>
  </div>
</template>



<script>
import Header from "./components/Header.vue"
import Body from "./components/Body.vue"
export default {
  data() {
    return {
      
    }
  },

  components:{
    Header,
    Body
  }
}
</script>
<style>

</style>
