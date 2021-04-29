import { checkURL } from "./urlChecker"

function handleSubmit(event) {
    event.preventDefault()

    let formInput = document.getElementById('inputURL').value; 
       
    if(checkURL(formInput)){

        fetch("/apiPost", {
            method: 'POST',
            credentials: "same-origin",
            mode: "cors",
            headers:{'Content-Type':'application/json',},
            body:JSON.stringify({formInput}),  
             
        })
             
    
        .then(res => res.json())     
        .then(function(res) {
            //confidence
            document.getElementById('confidence').innerHTML = "Confidence: "+ res.confidence +"%";
            //polarity
            document.getElementById('polarity').innerHTML = "Polarity: "+res.score_tag;
            //subjectivity
            document.getElementById('subjectivity').innerHTML = "Subjective/Objective: "+ res.subjectivity;
        });
    }
    else {alert("Enter a URL that is valid");
    }
}    
export { handleSubmit }
