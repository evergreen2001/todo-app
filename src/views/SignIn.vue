
<template>
             <div>
        <main>
          <center>
        
      
            <h5 class="indigo-text">Sign In</h5>
        <div class="section"><h4>Login into your account</h4></div>
            <div class="container">
              <div class="z-depth-1 grey lighten-4 row" style="display: block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">
      
                <form class="col s12" method="" @submit.prevent="onSubmit">
                  
                
                    
                  
                  
                      
                  <div class='row'>
                    <div class='input-field col s12'>
                      <input class='validate' type='email' name='email' id='email' v-model="user.email"/>
                      <label for='email'>Enter your email</label>
                    </div>
                  </div>
      
                  <div class='row'>
                    <div class='input-field col s12'>
                      <input class='validate' type='password' name='password' id='password' v-model="user.password" />
                      <label for='password'>Enter your password</label>
                    </div>                 
                  </div>
                
                  <br />
                  
                    <div class='row'>
                      <button type='submit' name='btn_login' class='col s12 btn waves-effect green'>Login</button></div>
                  
                 
</form>
                
              </div></div>
              
            
          
            <a href="#/signup">Create account</a>
        
       
  </center>
        </main>
    </div>
	</template>


<script>
export default{
data(){

  
return {
users:[],
user:{
  email:'',
  password:''

}
}

}
,
methods: {

onSubmit(){


this.$store.dispatch('signin', this.user)

this.user=''

}


}
}








</script>










