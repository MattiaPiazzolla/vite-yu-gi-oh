<script>
import AppCard from './AppCard.vue';
import { store } from '../store.js';

export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppCard
    }
}
</script>

<template>
    <AppCard />
    <div class="container mt-4">
        <select name="archetype" id="" class="filterSelector">
            <option value="">-- Seleziona Tipo --</option>
            <option value="1">Melodious</option>
            <option value="2">Infernoble Arms</option>
            <option value="3">Noble Knight</option>
            <option value="4">Alien</option>    
        </select>
        <div class="mainContainer bg-light p-4 mt-4">
            <div class="foundCounter p-3 text-light">
                Found XXXXX cards
            </div>
            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 gx-3">
                <div class="col d-flex justify-content-center mb-3 " v-for="card in store.cardList" :key="card.id">
                    <div class="cardCustom">
                        <img :src="card.card_images[0].image_url" alt="Card Image">
                        <p class="mt-3 text-center text-light text-uppercase">
                            {{ card.name }}
                        </p>
                        <p class="text-center">
                            {{ card.archetype }}
                        </p>
                    </div>
                </div>
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