Esercizio di oggi: _Vite Yu-Gi-Oh_
nome repo: vite-yu-gi-oh
_Descrizione:_
Create un nuovo progetto utilizzando Vite e Vue 3 e definite i componenti necessari per strutturare il layout come da screenshot allegato.
Al caricamento della pagina, effettuate una chiama ajax all'API di Yu Gi Oh: https://db.ygoprodeck.com/api/v7/cardinfo.php
e con i dati restituiti, stampate una card per ogni carta.
_ATTENZIONE_: l’api restituisce tutti i risultati in un colpo solo. Per evitare attese e/o rallentamenti nelle richieste, potete diminuire il numero di risultati sfruttando i parametri num e offset
https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0
_Bonus:_
Creare un componente loader da visualizzare fintantoché i risultati non sono pronti.
_Documentazione_: https://ygoprodeck.com/api-guide/
Numero di push minimo: 12

SCOMPOSIZIONE DEL PROBLEMA
1- Definisco la struttura dell'app principale  
1.1 Installo tutti i pacchetti necessari
1.2 Importo i pacchetti installati
2- Creo tutte le componenti per ogni sezione
2.1 Creo lo store.js per gestire la chiamata api
3- Creo la componente per gestire la visualizzazione di ogni carta
3.1. Importo i componenti Card nell'app principale
3.2. Definisco la struttura e lo stile per visualizzare i dettagli di ogni carta
3.3. Definisco il componente per accettare un oggetto card come prop e visualizzare i dati della carta
4- Definisco lo stile e la logica finale
