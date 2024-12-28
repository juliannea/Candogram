<template>
  <div>
    <h1>{{ title }}</h1>
    <TheButton 
        text = "Count"
        color = "green"
        @counterUp = "counterUp"
        />

    <div class = "big-text">
      {{ counter }}
    </div>
  </div>
</template>

<script>
import TheButton from "./TheButton"
export default{
  name: "TheHeader",
  props: ['title'],
  components: {
    TheButton
  },
  data(){
    return{
      counter: 0
    }
  },
  methods: {
    counterUp(){
      console.log('counterUp')
      this.counter++
    }
  }
}
</script>

<style scoped>
div{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.big-text {
  font-size: 3rem;  
  font-weight: bold;  
  color: #333;  
}
</style>