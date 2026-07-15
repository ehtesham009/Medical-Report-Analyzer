<template>

<div class="chart-card">

    <div class="chart-header">

        <h2>Reports Overview</h2>

        <p>Monthly Medical Reports Analysis</p>

    </div>

    <canvas ref="chartCanvas"></canvas>

</div>

</template>

<script setup>

import { ref, onMounted, onBeforeUnmount } from "vue"
import Chart from "chart.js/auto"

const chartCanvas = ref(null)

let chartInstance = null

function createChart(){

    const isDark = document.body.classList.contains("dark")

    const textColor = isDark ? "#F8FAFC" : "#1E293B"

    const gridColor = isDark ? "#475569" : "#E2E8F0"

    if(chartInstance){

        chartInstance.destroy()

    }

    chartInstance = new Chart(chartCanvas.value,{

        type:"line",

        data:{

            labels:[
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul"
            ],

            datasets:[

                {

                    label:"Reports",

                    data:[12,19,15,25,22,31,28],

                    borderColor:"#2563EB",

                    backgroundColor:"rgba(37,99,235,.15)",

                    fill:true,

                    tension:.4,

                    borderWidth:3,

                    pointRadius:5,

                    pointHoverRadius:7

                }

            ]

        },

        options:{

            responsive:true,

            maintainAspectRatio:false,

            plugins:{

                legend:{

                    labels:{

                        color:textColor

                    }

                }

            },

            scales:{

                x:{

                    ticks:{

                        color:textColor

                    },

                    grid:{

                        color:gridColor

                    }

                },

                y:{

                    beginAtZero:true,

                    ticks:{

                        color:textColor

                    },

                    grid:{

                        color:gridColor

                    }

                }

            }

        }

    })

}

let observer

onMounted(()=>{

    createChart()

    observer = new MutationObserver(()=>{

        createChart()

    })

    observer.observe(document.body,{

        attributes:true,

        attributeFilter:["class"]

    })

})

onBeforeUnmount(()=>{

    if(chartInstance){

        chartInstance.destroy()

    }

    if(observer){

        observer.disconnect()

    }

})

</script>

<style scoped>

.chart-card{

background:var(--card);

padding:25px;

border-radius:20px;

box-shadow:var(--shadow);

height:420px;

transition:.35s;

}

.chart-header{

margin-bottom:20px;

}

.chart-header h2{

font-size:22px;

font-weight:700;

color:var(--text);

}

.chart-header p{

font-size:14px;

color:var(--text-light);

margin-top:5px;

}

canvas{

width:100% !important;

height:320px !important;

}

</style>