var btntranslator=document.querySelector("#btn-translator")
var textInputArea=document.querySelector("#textarea")
var ouputArea=document.querySelector("#divbox")


var serverURL="https://api.funtranslations.com/translate/minion.json"

function getserverURL(text) 
{
    return serverURL + "?" +"text=" + text
}


function myfunction()
{
    // read the input text
    var transText=textInputArea.value;
    // go and fetch the URL
    fetch(getserverURL(transText))
    // convert url into javascript object
    .then(response=>response.json())
    //output 
    .then(achualdata=>{
        var translatedText=achualdata.contents.translated;
        ouputArea.innerText=translatedText;

    })
    
    
}

btntranslator.addEventListener("click",myfunction)
