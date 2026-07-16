<template>
<div class="history-page">

  <div class="page-header">
    <div>
      <h1>Medical Report History</h1>
      <p>View all previously uploaded medical reports.</p>
    </div>

    <input
      type="text"
      placeholder="Search patient..."
      v-model="search"
    />
  </div>

  <div class="table-card">

    <table v-if="filteredReports.length > 0">

      <thead>
        <tr>
          <th>Patient</th>
          <th>Report</th>
          <th>Date</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>

        <tr
          v-for="item in filteredReports"
          :key="item.id"
        >
          <td>{{ item.patient }}</td>
          <td>{{ item.report }}</td>
          <td>{{ item.date }}</td>

          <td>
            <span :class="statusClass(item.status)">
              {{ item.status }}
            </span>
          </td>

          <td>
            <button
              class="view-btn"
              @click="viewReport(item.id)"
            >
              <i class="fa-solid fa-eye"></i>
              View
            </button>

            <button
              class="download-btn"
              @click="downloadReport(item)"
            >
              <i class="fa-solid fa-download"></i>
              Download
            </button>
          </td>
        </tr>

      </tbody>

    </table>

    <div
      v-else
      class="empty-state"
    >
      No reports found.
      Upload a report first.
    </div>

  </div>

</div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const search = ref("")
const reports = ref([])

onMounted(async () => {

  try {

    const user =
      JSON.parse(
        localStorage.getItem("user")
      )

    const response =
      await fetch(
        `http://localhost:5000/api/reports/history?email=${user.email}`
      )

    const data =
      await response.json()

    reports.value = data.map(report => ({

      id: report._id,

      patient: report.userEmail,

      report: report.fileName,

      date: new Date(
        report.createdAt
      ).toLocaleDateString(),

      status:
        report.analysis === "Analysis pending"
          ? "Pending"
          : "Completed"

    }))

  } catch (error) {

    console.error(error)

  }

})

const filteredReports = computed(() => {

  return reports.value.filter(item =>
    item.patient
      .toLowerCase()
      .includes(
        search.value.toLowerCase()
      )
  )

})

function statusClass(status) {

  if (status === "Completed")
    return "completed"

  if (status === "Pending")
    return "pending"

  return "critical"

}

function viewReport(id) {

  router.push(`/report/${id}`)

}

function downloadReport(item) {

  window.open(
    `http://localhost:5000/api/reports/download/${item.id}`
  )

}
</script>
<style scoped>

.history-page{
  display:flex;
  flex-direction:column;
  gap:25px;
}

.page-header{
  display:flex;
  justify-content:space-between;
  align-items:center;
  gap:20px;
}

.page-header h1{
  font-size:34px;
  margin-bottom:8px;
}

.page-header input{
  width:280px;
}

.table-card{
  background:var(--card);
  padding:25px;
  border-radius:20px;
  box-shadow:var(--shadow);
  overflow-x:auto;
}

table{
  width:100%;
  border-collapse:collapse;
}

th{
  padding:15px;
  text-align:left;
}

td{
  padding:16px;
  border-bottom:1px solid var(--border);
}

.completed{
  background:#22C55E;
  color:white;
  padding:6px 12px;
  border-radius:30px;
}

.pending{
  background:#F59E0B;
  color:white;
  padding:6px 12px;
  border-radius:30px;
}

.critical{
  background:#EF4444;
  color:white;
  padding:6px 12px;
  border-radius:30px;
}

.view-btn{
  background:#2563EB;
  color:white;
  padding:8px 14px;
  border-radius:8px;
  margin-right:10px;
}

.download-btn{
  background:#22C55E;
  color:white;
  padding:8px 14px;
  border-radius:8px;
}

.empty-state{
  text-align:center;
  padding:40px;
  font-size:18px;
}

@media(max-width:768px){

  .page-header{
    flex-direction:column;
    align-items:flex-start;
  }

  .page-header input{
    width:100%;
  }

}
</style>