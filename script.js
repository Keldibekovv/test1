// $('#text').click(() => {})1 способ

// document.getElementById('text')2 способ


// $('#text').on('click',() =>{
//     console.log('Text clicked!')
// })

// document.getElementById('text').addEventListener('click',() =>{
//     console.log('Text clicked!')//2 способ
// })

// $('#text').click(() => {
//     $('#text').hide(500)
// })

// $('#button').click(()=>{
//    $('#text').show(500)
// })

// $('#button').click (() => {
//     $('#text').toggle(500)
// })
// #-id  .-class или обращение к тегу >   $('text')

$('#text').css({
    'background':'red'
})