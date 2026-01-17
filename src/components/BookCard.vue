<script setup>
// PROPS: Komponenta prima objekt 'book' i tekst za gumb
defineProps({
  book: {
    type: Object,
    required: true
  },
  buttonText: {
    type: String,
    default: 'Add to Favorites'
  },
  isFavorite: {
    type: Boolean,
    default: false
  }
})

// EMITS: Komponenta javlja roditelju da je gumb kliknut
const emit = defineEmits(['button-clicked'])

const handleAction = () => {
  emit('button-clicked')
}
</script>

<template>
  <div class="book-card">
    <div class="book-info">
      <RouterLink :to="'/book/' + book.id" class="book-link">
        <h3>{{ book.title }}</h3>
      </RouterLink>
      <span class="author">by {{ book.author }}</span>
      <p class="description">{{ book.description }}</p>
    </div>
    
    <button 
      @click="handleAction" 
      :disabled="isFavorite && buttonText === 'Add to Favorites'"
      :class="['btn-action', { 'btn-remove': buttonText !== 'Add to Favorites' }]"
    >
      {{ isFavorite && buttonText === 'Add to Favorites' ? 'Already in Favorites' : buttonText }}
    </button>
  </div>
</template>

<style scoped>
/* Tu prebaci onaj CSS za .book-card, .author, .btn-action itd. koji smo koristili */
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

.book-link {
  text-decoration: none;
  color: inherit;
}

.book-link:hover h3 {
  color: #42b983;
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

.btn-action {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-action:hover:not(:disabled) {
  background-color: #3aa876;
  transform: scale(1.02);
}

.btn-action:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}

/* Stil za gumb kad je crven (Remove) */
.btn-remove {
  background-color: #ff4757;
}
.btn-remove:hover {
  background-color: #ff6b81 !important;
}
</style>