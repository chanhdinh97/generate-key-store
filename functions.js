const fs = require("fs")
const Web3 = require("web3")
// const web3 = new Web3 ("http://127.0.0.1:8545")
const web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

const createWallet = () => {

    const wallet = web3.eth.accounts.create()

    const privateKey = wallet.privateKey
    
    return privateKey

}

const generateKeyStoreFile = (key, password) => {

    const keystore = web3.eth.accounts.encrypt(key, password)
    const keystoreToString = JSON.stringify(keystore)
    const wallet = web3.eth.accounts.privateKeyToAccount(key, false)

    fs.writeFile("./keystores/" + wallet.address + ".keystore", keystoreToString, (err)=>{
        if(err) {
            console.log(err)
        }

        console.log("keystore file created")
    })  
}     

const generateKeyStore = (key, password) => {

    const keystore = web3.eth.accounts.encrypt(key, password)
    const keystoreToString = JSON.stringify(keystore)
    const wallet = web3.eth.accounts.privateKeyToAccount(key, false)    

    fs.writeFile("./keys/" + wallet.address + ".keystore", keystoreToString, (err)=>{
        if(err) {
            console.log(err)
        }

        console.log("keystore file created")
    })

}

const getKeyStore = (file, password) => {

    fs.readFile(file, "utf-8", (err, keyStore)=>{
        if (err) {

            console.log(err)

        }

        const wallet = web3.eth.accounts.decrypt(keyStore, password)
        console.log(wallet)
    })

}






module.exports = { createWallet, generateKeyStore, getKeyStore }