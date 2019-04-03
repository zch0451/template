<template>
  <div class="error-page">
    <div class="content-con">
      <img :src="src" :alt="code">
      <div class="text-con">
        <h4>{{ code }}</h4>
        <h5>{{ desc }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error_content',
  props: {
    code: String,
    desc: String,
    src: String
  }
}
</script>
