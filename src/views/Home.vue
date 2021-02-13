<template>
  <div class>
    <Header />
    <Form />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/DirectVisa/Header.vue";
import Form from "@/components/DirectVisa/Form.vue";
import Footer from "@/components/DirectVisa/Footer.vue";

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
</style>