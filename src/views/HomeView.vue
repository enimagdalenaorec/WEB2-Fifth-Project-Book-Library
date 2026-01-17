<script setup>
import { ref, computed, onMounted } from 'vue'
import { useBookStore } from '../stores/bookStore'
import BookCard from '../components/BookCard.vue'

const bookStore = useBookStore()

const searchQuery = ref('')

const showToast = ref(false)
const toastMessage = ref('')

const filteredBooks = computed(() => {
  const query = searchQuery.value.toLowerCase() 
  return bookStore.books.filter(book => 
    book.title.toLowerCase().includes(query) ||
    book.author.toLowerCase().includes(query)
  )
})

const addToFavorites = (book) => {
  bookStore.addToFavorites(book)
  toastMessage.value = `Added "${book.title}" to favorites!`
  showToast.value = true
  setTimeout(() => {
    showToast.value = false
  }, 3000)
}

onMounted(async () => {
  if (bookStore.books.length === 0) {
    await bookStore.fetchBooks()
  }
})
</script>

<template>
  <div class="container">
    <header class="hero">
      <h1>Personal Library</h1>
      <p>Discover and save your favorite books</p>
      
      <div class="search-container">
        <input 
          v-model="searchQuery" 
          type="text" 
          placeholder="Search books by title or author..."
          class="search-input"
        />
      </div>
    </header>

    <div v-if="bookStore.loading" class="loader">
      <div class="spinner"></div>
      <p>Fetching your collection...</p>
    </div>

    <div v-else>
      <p class="results-count">Showing {{ filteredBooks.length }} books</p>
      
      <div class="book-grid">
        <BookCard 
            v-for="book in filteredBooks" 
            :key="book.id" 
            :book="book"
            :is-favorite="bookStore.favorites.some(f => f.id === book.id)"
            @button-clicked="addToFavorites(book)"
        />
        </div>
    </div>

    <Transition name="toast">
      <div v-if="showToast" class="toast-notification">
        {{ toastMessage }}
      </div>
    </Transition>
  </div>
</template>

<style scoped>
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
  margin-bottom: 10px;
  font-weight: 800;
}

.search-input {
  width: 100%;
  max-width: 500px;
  padding: 15px 25px;
  font-size: 1.1rem;
  border: 2px solid #e0e0e0;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 10px rgba(66, 185, 131, 0.1);
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
  transition: transform 0.3s ease;
  border: 1px solid #eee;
}

.book-card:hover {
  transform: translateY(-5px);
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
  letter-spacing: 1px;
}

.description {
  color: #666;
  font-size: 1rem;
  margin: 15px 0;
  line-height: 1.5;
}

.btn-add {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.btn-add:hover:not(:disabled) {
  background-color: #3aa876;
  transform: scale(1.02);
  box-shadow: 0 5px 15px rgba(66, 185, 131, 0.3);
}

.btn-add:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

.toast-notification {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #2c3e50;
  color: white;
  padding: 15px 30px;
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  z-index: 1000;
  font-weight: bold;
}

.toast-enter-active, .toast-leave-active {
  transition: all 0.4s ease;
}
.toast-enter-from, .toast-leave-to {
  opacity: 0;
  transform: translate(-50%, 30px);
}

.results-count {
  margin-bottom: 20px;
  color: #888;
  font-style: italic;
}

.loader {
  text-align: center;
  padding: 50px;
}
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #42b983;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 15px;
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.book-link {
  text-decoration: none;
  color: inherit;
}
.book-link:hover h3 {
  color: #42b983;
}
</style>