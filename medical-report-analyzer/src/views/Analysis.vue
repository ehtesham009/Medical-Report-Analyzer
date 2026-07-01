<template>

<div class="analysis">

<h1>Medical Analysis</h1>

<div class="cards">

<div class="analysis-card">

<i class="fa-solid fa-heart-pulse"></i>

<h3>Blood Pressure</h3>

<h2>Normal</h2>

</div>

<div class="analysis-card">

<i class="fa-solid fa-droplet"></i>

<h3>Blood Sugar</h3>

<h2>110 mg/dL</h2>

</div>

<div class="analysis-card">

<i class="fa-solid fa-heart"></i>

<h3>Heart Rate</h3>

<h2>78 BPM</h2>

</div>

<div class="analysis-card">

<i class="fa-solid fa-lungs"></i>

<h3>Oxygen</h3>

<h2>98%</h2>

</div>

</div>

</div>

</template>

<style scoped>

.analysis h1{
margin-bottom:30px;
color:#1E3A8A;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:25px;
}

.analysis-card{
background:white;
padding:30px;
text-align:center;
border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,.08);
transition:.3s;
}

.analysis-card:hover{
transform:translateY(-8px);
}

.analysis-card i{
font-size:45px;
color:#2563EB;
margin-bottom:20px;
}

.analysis-card h3{
margin-bottom:10px;
}

.analysis-card h2{
color:#22C55E;
}

</style>