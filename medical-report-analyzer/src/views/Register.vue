<template>

<div class="register">

<div class="card">

<h2>Create Account</h2>

<form @submit.prevent="register">

<input
v-model="name"
placeholder="Full Name"
>

<input
v-model="email"
type="email"
placeholder="Email"
>

<input
v-model="password"
type="password"
placeholder="Password"
>

<button>

Register

</button>

</form>

</div>

</div>

</template>

<script setup>

import {ref} from "vue"

const name=ref("")
const email=ref("")
const password=ref("")

function register(){

alert("Registration Successful")

}

</script>

<style scoped>

.register{
display:flex;
justify-content:center;
align-items:center;
height:80vh;
}

.card{
background:white;
padding:40px;
width:450px;
border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,.08);
}

.card h2{
margin-bottom:20px;
color:#2563EB;
}

button{
width:100%;
}

</style>