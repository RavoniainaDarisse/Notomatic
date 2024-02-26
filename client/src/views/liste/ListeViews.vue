<template>
    <div class="card">

        <!-- <router-link :to="'/details/' + note.id" v-for="note in nots" :key="note.id"> -->
            <div v-for="note in nots" :key="note.id">
            <div class="content_card">
                <div class="card_head">
                    <div class="title_card">
                        
                    <router-link :to="'/details/' + note._id" >
                        <h4>{{ note.Name }}</h4>
                        <div class="date">28/021/2024</div>
                    </router-link>
                    </div>
                    <div class="btn_remove">
                        <router-link :to="'/update/' + note._id" >Update </router-link> 
                    </div>
                </div>
                <div class="card_content">
                    
                    <router-link :to="'/details/' + note._id" > 
                    <p>{{ note.Descriptions }}</p>
                    </router-link>
                </div>
            </div>
            </div>

        <!-- </router-link> -->

    </div>
</template>
<script>

import { mapState } from "vuex";
import axios from 'axios'

export default {
    data() {
        return {
            nots: [],
        };
    },
    methods:{
        async getNotes(){
         const data= await axios.get('http://localhost:5000/api')
         
         this.nots=data.data
         console.log(data.data)
        }
    },
    beforeMount(){
        console.log(this.nots);
        this.getNotes();
    },

    computed: mapState({
        notes: state => state.note
    })

}
</script>
<style scoped>
.card {
    display: flex;
    flex-wrap: wrap;
    margin: 0 30Px;
    justify-content: center;
}

.content_card {
    margin: 20px;
    padding: 20px;
    /* border: 2px solid rgba(49, 48, 48, 0.514); */
    width: 300px;
    height: 300px;
    border-radius: 7px;
    background-color: white;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.card_head {
    display: flex;
    justify-content: space-between;
}

.title_card h4 {
    color: rgb(114, 111, 111);
    font-size: 20px;
    font-weight: 100;
    margin-bottom: 5px;
}

.title_card .date {
    color: rgba(66, 64, 64, 0.767);
    font-weight: 100;
    margin-bottom: 15px;
    font-size: 13px;
}

.card_content {
    color: rgb(66, 64, 64);
}

.card_content p {
    line-height: 1.5rem;
    color: rgba(20, 20, 20, 0.829);
    font-weight: 100;
}
</style>