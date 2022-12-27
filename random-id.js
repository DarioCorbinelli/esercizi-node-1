// ho fatto con randomUUID, se l'esercizio voleva un formato particolare di id... rimandamelo indietro l'es che lo rifaccio
const crypto = require("crypto")
const randomId = crypto.randomUUID()

console.log(randomId);