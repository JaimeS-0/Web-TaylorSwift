

document.addEventListener("DOMContentLoaded", () => {

    const check = document.querySelector("#languageSwitch")

    // idioma guardado de localStorage
    const idiomaGuardado = localStorage.getItem("idioma") || "en"

    if (idiomaGuardado === "es") {
        check.checked = true
    } else {
        check.checked = false
    }

    // guardamos en localStorage
    check.addEventListener("change", () => {
        const idioma = check.checked ? "es" : "en"

        localStorage.setItem("idioma", idioma)
        
        actualizarIdioma(idioma)
    })

    actualizarIdioma(idiomaGuardado)
});

// Función para actualizar los textos de la página
function actualizarIdioma(idioma) {
    const textos = {
        en: {
            // Home
            title: "Welcome to the page about",
            subtitle: "Explore the life and career of the world's most influential artist",
            buttonVideo: "Watch the Concert again",
            english: "English",
            spanish: "Spanish",
            navHome: "Home",
            navDiscography: "Discography",
            navBiography: "Biography",
            navPhotos: "Pictures",
        

            // Footer
            policy: "Privacy Policies",
            legal: "Legal notice",

            // Discografia
            discografy: "Discography of",
            discografySubtitle: "an American singer of country and pop genres, consists of 11 albums",
            escucha: "Listen to Album",
            informacionAlbum: "album information",
            date: "Release date",
            TTD: "Her most recent album, where Taylor adopts a more mature and experimental approach. It explores themes of pain and loss with a poetic and confessional style, blending synth-pop and folk elements.",
            MIDNIGHTS: "A conceptual album exploring themes of insomnia and nighttime reflection. The songs delve into thoughts and emotions that arise in the stillness of the night, featuring a more electronic and atmospheric sound.",
            EVERMORE: "Considered the sister album to “Folklore“, it continues with an indie folk style. Songs like “Willow” and “Champagne Problems” dive into themes of love and loss, with a minimalist and evocative production.",
            FOLKLORE: "A surprise album with an indie folk style, created during the pandemic. “Cardigan” and “Exile” showcase a more introspective and narrative side of Taylor, with stories exploring nostalgia and melancholy.",
            LOVER: "A vibrant and romantic album filled with upbeat and dreamy tracks. Songs like “Lover” and “You Need to Calm Down” celebrate love and individuality with a pop sound.",
            REPUTATION: "Marking a bold reinvention, this album explores themes of public image and personal identity. “Look What You Made Me Do” and “Delicate” highlight darker tones and electronic beats.",
            A1989: "Her first fully pop album, inspired by the sounds of the '80s. “Shake It Off” and “Blank Space” are iconic tracks that showcase her ability to reinvent herself and dominate the charts.",
            RED: "This album marks a transition to a more pop-oriented sound while keeping her country roots. “We Are Never Ever Getting Back Together” and “I Knew You Were Trouble” exemplify her talent for crafting catchy and emotionally resonant hits.",
            SPEAKNOW: "Taylor wrote all the songs on this album herself, showcasing her growth as a songwriter. Tracks like “Mine” and “Back to December” explore past relationships and moments of personal introspection.",
            FEARLESS: "With this album, Taylor became a global superstar. “Love Story” and “You Belong with Me” are anthems that capture the essence of youthful love and heartache. The album earned multiple awards, including the Grammy for Album of the Year.",
            TAYLORSWIFT: "This debut album introduces Taylor as a young country singer with a natural talent for songwriting. Songs like “Tim McGraw” and “Teardrops on My Guitar” reflect her teenage experiences and her ability to tell heartfelt stories.",

            // Biografia
            titleBiography: "The biography of <span class=\"colorSpan\">Taylor Swift</span>, Discover her story.",
            text_1: "Taylor Alison Swift was born on December 13, 1989, in Reading, Pennsylvania, United States. She is the daughter of Scott Swift, a financial advisor, and Andrea Gardner Finlay, a homemaker who previously worked as a 1  marketing executive. She has a younger brother, Austin Swift, who is an actor.",
            text_2: "From a very young age, Taylor showed a great interest in music and poetry. At the age of nine, she began acting in local theater productions and participating in karaoke contests. Her family moved to Nashville, Tennessee, when she was fourteen years old to help her pursue her dream of becoming a country singer. In Nashville, Taylor signed a contract with Big Machine Records and released her self-titled debut album in 2006.",
            text_3: "The album “Taylor Swift“ (2006) was an immediate success, especially with singles like “Tim McGraw“ and “Teardrops on My Guitar“. Her second album, “Fearless“ (2008), catapulted her to international fame with hits like “Love Story“ and “You Belong with“ Me. This album won the Grammy for Album of the Year, making Taylor the youngest artist to receive this honor at that time.",
            text_4: "Taylor continued to evolve her musical style with each album. Speak Now (2010) was completely written by her and showcased her ability to tell personal stories. Red (2012) marked a transition to a more pop sound, with hits like We Are Never Ever Getting Back Together. With 1989 (2014), Taylor completely reinvented herself as a pop artist, winning another Grammy for Album of the Year.",
            text_5: "In 2017, she released “Reputation“, a darker and more experimental album that addressed themes of fame and controversy. “Lover“ (2019) was a return to a more cheerful and romantic sound. During the COVID-19 pandemic, Taylor surprised her fans with two indie folk style albums: “Folklore“ and “Evermore“ (2020), both critically acclaimed.",
            text_6: "In 2022, she released “Midnights“, a conceptual album that explores themes of insomnia and nocturnal reflection. Her most recent album, “The Tortured Poets Department“ (2024), showcases a more mature and experimental facet, exploring themes of pain and loss with a poetic approach.",
            text_7: "Taylor has been an influential figure not only in music, but also in popular culture. She has had highly publicized relationships and has been open about her personal experiences in her songs. In addition to her musical career, she has dabbled in acting and directing music videos. Taylor is also known for her philanthropy and her advocacy for artists' rights.",
            text_8: "Taylor Swift has left an indelible mark on the music industry with her ability to reinvent herself and connect emotionally with her audience. She has sold millions of albums worldwide and has won numerous awards, including multiple Grammys. Her influence extends beyond music, being a powerful voice on issues of social justice and artists' rights.",
            primeros: "- Early life and musical beginnings",
            ascenso: "- Rise to fame",
            evolucion: "- Musical evolution",
            reputacion: "- Reputation and beyond",
            ultimos: "- Latest works",
            vida: "- Personal life and achievements",
            impacto: "- Impact and legacy",
            click: "(Click on the title)",
            tv: "Why Taylor's Version?",
            tvtext: "When she was young, she signed a contract with a record label called Big Machine Records. Under that contract, she recorded her first six albums, but the record label retained the rights to her songs (what are called ”masters”, which are the original recordings)",
            tvtext_1: "Years later, Big Machine sold those rights to a businessman named Scooter Braun, who has had conflicts with Taylor. Since she couldn't buy her own recordings, she decided to re-record them from scratch. Thus, with the new versions (which bear the ”(Taylor's Version)",
            beforeNow: "before vs now",
            photoAlbum: "Photo Album",
            
        },
        es: {
            // Home
            title: "Bienvenido a la página sobre",
            subtitle: "Explora la vida y carrera de la artista más influyente del mundo",
            buttonVideo: "Mira el concierto otra vez",
            english: "Ingles",
            spanish: "Español",
            navHome: "Inicio",
            navDiscography: "Discografía",
            navBiography: "Biografía",
            navPhotos: "Fotos",

            // Footer
            policy: "politicas de privacidad",
            legal: "Aviso Legal",

            // Discografia
            discografy: "Discografia de ",
            discografySubtitle: "Cantante estadounidense de géneros country y pop, consta de 11 álbumes.",
            escucha: "Escuchar Album",
            informacionAlbum: "Informacion del album",
            date: "Fecha de lanzamiento",
            TTD: "Su último álbum, en el que Taylor adopta un enfoque más maduro y experimental, explora temas de duelo y pérdida en un estilo poético y confesional, mezclando elementos de synth-pop y folk.",
            MIDNIGHTS: "Un álbum conceptual que explora temas como el insomnio y la reflexión nocturna. Las canciones ahondan en los pensamientos y emociones que surgen en la quietud de la noche, con un sonido más electrónico y atmosférico.",
            EVERMORE: "Considerado el álbum hermano de “Folklore”, continúa con un estilo indie folk. Canciones como “Willow” y “Champagne Problems” se adentran en temas de amor y pérdida, con una producción minimalista y evocativa.",
            FOLKLORE: "Un álbum sorpresa de estilo indie folk, creado durante la pandemia. “Cardigan” y “Exile” muestran un lado más introspectivo y narrativo de Taylor, con historias que exploran la nostalgia y la melancolía.",
            LOVER: "Un álbum vibrante y romántico lleno de temas alegres y oníricos. Canciones como “Lover” y “You Need to Calm Down” celebran el amor y la individualidad con un sonido pop.",
            REPUTATION: "Este álbum, que marca una reinvención audaz, explora temas de imagen pública e identidad personal. “Look What You Made Me Do” y “Delicate” resaltan tonos más oscuros y ritmos electrónicos.",
            A1989: "Su primer álbum totalmente pop, inspirado en los sonidos de los años 80. “Shake It Off” y “Blank Space” son temas icónicos que muestran su capacidad para reinventarse y dominar las listas de éxitos.",
            RED: "Este álbum marca una transición hacia un sonido más orientado al pop, pero conservando sus raíces country. “We Are Never Ever Getting Back Together” y “I Knew You Were Trouble” ejemplifican su talento para crear éxitos pegadizos y con gran resonancia emocional.",
            SPEAKNOW: "Taylor escribió todas las canciones de este álbum, lo que demuestra su crecimiento como compositora. Temas como “Mine” y “Back to December” exploran relaciones pasadas y momentos de introspección personal.",
            FEARLESS: "Con este álbum, Taylor se convirtió en una superestrella mundial. “Love Story” y “You Belong with Me” son himnos que capturan la esencia del amor y el desamor juvenil. El álbum ganó múltiples premios, incluido el Grammy al Álbum del Año.",
            TAYLORSWIFT: "Este álbum debut presenta a Taylor como una joven cantante country con un talento natural para la composición. Canciones como “Tim McGraw” y “Teardrops on My Guitar” reflejan sus experiencias de adolescencia y su capacidad para contar historias conmovedoras.",

            // Biografia
            titleBiography: "La biografía de <span class=\"colorSpan\">Taylor Swift</span> , descubre su historia.",
            text_1: "Taylor Alison Swift nació el 13 de diciembre de 1989 en Reading, Pennsylvania, Estados Unidos. Es hija de Scott Swift, un asesor financiero, y Andrea Gardner Finlay, una ama de casa que anteriormente trabajó como ejecutiva de marketing. Tiene un hermano menor, Austin Swift, que es actor.",
            text_2: "Desde muy joven, Taylor mostró un gran interés por la música y la poesía. A los nueve años,comenzó a actuar en producciones teatrales locales y a participar en concursos de karaoke. Su familia se mudó a Nashville, Tennessee, cuando ella tenía catorce años para ayudarla a per seguirsu sueño de convertirse en cantante de country.En Nashville, Taylor firmó un contrato con Big Machine Records y lanzó su álbum debut homónimo en 2006.",
            text_3: "El álbum “Taylor Swift” (2006) fue un éxito inmediato, especialmente con sencillos como “Tim McGraw” y “Teardrops on My Guitar”. Su segundo álbum, “Fearless” (2008), la catapultó a la fama internacional con éxitos como “Love Story” y “You Belong with Me”. Este álbum ganó el Grammy al Álbum del Año, haciendo de Taylor la artista más joven en recibir este honor en ese momento.",
            text_4: "Taylor continuó evolucionando su estilo musical con cada álbum. “Speak Now” (2010) fue completamente escrito por ella y mostró su habilidad para contar historias personales. “Red” (2012) marcó una transición hacia un sonido más pop, con éxitos como “We Are Never Ever Getting Back Together”. Con “1989” (2014), Taylor se reinventó completamente como una artista pop, ganando otro Grammy al Álbum del Año.",
            text_5: "En 2017, lanzó “Reputation”, un álbum más oscuro y experimental que abordó temas de fama y controversia. “Lover” (2019) fue un regreso a un sonido más alegre y romántico.Durante la pandemia de COVID-19, Taylor sorprendió a sus fans con dos álbumes de estilo indie folk: “Folklore” y “Evermore” (2020), ambos aclamados por la crítica.",
            text_6: "En 2022, lanzó “Midnights”, un álbum conceptual que explora temas de insomnio y reflexión nocturna. Su álbum más reciente, “The Tortured Poets Department” (2024), muestra una faceta más madura y experimental, explorando temas de dolor y pérdida con un enfoque poético.",
            text_7: "Taylor ha sido una figura influyente no solo en la música, sino también en la cultura popular. Ha tenido relaciones muy publicitadas y ha sido abierta sobre sus experiencias personales en sus canciones. Además de su carrera musical, ha incursionado en la actuación y la dirección de videos musicales. Taylor también es conocida por su filantropía y su defensa de los derechos de los artistas.",
            text_8: "Taylor Swift ha dejado una marca indeleble en la industria musical con su capacidad para reinventarse y conectar emocionalmente con su audiencia. Ha vendido millones de álbumes en todo el mundo y ha ganado numerosos premios, incluyendo múltiples Grammys. Su influencia se extiende más allá de la música, siendo una voz poderosa en temas de justicia social y derechos de los artistas.",
            primeros: "- Primeros años y comienzo en la musica",
            ascenso: "- Ascenso a la fama",
            evolucion: "- Evolución musical",
            reputacion: "- Reputation y mas alla", 
            ultimos: "- Ultimos Trabajos",
            vida: "- Vida personal y logros",
            impacto: "- Impacto y legado",
            click: "(Haz click en el titulo)",
            tv: "¿Por qué Taylor’s Version?",
            tvtext: "Cuando era joven, firmó un contrato con una discográfica llamada Big Machine Records. Bajo ese contrato, grabó sus primeros seis álbumes, pero la discográfica se quedó con los derechos de sus canciones (lo que se llama ”masters”, que son las grabaciones originales).",
            tvtext_1: "Años después, Big Machine vendió esos derechos a un empresario llamado Scooter Braun, que ha tenido conflictos con Taylor. Como ella no podía comprar sus propias grabaciones, decidió volver a grabarlas desde cero. Así, con las versiones nuevas (que llevan el sello ”(Taylor’s Version)”).",
            beforeNow: "Antes vs Ahora",
            photoAlbum: "Album de fotos",
        }
    };

    // Actualizamos los textos de acuerdo con el idioma
    const elementos = [
        // Home
        { id: "title", value: `${textos[idioma].title} <span class="colorSpan">Taylor Swift</span>` },
        { id: "subtitle", value: textos[idioma].subtitle },
        { id: "english", value: textos[idioma].english },
        { id: "spanish", value: textos[idioma].spanish },
        { id: "buttonVideo", value: textos[idioma].buttonVideo },
        { id: "navHome", value: textos[idioma].navHome },
        { id: "navDiscography", value: textos[idioma].navDiscography },
        { id: "navBiography", value: textos[idioma].navBiography },
        { id: "navPhotos", value: textos[idioma].navPhotos },

        // Footer
        { id: "policy", value: textos[idioma].policy },
        { id: "legal", value: textos[idioma].legal },

        // Discografia
        { id: "discografy", value: `${textos[idioma].discografy} <span class="colorSpan">Taylor Swift</span>` },
        { id: "discografySubtitle", value: textos[idioma].discografySubtitle },
        { id: "TTD", value: textos[idioma].TTD },
        { id: "MIDNIGHTS", value: textos[idioma].MIDNIGHTS },
        { id: "EVERMORE", value: textos[idioma].EVERMORE },
        { id: "FOLKLORE", value: textos[idioma].FOLKLORE },
        { id: "LOVER", value: textos[idioma].LOVER },
        { id: "REPUTATION", value: textos[idioma].REPUTATION },
        { id: "1989", value: textos[idioma].A1989 },
        { id: "RED", value: textos[idioma].RED },
        { id: "SPEAK NOW", value: textos[idioma].SPEAKNOW },
        { id: "FEARLESS", value: textos[idioma].FEARLESS },
        { id: "TAYLOR SWIFT", value: textos[idioma].TAYLORSWIFT },

        // Biografia
        { id: "titleBiography", value: textos[idioma].titleBiography },
        { id: "text_1", value: textos[idioma].text_1 },
        { id: "text_2", value: textos[idioma].text_2 },
        { id: "text_3", value: textos[idioma].text_3 },
        { id: "text_4", value: textos[idioma].text_4 },
        { id: "text_5", value: textos[idioma].text_5 },
        { id: "text_6", value: textos[idioma].text_6 },
        { id: "text_7", value: textos[idioma].text_7 },
        { id: "text_8", value: textos[idioma].text_8 },
        { id: "primeros", value: textos[idioma].primeros},
        { id: "ascenso", value: textos[idioma].ascenso},
        { id: "evolucion", value: textos[idioma].evolucion},
        { id: "reputacion", value: textos[idioma].reputacion},
        { id: "ultimos", value: textos[idioma].ultimos},
        { id: "vida", value: textos[idioma].vida},
        { id: "impacto", value: textos[idioma].impacto},
        { id: "click", value: textos[idioma].click},
        { id: "tv", value: textos[idioma].tv},
        { id: "tvtext", value: textos[idioma].tvtext},
        { id: "tvtext_1", value: textos[idioma].tvtext_1},
        { id: "beforeNow", value: textos[idioma].beforeNow},

        // Fotos
        
        { id: "photoAlbum", value: textos[idioma].photoAlbum},

    ];

    // Elementos repetidos
    elementos.forEach(element => {
        const el = document.getElementById(element.id);
        if (el) {
            el.innerHTML = element.value
        }
    });

    document.querySelectorAll(".release-date").forEach(fecha => {
        fecha.innerHTML = textos[idioma].date
    });

    document.querySelectorAll(".btnAlbum").forEach(escucha => {
        escucha.innerHTML = textos[idioma].escucha
    });

    document.querySelectorAll("#album-information").forEach(informacionAlbum => {
        informacionAlbum.innerHTML = textos[idioma].informacionAlbum
    });
}

