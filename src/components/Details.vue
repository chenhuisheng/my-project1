<template>
    <div id="project">
        <button type="button" class="btn btn-xs"><a href="http://localhost:8080/#/project">返回</a></button>
        <div class="container">
            <div>
                <div class="card card-body">
                    <h5>{{data.title}}</h5>
                    2018-12-28 12:41:52<br/>
                    <div>
                        <i class="fas fa-user"></i>{{data.name}}
                    </div>
                    <p>{{data.body}}</p>
                    <div class="text-right">{{data.count}}</div>
                </div><br>
                <h5>评论详情</h5>
                <div class="card card-body" v-for="item in items" :key="item.id" v-show="item.postId === data.id">
                    <div><i class="fas fa-user"></i>{{item.name}}</div>
                    <p><i class="fas fa-comment-dots"></i>{{item.body}}</p>
                    <div class="text-right">2018-12-29 10:09:55</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        name: 'Details',
        data () {
            return {
                data:'',
                items:''
            }
        },
        created(){
            this.path(),
            this.getAllList()
        },
        methods:{
            getAllList(){
                var postId=this.$route.params.item.id
                axios.get("https://jsonplaceholder.typicode.com/comments", {params:{postId: postId}}).then(result=>{
                    this.items=result.data
                })
            },
            path(){
                this.data= this.$route.params.item
            }
        },
        }
</script>



