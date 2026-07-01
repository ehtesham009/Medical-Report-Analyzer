<template>
  <div class="upload-page">

    <!-- Heading -->
    <div class="page-header">
      <h1>Upload Medical Report</h1>
      <p>Fill in the patient details and upload the medical report securely.</p>
    </div>

    <!-- Upload Card -->
    <div class="upload-card">

      <!-- Left Side -->
      <div class="left">

        <div class="upload-box">

          <i class="fa-solid fa-cloud-arrow-up"></i>

          <h3>Drag & Drop Report</h3>

          <p>PDF, JPG, PNG (Max 10MB)</p>

          <input
            type="file"
            @change="handleFile"
          >

        </div>

      </div>

      <!-- Right Side -->

      <div class="right">

        <form @submit.prevent="submitReport">

          <div class="row">

            <div>

              <label>Patient Name</label>

              <input
                type="text"
                v-model="patientName"
                placeholder="Enter patient name"
              >

            </div>

            <div>

              <label>Age</label>

              <input
                type="number"
                v-model="age"
                placeholder="Age"
              >

            </div>

          </div>

          <div class="row">

            <div>

              <label>Gender</label>

              <select v-model="gender">

                <option value="">Select</option>

                <option>Male</option>

                <option>Female</option>

                <option>Other</option>

              </select>

            </div>

            <div>

              <label>Report Type</label>

              <select v-model="reportType">

                <option value="">Select</option>

                <option>Blood Test</option>

                <option>X-Ray</option>

                <option>MRI</option>

                <option>CT Scan</option>

                <option>ECG</option>

              </select>

            </div>

          </div>

          <label>Hospital Name</label>

          <input
            type="text"
            v-model="hospital"
            placeholder="Hospital Name"
          >

          <label>Doctor Name</label>

          <input
            type="text"
            v-model="doctor"
            placeholder="Doctor Name"
          >

          <label>Notes</label>

          <textarea
            rows="4"
            v-model="notes"
            placeholder="Additional Notes..."
          ></textarea>

          <button type="submit">
            Upload Report
          </button>

        </form>

      </div>

    </div>

  </div>
</template>

<script setup>

import { ref } from 'vue'

const patientName = ref("")
const age = ref("")
const gender = ref("")
const reportType = ref("")
const hospital = ref("")
const doctor = ref("")
const notes = ref("")
const file = ref(null)

function handleFile(event){

file.value = event.target.files[0]

}

function submitReport(){

if(
!patientName.value ||
!age.value ||
!gender.value ||
!reportType.value
){

alert("Please fill all required fields.")

return

}

const reports =
JSON.parse(localStorage.getItem("reports")) || []

reports.push({

id:Date.now(),

patient:patientName.value,

age:age.value,

gender:gender.value,

type:reportType.value,

hospital:hospital.value,

doctor:doctor.value,

notes:notes.value,

file:file.value ? file.value.name : "No File",

status:"Pending"

})

localStorage.setItem(
"reports",
JSON.stringify(reports)
)

alert("Report Uploaded Successfully!")

patientName.value=""
age.value=""
gender.value=""
reportType.value=""
hospital.value=""
doctor.value=""
notes.value=""

}

</script>

<style scoped>

.upload-page{
display:flex;
flex-direction:column;
gap:30px;
}

.page-header h1{
color:#1E3A8A;
margin-bottom:10px;
}

.page-header p{
color:#64748B;
}

.upload-card{
display:grid;
grid-template-columns:350px 1fr;
gap:30px;
}

.left{
display:flex;
}

.upload-box{

background:white;

border:3px dashed #2563EB;

border-radius:20px;

width:100%;

padding:40px;

text-align:center;

display:flex;

flex-direction:column;

justify-content:center;

align-items:center;

box-shadow:0 10px 25px rgba(0,0,0,.08);

}

.upload-box i{

font-size:70px;

color:#2563EB;

margin-bottom:20px;

}

.upload-box h3{

margin-bottom:10px;

}

.upload-box input{

margin-top:20px;

}

.right{

background:white;

padding:30px;

border-radius:20px;

box-shadow:0 10px 25px rgba(0,0,0,.08);

}

.row{

display:grid;

grid-template-columns:1fr 1fr;

gap:20px;

}

label{

font-weight:600;

margin-top:10px;

display:block;

}

textarea{

width:100%;

padding:12px;

border-radius:10px;

border:1px solid #CBD5E1;

resize:none;

margin:10px 0 20px;

}

button{

width:100%;

font-size:16px;

}

@media(max-width:900px){

.upload-card{

grid-template-columns:1fr;

}

.row{

grid-template-columns:1fr;

}

}

</style>