campo = document.getElementsByClassName("input")[1]; // Grabs the input field
contador1 = 1;
function dispatch(target, eventType, char) {
   var evt = document.createEvent("TextEvent");    
   evt.initTextEvent (eventType, true, true, window, char, 0, "en-US");
   target.focus();
   target.dispatchEvent(evt);
}
function spam(){
  if (contador1<5){   // How many times spam will exexcute
    dispatch(campo, "textInput", contador1+" Chivos"); // Msg to be texted
    for(contador2=1;contador2<=contador1;contador2++){
       dispatch(campo, "textInput", "🐐"); // Adds emoji
    }
    var input = document.getElementsByClassName("icon btn-icon icon-send"); //Grabs the send button
    input[0].click(); // Clicks the send button
    contador1++;
    setTimeout(spam,1); // Add delay to the recursive function, otherwise it won't work
  }
}
spam();
