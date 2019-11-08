document.getElementById('menu-derniere').addEventListener('click', function (event) {

    cleanMain();

    const request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', `https://distorted-louse-3971.dataplicity.io/last-measure`, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response);
            var lastMeasureId = jsonResult.id;
            var lastMeasureDate = jsonResult.measureDate;
                     
 
            var lastMeasureDateF = formatDate(lastMeasureDate);
            
            var lastMeasureTemperature = jsonResult.temperature;
            var lastMeasurePressure = jsonResult.pressure;
            var lastMeasureHumidity = jsonResult.humidity;

            // Ajout d'un paragraphe au div 'derniere'
            /*const boddy = document.body; */
            /*const mainElt = document.main; */
            const mainElt = document.getElementById("main-elt");

            /*const derniere = document.getElementById("derniere"); */
            const newDiv = document.createElement("div");
            newDiv.id = "derniere";
            mainElt.appendChild(newDiv);
            /*boddy.appendChild(newDiv); */

            const newParagraph = document.createElement("p");
            /*newParagraph.style.color = "blue"; */
            newParagraph.style.fontWeight = "bold";
            newParagraph.innerHTML = "Dernière mesure du " + lastMeasureDateF;

            newDiv.appendChild(newParagraph);

            const sautLigne = document.createElement("br");
            newDiv.appendChild(sautLigne);

          

            
            const newParagraphT = document.createElement("p");
            newParagraphT.innerHTML = "Température: " + lastMeasureTemperature + " °C";
            newDiv.appendChild(newParagraphT);

            const newParagraphH = document.createElement("p");
            newParagraphH.innerHTML = "Humidité: " + lastMeasureHumidity + " %hum";
            newDiv.appendChild(newParagraphH);

            const newParagraphP = document.createElement("p");
            newParagraphP.innerHTML = "Pression: " + lastMeasurePressure + " hPa";
            newDiv.appendChild(newParagraphP); 



        } else {
            console.log('Erreur ...');
            console.log('erreur : ' + request.status);
        }
    }

    // Send request
    request.send();


});



