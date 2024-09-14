const myNum = document.querySelectorAll('.count') //queryselectorall le chai array return garxa so for each chalayera yeuta yueta element target gareko
// console.log(myNum.innerText)
let speed = 200;

myNum.forEach( (myCount) => {
    
    
    let target_count = myCount.dataset.count; //.dataset.variable le chai html ko data-variable ko value linxa
    let init_count = parseInt(myCount.innerText); //.innertext chai string ma hunxa so integer ma lageko
    // console.log(target_count)
    
    let new_increment_num = Math.floor(target_count / speed);//sabai final data samma pugna yeutai number le increaase vayera constant speed maintain garna
    //ani math.floor le chai round off gardinxa
    
    const updateNumber = () => {
        init_count +=  new_increment_num;
        myCount.innerText = init_count;
        
        if(init_count < target_count){
            setTimeout(() => {updateNumber()}, 5) //feri settimeout function le tehi aafno parent function loop ma call gareko  harek 5 ms ma
        }
    }
    
    updateNumber();
    
})