<template>
  <div id="app">
    <div class>
      <Header />
      <Form />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Form,
    Footer,
  },
};
</script>

<style>
@import "./assets/colors.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  color: var(--dark-color);
  font-size: 14px !important;
}
</style>
