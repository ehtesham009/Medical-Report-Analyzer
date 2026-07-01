<template>
  <div class="chart-container">

    <Bar
      :data="chartData"
      :options="chartOptions"
    />

  </div>
</template>

<script setup>

import {
Bar
} from "vue-chartjs"

import {
Chart as ChartJS,
Title,
Tooltip,
Legend,
BarElement,
CategoryScale,
LinearScale
} from "chart.js"

ChartJS.register(
Title,
Tooltip,
Legend,
BarElement,
CategoryScale,
LinearScale
)

const chartData = {

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun"
],

datasets:[

{

label:"Blood Reports",

backgroundColor:"#2563EB",

borderRadius:8,

data:[12,19,8,15,22,17]

},

{

label:"MRI Reports",

backgroundColor:"#22C55E",

borderRadius:8,

data:[6,9,10,5,13,8]

}

]

}

const chartOptions = {

responsive:true,

maintainAspectRatio:false,

plugins:{

legend:{

position:"top"

},

title:{

display:true,

text:"Monthly Medical Reports"

}

},

scales:{

y:{

beginAtZero:true

}

}

}

</script>

<style scoped>

.chart-container{

width:100%;

height:380px;

background:white;

padding:20px;

border-radius:20px;

box-shadow:0 8px 25px rgba(0,0,0,.08);

}

</style>