window.addEventListener( "load", function () {
    function sendData() {
      const XHR = new XMLHttpRequest();
  
      const FD = new FormData( form );
      const oOutput = document.getElementById("output");
  
      XHR.addEventListener( "load", function(event) {
        oOutput.classList.add('active');
        oOutput.innerHTML = JSON.parse(event.target.responseText);
        // console.log(JSON.parse(event.target.responseText));
      } );
  
      XHR.addEventListener( "error", function( event ) {
        oOutput.classList.add('active');
        oOutput.innerHTML = "Oops! Something went wrong.";
        // console.log(JSON.parse(event.target.responseText));
      } );
  
      XHR.open( "POST", "server.php" );
    //   XHR.responseType = 'json';
      XHR.setRequestHeader( 'Accept', 'application/json' );
      XHR.send( FD );
    }
   
    const form = document.getElementById( "form" );
  
    form.addEventListener( "submit", function ( event ) {
      event.preventDefault();
      sendData();
    } );
  } );