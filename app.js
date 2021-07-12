var inp=document.querySelector("#text-input")
var out=document.querySelector("#text-output")
var button=document.querySelector("#translate-button")

// console.log("text inp is",inp.value);


var url="https://api.funtranslations.com/translate/shakespeare.json"

var finalUrl=url;

function errorHandler(error)
{
    console.log("error is",error);
    alert("Oops you ran into error:-"+error)
}

function shakesparefun()
{
    // alert("ji")
    // console.log("inp in func",inp.value);
    // out.innerText=inp.value+" yoo";
    finalUrl+="?"+"text="+inp.value;
    fetch(finalUrl)
    .then(r=>r.json())
    .then(res=>
        {
            out.innerText=res.contents.translated;

        })
        .catch(errorHandler)

}

button.addEventListener("click",shakesparefun)