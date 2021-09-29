const summary = document.querySelector('#result');

function compute()
{
    principal = parseFloat(document.getElementById("principal").value);
    interestRate = parseFloat(document.getElementById("interest").value) / 100;
    years = parseInt(document.getElementById("years").value);

    if (isNaN(principal) || principal <= 0){
        alert("Princicpal must be a positive number");
        document.getElementById("principal").focus();
        summary.innerHTML = ``;
    }else{

        if (isNaN(years)){
            alert("Please select the investment year");
            document.getElementById("years").focus();
            summary.innerHTML = ``;
        }else{
            currentYear = new Date().getFullYear();
        
            // total = principal + principal * interestRate * years;  
            total = principal * interestRate * years;
        
            summary.innerHTML = `
            If you deposit ${principal},<br>
            at an interest rate of ${highlight(interestRate * 100 + '%')}.<br>
            You will receive an amount of ${highlight(total)} ,<br>
            in the year ${highlight(currentYear + years)}.<br>
            `;
        }

    }

}

function highlight(str){
    return `<span style="background-color: #FFFF00">${str}</span>`;

}
        

const interestBar = document.querySelector('#interest');
const interestDisp = document.querySelector('span.interest-disp');


interestBar.addEventListener('change', e=>{
    interestRate = document.getElementById("interest").value;
    interestDisp.innerHTML = interestRate + '%';
})