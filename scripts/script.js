let d = new Date()
let oLastModif = new Date(document.lastModified);
/* document.getElementById("year").textContent = d.getFullYear() */
document.querySelector("#copyright").innerHTML = d.getFullYear()
document.getElementById("last_updated").textContent = oLastModif.toLocaleString()