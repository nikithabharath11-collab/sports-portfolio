document.querySelectorAll('.counter').forEach(counter=>{
    counter.innerText = "0";
    let update=()=>{
      let target = +counter.getAttribute("data-target");
      let current = +counter.innerText;
      let inc = target/100;
      if(current < target){
        counter.innerText = Math.ceil(current + inc);
        setTimeout(update, 15);
      }
    };
    update();
  });
  