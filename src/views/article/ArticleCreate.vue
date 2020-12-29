<template>
  <div>
    <el-form ref="form" :model="article" label-width="80px" @submit.native.prevent="saveArticle()">
      <el-form-item label="文章标题">
        <el-input v-model="article.title"></el-input>
      </el-form-item>
      <el-form-item label="文章内容">
        <el-input type="textarea" v-model="article.content"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">立即创建</el-button>
        <el-button @click="cancel()">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title: '',
        content: '',
      }
    }
  },
  methods: {
    saveArticle() {
      this.$http.post('/articles', this.article).then(res => {
        console.log(res.data);
        this.$message({
          message: '创建文章成功',
          type: 'success'
        });
        this.$router.push('/article/list');
      })
    },
    cancel() {
      this.$router.push('/article/list');
    }
  }
}
</script>

<style scoped>
</style>