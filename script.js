function calculateTip(event){
    event.preventDefault();
    
    let bill = document.getElementById('conta').value;
    let serviceQual = document.getElementById('servico').value;
    let numOfPeople = document.getElementById('pessoas').value;

    if (bill == ' ' | serviceQual == 0){
        alert("Por favor, preencha os valores")
        return;
    }
}

document.getElementById('totalTip').style.display = 'none'
document.getElementById('each').style.display = 'none'

document.getElementById('tipsform').addEventListener('submit', calculateTip)