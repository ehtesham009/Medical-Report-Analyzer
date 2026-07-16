<template>

<div class="analysis-page">

    <!-- Header -->

    <div class="page-header">

        <h1>AI Medical Analysis</h1>

        <p>
            Artificial Intelligence has analyzed the uploaded report.
        </p>

    </div>

    <!-- Summary Cards -->

    <div class="summary-grid">

        <div class="summary-card">

            <i class="fa-solid fa-heart-circle-check"></i>

            <h3>Diagnosis</h3>

            <h2>{{ diagnosis }}</h2>

        </div>

        <div class="summary-card">

            <i class="fa-solid fa-chart-line"></i>

            <h3>Confidence</h3>

            <h2>{{ confidence }}</h2>

        </div>

        <div class="summary-card">

            <i class="fa-solid fa-triangle-exclamation"></i>

            <h3>Risk Level</h3>

            <h2>{{ risk }}</h2>

        </div>

    </div>

    <!-- AI Report -->

    <div class="analysis-card">

        <h2>AI Interpretation</h2>

        <p>
            {{ interpretation }}
        </p>

    </div>

    <!-- Recommendations -->

    <div class="recommendation-card">

        <h2>Recommendations</h2>

        <ul>

            <li
                v-for="item in recommendations"
                :key="item"
            >

                <i class="fa-solid fa-check"></i>

                {{ item }}

            </li>

        </ul>

    </div>

</div>

</template>

<script setup>
import { ref, onMounted } from "vue"

const diagnosis = ref("Loading...")
const confidence = ref("95%")
const risk = ref("Low")
const interpretation = ref("")
const recommendations = ref([])

onMounted(async () => {

  try {

    const user =
      JSON.parse(
        localStorage.getItem("user")
      )

    const response =
      await fetch(
        `http://localhost:5000/api/reports/latest-analysis?email=${user.email}`
      )

    const data =
      await response.json()

    diagnosis.value =
      "Uploaded Report"

    interpretation.value =
      data.analysis

    recommendations.value = [

      "Drink adequate water daily.",

      "Maintain a healthy balanced diet.",

      "Exercise regularly.",

      "Follow physician recommendations."

    ]

  } catch (error) {

    interpretation.value =
      "No analysis found."

    console.error(error)

  }

})
</script>

<style scoped>

.analysis-page{

display:flex;

flex-direction:column;

gap:25px;

}

/* Header */

.page-header h1{

font-size:34px;

margin-bottom:10px;

color:var(--text);

}

.page-header p{

color:var(--text-light);

}

/* Summary */

.summary-grid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(230px,1fr));

gap:20px;

}

.summary-card{

background:var(--card);

padding:30px;

border-radius:20px;

box-shadow:var(--shadow);

text-align:center;

transition:.3s;

}

.summary-card:hover{

transform:translateY(-5px);

}

.summary-card i{

font-size:45px;

color:var(--primary);

margin-bottom:15px;

}

.summary-card h3{

margin-bottom:10px;

color:var(--text-light);

}

.summary-card h2{

font-size:30px;

color:var(--text);

}

/* Analysis */

.analysis-card{

background:var(--card);

padding:30px;

border-radius:20px;

box-shadow:var(--shadow);

}

.analysis-card h2{

margin-bottom:20px;

color:var(--text);

}

.analysis-card p{

line-height:1.8;

color:var(--text-light);

}

/* Recommendation */

.recommendation-card{

background:var(--card);

padding:30px;

border-radius:20px;

box-shadow:var(--shadow);

}

.recommendation-card h2{

margin-bottom:20px;

color:var(--text);

}

.recommendation-card ul{

list-style:none;

display:flex;

flex-direction:column;

gap:18px;

}

.recommendation-card li{

display:flex;

align-items:center;

gap:12px;

color:var(--text-light);

}

.recommendation-card i{

color:#22C55E;

font-size:18px;

}

/* Responsive */

@media(max-width:768px){

.page-header h1{

font-size:28px;

}

.summary-grid{

grid-template-columns:1fr;

}

}

</style>