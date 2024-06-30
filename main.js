let btn = document.querySelector('.btn')
let btn_1 = document.querySelector('.btnoff')

let input_2 = document.querySelector('.input-2')
let p_1 = document.querySelector('.text-1');
let p_2 = document.querySelector('.text-2')


btn.addEventListener('click', function(event){
    event.preventDefault();
    let input_1 = document.querySelector('.input-1').value;
    if(input_1.length !== 0){
        let x = 0;
        input_1 = input_1.split('')
            for(let i = 0; i < input_1.length; i++){
                x += Number(input_1[i])
            }
        p_1.innerHTML = `Сумма чисел: <h1 class='grit'>${x}</h1>`
    }
    if(input_2.value.length !== 0){
        p_2.innerHTML = `Количество символов: <h1 class='grit'>${input_2.value.length}</h1>`
    }
})
btn_1.addEventListener('click',function(event){
    event.preventDefault();
    let input_1 = document.querySelector('.input-1');
    input_1.value = ''
    input_2.value = ''
})

// console.log(input_1.value)

(function(){
    const zag = function(){
        let s = document.querySelector('.header')
        s.className = 'list'
    }
    setTimeout(zag,4 * 1000)
}())