// CONTENEDOR VOCALES
let divVocalA       = document.getElementById("divVocalA")
let divVocalE       = document.getElementById("divVocalE")
let divVocalI       = document.getElementById("divVocalI")
let divVocalO       = document.getElementById("divVocalO")
let divVocalU       = document.getElementById("divVocalU")

// AUDIO VOCALES
let audioVocalA       = document.getElementById("audioVocalA")
let audioVocalE       = document.getElementById("audioVocalE")
let audioVocalI       = document.getElementById("audioVocalI")
let audioVocalO       = document.getElementById("audioVocalO")
let audioVocalU       = document.getElementById("audioVocalU")

/***** PERMITIR REPRODUCIR AUDIO DE VOCALES ******/

divVocalA.addEventListener("click", function() {

    audioVocalA.play()

}, false)

divVocalE.addEventListener("click", function() {

    audioVocalE.play()

}, false)

divVocalI.addEventListener("click", function() {

    audioVocalI.play()

}, false)

divVocalO.addEventListener("click", function() {

    audioVocalO.play()

}, false)

divVocalU.addEventListener("click", function() {

    audioVocalU.play()

}, false)


/*************************************************/