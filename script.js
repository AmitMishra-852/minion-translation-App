var btntranslator=document.querySelector("#btn-translator")
var textInputArea=document.querySelector("#textarea")
var ouputArea=document.querySelector("#divbox")


var serverURL="https://api.funtranslations.com/translate/ferb-latin.json"

function getserverURL(text) 
{
    return serverURL + "?" +"text=" + text
}


function myfunction()
{
    var transText=textInputArea.value;
    
    fetch(getserverURL(transText))
    .then(response=>response.json())
    .then(achualdata=>{
        var translatedText=achualdata.contents.translated;
        ouputArea.innerText=translatedText;

    })
    
    
}

btntranslator.addEventListener("click",myfunction)
