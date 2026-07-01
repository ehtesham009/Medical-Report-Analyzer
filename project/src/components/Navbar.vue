<template>
  <header class="navbar">

    <!-- Logo -->
    <div class="logo">
      <i class="fa-solid fa-heart-pulse"></i>
      <span>Medical Analyzer</span>
    </div>

    <!-- Search -->
    <div class="search-box">

      <i class="fa-solid fa-magnifying-glass"></i>

      <input
        type="text"
        placeholder="Search reports..."
      >

    </div>

    <!-- Right Side -->
    <div class="right-section">

      <!-- Dark Mode -->

      <button
        class="theme-btn"
        @click="toggleTheme"
      >

        <i
          :class="darkMode
          ? 'fa-solid fa-sun'
          : 'fa-solid fa-moon'"
        ></i>

      </button>

      <!-- Notification -->

      <div class="notification">

        <i class="fa-solid fa-bell"></i>

        <span>5</span>

      </div>

      <!-- Profile -->

      <div class="profile">

        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
        >

        <div>

          <h4>Muhammad Ali</h4>

          <p>Medical Admin</p>

        </div>

      </div>

    </div>

  </header>
</template>

<script setup>

import {ref,onMounted} from "vue"

const darkMode=ref(false)

onMounted(()=>{

const saved=localStorage.getItem("theme")

if(saved==="dark"){

darkMode.value=true

document.body.classList.add("dark")

}

})

function toggleTheme(){

darkMode.value=!darkMode.value

if(darkMode.value){

document.body.classList.add("dark")

localStorage.setItem("theme","dark")

}

else{

document.body.classList.remove("dark")

localStorage.setItem("theme","light")

}

}

</script>

<style scoped>

.navbar{

position:fixed;

top:0;

left:0;

right:0;

height:70px;

display:flex;

align-items:center;

justify-content:space-between;

padding:0 30px;

background:rgba(255,255,255,.9);

backdrop-filter:blur(15px);

box-shadow:0 5px 20px rgba(0,0,0,.08);

z-index:1000;

}

/* Logo */

.logo{

display:flex;

align-items:center;

gap:10px;

font-size:24px;

font-weight:700;

color:#2563EB;

}

.logo i{

font-size:28px;

}

/* Search */

.search-box{

display:flex;

align-items:center;

background:#F1F5F9;

padding:0 15px;

height:42px;

border-radius:30px;

width:320px;

}

.search-box input{

border:none;

outline:none;

background:transparent;

margin-left:10px;

width:100%;

font-size:14px;

}

.search-box i{

color:#64748B;

}

/* Right */

.right-section{

display:flex;

align-items:center;

gap:20px;

}

/* Theme */

.theme-btn{

width:42px;

height:42px;

border:none;

border-radius:50%;

background:#2563EB;

color:white;

font-size:17px;

cursor:pointer;

transition:.3s;

}

.theme-btn:hover{

transform:rotate(180deg);

}

/* Notification */

.notification{

position:relative;

font-size:22px;

cursor:pointer;

color:#334155;

}

.notification span{

position:absolute;

top:-8px;

right:-10px;

width:18px;

height:18px;

background:red;

color:white;

font-size:11px;

border-radius:50%;

display:flex;

align-items:center;

justify-content:center;

}

/* Profile */

.profile{

display:flex;

align-items:center;

gap:12px;

}

.profile img{

width:45px;

height:45px;

border-radius:50%;

border:2px solid #2563EB;

}

.profile h4{

font-size:15px;

margin:0;

}

.profile p{

font-size:12px;

color:#64748B;

margin:0;

}

/* Dark Mode */

:global(body.dark){

background:#0F172A;

color:white;

}

:global(body.dark .navbar){

background:#1E293B;

}

:global(body.dark .search-box){

background:#334155;

}

:global(body.dark .search-box input){

color:white;

}

:global(body.dark .notification){

color:white;

}

/* Responsive */

@media(max-width:900px){

.search-box{

display:none;

}

.profile div{

display:none;

}

.navbar{

padding:0 20px;

}

}

</style>