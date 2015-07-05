campo = document.getElementsByClassName("input")[1]; // Grabs the input field
contador1 = 1;
function dispatch(target, eventType, char) {
   var evt = document.createEvent("TextEvent");    
   evt.initTextEvent (eventType, true, true, window, char, 0, "en-US");
   target.focus();
   target.dispatchEvent(evt);
}
function spam(){
  if (contador1<100){
    var new_emot = document.createElement("img"); // Create new emoji
    var new_src = document.createAttribute("src"); // Create attributes 
    var new_alt = document.createAttribute("alt");
    new_src.value = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    new_alt.value = "💩";
    new_emot.setAttributeNode(new_src);
    new_emot.setAttributeNode(new_alt);
    campo.appendChild(new_emot); // Puts emoji into the input field
    dispatch(campo, "textInput", "You have been visited "+contador1+" times by Mr.");
    var input = document.getElementsByClassName("icon btn-icon icon-send");//Grabs the send button
    input[0].click();// Clicks the send button
    contador1++;
    setTimeout(spam,1);
  }
  else { 
    dispatch(campo, "textInput", "Enough poop for today"); // Msg when the loop finish
    var input = document.getElementsByClassName("icon btn-icon icon-send");
    input[0].click();
  }
}
spam();
