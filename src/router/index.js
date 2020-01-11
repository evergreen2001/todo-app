import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Body from "../components/Body.vue"
export const routes =[


  {path:'/signin', component:SignIn},
  {path:'/signup', component:SignUp},
  {path:'/', component:Body}

]