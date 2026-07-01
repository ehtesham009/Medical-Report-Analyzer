<template>
  <aside class="sidebar">

    <div class="sidebar-title">
      <h2>Menu</h2>
    </div>

    <nav>

      <router-link to="/" exact-active-class="active">
        <i class="fa-solid fa-house"></i>
        <span>Home</span>
      </router-link>

      <router-link to="/dashboard" active-class="active">
        <i class="fa-solid fa-chart-pie"></i>
        <span>Dashboard</span>
      </router-link>

      <router-link to="/upload" active-class="active">
        <i class="fa-solid fa-cloud-arrow-up"></i>
        <span>Upload</span>
      </router-link>

      <router-link to="/analysis" active-class="active">
        <i class="fa-solid fa-microscope"></i>
        <span>Analysis</span>
      </router-link>

      <router-link to="/history" active-class="active">
        <i class="fa-solid fa-file-waveform"></i>
        <span>History</span>
      </router-link>

      <router-link to="/profile" active-class="active">
        <i class="fa-solid fa-user"></i>
        <span>Profile</span>
      </router-link>

    </nav>

    <div class="logout">

      <router-link to="/login">
        <i class="fa-solid fa-right-from-bracket"></i>
        <span>Logout</span>
      </router-link>

    </div>

  </aside>
</template>

<style scoped>

.sidebar{
    position:fixed;
    top:70px;
    left:0;
    width:250px;
    height:calc(100vh - 70px);
    background:#1E3A8A;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:25px 18px;
    box-shadow:4px 0 15px rgba(0,0,0,.08);
}

.sidebar-title{
    color:white;
    margin-bottom:20px;
    text-align:center;
}

.sidebar-title h2{
    font-size:22px;
    font-weight:600;
}

nav{
    display:flex;
    flex-direction:column;
    gap:10px;
}

nav a,
.logout a{
    display:flex;
    align-items:center;
    gap:15px;
    color:white;
    text-decoration:none;
    padding:14px 18px;
    border-radius:12px;
    transition:.3s;
    font-size:16px;
    font-weight:500;
}

nav a i,
.logout a i{
    width:22px;
    font-size:18px;
    text-align:center;
}

nav a:hover,
.logout a:hover{
    background:#2563EB;
    transform:translateX(5px);
}

.active{
    background:#2563EB;
}

.logout{
    border-top:1px solid rgba(255,255,255,.2);
    padding-top:20px;
}

@media(max-width:900px){

.sidebar{
    width:220px;
}

}

@media(max-width:768px){

.sidebar{
    display:none;
}

}

</style>