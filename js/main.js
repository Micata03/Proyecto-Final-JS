
document.addEventListener("DOMContentLoaded", mostrarFormulario);

const busqueda = document.querySelector('#btn_buscar');
const divResultado = document.querySelector('#resultado');
const verFormulario = document.querySelector('#btn-enviar');
const foto = localStorage;


busqueda.addEventListener('click', (e) =>{
    e.preventDefault();
    obtenerDatosApi()
});

verFormulario.addEventListener('click', (e)=>{
    e.preventDefault();
    mostrarFormulario()
});

function obtenerDatosApi(){
    
    fetch('../datos.json')
        .then(respuesta => respuesta.json())
        .then(adoptables => {
            adoptables.forEach(adoptable =>{
                
               
                
                if (adoptable.tipoMascota === document.querySelector('#tipoMascota').value &&
adoptable.edadMascota === document.querySelector('#edad').value && adoptable.tamañoMascota === document.querySelector('#tipoTamanio').value){
       


            foto.setItem( "foto", `${adoptable.foto}`); //Guarda la foto en LS para tomarla en la pagina de formulario de adopcion, aca tengo un problema porque me guarda solo la primera coincidencia    
    
            $('.tarjetas').prepend(`
                
                <div class="card text-center border-success mb-3" style="width: 18rem;" id="tarjetas">
                    <img src="${adoptable.foto}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${adoptable.nombre}</h5>
                    <p class="card-text">${adoptable.nombre} es un ${adoptable.tipoMascota} de tamaño ${adoptable.tamañoMascota} y ${adoptable.edadMascota}. Rescatado por ${adoptable.nombreRefugio}</p>
                    <a href="formulario.html" class="btn btn-primary boton" >Adoptar!</a>
                </div>
                </div>   `)}                
            


            })           


        })       
        .catch((error) => console.log(error));


    };

 function limpiarHtml(){
     divResultado.innerHTML = "";
 }   

 //muestra imagen del perro adoptado en el formulario de adopcion
 function mostrarFormulario (){
    
     $('.imagen').append(`<img class="image" src= ${foto.getItem("foto")}>`)

     


 };

 
    
  

        



                


