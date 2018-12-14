<template>
    <div id="app">
        <table class="table table-bordered table-hover table-stripet">
            <tr>
                <td>Id</td>
                <td>title</td>
            </tr>
            <tr v-for="item in times" :key="item.id">
                <td>{{item.id}}</td>
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
                times:'123'
            }
        },
        created(){
                    this.getAllList()
                },
        methods:{
            getAllList(){
                axios.get("https://jsonplaceholder.typicode.com/posts").then(result=>{
                    this.times=result.data
                })
            }
        },
        }
</script>


