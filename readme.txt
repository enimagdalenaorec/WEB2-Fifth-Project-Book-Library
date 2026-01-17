a) URL aplikacije : 

b) Upute za lokalno pokretanje:
	1. Raspakirati .zip datoteku
	2. U terminalu unutar mape projekta pokrenuti naredbu: npm install
	3. Nakon instalacije pokrenuti naredbu: npm run dev
	4. Aplikacija će biti dostupna na adresi koja se ispiše u terminalu (obično http://localhost:5173)

c) Lista svojstva:

1. interpolation/one-way binding - Da, src/components/BookCard.vue, linije 28, 30 i 31 (prikaz naslova i autora knjige)

2. two-way binding - Da, src/views/HomeView.vue, linije 44 - 49 (varijabla "searchQuery" je dvosmjerno povezana s input poljem preko v-model)

3. methods - Da, src/stores/bookStore.js, linije 45 i 50 (metode addToFavorites i removeFromFavorites)

4. computed properties - Da, src/views/HomeView.vue, linije 13-19 (computed property "filteredBooks" automatski filtrira listu knjiga prema unosu u search bar)

5. barem jedan scoped style - Da, svaka komponenta koristi scoped style, primjer: src/components/BookCard.vue, linija 44

6. koristiti barem jedan lifecycle hook - Da, src/views/HomeView.vue, linije 30-34 (koristi se onMounted() za inicijalno pokretanje asinkronog dohvata podataka)

7. routing (više stranica) i bookmarkable - Da, konfigurirano u src/router/index.js, linije 12 - 28 (rade direktni linkovi na /favorites i na specifične knjige /book/:id)

8. dinamičko usmjeravanje s 404 stranicom - Da, src/router/index.js, linije 18 - 22 (dinamička ruta za knjigu) i linija 24 - 28 (catch-all ruta koja vodi na NotFoundView.vue)

9. barem dvije komponente (sa stanjem i bez) - Da:
   - Komponenta bez stanja: src/components/BookCard.vue (prima podatke preko props-a, linija 2)
   - Komponenta sa stanjem: src/views/HomeView.vue (upravlja lokalnim stanjem za toast notifikaciju preko ref-a, linija 10)

10. barem jedna komponenta emitira event - Da, src/components/BookCard.vue, linije 17 - 21 (komponenta emitira 'button-clicked' event roditelju)

11. store (Pinia) - Da, src/stores/bookStore.js upravlja stanjem cijele aplikacije (popis knjiga i favoriti, linija 3)

12. asinkroni dohvat podataka - Da, src/stores/bookStore.js, linije 11 - 44 (simulacija asinkronog poziva/backenda pomoću Promise objekta i setTimeout funkcije)

13. asinkrono (lazy) učitavanje - Da, src/router/index.js, linije 16, 21 i 27 (koristi dinamički import () => import(...) za učitavanje stranica po potrebi)