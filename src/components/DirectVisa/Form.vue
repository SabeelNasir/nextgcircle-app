<template>
  <div class="form__container">
    <div class="form-group">
      <div class="way__options">
        <div
          class="way__options-option"
          v-for="(item, index) in wayOptions"
          :key="index"
          :class="{
            'way__options-option--active': item.value == model.wayOption,
          }"
          @click="model.wayOption = item.value"
        >
          {{ item.label }}
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="airport__selection shadow">
            <div class="inputs">
              <div class="input__group">
                <i class="material-icons">location_on</i>
                <div class="material__input">
                  <input type="text" required v-model="model.city" />
                  <label>City</label>
                </div>
              </div>
              <div class="divider"></div>
              <!-- <div class="divider"></div> -->
              <div class="input__group">
                <i class="material-icons">location_on</i>
                <div class="material__input">
                  <input type="text" required v-model="model.airport" />
                  <label>Airport</label>
                </div>
              </div>
            </div>
            <span class="active p-2">
              <i class="material-icons">compare_arrows</i>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-6">
          <div class="input__group shadow">
            <i class="material-icons">arrow_forward</i>
            <div class="material__input">
              <input type="text" required v-model="model.startDate" />
              <label>Start Date</label>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="input__group shadow">
            <i class="material-icons">arrow_forward</i>
            <div class="material__input">
              <input type="text" required v-model="model.endDate" />
              <label>End Date</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="input__group shadow">
            <i class="material-icons">people</i>
            <div class="material__input">
              <input type="text" required />
              <label>Number of passengers</label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="d-flex justify-content-between">
            <span>Show only tours</span>
            <input type="checkbox" class="form__checkbox" />
          </div>
        </div>
      </div>
    </div>

    <div class="form-group">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-6">
          <button
            class="btn btn-theme"
            type="button"
            @click="$router.push({ path: '/passengers/new' })"
          >
            <div class="d-flex align-items-center p-1">
              <i class="material-icons">search</i>
              Search for flights
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        wayOption: 0,
      },
      wayOptions: [
        { label: "One Way", value: 0 },
        { label: "Two Way", value: 1 },
        { label: "Three Way", value: 2 },
      ],
    };
  },
};
</script>

<style scoped>
.form__container {
  margin-bottom: 100px;
}
.way__options {
  display: flex;
}
.way__options-option {
  border-radius: 8px;
  background-color: var(--light-hover);
  padding: 6px;
  margin-right: 0.5rem;
  cursor: pointer;
}
.way__options-option--active {
  background-color: var(--secondary-color) !important;
  color: var(--primary-color) !important;
}
.dates__selection {
  display: flex;
}

.airport__selection {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: white;
}
.airport__selection .active {
  color: var(--primary-color);
}
.airport__selection .inputs {
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>