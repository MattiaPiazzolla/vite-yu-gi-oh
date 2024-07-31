<script>
import { store } from '../store';

export default {
    data() {
        return {
            store
        }
    },
}
</script>
<template>
    <span>{{ store.cardList.length }}</span>
</template>
<style lang="">
    
</style>