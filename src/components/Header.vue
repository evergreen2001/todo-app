<template>

<div>

									<div class="navbar-fixed black" >
													<nav>
														<div class="nav-wrapper green">
									<router-link to="/">						<a class="brand-logo">Todo App</a></router-link>
															<a href="#" data-target="mobile-demo" class="sidenav-trigger right"><i class="material-icons ">menu</i></a>
															<ul class="right hide-on-med-and-down">
																<li><router-link to="/signup">Sign up</router-link></li>
																<li><router-link to="/signin">Sign in</router-link></li>
<li>
																<div @click="signout" :style="{'display':'inline'}">Logout</div>
</li>	<li><router-link to="/">Home</router-link></li>
													</ul>
														</div>
													</nav>
													</div>
													<ul class="sidenav" id="mobile-demo">
														<li><router-link to="/signup">Sign up</router-link></li>
																<li><router-link to="/signin">Sign in</router-link></li>
<li>
																<div @click="signout" :style="{'display':'inline'}">Logout</div>
</li>	<li><router-link to="/">Home</router-link></li>			



														</ul>



</div>

</template>

<script>
export default {
 
 data() {
	 return {
		 
	 }
 },

 methods: {
	 signout(){

		this.$store.commit('logout')
	 }
 },
 


}
</script>

<style scoped>

</style>