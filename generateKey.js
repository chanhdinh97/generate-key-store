const { createWallet, generateKeyStore, getKeyStore } = require("./functions")

//const account = createWallet()

const privateKey = "0x7683d171d6410ce396c45b3ecbe96e85bd70bb938d9fb52ea2147ab1446b9c96"

//const keyStore = generateKeyStore(privateKey, "Israel")

const file = "0x2A683C5c8EFB826Ac7a344566FbBA8335B619edf.keystore"

const fetchKeyStore = getKeyStore("./keys/"+file, "Israel")















