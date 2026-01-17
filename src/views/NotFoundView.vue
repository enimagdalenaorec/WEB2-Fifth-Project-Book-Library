<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="not-found-container">
    <img src="../assets/404-image.png" alt="Page not found" class="not-found-img" />
    
    <h1>Oops! Not found.</h1>
    <p>The page doesn't exist.</p>
    
    <RouterLink to="/" class="btn-home">
      Take me back to the Library
    </RouterLink>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 20px;
  font-family: 'Segoe UI', sans-serif;
}

.not-found-img {
  max-width: 400px;
  width: 100%;
  margin-bottom: 10px;
  /* Dodajemo mali efekt lebdenja za sliku */
  animation: float 3s ease-in-out infinite;
}

h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 0px;
}

p {
  color: #7f8c8d;
  font-size: 1.2rem;
  margin-bottom: 10px;
}

.btn-home {
  padding: 15px 30px;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(66, 185, 131, 0.3);
}

.btn-home:hover {
  background-color: #3aa876;
  transform: scale(1.05);
}

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
}
</style>