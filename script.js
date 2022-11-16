let unhide = document.getElementsByClassName("unhide_box");
let project = document.getElementsByClassName("project_box");
const startingColor = 'rgba(250, 235, 215, .05)';


let counter = 0;
for(let element of project) {
    element.style.height = element.clientWidth + 'px';
    console.log(counter + ': ' + element.clientHeight + ' / ' + element.clientWidth);
}

document.body.style.opacity = '1';


for(let element of unhide) {
    element.onclick = function(){
        let desc = element.getElementsByTagName('h3')[counter];
        desc.style.transition = 'opacity .2s';
        if(element.style.backgroundColor === startingColor) {
            element.style.backgroundColor = 'antiquewhite';
            desc.style.opacity = '1';
            element.onmouseout = function(){element.style.opacity = '1';}
            element.style.opacity = '1';
        } else if(element.style.backgroundColor === 'antiquewhite') {
            element.style.backgroundColor = startingColor;
            desc.style.opacity = '0';
            element.style.opacity = '0';
            element.onmouseover = function(){element.style.opacity = '1';}
            element.onmouseout = function(){element.style.opacity = '0';}
            console.log('WTF');
        } else {
            element.style.backgroundColor = 'antiqueWhite';
            desc.style.opacity = '1';
            element.onmouseover = function(){element.style.opacity = '1';}
            element.onmouseout = function(){element.style.opacity = '0';}
            element.style.opacity = '1';
        }
    }
}

document.getElementById('about').clientHeight = '5000px';

let contact = document.getElementById('contact');
let x = 0;
let y = 0;
let changeText = function() {
    if(y === 3) {
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
        y = 5;
        return "you're not gonna get my email"
    }
}
contact.onclick = function(){
   contact.lastElementChild.innerHTML = changeText();
};