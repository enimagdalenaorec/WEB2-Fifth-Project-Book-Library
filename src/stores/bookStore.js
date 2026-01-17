import { defineStore } from 'pinia'

export const useBookStore = defineStore('bookStore', {
  state: () => ({
    books: [],
    favorites: [],
    loading: false
  }),
  actions: {
    // simuliram asinkroni dohvat podataka s backenda 
    async fetchBooks() {
      this.loading = true
      // simulacija kašnjenja mreže od 1 sekunde kako b ise primijetila asinkronost
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      this.books = [
      { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A story of wealth and love in the Roaring Twenties.' },
      { id: 2, title: '1984', author: 'George Orwell', description: 'A chilling prophecy about the future of surveillance.' },
      { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', description: 'An unexpected journey of a hobbit to reclaim a kingdom.' },
      { id: 4, title: 'Brave New World', author: 'Aldous Huxley', description: 'A dystopian vision of a genetically engineered society.' },
      { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', description: 'A classic novel of manners and marriage.' },
      { id: 6, title: 'The Catcher in the Rye', author: 'J.D. Salinger', description: 'A story of teenage rebellion and alienation.' },
      { id: 7, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A profound look at racial injustice in the American South.' },
      { id: 8, title: 'Fahrenheit 451', author: 'Ray Bradbury', description: 'A world where books are outlawed and burned.' },
      { id: 9, title: 'Moby Dick', author: 'Herman Melville', description: 'An obsessive quest to hunt the great white whale.' },
      { id: 10, title: 'War and Peace', author: 'Leo Tolstoy', description: 'The history of the French invasion of Russia.' },
      { id: 11, title: 'The Alchemist', author: 'Paulo Coelho', description: 'A journey of self-discovery and following your dreams.' },
      { id: 12, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', description: 'The mental anguish and moral dilemmas of a killer.' },
      { id: 13, title: 'Little Women', author: 'Louisa May Alcott', description: 'The lives of four sisters growing up during the Civil War.' },
      { id: 14, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', description: 'An epic quest to destroy the One Ring.' },
      { id: 15, title: 'Dune', author: 'Frank Herbert', description: 'A complex story of politics and religion on a desert planet.' },
      { id: 16, title: 'The Handmaid’s Tale', author: 'Margaret Atwood', description: 'A dystopian vision of a future patriarchal society.' },
      { id: 17, title: 'Jane Eyre', author: 'Charlotte Brontë', description: 'The story of an orphaned girl becoming a strong woman.' },
      { id: 18, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', description: 'A man who stays young while his portrait ages.' },
      { id: 19, title: 'Frankenstein', author: 'Mary Shelley', description: 'The tragic tale of a scientist and his creature.' },
      { id: 20, title: 'Dracula', author: 'Bram Stoker', description: 'The definitive vampire story of Count Dracula.' },
      { id: 21, title: 'The Chronicles of Narnia', author: 'C.S. Lewis', description: 'Children discover a magical world inside a wardrobe.' },
      { id: 22, title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', description: 'A philosophical novel about faith and free will.' },
      { id: 23, title: 'Great Expectations', author: 'Charles Dickens', description: 'The growth and personal development of an orphan named Pip.' },
      { id: 24, title: 'Wuthering Heights', author: 'Emily Brontë', description: 'A tale of intense and destructive love.' },
      { id: 25, title: 'The Stranger', author: 'Albert Camus', description: 'A novel exploring the concept of the absurd.' }
    ]
      this.loading = false
    },
    addToFavorites(book) {
      if (!this.favorites.find(b => b.id === book.id)) {
        this.favorites.push(book)
      }
    },
    removeFromFavorites(bookId) {
      this.favorites = this.favorites.filter(b => b.id !== bookId)
    }
  }
})