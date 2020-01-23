    import Vue from 'vue'
    import Vuex from 'vuex'
    import router from '../router/index'

    Vue.use(Vuex)
    // const fbAuth ='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';



    const FbAuth = "https://www.googleapis.com/identitytoolkit/v3/relyingparty";
    const FbApiKey = "AIzaSyDHbrQ2eaRY3BlcwZBL7he9Ntqh1QwRE1g"




    export default new Vuex.Store({
      state: {
    email:'',
    token:'', 
    refresh:''
      },

      mutations: {

        auth(state, data){
    state.email=data.email;
    state.token=data.idToken;
    state.refresh=data.refreshToken
        }
    ,

    logout(state){

      state.email=null;
      state.token=null;
      state.refresh=null;

      localStorage.removeItem('token');
      localStorage.removeItem('refresh');



      router.push('/')

    


        } 
      },
      actions: {

      
        signin({ commit }, payload){

          Vue.http.post(`${FbAuth}/verifyPassword?key=${FbApiKey}`,{

            ...payload,
            returnSecureToken:true
          })
          .then(res=>{

        return  res.json()
          })
          .then(data=>{


            commit('auth', data)

            localStorage.setItem('token', data.idToken)

            localStorage.setItem('refresh', data.refreshToken)
            console.log(data)
          })


      
      
          .catch(error=>{
            console.log(error)
          })
        }
        ,

        signup({ commit }, payload){

          Vue.http.post(`${FbAuth}/signupNewUser?key=${FbApiKey}`,{

            ...payload,
            returnSecureToken:true
          })
          .then(res=>{

        return  res.json()
          })
          .then(data=>{


            commit('auth', data)

            localStorage.setItem('token', data.idToken)

            localStorage.setItem('refresh', data.refreshToken)
            console.log(data)
          })


      
      
          .catch(error=>{
            console.log(error)
          })
        }
      },
      modules: {
      }
    })
