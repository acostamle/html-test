const usuario = prompt("Cual es tu peso?")
const peso = parseInt(usuario)
const g_tierra = 9.8
const g_marte = 3.7
const g_jupiter = 24.8
const peso_final = parseInt(peso * g_marte / g_tierra)
document.write("Tu peso en Marte es <strong>" + peso_final  + " KG</strong>")