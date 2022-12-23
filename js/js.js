
//////первый ссылка


let lnk = document.querySelector('.sec_dl1')
let sec1 = document.querySelector('.promo')

let sec1_pos = sec1.offsetTop



function scrool_js(event) {
    event.preventDefault()
    window.scroll({
        top:sec1_pos,
        behavior:'smooth'
    })
}


lnk.addEventListener('click', scrool_js,)
///////////////




//////////////////////////////////////
let lnk2 = document.querySelector('.sec_dl2')
let cont = document.querySelector('.cont')

let sec2_pos = cont.offsetTop




function scrool_js1(event) {
    event.preventDefault()
    cont.scrollIntoView({       
    behavior:'smooth',
    block:'start',
    inline:'end'
    })
}




lnk2.addEventListener('click', scrool_js1)

//////////////////////////



//////////////////////////
let lnk3 = document.querySelector('.sec_dl3')
let sec = document.querySelector('.sec')

let sec3_pos = sec.offsetTop




function scrool_js3(event) {
    event.preventDefault()
    sec.scrollIntoView({       
    behavior:'smooth',
    block:'start',
    inline:'end'
    })
}




lnk3.addEventListener('click', scrool_js3)



/////////////////////

