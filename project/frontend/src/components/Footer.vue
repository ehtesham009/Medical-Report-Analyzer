<template>

<footer class="footer">

    <div class="footer-left">

        <i class="fa-solid fa-heart-pulse"></i>

        <span>Medical Report Analyzer</span>

    </div>

    <div class="footer-center">

        © {{ currentYear }} All Rights Reserved.

    </div>

    <div class="footer-right">

        <a href="#">
            <i class="fa-brands fa-facebook-f"></i>
        </a>

        <a href="#">
            <i class="fa-brands fa-instagram"></i>
        </a>

        <a href="#">
            <i class="fa-brands fa-linkedin-in"></i>
        </a>

        <a href="#">
            <i class="fa-brands fa-github"></i>
        </a>

    </div>

</footer>

</template>

<script setup>

const currentYear = new Date().getFullYear()

</script>

<style scoped>

.footer{

margin-top:40px;

padding:18px 30px;

background:var(--card);

border-top:1px solid var(--border);

border-radius:18px 18px 0 0;

display:flex;

justify-content:space-between;

align-items:center;

box-shadow:var(--shadow);

transition:.35s;

}

.footer-left{

display:flex;

align-items:center;

gap:10px;

font-size:16px;

font-weight:600;

color:var(--text);

}

.footer-left i{

font-size:22px;

color:var(--primary);

}

.footer-center{

font-size:14px;

color:var(--text-light);

}

.footer-right{

display:flex;

align-items:center;

gap:12px;

}

.footer-right a{

width:38px;

height:38px;

border-radius:50%;

display:flex;

justify-content:center;

align-items:center;

background:var(--primary);

color:#fff;

font-size:15px;

transition:.3s;

}

.footer-right a:hover{

transform:translateY(-4px);

opacity:.9;

}

@media(max-width:768px){

.footer{

flex-direction:column;

gap:18px;

text-align:center;

padding:20px;

}

.footer-right{

justify-content:center;

}

}

</style>