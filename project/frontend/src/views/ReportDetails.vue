<template>

<div class="details-page">

    <h1>Medical Report Details</h1>

    <div v-if="report">

        <div class="card">

            <h3>File Name</h3>
            <p>{{ report.fileName }}</p>

            <h3>Email</h3>
            <p>{{ report.userEmail }}</p>

            <h3>Upload Date</h3>
            <p>
              {{ new Date(report.createdAt).toLocaleString() }}
            </p>

        </div>

        <div class="card">

            <h2>Extracted Text</h2>

            <pre>
{{ report.extractedText }}
            </pre>

        </div>

        <div class="card">

            <h2>AI Analysis</h2>

            <p>
              {{ report.analysis }}
            </p>

        </div>

    </div>

</div>

</template>

<script setup>

import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const report = ref(null)

onMounted(async () => {

  const response = await fetch(
    `http://localhost:5000/api/reports/${route.params.id}`
  )

  report.value = await response.json()

})

</script>

<style scoped>

.details-page{
display:flex;
flex-direction:column;
gap:20px;
}

.card{
background:var(--card);
padding:25px;
border-radius:20px;
box-shadow:var(--shadow);
}

pre{
white-space:pre-wrap;
word-wrap:break-word;
}

</style>