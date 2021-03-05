
/*0. Qui definisco Variabili e Array */

var trigger = document.getElementById("trigger") ;
var burgerName = document.getElementById('burger-name') ;
var scelte = document.getElementsByClassName('check-input') ;
var sum = 4.5 ;
var listaCoupon = ["morbidozzi-deluxe", "team-inzaghi", "bonus-larderello", "meddonald", "borsodiscount"] ;
var coupon = document.getElementById("coupon-name") ;

/*1. Il programma si attiva al click del pulsante Calculate.
  SE l'utente non scrive il nome del suo panino, il programma non continua e produce un alert*/

trigger.addEventListener("click",
  function(){

    if (burgerName.value != "") {

      /*2. Il programma deve capire quali checkbox sono state selezionate, prima di poter sommarne il valore.
      Inzializzo un ciclo for per scorrere tutti gli elementi con la classe Check-Input*/

      for (var i = 0; i < scelte.length; i++) {

        /*3. capisco SE la checkbox presa in esame è spuntata con il modulo .check; in quel caso aggiungo il suo value al totale.
        Siccome il valore delle checkbox è di tipo Stringa, devo usare ParseInt per riportarlo a intero.
        La variabile sum indica il totale, è definita a questo punto e parte da un minimo di 4.5 €*/

        if (scelte[i].checked) {

          sum += parseInt(scelte[i].value) ;

        }

      }

      /*4. A questo punto devo predisporre la possibilità di inserire un coupon sconto ed ottenere lo sconto del 20%.
      Definisco un Array di Coupon validi; Potrei inizializzare un ciclo while per scorrerne la lunghezza confrontando i suoi
      elementi con l'input coupon inserito. Non appena l'array ha termine o un nome uguale è trovato i ciclo si interrompe.
      In questo caso uso il metodo Includes per fare la stessa cosa con meno sforzo */

      if (listaCoupon.includes(coupon.value)) {
        alert("Il vostro coupon sconto è stato accettato!") ;
        sum -= sum * 0.2 ;

        /*4b. Uso il metodo IndexOf per identificare l'indice del coupon usato all'interno dell'array con i coupon validi;
        Poi con il metodo slice rimuovo quell'elemento usando il relativo indice: così i coupon non potranno essere riusati.*/

        var usedCouponIndex = listaCoupon.IndexOf(coupon.value) ;
        listaCoupon.splice(usedCouponIndex, 1) ;
      }

      /*5. A questo punto posso stampare il totale sum nel footer dell HTML.
      Uso il metodo to fixed per arrotondare il valore a 2 cifre decimali.*/

      document.getElementById("sum").innerHTML = sum.toFixed(2) + "€" ;

    } else {

      alert("Devi prima scegliere il nome del tuo panino!") ;

    }

  }

) ;
