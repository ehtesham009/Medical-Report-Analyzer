<template>
  <div id="app">

    <Navbar />

    <div class="app-layout">

      <Sidebar v-if="showSidebar" />

      <main
        class="main-content"
        :class="{ 'full-width': !showSidebar }"
      >

        <transition
          name="page"
          mode="out-in"
        >
          <router-view />
        </transition>

        <Footer />

      </main>

    </div>

  </div>
</template>

<script setup>
import { computed } from "vue"
import { useRoute } from "vue-router"

import Navbar from "./components/Navbar.vue"
import Sidebar from "./components/Sidebar.vue"
import Footer from "./components/Footer.vue"

import { useAuth } from "./composables/useAuth"

const route = useRoute()
const { isAuthenticated } = useAuth()

const showSidebar = computed(() => {

  const hiddenRoutes = [
    "/",
    "/login",
    "/register"
  ]

  return (
    isAuthenticated.value &&
    !hiddenRoutes.includes(route.path)
  )

})
</script>

<style>

/* =========================
   LIGHT THEME
========================= */

:root{

  --bg:#F1F5F9;
  --card:#FFFFFF;
  --card-hover:#E2E8F0;

  --text:#0F172A;
  --text-light:#475569;

  --border:#CBD5E1;

  --sidebar:#FFFFFF;
  --navbar:#FFFFFF;

  --primary:#2563EB;
  --shadow:0 8px 25px rgba(0,0,0,.08);

}

/* =========================
   DARK THEME
========================= */

body.dark{

  --bg:#0F172A;
  --card:#1E293B;
  --card-hover:#334155;

  --text:#F8FAFC;
  --text-light:#CBD5E1;

  --border:#334155;

  --sidebar:#1E293B;
  --navbar:#1E293B;

  --primary:#2563EB;
  --shadow:0 8px 25px rgba(0,0,0,.25);

}

/* =========================
   GLOBAL
========================= */

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

body{
  background:var(--bg);
  color:var(--text);
  transition:.3s;
  font-family:Poppins,sans-serif;
}

#app{
  min-height:100vh;
  background:var(--bg);
  color:var(--text);
}

.app-layout{
  display:flex;
  width:100%;
}

.main-content{
  flex:1;
  margin-left:250px;
  margin-top:70px;
  min-height:calc(100vh - 70px);
  padding:30px;
  background:var(--bg);
  transition:.3s;
}

.full-width{
  margin-left:0;
}

/* Cards */

.card,
.table-card,
.upload-card,
.analysis-card,
.recommendation-card,
.summary-card,
.stat-card,
.profile-card,
.info-card{
  background:var(--card)!important;
  color:var(--text)!important;
  box-shadow:var(--shadow);
}

/* Inputs */

input,
textarea,
select{
  background:var(--card-hover)!important;
  color:var(--text)!important;
  border:1px solid var(--border)!important;
}

input::placeholder,
textarea::placeholder{
  color:var(--text-light);
}

/* Tables */

table{
  color:var(--text);
}

th{
  background:var(--card-hover);
  color:var(--text);
}

td{
  border-bottom:1px solid var(--border);
}

/* Text */

h1,
h2,
h3,
h4,
h5,
h6{
  color:var(--text);
}

p,
span,
label{
  color:var(--text-light);
}

/* Page Animation */

.page-enter-active,
.page-leave-active{
  transition:all .3s ease;
}

.page-enter-from{
  opacity:0;
  transform:translateY(15px);
}

.page-enter-to{
  opacity:1;
  transform:translateY(0);
}

.page-leave-from{
  opacity:1;
  transform:translateY(0);
}

.page-leave-to{
  opacity:0;
  transform:translateY(-15px);
}

@media(max-width:900px){

  .main-content{
    margin-left:0;
    padding:20px;
  }

}

</style>