function Nom_verify(Nom){
    return /(([aA-zZ])){3,30}$/.test(Nom.value);
  };
  function marque_verify(marque){
    return /[a-z]{3,30}$/.test(marque.value);
  
  };
  function setError(elem,message) {
    const formControl = elem.parentElement;
    const small = formControl.querySelector('small');
  
    // Ajout du message d'erreur
    small.innerText = message
  
    // Ajout de la classe error
    formControl.className = "form-control error";
  }
  
  function setSuccess(elem) {
    const formControl = elem.parentElement;
    formControl.className ='form-control success'
  }
  // check Nom 
  
  
  Nom.addEventListener('blur',function(e){
    if (Nom.value === "") {
        let message = "Nom ne peut pas être vide";
        setError(Nom,message);
    }else if(Nom_verify(Nom) === true){
        setSuccess(Nom)
    }
    else{
        let message = "Nom non valide";
        setError(Nom,message);
    }
  });
  
  
  // check marque 
  
  
  marque.addEventListener('blur',function(e){
    if (marque.value === "") {
        let message = "marque ne peut pas être vide";
        setError(marque,message);
    }else if(marque_verify(marque) === true){
        setSuccess(marque)
    }
    else{
        let message = "marque non valide";
        setError(marque,message);
    }
  });
  
  ddp.addEventListener('blur',function(e){
    if (ddp.value === "") {
        let message = "ddp ne peut pas être vide";
        setError(ddp,message);
    }else{
        setSuccess(ddp)
    }
  
  });
  
  perPrice.addEventListener('blur',function(e){
    if (perPrice.value === "") {
        let message = "perPrice ne peut pas être vide";
        setError(perPrice,message);
    }else{
        setSuccess(perPrice)
    }
  
  });
  
  type.addEventListener('blur',function(e){
    if (type.value === "") {
        let message = "type ne peut pas être vide";
        setError(type,message);
    }else{
        setSuccess(type)
    }
  
  });
  promo.addEventListener('blur',function(e){
    if (promo.value === "") {
        let message = "promo ne peut pas être vide";
        setError(promo,message);
    }else{
        setSuccess(promo)
    }
  
  });