for(i = 0; i < 11; i++){
    document.writeln(`<strong style="text-align: center; font-size: 25px"> <p>Tabuada do: ${i} </p> <br>`);
  
      for(j = 1; j < 11; j++){
        document.writeln(`<fieldset >${j} x ${i} = ${i * j} <br> </fieldset>`)
      }
  
  }