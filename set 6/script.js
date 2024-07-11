
let numberOfTimes = localStorage.getItem('numberOfItems') || 0;
    function buttonPressed(){
        numberOfTimes++;
        localStorage.setItem('numberOfItems', numberOfTimes);
        updateButton();
    }

    function updateButton(){
        let button = document.querySelector('#my-button');
        if (numberOfTimes % 2 === 0){
            button.classList.remove('js-odd');
            button.classList.add('js-even');
        }
        else{
            button.classList.remove('js-even');
            button.classList.add('js-odd');
        }
        
        button.innerText = numberOfTimes;
        
    }
    updateButton();
    

function doGreeting(personeName){
    let date = new Date();
    let hours = date.getHours();
    let heading = document.querySelector('#greeting');
    console.log(hours);
    if (hours >= 5 && hours < 12) {
        heading.innerText = `Good Morning ${personeName}`;
    }
    else if (hours >= 12 && hours < 18) {
        heading.innerText = `Good Afternoon ${personeName}`;
    }
    else if (hours >= 18 && hours < 21) {
        heading.innerText = `Good Evening ${personeName}`;
    }
    else {
        heading.innerText = `Good Night ${personeName}`;
    }

}


doGreeting('Parnab');
