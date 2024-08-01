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

Giorno 2
_Descrizione:_
Continuate a lavorare nella stessa repo di ieri e aggiungete una select per filtrare i risultati in base all’archetipo.
Le option della select devono essere popolate dinamicamente chiamando questo endpoint dell'api:
https://db.ygoprodeck.com/api/v7/archetypes.php
Quando l'utente seleziona un valore dalla lista, viene effettuata una chiamata alle API con l'archetipo selezionato
_Bonus:_
Creare un componente che mostri il numero totale di risultati ottenuti.
_Nota_:
Per capire come comunicare alle API le carte dell'archetipo che volete, è necessario fare riferimento alla documentazione che trovate qui:
https://ygoprodeck.com/api-guide/

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

giorno 2

1- Aggiorno lo store.js per gestire gli archetipi e le chiamate api filtrate
1.2. Aggiungo la gestione dell'archetipo nella logica dell'app principale
2- Aggiungo la struttura select per filtrare gli archetipi
2.1 Creo una componente per inserire iil filtraggio degli archetipi in maniera dinamica
