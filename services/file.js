const fs = require('fs')
const sha1 = require('sha1')

module.exports = {
    saveDataOnFile,
    checkFileExistance,
    buildFinishedFile,
}

function saveDataOnFile(data){
    fs.writeFileSync('answer.json', data, (error) => {
        if(error){
            console.error(error)
        }
        else{
            console.log("=> Data saved on json file with sucess!")
        }
    })
}

function checkFileExistance(){
    return fs.existsSync('answer.json')
}

function buildFinishedFile(data, cryptData){
    console.log('Generating SHA1 summary...')
    const newData = {
        ...data,
        decifrado: cryptData,
        resumo_criptografico: sha1(cryptData),
    }

    console.log('Saving new data on JSON file...')
    saveDataOnFile(JSON.stringify(newData, null, 2))
}