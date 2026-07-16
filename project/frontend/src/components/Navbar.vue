<template>
  <header class="navbar">

    <!-- Logo -->
    <router-link to="/" class="logo">
      <i class="fa-solid fa-heart-pulse"></i>
      <span>Medical Analyzer</span>
    </router-link>

    <!-- Search -->
    <div
      class="search-box"
      v-if="isAuthenticated"
    >
      <i class="fa-solid fa-magnifying-glass"></i>

      <input
        type="text"
        placeholder="Search reports..."
      />
    </div>

    <div class="right-section">

      <!-- Guest -->
      <template v-if="!isAuthenticated">

        <router-link to="/login">
          <button class="login-btn">
            Login
          </button>
        </router-link>

        <router-link to="/register">
          <button class="register-btn">
            Register
          </button>
        </router-link>

      </template>

      <!-- Logged In -->
      <template v-else>

        <!-- Theme -->
        <button
          class="theme-btn"
          @click="toggleTheme"
        >
          <i
            :class="
              darkMode
                ? 'fa-solid fa-sun'
                : 'fa-solid fa-moon'
            "
          ></i>
        </button>

        <!-- Notification -->
        <div class="notification-wrapper">

          <button
            class="notification-btn"
            @click="toggleNotification"
          >
            <i class="fa-solid fa-bell"></i>

            <span
              v-if="notifications.length"
              class="badge"
            >
              {{ notifications.length }}
            </span>
          </button>

          <transition name="fade">

            <div
              v-if="showNotification"
              class="notification-menu"
            >

              <div class="notification-header">
                Notifications
              </div>

              <div
                v-if="notifications.length"
              >

                <div
                  class="notification-item"
                  v-for="(item,index) in notifications"
                  :key="index"
                >

                  <i
                    :class="item.icon"
                  ></i>

                  <div>

                    <h4>{{ item.title }}</h4>

                    <p>{{ item.message }}</p>

                    <small>{{ item.time }}</small>

                  </div>

                </div>

              </div>

              <div
                v-else
                class="empty"
              >
                No Notifications
              </div>

            </div>

          </transition>

        </div>

        <!-- Profile -->
        <router-link
          to="/profile"
          class="profile"
        >

          <img
            :src="profileImage"
            alt="profile"
          />

          <div>

            <h4>{{ userName }}</h4>

            <p>{{ userRole }}</p>

          </div>

        </router-link>

        <!-- Logout -->
        <button
          class="logout-btn"
          @click="logoutUser"
        >
          <i class="fa-solid fa-right-from-bracket"></i>

          Logout
        </button>

      </template>

    </div>

  </header>
</template>

<script setup>
import {
  ref,
  computed,
  onMounted,
  onUnmounted
} from "vue"

import { useRouter } from "vue-router"
import { useAuth } from "../composables/useAuth"

const router = useRouter()

const {
  isAuthenticated,
  logout
} = useAuth()

const darkMode = ref(false)

const currentUser = ref(null)

const profileImage = ref("https://i.pravatar.cc/100")

const showNotification = ref(false)

const notifications = ref([
  {
    title: "Report Ready",
    message: "Blood Report has been analyzed.",
    time: "2 min ago",
    icon: "fa-solid fa-file-circle-check"
  },
  {
    title: "Welcome",
    message: "Welcome to Medical Analyzer.",
    time: "Today",
    icon: "fa-solid fa-heart-pulse"
  },
  {
    title: "Reminder",
    message: "Upload your next report.",
    time: "Yesterday",
    icon: "fa-solid fa-bell"
  }
])

const userName = computed(() => {
  return currentUser.value?.name || "User"
})

const userRole = computed(() => {
  return currentUser.value?.role || "Patient"
})

function updateUserData(){

  const user =
    JSON.parse(
      localStorage.getItem("user") || "null"
    )

  currentUser.value = user

  if(user?.email){

    profileImage.value =
      localStorage.getItem(
        `profileImage_${user.email}`
      ) ||
      "https://i.pravatar.cc/100"

  }

}

function toggleNotification(){

  showNotification.value =
    !showNotification.value

}

