<template>
    <div id="project">
        <button type="button" class="btn btn-xs"><a href="http://localhost:8080/#/project">返回</a></button>
        <div>
            <div class="card">
                <h5>{{data.title}}</h5>
                2018-12-28 12:41:52<br/>
                <div>
                    <div style="float: left;"><span class="glyphicon glyphicon-user"></span>{{data.name}}</div>
                    <div style="float: right">{{data.count}}</div><div style="clear: both;"></div>
                </div>
                <p>{{data.body}}</p>
            </div><br>
            <h5>评论详情</h5>
            <div class="card" v-for="item in items" :key="item.id" v-show="item.postId === data.id">
                <div><span class="glyphicon glyphicon-user"></span>{{item.name}}</div>
                <p>{{item.body}}</p>
                <div class="text-right">2018-12-29 10:09:55</div>
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



