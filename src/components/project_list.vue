<template>
    <!-- <div id="app" @click="getAllList($event)"> -->
    <div>
        <table class="table table-bordered table-hover table-stripet">
            <tr>
                <td>name</td>
                <td>title</td>
            </tr>
            <tr v-for="detail in details" :key="detail.id" >
                <td>{{detail[0].name}}</td>
                <td>
                <router-link :to="{ name: 'path', params: { item: detail[0] }}">{{detail[0].title}}</router-link>
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
                author:[]
            }
        },
        created(){
                    this.getAllList()
                },
        methods:{
            getAllList(){
                axios.get("https://jsonplaceholder.typicode.com/posts").then(result=>{
                    this.articles=result.data,
                    this.getUser()});
            },
            getUser(){
                for (var i=0; i<this.articles.length; i++){
                        this.getAuthor(this.articles[i].userId, i)
                    }
            },
            getAuthor(id, i){
                axios.get("https://jsonplaceholder.typicode.com/users", {params:{id}}).then(result=>{
                        this.author=result.data
                        if(result.data[0]){
                            var name=result.data[0].name
                        }
                        else{var name=''}
                        this.details.push([{
                            id: this.articles[i].id,
                            title: this.articles[i].title,
                            body:this.articles[i].title,
                            name: name
                            }])
                        })
            }
        }
        }
</script>