function closeNotification(e){

  if(
    !e.target.closest(".notification-wrapper")
  ){
    showNotification.value = false
  }

}

onMounted(()=>{

  if(
    localStorage.getItem("theme")==="dark"
  ){
    darkMode.value=true
    document.body.classList.add("dark")
  }

  updateUserData()

  window.addEventListener(
    "user-changed",
    updateUserData
  )

  window.addEventListener(
    "profile-image-updated",
    updateUserData
  )

  document.addEventListener(
    "click",
    closeNotification
  )

})

onUnmounted(()=>{

  document.removeEventListener(
    "click",
    closeNotification
  )

})

function toggleTheme(){

  darkMode.value=!darkMode.value

  if(darkMode.value){

    document.body.classList.add("dark")
    localStorage.setItem("theme","dark")

  }else{

    document.body.classList.remove("dark")
    localStorage.setItem("theme","light")

  }

}

function logoutUser(){

  logout()

  localStorage.removeItem("token")
  localStorage.removeItem("user")

  router.push("/login")

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
background:var(--navbar);
border-bottom:1px solid var(--border);
box-shadow:var(--shadow);
z-index:1000;
}

.logo{
display:flex;
align-items:center;
gap:10px;
font-size:24px;
font-weight:700;
color:var(--text);
text-decoration:none;
}

.logo i{
color:var(--primary);
font-size:28px;
}

.search-box{
display:flex;
align-items:center;
background:var(--card-hover);
padding:0 15px;
height:42px;
width:320px;
border-radius:30px;
}

.search-box input{
background:transparent;
border:none;
outline:none;
margin-left:10px;
color:var(--text);
width:100%;
}

.right-section{
display:flex;
align-items:center;
gap:15px;
}

.theme-btn{
width:42px;
height:42px;
border:none;
border-radius:50%;
background:var(--primary);
color:white;
cursor:pointer;
}

.notification-wrapper{
position:relative;
}

.notification-btn{
width:42px;
height:42px;
border:none;
border-radius:50%;
background:var(--card-hover);
color:var(--text);
cursor:pointer;
position:relative;
}

.badge{
position:absolute;
top:-5px;
right:-5px;
background:#ef4444;
color:#fff;
width:18px;
height:18px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:10px;
font-weight:600;
}

.notification-menu{
position:absolute;
top:55px;
right:0;
width:330px;
background:var(--card);
border-radius:15px;
box-shadow:var(--shadow);
overflow:hidden;
z-index:9999;
}

.notification-header{
padding:15px;
font-weight:700;
border-bottom:1px solid var(--border);
color:var(--text);
}

.notification-item{
display:flex;
gap:15px;
padding:15px;
cursor:pointer;
transition:.3s;
}

.notification-item:hover{
background:var(--card-hover);
}

.notification-item i{
font-size:22px;
color:var(--primary);
margin-top:5px;
}

.notification-item h4{
margin:0;
font-size:14px;
color:var(--text);
}

.notification-item p{
margin:4px 0;
font-size:13px;
color:var(--text-light);
}

.notification-item small{
color:gray;
}

.empty{
padding:30px;
text-align:center;
color:gray;
}

.profile{
display:flex;
align-items:center;
gap:10px;
text-decoration:none;
}

.profile img{
width:45px;
height:45px;
border-radius:50%;
border:2px solid var(--primary);
}

.profile h4{
margin:0;
font-size:14px;
color:var(--text);
}

.profile p{
margin:0;
font-size:12px;
color:var(--text-light);
}

.logout-btn{
background:#ef4444;
color:white;
border:none;
padding:10px 18px;
border-radius:10px;
cursor:pointer;
}

.login-btn{
background:white;
border:2px solid var(--primary);
color:var(--primary);
padding:10px 18px;
border-radius:10px;
cursor:pointer;
}

.register-btn{
background:var(--primary);
color:white;
border:none;
padding:10px 18px;
border-radius:10px;
cursor:pointer;
}

.fade-enter-active,
.fade-leave-active{
transition:.25s;
}

.fade-enter-from,
.fade-leave-to{
opacity:0;
transform:translateY(-10px);
}

</style>