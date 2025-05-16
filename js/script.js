
//  npm install two-up-element

// import '../node_modules/two-up-element/dist'


document.addEventListener("DOMContentLoaded", () => {

    // Header

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) { 
            header.classList.add("changeColorHeader");
        } else {
            header.classList.remove("changeColorHeader");
        }
    });



    // jQuery para el titulo del index.html

    const title = "Welcome to the page about Taylor Swift"
    const taylorPart = "Taylor Swift"
    let index = 0
    
    function escribirTexto() {

        const subtitle = title.slice(0, index + 1) // extrae los primeros index + 1 caracteres del texto

        const beforeTaylor = subtitle.split(taylorPart)[0] // [0] -> Nos devuelve antes de Taylor Swift

        // Construir el HTML con la parte resaltada
        $('#title').html(beforeTaylor + (subtitle.includes(taylorPart) ? `<span class="colorSpan">${taylorPart}</span>` : ''))
        
        if (index < title.length) {
            index++
            setTimeout(escribirTexto, 105) // Cambia la velocidad
        }
    }

    escribirTexto();


    // Biography

    $(document).ready(function() {
        // Inicialmente ocultamos la curiosidad
        $('.curiosity-text').hide();
    
        // mostramos/ocultamos el texto de la curiosidad
        $('.toggle-btn').click(function() {
            $(this).next('.curiosity-text').slideToggle()
        });
    });
    

    // Footer

    // Cambiar  Copyright al pasar el año automatico
    let date = new Date().getFullYear()
    console.log(date)
    document.getElementById("year").innerHTML = date;

})