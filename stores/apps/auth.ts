import {ref} from "vue"
import {defineStore} from "pinia"


export const useAuthStore = defineStore("auth", () => {
    const user = ref(null)
    const isAuthenticated = ref(false)

    const authenticateUser = async(userEmail: string, password: string) => {
        try{
            const postBody = {
                email: userEmail,
                password: password  
            }

            const response = 0
        }catch(error){
            console.log("Error Authenticating: ", error)
        }
    }

    const logUserOut = () => {
        user.value = null
        isAuthenticated.value = false
    }



    return {
        user,
        isAuthenticated,
        authenticateUser,
        logUserOut
    }
})