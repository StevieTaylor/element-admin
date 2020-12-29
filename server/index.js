const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/element-admin-mongo', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// 文章的数据模型
const Article = mongoose.model('Article', new mongoose.Schema({
    title: { type: String },
    content: { type: String }
}))

app.get('/', async (req, res) => {
    res.send('index')
})

// 获取文章列表
app.get('/api/articles', async (req, res) => {
    const articles = await Article.find();
    // 将文章列表返回给客户端
    res.send(articles);
})

// 创建文章
app.post('/api/articles', async (req, res) => {
    // 异步获取请求的请求体
    const article = await Article.create(req.body);
    res.send(article);
})

// 删除文章
app.delete('/api/articles/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.send({
        status: true
    })
})

// 文章详情
app.get('/api/articles/:id', async (req, res) => {
    const article = await Article.findById(req.params.id);
    res.send(article);
})

// 修改文章
app.put('/api/articles/:id', async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body);
    res.send(article);
})

app.listen(3001, () => {
    console.log('server start success')
})
