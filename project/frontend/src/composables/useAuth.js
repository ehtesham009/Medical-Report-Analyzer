import { ref } from "vue"

const isAuthenticated = ref(
  !!localStorage.getItem("token")
)

export function useAuth() {

  function login() {

    isAuthenticated.value = true

  }

  function logout() {

    localStorage.removeItem("token")
    localStorage.removeItem("user")

    isAuthenticated.value = false

  }

  return {

    isAuthenticated,

    login,

    logout

  }

}