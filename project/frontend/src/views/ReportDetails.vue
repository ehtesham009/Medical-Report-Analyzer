<template>
  <div class="details-page">

    <h1>Medical Report Details</h1>

    <div v-if="loading" class="card">
      <p>Loading report...</p>
    </div>

    <div v-else-if="report">

      <div class="card">

        <h3>File Name</h3>
        <p>{{ report.fileName }}</p>

        <h3>Email</h3>
        <p>{{ report.userEmail }}</p>

        <h3>Upload Date</h3>
        <p>
          {{ formatDate(report.createdAt) }}
        </p>

      </div>

      <div class="card">

        <h2>Extracted Text</h2>

        <pre>
{{ report.extractedText || "No extracted text available." }}
        </pre>

      </div>

      <div class="card">

        <h2>AI Analysis</h2>

        <p>
          {{ report.analysis || "No analysis available." }}
        </p>

      </div>

    </div>

    <div
      v-else
      class="card"
    >
      <p>Report not found.</p>
    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const report = ref(null)
const loading = ref(true)

function formatDate(date) {

  if (!date) return "N/A"

  return new Date(date).toLocaleString()

}

onMounted(async () => {

  try {

    const user = JSON.parse(
      localStorage.getItem("user")
    )

    const response = await fetch(
      `http://localhost:5000/api/reports/${route.params.id}?email=${user.email}`
    )

    const data = await response.json()

    console.log("Report Data:", data)

    if (response.ok) {

      report.value = data

    } else {

      report.value = null

      console.error(data.message)

    }

  } catch (error) {

    console.error(error)

  } finally {

    loading.value = false

  }

})
</script>

<style scoped>

.details-page{
  display:flex;
  flex-direction:column;
  gap:20px;
}

.details-page h1{
  color:var(--text);
  margin-bottom:10px;
}

.card{
  background:var(--card);
  padding:25px;
  border-radius:20px;
  box-shadow:var(--shadow);
}

.card h2,
.card h3{
  color:var(--text);
  margin-bottom:10px;
}

.card p{
  color:var(--text-light);
  margin-bottom:15px;
}

pre{
  white-space:pre-wrap;
  word-wrap:break-word;
  color:var(--text);
  font-family:inherit;
  line-height:1.6;
}

</style>