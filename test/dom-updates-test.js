import chai from 'chai';
const expect = chai.expect;
import DomUpdates from '../src/dom-updates.js';

import spies from 'chai-spies';
chai.use(spies);

// describe('DomUpdates', ()=>{
//     it('Should be a function', ()=>{
//         expect(DomUpdates).to.be.a('function');
//     })
//     it('Should instanciate a new instance of DomUpdates', ()=>{
//         const domUpdates =  new DomUpdates();
//         expect(domUpdates).to.be.an('object');
//     })
// })

export default DomUpdates;