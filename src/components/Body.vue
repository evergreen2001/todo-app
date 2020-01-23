<template>
    <!-- body  -->
													<div class="container">
													<h3 class="text-center">Enter your task for today</h3>
													<form class="col s12" >
															<div class='row'>
																	<div class='col s12'>
																	</div>
															</div>
															<div class='row'>
																					<div class='input-field col m12 s12'>
																							<input v-model="newTodo" class='validate' type='text' name='name' id='name' />
																							<label for='name'>Enter your Todo-today</label>
																					</div>
                   	<button class="btn green col m12 waves-effect" @click.enter="addTodo()">Submit</button>

																			</div>

                   </form>
                     <transition-group name="fade">

<div class="card-panel black white-text" v-for="(todo, index) in todos" :key="index" >

{{todo.task}} <i class="material-icons right" @click="removeTodo">cancel </i>
</div>
                     </transition-group>




													</div>
</template>

<script>
export default {
    data() {
     return {
name:'',
age:'',
idForTodo:3,
      newTodo:'',
     todos:[ 
      // { id:1, task:'eat food',done:false
    //   },
    // { id:2, task:'eat Sea food',done:false

    //   }
      
      
      ]
      
     }
    },

    methods: {
     addTodo(){

      if (this.newTodo.length == ''){
return 'add test'
       this.newTodo=''
      }
      this.todos.push({
id:this.idForTodo,
task:this.newTodo,
done:false

      })


      this.newTodo =""
      this.idForTodo++
  
     },
     removeTodo(index){
this.todos.splice(index,1)}
,
// swapName(){

// return this.$store.state.name = this.name;
// return this.$store.state.age = this.age


//     }

}
}
</script>

<style scoped>
i:hover{

      color:red;
}

i {

cursor:pointer
}
.fade.enter{

 opacity:0;
}
.fade.enter.active{

transition:opacity 3s;
transform:rotatey(10deg)


}
</style>