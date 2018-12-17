<template>
    <!-- <div id="app" @click="getAllList($event)"> -->
    <div>
        <h6>{{userid}}</h6>
        <table class="table table-bordered table-hover table-stripet">
            <tr>
                <td>name</td>
                <td>title</td>
            </tr>
            <tr v-for="detail in articles" :key="detail.id" >
                <td>{{detail.name}}</td>
                <td>
                <router-link :to="{ name: 'path', params: { item: detail }}">{{detail.title}}</router-link>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    import axios from "axios" 
    export default {
        name: 'project_list',
        data () {
            return {
                details:[],
                articles:[],
                author:[],
                userid:''
            }
        },
        created(){
                    this.getAllList()
                },
        methods:{
            async getAllList(){
                var articles = await axios.get("https://jsonplaceholder.typicode.com/posts")
                    this.articles=articles.data
                    this.getUser()
            },
            async getAuthor(id, i){
                var author = await axios.get("https://jsonplaceholder.typicode.com/users", {params:{id}})
                this.author=author.data
                this.userid=this.articles[i].userId
                this.articles[i].name=this.author[0].name
            },
            getUser(){
                for (var i=0; i<this.articles.length; i++){
                        this.getAuthor(this.articles[i].userId, i)
                    
                }
            }
        }
        }
</script>


