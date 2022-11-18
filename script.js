let unhide = document.getElementsByClassName("unhide_box");
let project = document.getElementsByClassName("project_box");
const startingColor = 'rgba(250, 235, 215, 0)';


let counter = 0;
document.body.style.opacity = '1';



for(let element of unhide) {
    element.onclick = function(){
        let desc = element.getElementsByTagName('h3')[counter];
        desc.style.transition = 'opacity .2s';
        if(element.style.backgroundColor === 'antiquewhite') {
            element.style.backgroundColor = startingColor;
            desc.style.opacity = '0';
            element.onmouseover = function(){element.style.opacity = '1';}
            element.onmouseout = function(){element.style.opacity = '0';}
            console.log('One');
        } else {
            element.style.backgroundColor = 'antiqueWhite';
            desc.style.opacity = '1';
            element.onmouseover = function(){element.style.opacity = '1';}
            element.onmouseout = function(){element.style.opacity = '1';}
            element.style.opacity = '1';
            console.log('Two');
        }
    }
}

document.getElementById('about').clientHeight = '5000px';

let contact = document.getElementById('contact');
let x = 0;
let y = 0;
let z = 0;
let alertcounter = 0;
let changeText = function() {
    if(alertcounter === 10) {
        alert("bro chill. you're not getting shit else from the link.");
        alertcounter++;
    } else if (alertcounter === 20) {
        alert("alright but forreal tho, this is it. good on you for clicking this much, but this is geninuely it. real shit.");
    } else if (alertcounter === 120) {
        return "You really sat here and clicked a dead link 100+ times. What does that say about you? Do you not have better things to do? Yeah it was dumb of me to code this, but you're even dumber for clicking this. Unless you're reading this from the js file, you seriously need help bro. on god no cap that shit deadass aint bussin fr fr.";
    }
    
    if(z < 5) {
        if(y < 4) {
            if(x === 0) {
                x = 1;
                return "It's not a real email";
            } else if (x === 1) {
                x = 2;
                return "because there is no real email";
            } else {
                x = 1;
                y++;
                return "since it's not a real email"
            }
        } else if (y === 4) {
            y = 5;
            return "so you're not getting you my email";
        } else if (y === 5) {
            y = 6;
            return "since I dont want you to have it"
        } else {
            z++;
            y = 5;
            return "you're not gonna get my email"
        }
    } else if(z === 5) {
        z++;
        return "You're";
    } else if(z === 6) {
        z++;
        return "Not";
    } else if(z === 7) {
        z++;
        return "Finna";
    } else if(z === 8) {
        z++;
        return "Get it";
    } else if(z === 9) {
        z++;
        return "So stop clicking this";
    } else if(z === 10) {
        z++;
        return "because you're not gonna get an email.";
    } else if(z === 11) {
        z++;
        return "this is your last message";
    } else {
        alertcounter++;
        return "email@address";
    }
}
contact.onclick = function(){
   contact.lastElementChild.innerHTML = changeText();
};