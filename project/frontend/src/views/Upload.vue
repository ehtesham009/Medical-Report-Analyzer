<template>
<div class="upload-page">

    <div class="page-header">
        <h1>Upload Medical Report</h1>
        <p>
            Upload Blood Test, MRI, X-Ray or Laboratory Report for AI Analysis.
        </p>
    </div>

    <div class="upload-card">

        <div class="upload-icon">
            <i class="fa-solid fa-cloud-arrow-up"></i>
        </div>

        <h2>Drag & Drop Your Report</h2>

        <p>
            Supported Formats: PDF, JPG, PNG
        </p>

        <input
            type="file"
            @change="selectFile"
        >

        <button
            class="upload-btn"
            @click="uploadReport"
        >
            Upload Report
        </button>

        <div
            v-if="fileName"
            class="selected-file"
        >
            <i class="fa-solid fa-file-medical"></i>
            {{ fileName }}
        </div>

    </div>

</div>
</template>

<script setup>

import { ref } from "vue"

const fileName = ref("")
const selectedFile = ref(null)

function selectFile(event) {

  if (event.target.files.length) {

    selectedFile.value =
      event.target.files[0]

    fileName.value =
      event.target.files[0].name

  }

}

async function uploadReport() {

  if (!selectedFile.value) {

    alert("Please select a report first.")
    return

  }

  try {

    const user =
      JSON.parse(
        localStorage.getItem("user")
      )

    if (!user) {

      alert("Please login first")
      return

    }

    const formData = new FormData()

    formData.append(
      "report",
      selectedFile.value
    )

    formData.append(
      "userEmail",
      user.email
    )

    const response =
      await fetch(
        "http://localhost:5000/api/reports/upload",
        {
          method: "POST",
          body: formData
        }
      )

    const data =
      await response.json()

    if (response.ok) {

      alert(
        "Report Uploaded Successfully!"
      )

      console.log(data)

    } else {

      alert(data.message)

    }

  } catch (error) {

    console.error(error)

    alert("Upload Failed")

  }

}

</script>
<style scoped>

.upload-page{

display:flex;

flex-direction:column;

gap:25px;

}

/* Header */

.page-header{

margin-bottom:10px;

}

.page-header h1{

font-size:34px;

color:var(--text);

margin-bottom:10px;

}

.page-header p{

color:var(--text-light);

font-size:15px;

}

/* Upload Card */

.upload-card{

background:var(--card);

padding:40px;

border-radius:20px;

box-shadow:var(--shadow);

display:flex;

flex-direction:column;

align-items:center;

text-align:center;

transition:.35s;

}

.upload-icon{

width:100px;

height:100px;

border-radius:50%;

display:flex;

justify-content:center;

align-items:center;

background:rgba(37,99,235,.12);

margin-bottom:20px;

}

.upload-icon i{

font-size:50px;

color:var(--primary);

}

.upload-card h2{

margin-bottom:10px;

color:var(--text);

}

.upload-card p{

margin-bottom:25px;

color:var(--text-light);

}

.upload-card input{

margin-bottom:20px;

max-width:350px;

}

.upload-btn{

padding:14px 35px;

background:var(--primary);

color:white;

border-radius:12px;

font-size:15px;

}

.upload-btn:hover{

transform:translateY(-3px);

}

/* Selected File */

.selected-file{

margin-top:25px;

padding:14px 20px;

background:rgba(34,197,94,.12);

color:#16A34A;

border-radius:12px;

display:flex;

align-items:center;

gap:10px;

font-weight:600;

}

/* Tips */

.tips-card{

background:var(--card);

padding:30px;

border-radius:20px;

box-shadow:var(--shadow);

}

.tips-card h3{

margin-bottom:20px;

color:var(--text);

}

.tips-card ul{

list-style:none;

display:flex;

flex-direction:column;

gap:15px;

}

.tips-card li{

display:flex;

align-items:center;

gap:12px;

color:var(--text-light);

}

.tips-card i{

color:#22C55E;

}

/* Responsive */

@media(max-width:768px){

.upload-card{

padding:25px;

}

.page-header h1{

font-size:28px;

}

}

</style>