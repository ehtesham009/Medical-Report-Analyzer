<template>
<div class="dashboard">

    <!-- Welcome -->

    <div class="welcome card">

        <div>

            <h1>Welcome Back 👋</h1>

            <p>Monitor medical reports and patient analysis from one place.</p>

        </div>

        <button>Generate Report</button>

    </div>

    <!-- Statistics -->

    <div class="stats-grid">

        <div class="stat-card">

            <div class="icon blue">

                <i class="fa-solid fa-file-medical"></i>

            </div>

            <div>

                <h2>{{ stats.totalReports }}</h2>

                <p>Total Reports</p>

            </div>

        </div>

        <div class="stat-card">

            <div class="icon green">

                <i class="fa-solid fa-circle-check"></i>

            </div>

            <div>

                <h2>{{ stats.analyzedReports }}</h2>

                <p>Analyzed</p>

            </div>

        </div>

        <div class="stat-card">

            <div class="icon orange">

                <i class="fa-solid fa-spinner"></i>

            </div>

            <div>

                <h2>{{ stats.pendingReports }}</h2>

                <p>Pending</p>

            </div>

        </div>

        <div class="stat-card">

            <div class="icon red">

                <i class="fa-solid fa-user"></i>

            </div>

            <div>

                <h2>1</h2>

                <p>Current User</p>

            </div>

        </div>

    </div>

    <!-- Chart -->

    <DashboardChart />

    <!-- Recent Summary -->

    <div class="table-card">

        <h2>System Summary</h2>

        <table>

            <thead>

                <tr>

                    <th>Metric</th>

                    <th>Value</th>

                </tr>

            </thead>

            <tbody>

                <tr>

                    <td>Total Reports</td>

                    <td>{{ stats.totalReports }}</td>

                </tr>

                <tr>

                    <td>Analyzed Reports</td>

                    <td>{{ stats.analyzedReports }}</td>

                </tr>

                <tr>

                    <td>Pending Reports</td>

                    <td>{{ stats.pendingReports }}</td>

                </tr>

            </tbody>

        </table>

    </div>

</div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import DashboardChart from "../components/DashboardChart.vue"

const stats = ref({
  totalReports: 0,
  analyzedReports: 0,
  pendingReports: 0
})

onMounted(async () => {

  try {

    const user =
      JSON.parse(
        localStorage.getItem("user")
      )

    const response =
      await fetch(
        `http://localhost:5000/api/reports/stats?email=${user.email}`
      )

    const data =
      await response.json()

    stats.value = data

  } catch (error) {

    console.error(error)

  }

})
</script>

<style scoped>

.dashboard{
display:flex;
flex-direction:column;
gap:25px;
}

.welcome{
display:flex;
justify-content:space-between;
align-items:center;
padding:30px;
}

.welcome h1{
font-size:32px;
margin-bottom:10px;
}

.welcome p{
font-size:15px;
}

.stats-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
}

.stat-card{
display:flex;
align-items:center;
gap:20px;
padding:22px;
border-radius:20px;
background:var(--card);
box-shadow:var(--shadow);
}

.icon{
width:65px;
height:65px;
border-radius:15px;
display:flex;
justify-content:center;
align-items:center;
font-size:26px;
color:#fff;
}

.blue{
background:#2563EB;
}

.green{
background:#22C55E;
}

.orange{
background:#F59E0B;
}

.red{
background:#EF4444;
}

.stat-card h2{
font-size:28px;
color:var(--text);
}

.stat-card p{
margin-top:5px;
color:var(--text-light);
}

.table-card{
background:var(--card);
padding:25px;
border-radius:20px;
box-shadow:var(--shadow);
}

.table-card h2{
margin-bottom:20px;
}

table{
width:100%;
border-collapse:collapse;
}

th{
text-align:left;
padding:15px;
background:var(--card-hover);
color:var(--text);
}

td{
padding:15px;
border-bottom:1px solid var(--border);
}

@media(max-width:768px){

.welcome{
flex-direction:column;
align-items:flex-start;
gap:20px;
}

}

</style>