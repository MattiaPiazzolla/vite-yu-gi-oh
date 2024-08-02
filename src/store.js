import { reactive } from "vue";

export const store = reactive({
    apiUrlFull: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=150&offset=0",
    archetypesUrl: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    cardList: [],
    archetypes: [],
    selectedArchetype: "",
    loading: true,
});
