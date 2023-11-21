function calculate() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let heightInMeters = height / 100;
let bmi = weight / (heightInMeters * heightInMeters);

    document.getElementById('heading').innerHTML = "Your BMI is:";
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(1);
    
    if(bmi <= 18.5){
        document.getElementById('message').innerHTML="You within under weight range!"

    }
    else if(bmi <=25 && bmi >=18.5){
        document.getElementById('message').innerHTML="You within Healthy weight range"

    }
    else{
        document.getElementById('message').innerHTML="You within Over weight range!"
    }
    
   
}


function clearInputs() {
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';
    document.getElementById('heading').innerHTML = '';
    document.getElementById('bmi-output').innerHTML = '';
    document.getElementById('message').innerHTML = '';

}