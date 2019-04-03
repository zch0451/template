<template>
  <div>
    <div class="form-group">
      <label>用户名：</label>
      <input type="text" name="userName" v-model="userName">
    </div>
    <div class="form-group">
      <label>密&emsp;码：</label>
      <input type="password" name="password" v-model="password">
    </div>
    <div class="form-group">
      <Button @click="handleSubmit" type="button">登录</Button>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';
export default {
  name: 'login',
  data () {
    return {
      userName:'',
      password:''
    }
  },
  methods:{
    ...mapActions([
      'handleLogin',
      'getUserInfo'
    ]),
    handleSubmit:function(){
      this.handleLogin({
        userName: this.userName,
        password: this.password
      }).then((res)=>{
        this.getUserInfo().then(res=>{
          this.$router.push({
            name:'personCenter'
          })
        })
      })
    }
  }
}
</script>

