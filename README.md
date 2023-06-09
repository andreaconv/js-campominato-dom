Campo Minato
===

## CONSEGNA

Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell’esercizio ma solo l’index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l’inizializzazione di git).

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. **Attenzione**: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

---

### **BONUS:**

Aggiungere una `select` accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;

- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;

- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

>**Consigli del giorno:** 

Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

Ad esempio:

- Di cosa ho bisogno per generare i numeri?

- Proviamo sempre prima con dei `console.log()` per capire se stiamo ricevendo i dati giusti.

- Le validazioni e i controlli possiamo farli anche in un secondo momento.

---

## STEPS

1. Copiare la grigia fatta precedentemente copiando direttante i file dentro la cartella;
2. Aggiustare la `select` e il `button` *play*;
3. Creare la funzione `reset` da aggiungere al **click** del pulsante _play_;
4. Creare un `array` con i valori della `select`;
5. Creare una variabile per i punti;
6. Aggiustare il **click** sulla cella che può ripetersi una sola volta perciò aggiungere `.removeEventListene` per poter gestire l'incremento dei punti;
7. 

## AUTOVALUTAZIONE

Ho strutturato male lo script del progetto ed ora l'unica cosa che mi viene da pensare è di farlo tutto da capo. Sono così tante cose da fare che non so da dove cominciare ma soprattutto la maggior parte delle cose non so neanche come si fanno.