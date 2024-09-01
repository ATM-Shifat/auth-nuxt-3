<template >
  <NuxtLayout>
    <header>
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/events">Events</NuxtLink>
        </li>
      </ul>
    </header>
    <NuxtPage/>
  </NuxtLayout>
</template>

<style scoped>

li {
  display: inline;
  margin-right: 10px;
}

li:hover{
  color: gray;
}

</style>
