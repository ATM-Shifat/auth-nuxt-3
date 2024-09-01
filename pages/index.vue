
<script lang="ts" setup>

import { useAuthStore } from '@/stores/apps/auth';

 const auth = useAuthStore()


 console.log(auth.isAuthenticated)

</script>

<template>
<div>
    index page 1
    <p>
        Hello, {{ auth.isAuthenticated }}
    </p>
    <div>
    </div>
    <IconsDelete class="delete-button"/>
</div>

</template>


<style scoped>
.delete-button{
    color: red;
    margin: 10px;
    width: 50px;
    height: auto;
}
</style>