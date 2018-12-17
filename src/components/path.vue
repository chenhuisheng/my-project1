<template>
    <div id="project">
        <h5><a href="http://localhost:8080/#/project">返回</a> name: {{data.name}} 标题： {{data.title}} </h5>
        <h5> 内容： {{data.body}}</h5>
        <table class="table table-bordered table-hover table-stripet">
            <tr>
                <td>email</td>
                <td>评论内容</td>
            </tr>
            <tr v-for="item in items" :key="item.id" v-show="item.postId === data.id">
                    <td>{{item.email}}</td>
                    <td>{{item.body}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: 'path',
        data () {
            return {
                data:'',
                items:''
            }
        },
        created(){
            this.getAllList(),
            this.path()
        },
        methods:{
            getAllList(){
                axios.get("https://jsonplaceholder.typicode.com/comments").then(result=>{
                    this.items=result.data
                })
            },
            path(){
                this.data=this.$route.params.item
            }
        },
        }
</script>



