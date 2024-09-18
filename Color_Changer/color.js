const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
       const btnColor = e.target.id

    //    if(btnColor === 'grey'){
    //     body.style.backgroundColor = btnColor
    //    }
    //    else if(btnColor === 'white'){
    //     body.style.backgroundColor = btnColor
    //    }
    //    else if(btnColor === 'blue'){
    //     body.style.backgroundColor = btnColor
    //    }
    //    else if(btnColor === 'yellow'){
    //     body.style.backgroundColor = btnColor
    //    }
    //    else{
    //     body.style.backgroundColor = 'white'
    //    }

        switch(btnColor){
            case 'grey':
            body.style.backgroundColor = btnColor;
            break;
            case 'purple':
            body.style.backgroundColor = btnColor;
            break;
            case 'blue':
            body.style.backgroundColor = btnColor;
            break;
            case 'yellow':
            body.style.backgroundColor = btnColor;
            break;

            default:
                body.style.backgroundColor = 'white'
        }
        
    })
})
