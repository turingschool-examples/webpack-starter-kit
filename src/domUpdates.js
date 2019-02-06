// jQuery goes here and anything that minipulates the dom
const domUpdates = {
  hideElement() {
    console.log('fire');
    $('.hidden-popup').fadeOut();
    $('.hidden-popup').html('');
  }
};










export default domUpdates;