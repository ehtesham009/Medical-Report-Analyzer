<template>
<div class="profile-page">

    <div class="profile-header">
        <h1>My Profile</h1>
        <p>
            Manage your personal information and account settings.
        </p>
    </div>

    <div class="profile-container">

        <!-- LEFT CARD -->
        <div class="profile-card">

            <img
                :src="profileImage"
                alt="Profile"
                class="profile-image"
            >

            <input
                type="file"
                ref="fileInput"
                accept="image/*"
                hidden
                @change="uploadProfileImage"
            >

            <h2>{{ user.name }}</h2>

            <p class="role">
                {{ user.role }}
            </p>

            <div class="stats-card">
                <h3>{{ totalReports }}</h3>
                <span>Total Reports</span>
            </div>

            <button
                class="change-btn"
                @click="openFilePicker"
            >
                <i class="fa-solid fa-camera"></i>
                Change Photo
            </button>

        </div>

        <!-- RIGHT CARD -->
        <div class="details-card">

            <h2>Personal Information</h2>

            <div class="form-grid">

                <div>
                    <label>Full Name</label>
                    <input
                        type="text"
                        v-model="user.name"
                    >
                </div>

                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        v-model="user.email"
                    >
                </div>

                <div>
                    <label>Phone</label>
                    <input
                        type="text"
                        v-model="user.phone"
                    >
                </div>

                <div>
                    <label>Hospital</label>
                    <input
                        type="text"
                        v-model="user.hospital"
                    >
                </div>

            </div>

            <label>Address</label>

            <textarea
                rows="5"
                v-model="user.address"
            ></textarea>

            <button
                class="save-btn"
                @click="saveProfile"
            >
                <i class="fa-solid fa-floppy-disk"></i>
                Save Changes
            </button>

        </div>

    </div>

</div>
</template>

<script setup>

import {
  reactive,
  ref,
  onMounted
} from "vue"

const totalReports = ref(0)

const fileInput = ref(null)

const currentUser =
  JSON.parse(
    localStorage.getItem("user")
  )

const profileImage = ref(
  localStorage.getItem(
    `profileImage_${currentUser?.email}`
  ) ||
  "https://i.pravatar.cc/200"
)

const user = reactive({

  name:
    currentUser?.name || "",

  email:
    currentUser?.email || "",

  role:
    currentUser?.role || "patient",

  phone:
    localStorage.getItem(
      `phone_${currentUser?.email}`
    ) || "",

  hospital:
    localStorage.getItem(
      `hospital_${currentUser?.email}`
    ) || "",

  address:
    localStorage.getItem(
      `address_${currentUser?.email}`
    ) || ""

})

onMounted(async () => {

  try {

    const response =
      await fetch(
        `http://localhost:5000/api/reports/history?userEmail=${user.email}`
      )

    const reports =
      await response.json()

    totalReports.value =
      reports.length

  }

  catch (error) {

    console.error(error)

  }

})

function openFilePicker() {

  fileInput.value.click()

}

function uploadProfileImage(event) {

  const file =
    event.target.files[0]

  if (!file) return

  const reader =
    new FileReader()

  reader.onload = (e) => {

    const imageData =
      e.target.result

    profileImage.value =
      imageData

    localStorage.setItem(
      `profileImage_${user.email}`,
      imageData
    )

    window.dispatchEvent(
      new CustomEvent(
        "profile-image-updated"
      )
    )

  }

  reader.readAsDataURL(file)

}

function saveProfile() {

  localStorage.setItem(
    `phone_${user.email}`,
    user.phone
  )

  localStorage.setItem(
    `hospital_${user.email}`,
    user.hospital
  )

  localStorage.setItem(
    `address_${user.email}`,
    user.address
  )

  alert(
    "Profile Updated Successfully"
  )

}

</script>
<style scoped>

.profile-page{
display:flex;
flex-direction:column;
gap:25px;
}

.profile-header h1{
font-size:42px;
font-weight:700;
color:var(--text);
margin-bottom:10px;
}

.profile-header p{
color:var(--text-light);
font-size:16px;
}

.profile-container{
display:grid;
grid-template-columns:320px 1fr;
gap:25px;
}

.profile-card{
background:var(--card);
border-radius:20px;
padding:30px;
text-align:center;
box-shadow:var(--shadow);
color:var(--text);
}

.profile-image{
width:130px;
height:130px;
border-radius:50%;
object-fit:cover;
border:4px solid var(--primary);
margin-bottom:20px;
}

.profile-card h2{
color:var(--text);
font-size:32px;
margin-bottom:10px;
}

.role{
color:var(--text-light);
margin-bottom:25px;
}

.stats-card{
background:var(--card-hover);
padding:25px;
border-radius:16px;
margin-bottom:25px;
}

.stats-card h3{
font-size:42px;
color:var(--primary);
margin-bottom:5px;
}

.stats-card span{
color:var(--text-light);
}

.change-btn{
width:100%;
padding:14px;
border:none;
border-radius:12px;
background:var(--primary);
color:white;
font-weight:600;
cursor:pointer;
transition:.3s;
}

.change-btn:hover{
opacity:.9;
}

.details-card{
background:var(--card);
border-radius:20px;
padding:35px;
box-shadow:var(--shadow);
color:var(--text);
}

.details-card h2{
font-size:34px;
margin-bottom:25px;
color:var(--text);
}

.form-grid{
display:grid;
grid-template-columns:1fr 1fr;
gap:20px;
margin-bottom:20px;
}

label{
display:block;
margin-bottom:8px;
font-weight:600;
color:var(--text);
}

input,
textarea{
width:100%;
padding:15px;
border:1px solid var(--border);
border-radius:12px;
background:var(--card-hover);
color:var(--text);
outline:none;
transition:.3s;
}

input::placeholder,
textarea::placeholder{
color:var(--text-light);
}

textarea{
resize:none;
margin-top:10px;
}

.save-btn{
margin-top:25px;
padding:14px 30px;
background:var(--primary);
color:white;
border:none;
border-radius:12px;
font-weight:600;
cursor:pointer;
transition:.3s;
}

.save-btn:hover{
opacity:.9;
}

@media(max-width:900px){

.profile-container{
grid-template-columns:1fr;
}

.form-grid{
grid-template-columns:1fr;
}

}

</style>