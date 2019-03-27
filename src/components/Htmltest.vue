<template>
    <div>
        <ul>
            <li  @click="add" v-for="(item, index) in arr" :key="index" >{{item}}</li>
        </ul>
    </div>
    
    
</template>

<script>
    export default {
        name: '',
        data() {
            return {
                arr : [1,2]
            }
        },
        mounted() {
            this.getData()
        },
        methods: {
            getData () {
                this.$axios.get('/api/goods') //easy-mock的模拟出来的接口
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            },
            add () {
                this.arr[1]=0 ;
                console.log(this.arr)
            }
        },  
    }
</script>

<style lang="" scoped>
    
</style>