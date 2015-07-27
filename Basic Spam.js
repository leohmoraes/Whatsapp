campo = document.getElementsByClassName("input")[1]; // Grabs the input field
contador1 = 0;
function dispatch(target, eventType, char) {
   var evt = document.createEvent("TextEvent");    
   evt.initTextEvent (eventType, true, true, window, char, 0, "en-US");
   target.focus();
   target.dispatchEvent(evt);
}
function spam(){
    var mensagens="Embora ninguém possa voltar atrás e fazer um novo começo, qualquer um pode começar agora e fazer um novo fim...|Quando somos bons para os outros, somos melhores para nós mesmos.|Algumas coisas não precisam fazer sentido, basta valer a pena.|O primeiro passo para se chegar a algum lugar é decidir que você não quer mais ficar onde está.";  

    var array_msg = mensagens.split('|');
    var total_mensagens = array_msg.length;
    console.log("total: "+total_mensagens);

    if (contador1< total_mensagens){   // How many times spam will exexcute
      var msg = array_msg[contador1];
      console.log(contador1+ ") " +msg);
      dispatch(campo, "textInput", msg); // Msg to be texted
      var input = document.getElementsByClassName("icon btn-icon icon-send"); //Grabs the send button
      input[0].click(); // Clicks the send button
      contador1++;
      setTimeout(spam,1); // Add delay to the recursive function, otherwise it won't work
    }
}
spam();
