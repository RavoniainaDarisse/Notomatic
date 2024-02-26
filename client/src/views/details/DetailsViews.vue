<template>
    <div v-for="note in data" :key="note.id" class="details">
        <div class="details_title">
            <h1>{{ note.Name }} </h1>
            <div></div>
            <div></div>
        </div>
        <div class="details_content">
            <p>{{ note.Descriptions }}</p>
        </div>
        
        <div class="btn_remove">
            <input
            @click="handleDelete(note._id)"
            type="submit"
            value="Remove">
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            data:[]
        }
    },
    methods:{
        async getOneNote(){
            const id = this.$route.params.id
            console.log(id);
            const datas =  await axios.get(`http://localhost:5000/api/${id}`)
            this.data=datas.data
            
        },
        handleDelete(id){
            axios.delete(`http://localhost:5000/api/delete/${id}`)
            .then(res=>{
                console.log(res);
                this.$router.push('/home')
            }).catch(error=>{
                console.log(error);
            })
        }
    },
    beforeMount(){

        this.getOneNote()
        console.log(this.Name);
    }
}
</script>

<style scoped>
.details {
    margin: 60px 80px;
    background-color: white;
    padding: 40px;
    box-shadow: 2px 1px 4px 1px rgba(0, 0, 0, 0.02);
    border-radius: 2px;
}

.details_title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.details_title h1 {
    font-weight: 200;
}

.details_content p {
    line-height: 1.5rem;
    color: rgb(78, 77, 77);
}
</style>