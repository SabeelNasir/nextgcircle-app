<template>
  <div class="ps__form">
    <div class="header shadow">
      <span>&nbsp;</span>
      <span>Passengers and Economy Class</span>
      <div class="header__cancel">
        <i class="material-icons icon__btn" @click="$router.back()">clear</i>
      </div>
    </div>
    <div class="form__container">
      <div class="card shadow">
        <div class="card-body">
          <h4>Passengers</h4>
          <div class="row">
            <div class="col-12 col-lg-6">
              <FormRow
                label="Adults"
                hint="12 years and over"
                :value="model.adults"
                @input="model.adults = $event"
                classes="ps__form-row--bb"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6">
              <FormRow
                label="Children"
                hint="11-12 years old"
                :value="model.children"
                @input="model.children = $event"
                classes="ps__form-row--bb"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6">
              <FormRow
                label="Baby"
                hint="Under 2 years old"
                :value="model.babies"
                @input="model.babies = $event"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mt-2 card shadow">
        <div class="card-body">
          <h4>Economy Class</h4>
          <div class="row">
            <div class="col-12 col-lg-6">
              <FormRow
                label="Tourist"
                :value="model.tourists"
                @input="model.tourists = $event"
                name="eco-checkbox"
                type="Radio"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6">
              <FormRow
                label="Outstanding Tourist"
                :value="model.outstandingTourists"
                @input="model.outstandingTourists = $event"
                name="eco-checkbox"
                type="Radio"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-12 col-lg-6">
              <FormRow
                label="Business Men"
                :value="model.businessMen"
                @input="model.businessMen = $event"
                name="eco-checkbox"
                type="Radio"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <form-bottom-nav-bar :data="model" />
  </div>
</template>
<script>
import FormRow from "@/components/Passengers/FormRow.vue";
import FormBottomNavBar from "@/components/Passengers/FormBottomNavBar.vue";
export default {
  components: {
    FormRow,
    FormBottomNavBar,
  },
  data() {
    return {
      model: {
        adults: 1,
        children: 0,
        babies: 0,
        tourists: false,
        outstandingTourists: false,
        businessMen: false,
      },
    };
  },
};
</script>
<style scoped>
@import "./PassengersForm.css";
</style>