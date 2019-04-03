<template>
  <div>
    <span>name:{{userName}}</span>&emsp;
    <span>userId:{{user.user_id}}</span>&emsp;
    <button @click="logout">退出登入</button>
  </div>
</template>
<script>
  import {mapActions} from 'vuex';
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
  },
  methods:{
    ...mapActions([
      'handleLogOut'
    ]),
    logout(){
      this.handleLogOut().then(res=>{
        this.$router.push({"name":'login'})
      })
    }
  }
}
</script>

