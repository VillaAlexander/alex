function Obtenercilindro(){
  var areaResultado = document.getElementById("areaResultado");
  var s = parseInt(document.getElementById("s").value);

  var area = (s*15);

  areaResultado.innerHTML = "Quemaste: " + area+" kalorias";
}