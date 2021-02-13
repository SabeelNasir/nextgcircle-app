<template>
  <div class="header shadow">
    <div class="d-flex flex-column">
      <span>Direct Visa</span>
      <div class="header__tabs">
        <div
          class="header__tabs-tab"
          :class="{'header__tabs-tab--active' : activeTab == 0}"
          @click="activeTab = 0"
        >
          <i class="material-icons">home</i>
          <span>Visas</span>
        </div>
        <div
          class="header__tabs-tab"
          :class="{'header__tabs-tab--active' : activeTab == 1}"
          @click="activeTab = 1"
        >
          <i class="material-icons">group_work</i>
          <span>Visas</span>
        </div>
        <div
          class="header__tabs-tab"
          :class="{'header__tabs-tab--active' : activeTab == 2}"
          @click="activeTab = 2"
        >
          <i class="material-icons">home</i>
          <span>Visas</span>
        </div>
      </div>
    </div>
  </div>
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
.header {
  display: flex;
  justify-content: center;
  background-color: white;
  padding: 1rem 1rem 0 1rem;
  text-align: center;
}
.header span {
  color: #303030;
  font-weight: bold;
  font-size: 1.5rem;
}
.header__tabs {
  display: flex;
  /* padding: 1rem; */
  align-items: center;
}
.header__tabs-tab {
  display: flex;
  flex-direction: column;
  margin-right: 1rem;
  text-align: center;
  padding: .7rem;
}
.header__tabs-tab:hover i {
  color: var(--primary-color) !important;
}
.header__tabs-tab:hover span {
  color: var(--dark-color) !important;
}
.header__tabs-tab--active {
  border-bottom: 4px solid var(--primary-color);
}
.header__tabs-tab--active:hover {
  border-radius: 0 !important;
}
.header__tabs-tab--active i {
  color: var(--primary-color) !important;
}
.header__tabs-tab--active span {
  color: var(--dark-color) !important;
  font-weight: 600;
}
.header__tabs-tab:hover {
  border-radius: 8px;
  background-color: var(--light-hover);
  cursor: pointer;
}
.header__tabs-tab span {
  font-size: 1rem;
  color: var(--icon-color);
}
.header__tabs-tab i {
  padding-bottom: .2rem;
  color: var(--icon-color);
  font-size: 1.5rem;
}
</style>