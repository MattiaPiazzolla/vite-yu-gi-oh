<script>
import AppCard from './AppCard.vue';
import { store } from '../store.js';
import AppCounterCard from './AppCounterCard.vue';
import AppLoader from './AppLoader.vue';
import AppTypeSelect from './AppTypeSelect.vue';

export default {
    data() {
        return {
            store
        }
    },
    emits:['filter'],

    methods: {
        valueArche(){
            this.$emit('filter')
        }
    },
    components: {
        AppCard,
        AppCounterCard,
        AppLoader,
        AppTypeSelect,
    }
}
</script>

<template>
    <div class="container mt-4">
        <select name="archetype" class="filterSelector" v-model="store.selectedArchetype" @change="valueArche()">
            <option value="" selected>-- Seleziona Tipo --</option>
            <AppTypeSelect v-for="archetype, index in store.archetypes" :key="index" :archetype="archetype"/>

            <!-- <option v-for="archetype, index in store.archetypes" value="archetype.archetype_name" :key="index">{{ archetype.archetype_name }}</option> -->
            
        </select>
        <div class="mainContainer bg-light p-4 mt-4">
            <div class="foundCounter p-3 text-light mt-4">
                Found <AppCounterCard /> cards
            </div>
            <div class="row justify-content-center mt-5" v-if="store.loading">
                <AppLoader />
            </div>
            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 gx-3" v-else>
                <AppCard v-for="card in store.cardList" :key="card.id" :card="card"/>

                <!-- <div class="col d-flex justify-content-center mb-3 " v-for="card in store.cardList" :key="card.id">
                    <div class="cardCustom">
                        <img :src="card.card_images[0].image_url" alt="Card Image">
                        <p class="mt-3 text-center text-light text-uppercase">
                            {{ card.name }}
                        </p>
                        <p class="text-center">
                            {{ card.archetype }}
                        </p>
                    </div>
                </div> -->
                
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .filterSelector{
        padding: 7.5px 2.5px ;
        border: 0px;
        border-radius: 5px;
        background-color: #fff;
        width: auto;
    }
    .foundCounter{
        background-color: #212429;
        font-size: 0.8rem;
    }
    .cardCustom{
        width: 100%;
        p{
            font-size: 0.7rem;
            font-weight: 700;
        }
        img{
            width: 100%;
        }
    }
</style>