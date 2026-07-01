<template>
  <div>

    <!-- Hero Section -->
    <section class="hero">

      <div class="hero-left">

        <h1>
          Medical Report
          <span>Analyzer</span>
        </h1>

        <p>
          Securely upload, analyze and manage your medical reports
          with a beautiful and easy-to-use dashboard.
        </p>

        <router-link to="/upload">
          <button>Upload Report</button>
        </router-link>

      </div>

      <div class="hero-right">

        <img
          src="https://cdn-icons-png.flaticon.com/512/2966/2966483.png"
          alt="Doctor"
        >

      </div>

    </section>

    <!-- Statistics -->

    <section class="stats">

      <div class="stat-card">

        <i class="fa-solid fa-file-medical"></i>

        <h2>250+</h2>

        <p>Reports</p>

      </div>

      <div class="stat-card">

        <i class="fa-solid fa-user-doctor"></i>

        <h2>45</h2>

        <p>Doctors</p>

      </div>

      <div class="stat-card">

        <i class="fa-solid fa-hospital"></i>

        <h2>18</h2>

        <p>Hospitals</p>

      </div>

      <div class="stat-card">

        <i class="fa-solid fa-heart-pulse"></i>

        <h2>99%</h2>

        <p>Accuracy</p>

      </div>

    </section>

    <!-- Features -->

    <section class="features">

      <div class="feature">

        <i class="fa-solid fa-upload"></i>

        <h3>Upload Reports</h3>

        <p>
          Upload PDF, Images and Medical Reports securely.
        </p>

      </div>

      <div class="feature">

        <i class="fa-solid fa-chart-line"></i>

        <h3>Analysis</h3>

        <p>
          Analyze reports quickly with organized data.
        </p>

      </div>

      <div class="feature">

        <i class="fa-solid fa-clock-rotate-left"></i>

        <h3>History</h3>

        <p>
          Access previous reports anytime.
        </p>

      </div>

    </section>

  </div>
</template>

<style scoped>

.hero{
display:flex;
justify-content:space-between;
align-items:center;
background:white;
padding:50px;
border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,.08);
margin-bottom:35px;
}

.hero-left{
width:55%;
}

.hero-left h1{
font-size:48px;
margin-bottom:20px;
color:#1E3A8A;
}

.hero-left span{
color:#2563EB;
}

.hero-left p{
font-size:18px;
line-height:1.8;
margin-bottom:25px;
color:#64748B;
}

.hero-right img{
width:280px;
}

.stats{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
margin-bottom:35px;
}

.stat-card{
background:white;
padding:25px;
text-align:center;
border-radius:18px;
box-shadow:0 8px 20px rgba(0,0,0,.08);
transition:.3s;
}

.stat-card:hover{
transform:translateY(-8px);
}

.stat-card i{
font-size:40px;
color:#2563EB;
margin-bottom:15px;
}

.stat-card h2{
font-size:34px;
}

.stat-card p{
color:#64748B;
}

.features{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:25px;
}

.feature{
background:white;
padding:30px;
border-radius:18px;
text-align:center;
box-shadow:0 8px 20px rgba(0,0,0,.08);
transition:.3s;
}

.feature:hover{
transform:translateY(-8px);
}

.feature i{
font-size:45px;
color:#2563EB;
margin-bottom:15px;
}

.feature h3{
margin-bottom:15px;
}

.feature p{
color:#64748B;
line-height:1.7;
}

@media(max-width:900px){

.hero{
flex-direction:column;
text-align:center;
}

.hero-left{
width:100%;
}

.hero-right img{
margin-top:30px;
width:200px;
}

.stats{
grid-template-columns:repeat(2,1fr);
}

.features{
grid-template-columns:1fr;
}

}

</style>