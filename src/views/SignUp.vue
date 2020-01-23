
      <template>
                  <div>
              <div class="section"></div>
              <main>
                <center>
                  <div class="section"></div>
            
                  <h5 class="indigo-text">Sign up</h5>
                  <div class="section"></div>
            
                  <div class="container">
                    <div class="z-depth-1  lighten-4 row" style="display: block; padding: 32px 48px 0px 48px; border: 1px solid #EEE;">
            
                      <form class="col s12" @submit.prevent="onSumbit">
                        <div class='row'>
                          <div class='col s12'>
                          </div>
                        </div>
                        
                            
                        <div class='row'>
                          <div class='input-field col s12'>
                            <input class='validate' type='email' name='email' id='email' v-model="formdata.email" />
                            <label for='email'>Enter your email</label>
                          </div>
                        </div>
            
                        <div class='row'>
                          <div class='input-field col s12'>
                            <input class='validate' type='password' name='password' id='password' v-model="formdata.password" />
                            <label for='password'>Enter your password</label>
                          </div>
                          
                                          
                        </div>
            
                        <br />
                        <center>
                          <div class='row'>
                            <button name='btn_login' class='col s12 btn waves-effect green'>create account</button>
                          </div>
                        </center>
                      </form>
                    </div>
                  </div>
                  <a href="#/signin">Already have an account , Sign in </a>
                </center>        
            
        </main>

          </div>
              


              
                
              </template>


      <script>


      export default{


      data(){

      return {

      formdata:{

      email:'',
      password:''

          }

          }

          },

      methods: {
        
        onSumbit(){

      this.$store.dispatch('signup', this.formdata)

        console.log(this.formdata)

        this.formdata=''
        }
      },


      }


      </script>

      
      <style>
      input{

        font-size:15px !important;
        font-weight:700;
      }
      </style>






