for(let i=0;i<=3;i++){
    let add_tag=document.createElement('p');
    add_tag.setAttribute('id','zeynab' + i)
    add_tag.appendChild(document.createTextNode('hi' + i))
    document.body.appendChild(add_tag)
}
let remove_tag=document.getElementById('zeynab0')
document.body.removeChild(remove_tag)