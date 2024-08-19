const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)

    const weight=parseInt(document.querySelector('#weight').value)

    const result=document.querySelector('#results')

    if (height==='' || height<0 || isNaN(height)) {
        result.innerHTML=`Please give a valid height ${height}`;
    }

    else if (weight==='' || weight<0 || isNaN(weight)) {
        result.innerHTML=`Please give a valid weight ${weight}`;
    }

    else{
        const ans=(weight/((height*height)/10000)).toFixed(2)
       
        if (ans<18.6) {
            result.innerHTML=`<span>${ans} Under Weight</span>`
        }
        else if(ans>=18.6 && ans<=24.9){
            result.innerHTML=`<span>${ans} Normal</span>`

        }
        else{
            result.innerHTML=`<span>${ans} over Weight</span>`

        }
    }
})