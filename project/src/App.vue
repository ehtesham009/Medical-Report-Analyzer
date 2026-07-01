<template>
  <div id="app">

    <!-- Navbar -->
    <Navbar />

    <!-- Main Layout -->
    <div class="app-layout">

      <!-- Sidebar -->
      <Sidebar />

      <!-- Main Content -->
      <main class="main-content">

        <transition
          name="page"
          mode="out-in"
        >
          <router-view />
        </transition>

        <!-- Footer -->
        <Footer />

      </main>

    </div>

  </div>
</template>

<script setup>

import Navbar from "./components/Navbar.vue"
import Sidebar from "./components/Sidebar.vue"
import Footer from "./components/Footer.vue"

</script>

<style>

#app{
    min-height:100vh;
    background:#F4F7FC;
}

/* Layout */

.app-layout{
    display:flex;
}

/* Main Content */

.main-content{
    flex:1;
    margin-left:250px;
    margin-top:70px;
    padding:30px;
    min-height:calc(100vh - 70px);
    transition:.3s;
}

/* Page Animation */

.page-enter-active,
.page-leave-active{
    transition:all .35s ease;
}

.page-enter-from{
    opacity:0;
    transform:translateY(20px);
}

.page-leave-to{
    opacity:0;
    transform:translateY(-20px);
}

/* Mobile */

@media(max-width:900px){

.main-content{
    margin-left:0;
    padding:20px;
}

}

</style>