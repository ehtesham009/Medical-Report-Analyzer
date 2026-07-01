<template>
  <div class="history-page">

    <!-- Header -->
    <div class="header">
      <h1>Medical Report History</h1>

      <input
        type="text"
        v-model="search"
        placeholder="🔍 Search Patient..."
      >
    </div>

    <!-- Table -->
    <div class="table-card">

      <table>

        <thead>

          <tr>
            <th>Patient</th>
            <th>Age</th>
            <th>Report</th>
            <th>Hospital</th>
            <th>Status</th>
            <th>Action</th>
          </tr>

        </thead>

        <tbody>

          <tr
            v-for="report in filteredReports"
            :key="report.id"
          >

            <td>{{ report.patient }}</td>

            <td>{{ report.age }}</td>

            <td>{{ report.type }}</td>

            <td>{{ report.hospital }}</td>

            <td>

              <span
                :class="statusClass(report.status)"
              >
                {{ report.status }}
              </span>

            </td>

            <td>

              <button
                class="view-btn"
                @click="viewReport(report)"
              >
                View
              </button>

              <button
                class="delete-btn"
                @click="deleteReport(report.id)"
              >
                Delete
              </button>

            </td>

          </tr>

          <tr v-if="filteredReports.length===0">

            <td colspan="6">

              No Reports Found

            </td>

          </tr>

        </tbody>

      </table>

    </div>

    <!-- Modal -->

    <div
      v-if="selectedReport"
      class="modal"
    >

      <div class="modal-content">

        <h2>Report Details</h2>

        <p><strong>Patient :</strong> {{ selectedReport.patient }}</p>

        <p><strong>Age :</strong> {{ selectedReport.age }}</p>

        <p><strong>Gender :</strong> {{ selectedReport.gender }}</p>

        <p><strong>Report :</strong> {{ selectedReport.type }}</p>

        <p><strong>Hospital :</strong> {{ selectedReport.hospital }}</p>

        <p><strong>Doctor :</strong> {{ selectedReport.doctor }}</p>

        <p><strong>Notes :</strong> {{ selectedReport.notes }}</p>

        <p><strong>File :</strong> {{ selectedReport.file }}</p>

        <button @click="selectedReport=null">
          Close
        </button>

      </div>

    </div>

  </div>
</template>

<script setup>

import { ref, computed } from 'vue'

const reports = ref(
  JSON.parse(localStorage.getItem("reports")) || []
)

const search = ref("")

const selectedReport = ref(null)

const filteredReports = computed(() => {

  return reports.value.filter(report =>
    report.patient.toLowerCase().includes(search.value.toLowerCase())
  )

})

function deleteReport(id){

  reports.value = reports.value.filter(r=>r.id!==id)

  localStorage.setItem(
    "reports",
    JSON.stringify(reports.value)
  )

}

function viewReport(report){

  selectedReport.value = report

}

function statusClass(status){

  if(status==="Completed") return "completed"

  if(status==="Critical") return "critical"

  return "pending"

}

</script>

<style scoped>

.history-page{
display:flex;
flex-direction:column;
gap:25px;
}

.header{
display:flex;
justify-content:space-between;
align-items:center;
}

.header h1{
color:#1E3A8A;
}

.header input{
width:280px;
}

.table-card{
background:white;
padding:25px;
border-radius:18px;
box-shadow:0 10px 25px rgba(0,0,0,.08);
overflow:auto;
}

table{
width:100%;
border-collapse:collapse;
}

th,
td{
padding:15px;
border-bottom:1px solid #E2E8F0;
text-align:left;
}

th{
background:#F8FAFC;
}

.completed,
.pending,
.critical{
padding:6px 12px;
border-radius:20px;
color:white;
font-size:13px;
}

.completed{
background:#22C55E;
}

.pending{
background:#F59E0B;
}

.critical{
background:#EF4444;
}

.view-btn{
background:#2563EB;
margin-right:8px;
}

.delete-btn{
background:#EF4444;
}

.modal{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,.4);
display:flex;
justify-content:center;
align-items:center;
}

.modal-content{
background:white;
padding:30px;
border-radius:18px;
width:450px;
max-width:90%;
}

.modal-content h2{
margin-bottom:20px;
color:#1E3A8A;
}

.modal-content p{
margin:10px 0;
}

.modal-content button{
margin-top:20px;
width:100%;
}

@media(max-width:768px){

.header{
flex-direction:column;
gap:15px;
align-items:flex-start;
}

.header input{
width:100%;
}

table{
font-size:14px;
}

}

</style>