document.getElementById('menu-top').addEventListener('click', function (event) {

    cleanMain();

    const request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', `https://distorted-louse-3971.dataplicity.io/top-measure/humidity`, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response);
            let lastMeasureId = jsonResult.id;
            let lastMeasureDate = jsonResult.measureDate;
            var lastMeasureDateF = formatDate(lastMeasureDate);

            let lastMeasureTemperature = jsonResult.temperature;
            let lastMeasurePressure = jsonResult.pressure;
            let lastMeasureHumidity = jsonResult.humidity;
           
            /*const boddy = document.body; */
            const mainElt = document.getElementById("main-elt");

            const newDiv = document.createElement("div");
            newDiv.id = "top";
            mainElt.appendChild(newDiv);
            /*boddy.appendChild(newDiv); */

            const newDivHum = document.createElement("div");
            newDivHum.id = "top-hum";
            newDiv.appendChild(newDivHum);

            const newParagraph = document.createElement("p");
            newParagraph.style.fontWeight = "bold";
            newParagraph.innerHTML = "Top humidité le " + lastMeasureDateF;
            newDivHum.appendChild(newParagraph);

            const sautLigne = document.createElement("br");
            newDivHum.appendChild(sautLigne);

            affichData("top-hum", lastMeasureTemperature, lastMeasureHumidity, lastMeasurePressure);


        } else {
            console.log('Erreur ...');
            console.log('erreur : ' + request.status);
        }
    }

    // Send request

    request.send();



    const request2 = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request2.open('GET', `https://distorted-louse-3971.dataplicity.io/top-measure/temperature`, true);

    request2.onload = function () {
        if (request2.status >= 200 && request2.status < 400) {
            const jsonResult = JSON.parse(this.response);
            let lastMeasureId = jsonResult.id;
            let lastMeasureDate = jsonResult.measureDate;
            var lastMeasureDateF = formatDate(lastMeasureDate);

            let lastMeasureTemperature = jsonResult.temperature;
            let lastMeasurePressure = jsonResult.pressure;
            let lastMeasureHumidity = jsonResult.humidity;


            const divTop = document.getElementById("top");
            
                       
            const newDivTemp = document.createElement("div");
            newDivTemp.id = "top-temp";
            divTop.appendChild(newDivTemp);

            const newParagraphTitreTopTemp = document.createElement("p");
            newParagraphTitreTopTemp.style.fontWeight = "bold";
            newParagraphTitreTopTemp.innerHTML = "Top température le " + lastMeasureDateF;
            newDivTemp.appendChild(newParagraphTitreTopTemp);

            const sautLigneBr = document.createElement("br");
            newDivTemp.appendChild(sautLigneBr);

            affichData("top-temp", lastMeasureTemperature, lastMeasureHumidity, lastMeasurePressure);         


        } else {
            console.log('Erreur ...');
            console.log('erreur : ' + request2.status);
        }
    }

    // Send request
    request2.send();


    const request3 = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request3.open('GET', `https://distorted-louse-3971.dataplicity.io/top-measure/pressure`, true);

    request3.onload = function () {
        if (request3.status >= 200 && request3.status < 400) {
            const jsonResult = JSON.parse(this.response);
            let lastMeasureId = jsonResult.id;
            let lastMeasureDate = jsonResult.measureDate;
            var lastMeasureDateF = formatDate(lastMeasureDate);

            let lastMeasureTemperature = jsonResult.temperature;
            let lastMeasurePressure = jsonResult.pressure;
            let lastMeasureHumidity = jsonResult.humidity;

            const divTop = document.getElementById("top");
            
                       
            const newDivPress = document.createElement("div");
            newDivPress.id = "top-press";
            divTop.appendChild(newDivPress);

            const newParagraphTitreTopPress = document.createElement("p");
            newParagraphTitreTopPress.style.fontWeight = "bold";
            newParagraphTitreTopPress.innerHTML = "Top pression le " + lastMeasureDateF;
            newDivPress.appendChild(newParagraphTitreTopPress);

            const sautLigneBr = document.createElement("br");
            newDivPress.appendChild(sautLigneBr);

            affichData("top-press", lastMeasureTemperature, lastMeasureHumidity, lastMeasurePressure);           


        } else {
            console.log('Erreur ...');
            console.log('erreur : ' + request3.status);
        }
    }

    // Send request
    request3.send();

 

});

