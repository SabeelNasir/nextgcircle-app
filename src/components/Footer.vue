<template>
  <footer class="footer shadow">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-6">
        <div class="footer__tabs">
          <div
            class="footer__tabs-tab"
            :class="{'footer__tabs-tab--active' : activeTab == 0}"
            @click="activeTab = 0"
          >
            <i class="material-icons">search</i>
            <span>Search</span>
          </div>
          <div
            class="footer__tabs-tab"
            :class="{'footer__tabs-tab--active' : activeTab == 1}"
            @click="activeTab = 1"
          >
            <i class="material-icons">translate</i>
            <span>Translate</span>
          </div>
          <div
            class="footer__tabs-tab"
            :class="{'footer__tabs-tab--active' : activeTab == 2}"
            @click="activeTab = 2"
          >
            <i class="material-icons">list</i>
            <span>Orders</span>
          </div>
          <div
            class="footer__tabs-tab"
            :class="{'footer__tabs-tab--active' : activeTab == 3}"
            @click="activeTab = 3"
          >
            <i class="material-icons">more_horiz</i>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0,
    };
  },
  methods: {},
};
</script>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: white;
  padding-left: 1rem;
  padding-right: 1rem;
}
@media (max-width: 650px) {
  .footer {
    height: 80px !important;
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