calc= document.getElementById('calc');
kg = document.getElementById('kg');
m = document.getElementById('m');
imc = document.getElementById('imc');
lectura = document.getElementById('lectura');

calc.onclick = function(){
    if (kg.value!="" && m.value!="") {
        imcx= (kg.value/ (m.value * m.value));
        imc.innerHTML = imcx;
        console.log(imcx);

        if (imcx<=15) {
            lectura.innerHTML = "Delgadez muy severa";
            document.getElementById("15oM").style.backgroundColor= "#F9E79F";
        }
        else if (imcx>=15.0000001 && imcx <=15.9) {
            lectura.innerHTML = "Delgadez severa";
            document.getElementById("DelgadezS").style.backgroundColor= "#F9E79F";
        }
        else if (imcx>=16 && imcx <=18.4) {
            lectura.innerHTML = "Delgadez";
            document.getElementById("Delgadez").style.backgroundColor= "#FCF3CF";
        }
        else if (imcx>=18.5 && imcx <=24.9) {
            lectura.innerHTML = "Peso Saludable";
            document.getElementById("PesoS").style.backgroundColor= "#ABB2B9";
        }
        else if (imcx>=25 && imcx <=29.9) {
            lectura.innerHTML = "Sobrepeso";
            document.getElementById("Sobrepeso").style.backgroundColor= "#E59866";
        }
        else if (imcx>=30 && imcx <=34.9) {
            lectura.innerHTML = "Obesidad Severa";
            document.getElementById("ObesidadS").style.backgroundColor= "#E67E22";
        }
        else if (imcx>=40) {
            lectura.innerHTML = "Obesidad Mórbida";
            document.getElementById("ObesidadM").style.backgroundColor= "#BA4A00";
        }
        else {
           alert("No ha ingresado sus datos");
        }
    }
};