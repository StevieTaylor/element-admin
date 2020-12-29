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
        <el-button type="primary" native-type="submit">保存</el-button>
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
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$http.get(`/articles/${this.$route.params.id}`).then((res) => {
        this.article = res.data;
      })
    },
    saveArticle() {
      this.$http.put(`/articles/${this.$route.params.id}`, this.article).then(() => {
        this.$message({
          message: '更新文章成功',
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