document.getElementById('menu-tableau').addEventListener('click', function (event) {

    cleanMain();

    const request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', `https://distorted-louse-3971.dataplicity.io/measure/date?startDate=2019-11-06&endDate=2019-11-07`, true);

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            const jsonResult = JSON.parse(this.response);
           

            /*const boddy = document.body; */
            const mainElt = document.getElementById("main-elt");
        
            const newDivTableau = document.createElement("div");
            newDivTableau.id = "tableau";
            mainElt.appendChild(newDivTableau);
            /*boddy.appendChild(newDivTableau); */

            const newEltTable = document.createElement("table");
            newEltTable.id = "table";
            newDivTableau.appendChild(newEltTable);

            const newEltThead = document.createElement("thead");
            newEltTable.appendChild(newEltThead);

            const newEltTr = document.createElement("tr");
            newEltThead.appendChild(newEltTr);

            const newEltTh = document.createElement("th");
            newEltTh.scope = "col";
            newEltTh.innerText = "Date";
            newEltTr.appendChild(newEltTh);

            const newEltThD = document.createElement("th");
            newEltThD.scope = "col";
            newEltThD.innerText = "Température (°C)";
            newEltTr.appendChild(newEltThD);

            const newEltThH = document.createElement("th");
            newEltThH.scope = "col";
            newEltThH.innerText = "Humidité (%hum)";
            newEltTr.appendChild(newEltThH);

            const newEltThT = document.createElement("th");
            newEltThT.scope = "col";
            newEltThT.innerText = "Pression (hPa)";
            newEltTr.appendChild(newEltThT);


            const eltTable = document.getElementById("table");


            const newTbody = document.createElement("tbody");
            newTbody.id = "body";
            eltTable.appendChild(newTbody);

      /*      const newTr1 = document.createElement("tr");
            newTbody.appendChild(newTr1);

            const newTd11 = document.createElement("td");
            newTd11.innerText = jsonResult[0].measureDate;
            newTr1.appendChild(newTd11);

            const newTd12 = document.createElement("td");
            newTd12.innerText = jsonResult[0].temperature;
            newTr1.appendChild(newTd12);

            const newTd13 = document.createElement("td");
            newTd13.innerText = jsonResult[0].humidity;
            newTr1.appendChild(newTd13);

            const newTd14 = document.createElement("td");
            newTd14.innerText = jsonResult[0].pressure;
            newTr1.appendChild(newTd14); */


          /*  const eltTbody = document.getElementById("body"); */


            for (let i = 0; i < jsonResult.length; i++){
                /*console.log("test" + i); */

                const newTr = document.createElement("tr");
                newTbody.appendChild(newTr);
                /* eltTbody.appendChild(newTr); */

                const newTdD = document.createElement("td");
                newTdD.innerText = formatDateTime(jsonResult[i].measureDate);
                /*newTdD.innerText = jsonResult[i].measureDate;*/
                newTr.appendChild(newTdD);

                const newTdT = document.createElement("td");
                newTdT.innerText = jsonResult[i].temperature;
                newTr.appendChild(newTdT);

                const newTdH = document.createElement("td");
                newTdH.innerText = jsonResult[i].humidity;
                newTr.appendChild(newTdH);

                const newTdP = document.createElement("td");
                newTdP.innerText = jsonResult[i].pressure;
                newTr.appendChild(newTdP);
                
            }



        } else {
            console.log('Erreur ...');
            console.log('erreur : ' + request.status);
        }
    }

    // Send request
    request.send();


});

function cleanMain(){

    var mainElt = document.getElementById("main-elt");
    
   
    while (mainElt.firstChild) {    
        console.log("mainElt: " + mainElt);
        
        mainElt.removeChild(mainElt.firstChild);
    } 

}

function affichData(dataType, dataTemp, dataHum, dataPress){
      
    console.log("dataType: " + dataType);
    
    const newDiv = document.getElementById(dataType);

    const newParagraphT = document.createElement("p");
    newParagraphT.innerHTML = "Température: " + dataTemp + " °C";
    newDiv.appendChild(newParagraphT);

    const newParagraphH = document.createElement("p");
    newParagraphH.innerHTML = "Humidité: " + dataHum + " %hum";
    newDiv.appendChild(newParagraphH);

    const newParagraphP = document.createElement("p");
    newParagraphP.innerHTML = "Pression: " + dataPress + " hPa";
    newDiv.appendChild(newParagraphP);
}

function formatDate(DateToFormat){
    var dateFormatee = DateToFormat.substring(8,10) + "/" + DateToFormat.substring(5,7) + "/"
                + DateToFormat.substring(0,4);
            
    return dateFormatee;
}

function formatDateTime(DateTimeToFormat){
    var dateTimeFormatee = DateTimeToFormat.substring(8,10) + "/" + DateTimeToFormat.substring(5,7) + "/"
                + DateTimeToFormat.substring(0,4) + " " + DateTimeToFormat.substring(11,19);
            
    return dateTimeFormatee;
}

/*vidage de l'écran de type dernière valeur
    const divDerniere = document.getElementById("derniere");
    pToRemove = document.querySelector("p");
    divDerniere.removeChild(pToRemove);


    const divDerniereBr = document.getElementById("derniere");
    brToRemove = document.querySelector("br");
    divDerniereBr.removeChild(brToRemove);


    const divDerniereT = document.getElementById("derniere");
    ptToRemove = document.querySelector("p");
    divDerniereT.removeChild(ptToRemove);


    const divDerniereH = document.getElementById("derniere");
    phToRemove = document.querySelector("p");
    divDerniereH.removeChild(phToRemove);


    const divDerniereP = document.getElementById("derniere");
    ppToRemove = document.querySelector("p");
    divDerniereP.removeChild(ppToRemove); */
