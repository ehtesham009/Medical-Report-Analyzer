<template>

<div class="profile">

<div class="profile-card">

<img
src="https://i.pravatar.cc/200"
>

<h2>Muhammad Ali</h2>

<p>Medical Administrator</p>

<div class="info">

<div>

<h4>Email</h4>

<p>admin@gmail.com</p>

</div>

<div>

<h4>Phone</h4>

<p>+92 3001234567</p>

</div>

<div>

<h4>Hospital</h4>

<p>City Hospital</p>

</div>

<div>

<h4>Reports Managed</h4>

<p>124</p>

</div>

</div>

<button>

Edit Profile

</button>

</div>

</div>

</template>

<style scoped>

.profile{
display:flex;
justify-content:center;
}

.profile-card{
width:600px;
background:white;
padding:40px;
border-radius:20px;
box-shadow:0 10px 25px rgba(0,0,0,.08);
text-align:center;
}

img{
width:130px;
border-radius:50%;
margin-bottom:20px;
}

.info{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
margin:30px 0;
text-align:left;
}

.info div{
background:#F8FAFC;
padding:15px;
border-radius:12px;
}

</style>