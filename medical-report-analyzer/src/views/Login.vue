<template>
  <div class="auth-container">

    <div class="auth-card">

      <div class="left">
        <i class="fa-solid fa-user-doctor"></i>
        <h2>Medical Report Analyzer</h2>
        <p>
          Welcome Back! Login to manage your reports securely.
        </p>
      </div>

      <div class="right">

        <h2>Login</h2>

        <form @submit.prevent="login">

          <input
            type="email"
            placeholder="Email"
            v-model="email"
          >

          <input
            type="password"
            placeholder="Password"
            v-model="password"
          >

          <button>
            Login
          </button>

        </form>

      </div>

    </div>

  </div>
</template>

<script setup>

import {ref} from "vue"
import {useRouter} from "vue-router"

const router=useRouter()

const email=ref("")
const password=ref("")

function login(){

if(email.value===""||password.value===""){
alert("Please fill all fields")
return
}

router.push("/dashboard")

}

</script>

<style scoped>

.auth-container{
display:flex;
justify-content:center;
align-items:center;
height:85vh;
}

.auth-card{
display:grid;
grid-template-columns:1fr 1fr;
width:900px;
background:white;
border-radius:20px;
overflow:hidden;
box-shadow:0 10px 30px rgba(0,0,0,.1);
}

.left{
background:#2563EB;
color:white;
padding:60px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
}

.left i{
font-size:70px;
margin-bottom:20px;
}

.right{
padding:50px;
}

.right h2{
margin-bottom:20px;
color:#1E3A8A;
}

button{
width:100%;
margin-top:15px;
}

@media(max-width:900px){

.auth-card{
grid-template-columns:1fr;
}

.left{
display:none;
}

}

</style>