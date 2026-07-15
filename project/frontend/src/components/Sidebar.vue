<template>

<aside class="sidebar">

    <div class="sidebar-top">
        <h3>Medical Analyzer</h3>
    </div>

    <nav class="sidebar-menu">

        <router-link
            to="/dashboard"
            class="menu-item"
        >
            <i class="fa-solid fa-chart-line"></i>
            <span>Dashboard</span>
        </router-link>

        <router-link
            to="/upload"
            class="menu-item"
        >
            <i class="fa-solid fa-cloud-arrow-up"></i>
            <span>Upload Report</span>
        </router-link>

        <router-link
            to="/analysis"
            class="menu-item"
        >
            <i class="fa-solid fa-microscope"></i>
            <span>AI Analysis</span>
        </router-link>

        <router-link
            to="/history"
            class="menu-item"
        >
            <i class="fa-solid fa-clock-rotate-left"></i>
            <span>History</span>
        </router-link>

        <router-link
            to="/profile"
            class="menu-item"
        >
            <i class="fa-solid fa-user"></i>
            <span>Profile</span>
        </router-link>

        <div
            class="menu-item logout"
            @click="logoutUser"
        >
            <i class="fa-solid fa-right-from-bracket"></i>
            <span>Logout</span>
        </div>

    </nav>

</aside>

</template>

<script setup>
import { useRouter } from "vue-router"
import { useAuth } from "../composables/useAuth"

const router = useRouter()

const { logout } = useAuth()

function logoutUser() {

  logout()

  localStorage.removeItem("token")
  localStorage.removeItem("user")

  window.dispatchEvent(
    new Event("user-changed")
  )

  router.push("/login")

}
</script>

<style scoped>

.sidebar{
position:fixed;
top:70px;
left:0;
width:250px;
height:calc(100vh - 70px);
background:var(--sidebar);
padding:25px 18px;
overflow-y:auto;
box-shadow:var(--shadow);
border-right:1px solid var(--border);
z-index:999;
}

.sidebar-top{
margin-bottom:35px;
text-align:center;
}

.sidebar-top h3{
color:var(--text);
font-size:22px;
font-weight:700;
}

.sidebar-menu{
display:flex;
flex-direction:column;
gap:10px;
}

.menu-item{
display:flex;
align-items:center;
gap:15px;
padding:15px;
border-radius:12px;
color:var(--text);
font-size:15px;
font-weight:500;
text-decoration:none;
cursor:pointer;
transition:.3s;
}

.menu-item i{
width:24px;
text-align:center;
font-size:18px;
}

.menu-item:hover{
background:var(--card-hover);
transform:translateX(5px);
}

.router-link-active{
background:var(--primary);
color:white;
}

.logout{
margin-top:30px;
background:#EF4444;
color:white;
}

.logout:hover{
background:#DC2626;
transform:none;
}

@media(max-width:900px){

.sidebar{
width:220px;
}

}

</style>