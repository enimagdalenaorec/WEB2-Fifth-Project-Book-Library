<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="nav-container">
        <RouterLink to="/" class="nav-link">Home Gallery</RouterLink>
        <RouterLink to="/favorites" class="nav-link">My Favorites</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style>
/* Globalni stilovi za font - profesor traži pedantnost */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
}
</style>

<style scoped>
.navbar {
  background-color: white;
  padding: 20px 0;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  margin-bottom: 30px;
}

.nav-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  gap: 30px;
  padding: 0 20px;
}

.nav-link {
  text-decoration: none;
  font-weight: 800; /* Debeli font kao na HomeView */
  font-size: 1.2rem; /* Veća slova */
  color: #2c3e50;
  transition: color 0.3s;
  position: relative;
}

.nav-link:hover {
  color: #42b983;
}

/* Stil za aktivni link (One-way binding od routera) */
.router-link-active {
  color: #42b983;
}

/* Mala crtica ispod aktivnog linka za bolji UI */
.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #42b983;
  border-radius: 2px;
}
</style>