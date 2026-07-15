<template>

<div class="register-page">

    <div class="register-card">

        <div class="register-header">

            <i class="fa-solid fa-user-doctor"></i>

            <h1>Create Account</h1>

            <p>Join Medical Report Analyzer</p>

        </div>

        <form @submit.prevent="register">

            <div class="input-group">

                <label>Full Name</label>

                <input
                    type="text"
                    v-model="name"
                    placeholder="Enter your full name"
                    required
                >

            </div>

            <div class="input-group">

                <label>Email Address</label>

                <input
                    type="email"
                    v-model="email"
                    placeholder="Enter your email"
                    required
                >

            </div>

            <div class="input-group">

                <label>Password</label>

                <div class="password-box">

                    <input
                        :type="showPassword ? 'text' : 'password'"
                        v-model="password"
                        placeholder="Enter password"
                        required
                    >

                    <i
                        :class="showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
                        @click="togglePassword"
                    ></i>

                </div>

            </div>

            <div class="input-group">

                <label>Confirm Password</label>

                <div class="password-box">

                    <input
                        :type="showConfirm ? 'text' : 'password'"
                        v-model="confirmPassword"
                        placeholder="Confirm password"
                        required
                    >

                    <i
                        :class="showConfirm ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"
                        @click="toggleConfirm"
                    ></i>

                </div>

            </div>

            <button class="register-btn">

                <i class="fa-solid fa-user-plus"></i>

                Create Account

            </button>

        </form>

       

        <p class="login-link">

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

const name = ref("")
const email = ref("")
const password = ref("")
const confirmPassword = ref("")

const showPassword = ref(false)
const showConfirm = ref(false)

function togglePassword(){

showPassword.value=!showPassword.value

}

function toggleConfirm(){

showConfirm.value=!showConfirm.value

}

async function register() {

  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match.")
    return
  }

  try {

    const response = await fetch(
      'http://localhost:5000/api/auth/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          password: password.value
        })
      }
    )

    const data = await response.json()

    alert(data.message)

  } catch (error) {

    console.error(error)
    alert('Registration Failed')

  }

}

</script>

<style scoped>

.register-page{

min-height:calc(100vh - 140px);

display:flex;

justify-content:center;

align-items:center;

padding:40px;

}

.register-card{

width:100%;

max-width:500px;

background:var(--card);

padding:40px;

border-radius:25px;

box-shadow:var(--shadow);

transition:.35s;

}

.register-header{

text-align:center;

margin-bottom:30px;

}

.register-header i{

font-size:60px;

color:var(--primary);

margin-bottom:15px;

}

.register-header h1{

font-size:32px;

color:var(--text);

margin-bottom:10px;

}

.register-header p{

color:var(--text-light);

}

.input-group{

margin-bottom:20px;

}

.input-group label{

display:block;

margin-bottom:8px;

font-weight:600;

color:var(--text);

}

.password-box{

position:relative;

}

.password-box input{

padding-right:45px;

}

.password-box i{

position:absolute;

right:15px;

top:50%;

transform:translateY(-50%);

cursor:pointer;

color:var(--text-light);

}

.register-btn{

width:100%;

padding:14px;

background:var(--primary);

color:white;

border-radius:12px;

font-size:16px;

font-weight:600;

}

.register-btn i{

margin-right:8px;

}

.divider{

margin:30px 0;

position:relative;

text-align:center;

}

.divider::before{

content:"";

position:absolute;

left:0;

right:0;

top:50%;

height:1px;

background:var(--border);

}

.divider span{

background:var(--card);

padding:0 15px;

position:relative;

color:var(--text-light);

}

.google-btn{

width:100%;

padding:14px;

background:#DB4437;

color:white;

border-radius:12px;

font-size:15px;

}

.google-btn i{

margin-right:8px;

}

.login-link{

text-align:center;

margin-top:25px;

color:var(--text-light);

}

.login-link a{

color:var(--primary);

font-weight:600;

}

@media(max-width:600px){

.register-card{

padding:25px;

}

.register-header h1{

font-size:26px;

}

}

</style>