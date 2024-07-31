<script>
export default {
    props: {
        card: Object,
    }
}
</script>

<template>
    <div class="col d-flex justify-content-center mb-3 ">
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
</template>

<style lang="scss" scoped>
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