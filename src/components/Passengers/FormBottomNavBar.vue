<template>
  <footer class="footer-sm">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-6">
        <div class="d-flex flex-column">
          <span class="text-center">{{ printModel() }}</span>
          <button
            class="btn btn-theme mt-2"
            type="button"
            @click="$router.push({ path: '/' })"
          >
            <div class="d-flex align-items-center justify-content-center p-1">
              Emphasis
            </div>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["data", "adults"],
  data() {
    return {
      activeTab: 0,
      model: null,
    };
  },
  mounted() {
    this.model = this.data;
  },
  methods: {
    printModel() {
      let status = "";
      if (this.model) {
        status += this.model.adults > 0 ? this.model.adults + " adults, " : "";
        status +=
          this.model.children > 0 ? this.model.children + " children, " : "";
        status += this.model.babies > 0 ? this.model.babies + " babies, " : "";
        status += this.model.tourists ? " Tourist, " : "";
        status += this.model.outstandingTourists
          ? " Outstanding Tourist, "
          : "";
        status += this.model.businessMen ? " Business Men, " : "";
      }
      return status;
    },
  },
};
</script>

<style scoped>
@media (max-width: 650px) {
  .footer-sm {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;
    background-color: white;
    padding-left: 1rem;
    padding-right: 1rem;
    box-shadow: 0.1rem 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, 0.1) !important;
  }
}
.footer__tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer__tabs-tab {
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  text-align: center;
  padding: 1rem;
}
.footer__tabs-tab:hover i {
  color: var(--primary-color) !important;
}
.footer__tabs-tab:hover span {
  color: var(--dark-color) !important;
}
.footer__tabs-tab--active {
  border-bottom: 4px solid var(--primary-color);
}
.footer__tabs-tab--active:hover {
  border-radius: 0 !important;
}
.footer__tabs-tab--active i {
  color: var(--primary-color) !important;
}
.footer__tabs-tab--active span {
  color: var(--dark-color) !important;
  font-weight: 600;
}
.footer__tabs-tab:hover {
  border-radius: 8px;
  background-color: var(--light-hover);
  cursor: pointer;
}
@media (max-width: 650px) {
  .footer__tabs-tab:hover {
    border-radius: 8px;
    background-color: white !important;
    cursor: pointer;
  }
}
.footer__tabs-tab span {
  font-size: 1rem;
  color: var(--icon-color);
}
.footer__tabs-tab i {
  padding-bottom: 0.2rem;
  color: var(--icon-color);
  font-size: 1.5rem;
}
@media (max-width: 650px) {
  .footer__tabs-tab span {
    font-size: 0.7rem !important;
  }
  .footer__tabs-tab i {
    font-size: 1rem;
  }
}
</style>