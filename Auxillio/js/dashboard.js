let time = new Date()
let time2 = time.getHours()
let name = prompt('Please enter your name')

function displayGretting (){
    if(time2 < 12){
        document.getElementById('time').textContent =`${name} good morning   `
    }
    else if(
        time2 < 16
    ){
        document.getElementById('time').textContent = `good afternoon!! ${name}`
    }else{
        document.getElementById('time').textContent = `good evening ${name}`
    }

    return false
}

