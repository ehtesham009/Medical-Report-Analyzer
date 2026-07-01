<template>
  <div class="dashboard">

    <!-- Welcome Banner -->
    <section class="welcome">

      <div>
        <h1>Welcome Back 👋</h1>
        <p>
          Monitor your medical reports and patient records easily.
        </p>
      </div>

      <button>
        <i class="fa-solid fa-plus"></i>
        Upload Report
      </button>

    </section>

    <!-- Statistics -->

    <section class="stats">

      <div class="stat-card">

        <div class="icon blue">
          <i class="fa-solid fa-file-medical"></i>
        </div>

        <div>

          <h2>245</h2>

          <p>Total Reports</p>

        </div>

      </div>

      <div class="stat-card">

        <div class="icon green">
          <i class="fa-solid fa-circle-check"></i>
        </div>

        <div>

          <h2>198</h2>

          <p>Completed</p>

        </div>

      </div>

      <div class="stat-card">

        <div class="icon orange">
          <i class="fa-solid fa-clock"></i>
        </div>

        <div>

          <h2>35</h2>

          <p>Pending</p>

        </div>

      </div>

      <div class="stat-card">

        <div class="icon red">
          <i class="fa-solid fa-triangle-exclamation"></i>
        </div>

        <div>

          <h2>12</h2>

          <p>Critical</p>

        </div>

      </div>

    </section>
    <section class="chart-section">

  <DashboardChart/>

</section>

    <!-- Middle -->

    <section class="middle">

      <!-- Reports -->

      <div class="reports">

        <h2>Recent Reports</h2>

        <table>

          <thead>

          <tr>

            <th>Patient</th>

            <th>Report</th>

            <th>Status</th>

          </tr>

          </thead>

          <tbody>

          <tr>

            <td>Ali Khan</td>

            <td>Blood Test</td>

            <td>

              <span class="completed">

                Completed

              </span>

            </td>

          </tr>

          <tr>

            <td>Sara Ahmed</td>

            <td>MRI Scan</td>

            <td>

              <span class="pending">

                Pending

              </span>

            </td>

          </tr>

          <tr>

            <td>John Smith</td>

            <td>X-Ray</td>

            <td>

              <span class="critical">

                Critical

              </span>

            </td>

          </tr>

          </tbody>

        </table>

      </div>

      <!-- Overview -->

      <div class="overview">

        <h2>Health Overview</h2>

        <div class="progress-item">

          <p>Blood Reports</p>

          <div class="progress">

            <div
              class="fill blue-fill"
            ></div>

          </div>

        </div>

        <div class="progress-item">

          <p>X-Ray Reports</p>

          <div class="progress">

            <div
              class="fill green-fill"
            ></div>

          </div>

        </div>

        <div class="progress-item">

          <p>MRI Reports</p>

          <div class="progress">

            <div
              class="fill orange-fill"
            ></div>

          </div>

        </div>

      </div>

    </section>

    <!-- Bottom -->

    <section class="bottom">

      <div class="activity">

        <h2>Today's Activity</h2>

        <ul>

          <li>
            ✔ Blood Report Uploaded
          </li>

          <li>
            ✔ MRI Completed
          </li>

          <li>
            ✔ ECG Analysis Ready
          </li>

          <li>
            ✔ New Patient Registered
          </li>

        </ul>

      </div>

      <div class="appointments">

        <h2>Upcoming Appointments</h2>

        <div class="appointment">

          <h4>Ali Khan</h4>

          <span>10:30 AM</span>

        </div>

        <div class="appointment">

          <h4>Sara Ahmed</h4>

          <span>12:00 PM</span>

        </div>

        <div class="appointment">

          <h4>John Smith</h4>

          <span>3:30 PM</span>

        </div>

      </div>

    </section>

  </div>
</template>
<script setup>

import DashboardChart from "../components/DashboardChart.vue"

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
background:white;
padding:30px;
border-radius:20px;
box-shadow:0 10px 30px rgba(0,0,0,.08);
}

.welcome h1{
font-size:32px;
color:#1E3A8A;
margin-bottom:10px;
}

.welcome p{
color:#64748B;
}

.stats{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
}

.stat-card{
background:white;
padding:25px;
display:flex;
align-items:center;
gap:18px;
border-radius:18px;
box-shadow:0 8px 25px rgba(0,0,0,.08);
transition:.3s;
}

.stat-card:hover{
transform:translateY(-6px);
}

.icon{
width:60px;
height:60px;
border-radius:15px;
display:flex;
justify-content:center;
align-items:center;
color:white;
font-size:24px;
}

.blue{background:#2563EB;}
.green{background:#22C55E;}
.orange{background:#F59E0B;}
.red{background:#EF4444;}

.middle{
display:grid;
grid-template-columns:2fr 1fr;
gap:20px;
}

.reports,
.overview,
.activity,
.appointments{
background:white;
padding:25px;
border-radius:20px;
box-shadow:0 8px 25px rgba(0,0,0,.08);
}

table{
width:100%;
border-collapse:collapse;
margin-top:20px;
}

th,td{
padding:15px;
border-bottom:1px solid #E2E8F0;
text-align:left;
}

.completed,
.pending,
.critical{
padding:6px 14px;
border-radius:20px;
color:white;
font-size:13px;
}

.completed{background:#22C55E;}
.pending{background:#F59E0B;}
.critical{background:#EF4444;}

.progress-item{
margin:25px 0;
}

.progress{
height:10px;
background:#E2E8F0;
border-radius:20px;
overflow:hidden;
margin-top:8px;
}

.fill{
height:100%;
}

.blue-fill{
width:90%;
background:#2563EB;
}

.green-fill{
width:70%;
background:#22C55E;
}

.orange-fill{
width:50%;
background:#F59E0B;
}

.bottom{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
}

.activity ul{
margin-top:20px;
padding-left:20px;
}

.activity li{
margin-bottom:15px;
}

.appointment{
display:flex;
justify-content:space-between;
padding:15px 0;
border-bottom:1px solid #E2E8F0;
}

@media(max-width:900px){

.middle{
grid-template-columns:1fr;
}

.bottom{
grid-template-columns:1fr;
}

.welcome{
flex-direction:column;
align-items:flex-start;
gap:20px;
}

}
.chart-section{

margin:25px 0;

}

</style>