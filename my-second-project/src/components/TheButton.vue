<template>
  <div>
    <button 
            @click="changeCounter"
            class = "btn"
            :style = "{backgroundColor: color}"
    >
      {{ text }}
  </button>
  </div>
</template>

<script>
export default{
  name: "TheButton",
  props: ['text', 'color'],
  emits: ['counterUp'],
  methods: {
    changeCounter(){
      this.$emit('counterUp')
    }
  }
}
</script>