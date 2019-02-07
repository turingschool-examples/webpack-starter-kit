## Wheel of MisFortune!
Wheel of MisFortune is a work in progress 'Wheel of Fortune' game assigned during MOD 2 at Turing School of Software and Design.  
You can learn more about the assignment / comp by following [this](http://frontend.turing.io/projects/wheel-of-fortune.html) link.

### Link to live version of project
[link text](https://linkexample.com).

## What was learned?
Object Oriented Programming (OOP) was a concept almost unknown to us before this project.  
One of the main goals was to use OOP as efficiently as possible.  
This includes taking advantage of JavaScript classes:  

    class Example {
      constructor(name) {
        this.name = name;
      }
    }  
As well as importing and exporting those classes amongst eachother:

    import domUpdates from './domUpdates.js';
    import data from './data.js';
    import Game from './Game.js';
    import Player from './Player.js';
    import $ from 'jquery';

## Challenges we faced
Undoubtedly, the biggest challenge of this project has been forcing the JavaScript classes to speak to one another. Not understanding how it worked at the beginning of the project was a major setback, but it's something we have risen above.

### Screenshots of Project

  ![image description](/src/images/example.png)

## Future Implementation Plans
**Given the time** we would like to implement these features:
- Multiple rounds rather than being stuck on round 1
- Cleaner, DRYer CSS code
- Mobility

## Tools Used to Build Project
[Sublime Text Editor](https://www.sublimetext.com/)  
[jQuery (JavaScript library)](https://jquery.com/)  
[Mocha (Node.js Testing Suite)](https://mochajs.org/)   
[Chai (JavaScript Assertion Library)](https://www.chaijs.com/)

## Credits / Contact Info
Credit for the project goes to team members:
- Joshua Lavarine (joshua@lavarine.com)
- Jacob Admire (JakeAdmire1@gmail.com)