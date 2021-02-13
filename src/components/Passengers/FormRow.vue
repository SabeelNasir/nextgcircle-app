<template>
  <div class="ps__form-row" :class="classes">
    <div class="label__hint">
      <label for="" class="">{{ label }} </label>
      <span class="hint" v-if="hint">{{ hint }}</span>
    </div>
    <div class="counter" v-if="type == 'Number'">
      <button @click="addValue()" class="btn-circle-icon">
        <i class="material-icons text-theme pointer">add_circle_outline</i>
      </button>
      <span>{{ model }}</span>
      <button @click="removeValue()" class="btn-circle-icon">
        <i class="material-icons pointer">remove_circle_outline</i>
      </button>
    </div>
    <div v-else-if="type == 'Radio'">
      <label class="container">
        <input
          type="radio"
          :name="name"
          :value="value"
          @input="$emit('input', $event.target.value)"
        />
        <span class="checkmark"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    hint: {
      type: String,
      default: null,
    },
    value: {
      type: [Number, Boolean, String],
    },
    type: {
      type: String,
      default: "Number",
    },
    name: {
      type: String,
      default: "name",
    },
    classes: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      model: null,
    };
  },
  mounted() {
    this.model = this.value;
  },
  methods: {
    addValue() {
      this.$emit("input", this.model++);
    },
    removeValue() {
      if (this.model && this.model > 0) {
        this.$emit("input", this.model--);
      }
    },
  },
};
</script>

<style scoped>
/* Customize the label (the container) */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: var(--primary-color);
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>