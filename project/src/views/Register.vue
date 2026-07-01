<template>
  <div class="auth-container">

    <div class="auth-card">

      <h2>Create Account</h2>

      <form @submit.prevent="register">

        <input
          type="text"
          v-model="name"
          placeholder="Full Name"
          required
        />

        <input
          type="email"
          v-model="email"
          placeholder="Email"
          required
        />

        <input
          type="password"
          v-model="password"
          placeholder="Password"
          required
        />

        <button type="submit">
          Register
        </button>

      </form>

      <p class="bottom-text">
        Already have an account?
        <router-link to="/login">
          Login
        </router-link>
      </p>

    </div>

  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const name = ref("")
const email = ref("")
const password = ref("")

function register() {

  const user = {
    name: name.value,
    email: email.value,
    password: password.value
  }

  localStorage.setItem("user", JSON.stringify(user))

  alert("Registration Successful!")

  router.push("/login")
}
</script>

<style scoped>

.auth-container{
display:flex;
justify-content:center;
align-items:center;
height:90vh;
}

.auth-card{
width:400px;
background:white;
padding:35px;
border-radius:15px;
box-shadow:0 10px 25px rgba(0,0,0,.1);
}

h2{
text-align:center;
margin-bottom:20px;
color:#2563EB;
}

input{
width:100%;
padding:12px;
margin-bottom:15px;
border:1px solid #ddd;
border-radius:8px;
}

button{
width:100%;
padding:12px;
border:none;
background:#2563EB;
color:white;
border-radius:8px;
cursor:pointer;
}

button:hover{
background:#1D4ED8;
}

.bottom-text{
margin-top:15px;
text-align:center;
}

.bottom-text a{
color:#2563EB;
text-decoration:none;
font-weight:bold;
}

</style>