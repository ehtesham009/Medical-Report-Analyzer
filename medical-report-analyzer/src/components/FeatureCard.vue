<template>
  <div class="feature-card">
    <i :class="icon"></i>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String
})
</script>

<style scoped>
.feature-card{
background:white;
padding:25px;
border-radius:12px;
text-align:center;
box-shadow:0 4px 10px rgba(0,0,0,.1);
transition:.3s;
}

.feature-card:hover{
transform:translateY(-6px);
}

.feature-card i{
font-size:40px;
color:#0f4c81;
margin-bottom:15px;
}

.feature-card h3{
margin-bottom:10px;
}
</style>