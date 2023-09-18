let d = new Date()
let yearNow = document.querySelector("#year")
yearNow.textContent = d.getFullYear()

let oLastModif = new Date(document.lastModified)
let pageLastModified = document.querySelector("#lastModified")
pageLastModified.textContent = oLastModif