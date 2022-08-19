function si1() {
    var F = parseInt(document.getElementById("G").value);
    var D = parseInt(document.getElementById("S").value);
    var I = parseFloat(document.getElementById("I").value);
    var Y = document.getElementById("year").value;
    var M = document.getElementById("month").value;

    T = F - D;
    year = new Date().getFullYear();
    const today = new Date();
    let monthh = today.getMonth() + 1;
    Netm = M - monthh;
    Nety = Y - year;

    By = toMonthName( M );
    
    if( Netm <= 0)
    {
        Nety = Nety * 12;
         N = (Nety + Netm)/12;  
    }

    else
    {
        N = Nety + (Netm/12);
    }

    if (I <= 0) {
        var si = (T /(N*12)) + 1;
    }
    else {
        I = I/1200;
        var si = (T*I)/(Math.pow(1+I,12*N)-1);
        var si = si + (0.095*si)/100 ;
    }


    result = 'It will take until \t' + parseInt(si) + '\tper month to save\t' + F + '\tby\t' + By + '\t' + Y;

    document.getElementById("res1").innerHTML = result;


}

function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);
  
    return date.toLocaleString('en-US', {
      month: 'long',
    });
  }
