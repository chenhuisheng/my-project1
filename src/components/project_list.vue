<template>
    <div>
        <table class="table table-bordered table-hover table-stripet">
            <tr>
                <td>name</td>
                <td>title</td>
            </tr>
            <h6>{{page}}</h6>
            <tr v-for="detail in articles" :key="detail.id" >
                <td>{{detail.name}}</td>
                <td>
                <router-link :to="{ name: 'Details', params: { item: detail }}">{{detail.title}}</router-link>
                </td>
            </tr>
        </table>
        <h3>第{{page}}页</h3>
        <button v-if="page!=1" @click="page -=1; getAllList()" >上一页</button>
        <button v-if="page<20" @click="page +=1; getAllList()">下一页</button>
        <!-- <form @keyup.enter='page=data; getAllList()'>
            <input type="text" v-model="data">
        </form> -->
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
                data:''
            }
        },
        created(){
                    this.getAllList()
                },
        methods:{
            async getAllList(){
                var articles = await axios.get("https://jsonplaceholder.typicode.com/posts", {params: {_limit: 5, _page: this.page}})
                    this.articles=articles.data
                    this.getUser()
            },
            async getAuthor(id, i){
                var author = await axios.get("https://jsonplaceholder.typicode.com/users", {params:{id}})
                this.author=author.data
                this.userid=this.articles[i].userId
                this.$set(this.articles[i], 'name', this.author[0].name)
            },
            getUser(){
                for (var i=0; i<this.articles.length; i++){
                    this.getAuthor(this.articles[i].userId, i)
                }
            }
        }
        }
</script>


