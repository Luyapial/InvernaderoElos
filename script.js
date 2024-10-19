var estado ="";
var temperatura= Math.round(Math.random()*(40-15)+parseInt(15));
var humedad=Math.round(Math.random()*(100-10)+parseInt(10));
var ph=Math.round(Math.random()*(34-10)+parseInt(10));

if (14<temperatura<=20){
    t="Temperatura Baja";
}
if (20<temperatura<=35)
{
    t="Temperatura Normal";
}
if (temperatura>35)
{
    t="Temperatura Alta";
}

if (10<humedad<=40){
    h="Humedad Baja";
}
if (40<humedad<=80)
{
    h="Humedad Normal";
}
if (humedad>80)
{
    h="Humedad Alta";
}

if (14<ph<=19){
    p="PH Bajo";
}
if (20<ph<=30)
{
    p="PH Normal";
}
if (ph>31)
{
    p="PH Alto";
}

document.getElementById('hablar').addEventListener
("click",()=>
    {
    decir(document.getElementById("texto").value);
    }
);

document.getElementById('hablarEng').addEventListener
("click",()=>
    {
    decirEn(document.getElementById("textoEn").value);
    }
);

document.getElementById('datos').addEventListener
("click",()=>
    {
    leer_datos(temperatura,humedad,ph);
    }
);

function decir(texto, opciones = {}) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = texto;
  
    // Combinar opciones por defecto con las proporcionadas
    const opcionesFinales = {
      lang: 'es-ES',
      rate: 1,
      volume: 0.8,
      pitch: 1,
    };
    Object.assign(utterance, opcionesFinales);
  
    speechSynthesis.speak(utterance);
  }
  
function decirEn(textoEn, opciones = {}) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = textoEn;
  
    // Combinar opciones por defecto con las proporcionadas
    const opcionesFinales = {
      lang: 'en-BR',
      rate: 1,
      volume: 0.8,
      pitch: 1,
    };
    Object.assign(utterance, opcionesFinales);
  
    speechSynthesis.speak(utterance);
  }
  
function leer_datos(temperatura,humedad,ph)
{
    document.getElementById('temp').value=temperatura;
    document.getElementById('hume').value=humedad;
    document.getElementById('ph').value=ph;
    document.getElementById('texto').value=`El invernadero tiene ${t}, ${h} y ${p}`;
    document.getElementById('textoEn').value=`The greenhouse has ${t}, ${h} and ${p}`;
}