<template>
  <div>
    <span>name:{{userName}}</span>&emsp;
    <span>userId:{{user.user_id}}</span>&emsp;
    <span></span>&emsp;
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$store.state.user)
  },
  computed:{
    userName(){
      return this.$store.state.user.info.name
    }
  },
  data () {
    return {
      user:this.$store.state.user.info
    }
  }
}
</script>

