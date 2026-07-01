<template>
  <button class="btn" @click="$emit('button-click')">
    {{ text }}
  </button>
</template>

<script setup>
defineProps({
  text: String
})

defineEmits(['button-click'])
</script>

<style scoped>
.btn{
padding:12px 25px;
background:#0f4c81;
color:white;
border:none;
border-radius:8px;
cursor:pointer;
font-size:16px;
transition:.3s;
}

.btn:hover{
background:#2563eb;
}
</style>