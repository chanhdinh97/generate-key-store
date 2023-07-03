const { createWallet, generateKeyStore, getKeyStore } = require("./functions")

//const account = createWallet()

const privateKey = "cbba0e64f5391df5ee50ae58a2173d1e75c850f88eedce0f24fbff4d216bc795"

const keyStore = generateKeyStore(privateKey, "12345678")

// const file = "0x2A683C5c8EFB826Ac7a344566FbBA8335B619edf.keystore"

// const file = "0x05191600B6c305d249371200c961961cd77b3C92.keystore"

// const fetchKeyStore = getKeyStore("./keys/"+file, "12345678")

// const key =createWallet()
// console.log(key)
// const keyStore = generateKeyStoreFile(privateKey, "access")













