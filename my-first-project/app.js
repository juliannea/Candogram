const { createApp } = Vue;  // Correct import

const app = createApp({
  data() {
    return {
      message: "Hello World!!",
      counter: 0,
      cityList: [
        "New York",
        "Boston",
        "Chicago",
        "Atlanta"
      ].sort((a,b) => a.localeCompare(b)),
      showList: false // Add showList here to control the visibility
    };
  },
  methods: {
    changeMessage(){
      this.message = "Hello Bronx Aeorospace High School"
    }
  }
});

app.mount("#app");
