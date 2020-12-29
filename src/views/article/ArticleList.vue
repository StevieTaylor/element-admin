<template>
  <div>
    <el-table :data="articles" style="width: 100%">
      <el-table-column prop="title" label="标题" width="200">
      </el-table-column>
      <el-table-column prop="content" label="内容" width="900">
      </el-table-column>
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <el-button @click="editArticle(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button @click="deleteArticle(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$http.get('/articles').then((res) => {
        this.articles = res.data;
      })
    },
    editArticle(articleId) {
      this.$router.push(`/article/${articleId}/edit`);
    },
    delete(articleId) {
      this.$http.delete(`/articles/${articleId}`).then(() => {
        this.$message({
          message: '删除文章成功',
          type: 'success'
        });
        this.fetchData();
      })
    },
    deleteArticle(articleId) {
      this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.delete(articleId);
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>

<style scoped>
</style>