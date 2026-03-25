function filterItems(){

    const input = document.getElementById("search").value.toLowerCase()
    const items = document.getElementsByClassName("item")
    const noResult = document.getElementById("noResult")

    let count = 0

    for(let i = 0; i < items.length; i++){

        const text = items[i].innerText.toLowerCase()

        if(text.indexOf(input) > -1){
            items[i].style.display = "block"
            count++
        }else{
            items[i].style.display = "none"
        }

        if(input === ""){
            items[i].style.display = "block"
        }
    }

    if(count === 0 && input !== ""){
        noResult.style.display = "block"
    }else{
        noResult.style.display = "none"
    }
}