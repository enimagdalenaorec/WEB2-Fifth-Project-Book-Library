<script setup>
import { useBookStore } from '../stores/bookStore'
import { RouterLink } from 'vue-router'

const bookStore = useBookStore()
</script>

<template>
  <div class="container">
    <header class="hero">
      <h1>My Favorites</h1>
      <p v-if="bookStore.favorites.length > 0">
        You have {{ bookStore.favorites.length }} books in your collection.
      </p>
    </header>

    <div v-if="bookStore.favorites.length === 0" class="empty-state">
      <p>Your favorites list is empty.</p>
      <RouterLink to="/" class="btn-go-back">Go back to Gallery</RouterLink>
    </div>

    <div v-else class="book-grid">
      <div v-for="book in bookStore.favorites" :key="book.id" class="book-card">
        <div class="book-info">
          <h3>{{ book.title }}</h3>
          <span class="author">by {{ book.author }}</span>
          <p class="description">{{ book.description }}</p>
        </div>
        <button @click="bookStore.removeFromFavorites(book.id)" class="btn-remove">
          Remove from Favorites
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Kopiramo bazu dizajna radi konzistentnosti */
.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.hero {
  text-align: center;
  margin-bottom: 40px;
}

h1 {
  font-size: 3rem;
  color: #2c3e50;
  font-weight: 800;
}

.book-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}

.book-card {
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #eee;
}

h3 {
  font-size: 1.5rem;
  margin: 0 0 10px 0;
  color: #2c3e50;
}

.author {
  color: #42b983;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 0.85rem;
}

.description {
  color: #666;
  margin: 15px 0;
  line-height: 1.5;
}

/* Stil za crveni gumb (Remove) */
.btn-remove {
  background-color: #ff4757;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

.btn-remove:hover {
  background-color: #ff6b81;
}

.empty-state {
  text-align: center;
  padding: 50px;
  background: #f1f1f1;
  border-radius: 15px;
}

.btn-go-back {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 20px;
  background-color: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
}
</style>