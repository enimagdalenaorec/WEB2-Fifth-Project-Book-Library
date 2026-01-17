<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBookStore } from '../stores/bookStore'

const route = useRoute()   // Pristup podacima u URL-u
const router = useRouter() // Omogućuje nam navigaciju (npr. povratak)
const bookStore = useBookStore()

// Dohvaćamo ID iz URL-a (npr. iz /book/5 uzimamo broj 5)
const bookId = Number(route.params.id)

// Pronalazimo knjigu u našem store-u koja ima taj ID
const book = computed(() => {
  return bookStore.books.find(b => b.id === bookId)
})

const goBack = () => {
  router.back() // Vraća korisnika na prethodnu stranicu
}
</script>

<template>
  <div class="container">
    <div v-if="book" class="details-card">
      <button @click="goBack" class="btn-back">← Back to Gallery</button>
      
      <div class="content">
        <span class="badge">Book Details</span>
        <h1>{{ book.title }}</h1>
        <h3 class="author">by {{ book.author }}</h3>
        <hr />
        <p class="description">{{ book.description }}</p>
        
        <div class="extra-info">
          <p><strong>Genre:</strong> Fiction / Classic</p>
          <p><strong>Availability:</strong> In Stock</p>
        </div>

        <button 
          @click="bookStore.addToFavorites(book)" 
          :disabled="bookStore.favorites.some(f => f.id === book.id)"
          class="btn-add"
        >
          {{ bookStore.favorites.some(f => f.id === book.id) ? 'Saved to Favorites' : 'Add to Favorites' }}
        </button>
      </div>
    </div>

    <div v-else class="not-found">
      <h2>Oops! Book not found.</h2>
      <p>The book you are looking for doesn't exist in our library.</p>
      <RouterLink to="/" class="btn-back">Return to Home</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
}

.details-card {
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 15px 35px rgba(0,0,0,0.1);
}

.btn-back {
  background: none;
  border: none;
  color: #42b983;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 1rem;
}

.badge {
  background: #e8f5e9;
  color: #42b983;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

h1 {
  font-size: 3rem;
  margin: 10px 0;
  color: #2c3e50;
}

.author {
  color: #7f8c8d;
  font-weight: 400;
  margin-bottom: 20px;
}

.description {
  font-size: 1.2rem;
  line-height: 1.8;
  color: #34495e;
  margin: 20px 0;
}

.extra-info {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
}

.btn-add {
  width: 100%;
  padding: 15px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
}

.btn-add:disabled {
  background: #bdc3c7;
}

.not-found {
  text-align: center;
  padding: 100px 0;
}
</style>