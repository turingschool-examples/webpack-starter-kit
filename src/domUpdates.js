

let domUpdates = {

  hide(toHide){
  toHide.forEach(element => {
    element.classList.add('hidden');
  })
};

show(toShow){
  toShow.forEach(element => {
    element.classList.remove('hidden');
  });
};

showHide(toShow, toHide){
  hide(toHide);
  show(toShow);
};

}


export {domUpdates}
