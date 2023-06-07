<!-- L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
# MILESTONE 1
Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.
#MILESTONE 2
Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.
#MILESTONE 3
In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;
#MILESTONE 4
Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!
# BONUS
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Note:
- questo bonus richiederà una riflessione extra per quel che riguarda il calcolo della larghezza delle celle ;)
Consigli del giorno:  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
 -->


# Campo minato
## Fase 1 - Preliminare
- Collegare gli elementi del DOM
- Creo 3 variabili differenti per la difficoltà: `easy`, `medium` e `hard` a cui assegnre il numero dei cicli per la generazione delle celle.

## Creo la funzione `createCell(numero)` per generare le celle in base al numero dato 
- **NELLA FUNZIONE**:
    - Creo una variabile d'appoggio `element` che conterrà il template literal
    - **CICLO FOR** tante volte quante indica la difficoltà selezionata:
        - Assegno ad `element` la stringa contenente la classe che richiamerà `numero` e come testo il valore di `i` che si aggiornerà ad ogni ciclo mostrando così il numero della cella selezionata.
    - *Ritorno* il la variabile `element` in cui sarà assegnata la stringa completa di tutte le celle.

# Fase 2 - Svolgimento
- **AL CLICK** del bottone play:
    - Creo la variabile `difficulty` in base all'input dell'utente.
    - Richiamo la funzione `createCell()` con argomento `difficulty` che genererà le celle e le stamperò nel DOM.
    - **AL CLICK** di una cella:
        - Prelevo il numero della cella e lo salvo nella variabile `selectedCell`.
        - Assegno la classe `.selected` alla cella selezionata colorerà di azzurro.
        - Stampo in console: `selectedCell`.

    