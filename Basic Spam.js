<code>
campo = document.getElementsByClassName("input")[1]; // Grabs the input field
contador1 = 0;
function dispatch(target, eventType, char) {
   var evt = document.createEvent("TextEvent");    
   evt.initTextEvent (eventType, true, true, window, char, 0, "en-US");
   target.focus();
   target.dispatchEvent(evt);
}
function spam(){
  if (contador1<100){   // How many times spam will exexcute
    dispatch(campo, "textInput", "You are being spammed by JS"); // Msg to be texted 
    var input = document.getElementsByClassName("icon btn-icon icon-send"); //Grabs the send button
    input[0].click(); // Clicks the send button
    contador1++;
    setTimeout(spam,1); // Add delay to the recursive function, otherwise it won't work
  }
}
spam();
</code>
