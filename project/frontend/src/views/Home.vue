<template>

<div class="home">

    <!-- Hero Section -->

    <section class="hero">

        <div class="hero-content">

            <h1>
                AI Powered
                <span>Medical Report Analyzer</span>
            </h1>

            <p>

                Analyze blood tests, X-rays, MRI and laboratory reports
                using Artificial Intelligence. Fast, secure and accurate
                medical insights.

            </p>

            <div class="hero-buttons">

                <router-link to="/upload">

                    <button class="primary-btn">

                        Upload Report

                    </button>

                </router-link>

                <router-link to="/dashboard">

                    <button class="secondary-btn">

                        View Dashboard

                    </button>

                </router-link>

            </div>

        </div>

        <div class="hero-image">

            <i class="fa-solid fa-heart-pulse"></i>

        </div>

    </section>

    <!-- Features -->

    <section class="features">

        <div class="feature card">

            <i class="fa-solid fa-brain"></i>

            <h3>AI Diagnosis</h3>

            <p>

                Intelligent report interpretation using modern AI algorithms.

            </p>

        </div>

        <div class="feature card">

            <i class="fa-solid fa-file-waveform"></i>

            <h3>Medical Reports</h3>

            <p>

                Upload reports in seconds and receive organized results.

            </p>

        </div>

        <div class="feature card">

            <i class="fa-solid fa-shield-heart"></i>

            <h3>Secure Data</h3>

            <p>

                Patient information is protected with secure storage.

            </p>

        </div>

        <div class="feature card">

            <i class="fa-solid fa-chart-line"></i>

            <h3>Analytics</h3>

            <p>

                Track reports, history and medical insights visually.

            </p>

        </div>

    </section>

    <!-- About -->

    <section class="about card">

        <h2>Why Choose Medical Analyzer?</h2>

        <p>

            Our platform helps hospitals, laboratories and clinics
            analyze medical reports quickly using Artificial Intelligence.
            Doctors receive better insights while patients save valuable time.

        </p>

    </section>

</div>

</template>

<script setup>

</script>

<style scoped>

.home{

display:flex;

flex-direction:column;

gap:40px;

}

/* Hero */

.hero{

display:grid;

grid-template-columns:1fr 350px;

align-items:center;

gap:40px;

padding:40px;

background:var(--card);

border-radius:25px;

box-shadow:var(--shadow);

}

.hero h1{

font-size:48px;

line-height:1.2;

margin-bottom:20px;

color:var(--text);

}

.hero h1 span{

color:var(--primary);

}

.hero p{

font-size:17px;

line-height:1.8;

color:var(--text-light);

margin-bottom:30px;

}

.hero-buttons{

display:flex;

gap:15px;

flex-wrap:wrap;

}

.primary-btn{

background:var(--primary);

color:white;

padding:14px 28px;

border-radius:12px;

font-size:15px;

}

.secondary-btn{

background:transparent;

border:2px solid var(--primary);

color:var(--primary);

padding:14px 28px;

border-radius:12px;

}

.hero-image{

display:flex;

justify-content:center;

align-items:center;

font-size:180px;

color:var(--primary);

}

/* Features */

.features{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(240px,1fr));

gap:20px;

}

.feature{

padding:30px;

text-align:center;

}

.feature i{

font-size:55px;

margin-bottom:20px;

color:var(--primary);

}

.feature h3{

margin-bottom:12px;

color:var(--text);

}

.feature p{

color:var(--text-light);

line-height:1.6;

}

/* About */

.about{

padding:40px;

}

.about h2{

margin-bottom:20px;

color:var(--text);

}

.about p{

line-height:1.9;

color:var(--text-light);

}

/* Hover */

.feature:hover{

transform:translateY(-8px);

}

/* Responsive */

@media(max-width:900px){

.hero{

grid-template-columns:1fr;

text-align:center;

}

.hero-buttons{

justify-content:center;

}

.hero h1{

font-size:36px;

}

.hero-image{

font-size:120px;

}

}

</style>