<script setup>
  import Carousel from './components/Carousel.vue';
  import Navbar from './components/Navbar.vue';
  import Cards from './components/Cards.vue';
  import ContactUs from './components/ContactUs.vue';
  import Footer from './components/Footer.vue';
</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <Carousel />
    <Cards />
    <ContactUs />
  </main>

  <footer>
    <Footer />
  </footer>
</template>