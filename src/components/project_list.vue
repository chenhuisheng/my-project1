<template>
    <!-- <div id="app" @click="getAllList($event)"> -->
    <div>
        <table class="table table-bordered table-hover table-stripet">
            <tr>
                <td>name</td>
                <td>title</td>
            </tr>
            <tr v-for="item in times" :key="item.id" >
                <td>{{item.name}}</td>
                <td>
                <router-link :to="{ name: 'path', params: { item: item }}">{{item.title}}</router-link>
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
                times:[],
                data:[],
                ment:[],
                item:''
            }
        },
        created(){
                    this.getAllList()
                },
        methods:{
            getAllList(){
                axios.get("https://jsonplaceholder.typicode.com/posts").then(result=>{
                    this.data=result.data,
                    this.get_user()});
            },
            get_user(){
                for (var i=0; i<this.data.length; i++){
                    var id = this.data[i].userId
                    this.get_ment(id, i)
                    }
            },
            get_ment(id, i){
                axios.get("https://jsonplaceholder.typicode.com/users", {params:{id}}).then(result=>{
                        this.ment=result.data;
                        var name =result.data[0].name;
                        this.times.push({
                            id: this.data[i].id,
                            title: this.data[i].title,
                            body:this.data[i].title,
                            name: name
                            })
                        })
            }
        }
        }
</script>


