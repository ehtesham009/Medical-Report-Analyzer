<template>

<div class="user-menu">

    <span class="user-name">
        {{ userName }}
    </span>

    <button
        class="logout-btn"
        @click="handleLogout"
    >
        Logout
    </button>

</div>

</template>

<script setup>

import { computed } from "vue"
import { useRouter } from "vue-router"
import { useAuth } from "../composables/useAuth"

const router = useRouter()

const { logout } = useAuth()

const userName = computed(() => {

    const user =
        JSON.parse(
            localStorage.getItem("user")
        )

    return user?.name || "User"

})

function handleLogout() {

    logout()

    router.push("/login")

}

</script>

<style scoped>

.user-menu{

display:flex;

align-items:center;

gap:15px;

}

.user-name{

font-weight:600;

color:var(--text);

}

.logout-btn{

background:#EF4444;

color:white;

padding:10px 18px;

border:none;

border-radius:10px;

cursor:pointer;

}

</style>