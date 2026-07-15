<template>
  <div class="login-page">

    <div class="login-card">

      <div class="login-header">
        <i class="fa-solid fa-heart-pulse"></i>
        <h1>Welcome Back</h1>
        <p>Login to Medical Report Analyzer</p>
      </div>

      <form @submit.prevent="loginUser">

        <div class="input-group">
          <label>Email Address</label>

          <input
            type="email"
            v-model="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="input-group">

          <label>Password</label>

          <div class="password-box">

            <input
              :type="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="Enter your password"
              required
            />

            <i
              :class="
                showPassword
                  ? 'fa-solid fa-eye-slash'
                  : 'fa-solid fa-eye'
              "
              @click="togglePassword"
            ></i>

          </div>

        </div>

        <div class="remember">

          <label class="remember-label">

            <input
              type="checkbox"
              v-model="remember"
            />

            <span>Remember Me</span>

          </label>

          <router-link to="/">
            Forgot Password?
          </router-link>

        </div>

        <button
          type="submit"
          class="login-btn"
        >
          <i class="fa-solid fa-right-to-bracket"></i>
          Login
        </button>

      </form>

      <p class="register-link">

        Don't have an account?

        <router-link to="/register">
          Register
        </router-link>

      </p>

    </div>

  </div>
</template>

<script setup>

import { ref } from "vue"
import { useRouter } from "vue-router"
import { useAuth } from "../composables/useAuth"

const router = useRouter()

const { login } = useAuth()

const email = ref("")
const password = ref("")
const remember = ref(false)
const showPassword = ref(false)

function togglePassword() {

  showPassword.value =
    !showPassword.value

}

async function loginUser() {

  try {

    const response = await fetch(
      "http://localhost:5000/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value
        })
      }
    )

    const data =
      await response.json()

    if (response.ok) {

      localStorage.setItem(
        "token",
        data.token || ""
      )

      localStorage.setItem(
        "user",
        JSON.stringify(data.user)
      )

      localStorage.setItem(
        "userEmail",
        data.user.email
      )

      window.dispatchEvent(
        new CustomEvent(
          "profile-image-updated"
        )
      )

      window.dispatchEvent(
        new CustomEvent(
          "user-changed"
        )
      )

      login()

      alert(
        "Login Successful"
      )

      router.push(
        "/dashboard"
      )

    } else {

      alert(
        data.message ||
        "Login Failed"
      )

    }

  } catch (error) {

    console.error(error)

    alert(
      "Server Error"
    )

  }

}

</script>

<style scoped>

.login-page{
min-height:100vh;
display:flex;
justify-content:center;
align-items:center;
padding:40px 20px;
background:var(--bg);
}

.login-card{
width:100%;
max-width:450px;
background:var(--card);
color:var(--text);
padding:40px;
border-radius:20px;
box-shadow:var(--shadow);
transition:.3s;
}

.login-header{
text-align:center;
margin-bottom:30px;
}

.login-header i{
font-size:60px;
color:var(--primary);
margin-bottom:15px;
}

.login-header h1{
margin-bottom:10px;
font-size:32px;
color:var(--text);
}

.login-header p{
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

.input-group input{
width:100%;
padding:12px;
border:1px solid var(--border);
border-radius:10px;
box-sizing:border-box;
background:var(--card-hover);
color:var(--text);
}

.input-group input::placeholder{
color:var(--text-light);
}

.password-box{
position:relative;
}

.password-box i{
position:absolute;
right:15px;
top:50%;
transform:translateY(-50%);
cursor:pointer;
color:var(--text-light);
}

.remember{
display:flex;
justify-content:space-between;
align-items:center;
margin:20px 0;
width:100%;
}

.remember-label{
display:flex;
align-items:center;
gap:10px;
cursor:pointer;
color:var(--text-light);
font-size:14px;
user-select:none;
}

.remember-label input{
width:18px;
height:18px;
margin:0;
cursor:pointer;
accent-color:var(--primary);
}

.remember-label span{
color:var(--text-light);
line-height:1;
}

.remember a{
color:var(--primary);
text-decoration:none;
font-size:14px;
}

.remember a:hover{
text-decoration:underline;
}

.login-btn{
width:100%;
padding:14px;
border:none;
border-radius:10px;
background:var(--primary);
color:white;
cursor:pointer;
font-size:16px;
}

.login-btn:hover{
opacity:.9;
}

.divider{
text-align:center;
margin:25px 0;
color:var(--text-light);
}

.google-btn{
width:100%;
padding:14px;
border:none;
border-radius:10px;
background:#db4437;
color:white;
cursor:pointer;
}

.register-link{
text-align:center;
margin-top:20px;
color:var(--text-light);
}

.register-link a{
color:var(--primary);
text-decoration:none;
font-weight:600;
}

@media(max-width:600px){

.login-card{
padding:25px;
}

}

@media(max-width:500px){

.remember{
flex-direction:column;
align-items:flex-start;
gap:12px;
}

}

</style>