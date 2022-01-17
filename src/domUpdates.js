import {hotel} from './scripts'

const loggedInAs = document.getElementById('loggedInAs');
const loggedInName = document.getElementById('loggedInName');

let domUpdates = {

  hide(toHide){
  toHide.forEach(element => {
    element.classList.add('hidden');
  })
},

show(toShow){
  toShow.forEach(element => {
    element.classList.remove('hidden');
  });
},

showHide(toShow, toHide){
  this.hide(toHide);
  this.show(toShow);
},

displayUserName(){
  loggedInName.innerText = `${hotel.currentCustomer.name}`;
  this.show([loggedInAs, loggedInName]);
}

}


export {domUpdates}
