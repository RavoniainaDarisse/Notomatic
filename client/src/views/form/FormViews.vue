<template>
    <div>
        <div class="formNote">
            <form action="" @submit="handlesubmit">
            <div class="form">
                <h1>Create note</h1>
                    <label for="title">Title</label>
                    <input type="text" v-model="Name" name="title" id="title">
                    <label for="content">Content</label>
                    <textarea v-model="Descriptions" name="" id="" cols="100" rows="5"></textarea>
                    <button type="submit">Save notes</button>
            </div>
           </form>
        </div>
    </div>
    <!-- <FormComponent 
    title="Create note" 
    btn="Save notes" 
    :Name="Name" 
    :Descriptions="Descriptions"/> -->
</template>

<script>

import axios from "axios";
// import FormComponent from "@/components/FormComponent.vue";
export default{

    // components: {
    //     FormComponent
    // },
    data(){
        return{
            Name:'',
            Descriptions:''
        }
    },
    methods:{
    handlesubmit(e){
        e.preventDefault();

        const Data ={
            Name:this.Name,
            Descriptions:this.Descriptions
        }
        axios.post('http://localhost:5000/api/create',Data)
        .then(res =>{
            console.log("Ajout Success"+res);
            this.$router.push('/home')
        }).catch(error =>{
            console.error(error+"Echec Ajout")
        })
    }
    }
} 

</script>


<style scoped>
.formNote{
    display: flex;
    background-color: white;
    margin: 50px;
    box-shadow: 2px 1px 4px 1px rgba(0,0,0,0.02);
    border-radius: 2px;
}
.form{   
    display: flex;
    flex-direction: column;
    padding: 20px;
}
.form h1{
    color: rgba(66, 64, 64, 0.767);
    font-weight: 100;
    font-size: 30px;
    margin-bottom: 10px;
    color: rgb(50, 137, 219);
}
label{
    margin: 10px 0;
    color: rgba(66, 64, 64, 0.767);
}
#title{
    width: 300px;
    height: 50px;
    border: 1px solid rgba(49, 48, 48, 0.514);
    border-radius: 5px;
    padding: 12px;
}
textarea{
    border: 1px solid rgba(49, 48, 48, 0.514);
    border-radius: 5px;
    padding: 12px;
}
button{
    background-color: rgb(50, 137, 219);
    color: white;
    border: none;
    width: 10rem;
    height: 3rem;
    border-radius: 20px;
    margin-top: 20px;
    cursor: pointer;
}
</style>