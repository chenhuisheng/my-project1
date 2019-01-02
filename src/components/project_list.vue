<template>
    <div class="container">
        <div  v-for="detail in articles" :key="detail.id" >
            <div class="card card-body">
                <router-link :to="{ name: 'Details', params: { item: detail }}">{{detail.title}}</router-link>
                2018-12-28 12:41:52<br/>
                <project1 :name="detail.name" :count="detail.count"></project1>
            </div>
        </div>
        <h3>第{{page}}页</h3>
        <button v-if="page!=1" @click="page -=1; getAllList()" >上一页</button>
        <button v-if="page<20" @click="page +=1; getAllList()">下一页</button>    
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: 'project_list',
        data () {
            return {
                details: [],
                articles: [],
                author: [],
                page: 1,
            }
        },
        created(){
                    this.getAllList()
                },
        methods:{
            async getAllList(){
                var articles = await axios.get("https://jsonplaceholder.typicode.com/posts", {params: {_limit: 5, _page: this.page}})
                    this.articles=articles.data
                    console.log(articles)
                    this.getUser()
            },
            async getAuthor(id, i){
                var author = await axios.get("https://jsonplaceholder.typicode.com/users", {params:{id}})
                this.author=author.data
                this.userid=this.articles[i].userId
                this.$set(this.articles[i], 'name', this.author[0].name)
            },
            async getcomments(id, i){
                var author = await axios.get("https://jsonplaceholder.typicode.com/comments", {params:{postId: id}})
                this.$set(this.articles[i], 'count', author.data.length)
            },
            getUser(){
                for (var i=0; i<this.articles.length; i++){
                    this.getAuthor(this.articles[i].userId, i)
                    this.getcomments(this.articles[i].id, i)
                }
            }
        },
        components:{
            'project1': {
                template: `<div>
                    <div style="float: left;"><i class="fas fa-user"></i>{{name}}</div>
                    <div class="float-right">{{count}}</div>
                </div>`,
                props: ['name', 'count']
        }}
        }
</script>


