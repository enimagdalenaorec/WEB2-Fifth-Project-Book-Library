<script setup>
import { useBookStore } from '../stores/bookStore'
import { RouterLink } from 'vue-router'
import BookCard from '../components/BookCard.vue' // Uvozimo našu novu komponentu

const bookStore = useBookStore()

const handleRemove = (bookId) => {
  bookStore.removeFromFavorites(bookId)
}
</script>

<template>
  <div class="container">
    <header class="hero">
      <h1>My Favorites</h1>
      <p v-if="bookStore.favorites.length > 0">
        You have saved {{ bookStore.favorites.length }} books to your collection.
      </p>
    </header>

    <div v-if="bookStore.favorites.length === 0" class="empty-state">
      <p>Your favorites list is currently empty.</p>
      <RouterLink to="/" class="btn-go-back">Browse Gallery</RouterLink>
    </div>

    <div v-else class="book-grid">
      <BookCard 
        v-for="book in bookStore.favorites" 
        :key="book.id" 
        :book="book"
        button-text="Remove from Favorites"
        @button-clicked="handleRemove(book.id)"
      />
    </div>
  </div>
</template>

<style scoped>
/* Primijeti koliko je CSS-a sada manje ovdje jer je većina u BookCard.vue */
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

.empty-state {
  text-align: center;
  padding: 80px 20px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.btn-go-back {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 25px;
  background-color: #2c3e50;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.3s;
}

.btn-go-back:hover {
  background-color: #42b983;
}
</style>