const buscarCancionRedirect = () => {
    console.log("Buscar canción llamada");
    const input = document.getElementById("buscar-canción");
    const selectedOption = input.value;
    console.log("Valor seleccionado:", selectedOption);
    window.location.href = selectedOption;
};

const acordesAmericanoAEspañol = {
    "A": "La",
    "B": "Si",
    "C": "Do",
    "D": "Re",
    "E": "Mi",
    "F": "Fa",
    "G": "Sol",
    "A7": "La7",
    "B7": "Si7",
    "C7": "Do7",
    "D4": "Re4",
    "D7": "Re7",
    "D9": "Re9",
    "E7": "Mi7",
    "F7": "Fa7",
    "G7": "Sol7",
    "Am": "Lam",
    "Bm": "Sim",
    "Cm": "Dom",
    "Dm": "Rem",
    "Em": "Mim",
    "Fm": "Fam",
    "Gm": "Solm",
    "A#m": "Sibm",
    "C#m": "Dom#m",
    "D#m": "Rem#m",
    "F#m": "Fam#m",
    "G#m": "Sol#m"
};

const acordesEspañolAAmericano = Object.fromEntries(
    Object.entries(acordesAmericanoAEspañol).map(([key, value]) => [value, key])
);

const convertirACifradoOriginal = () => {
    const acordesBody = document.querySelector('.acordes-lyrics');
    const acordesTexto = acordesBody.innerHTML;
    const acordesConvertidos = acordesTexto.replace(/\b(?:La|Si|Do|Re|Mi|Fa|Sol|La7|Si7|Do7|Re4|Re7|Re9|Mi7|Fa7|Sol7|Lam|Sim|Dom|Rem|Mim|Fam|Solm|Sibm|Dom#m|Rem#m|Fam#m|Sol#m)\b/g, match => {
        return acordesEspañolAAmericano[match] || match;
    });
    acordesBody.innerHTML = acordesConvertidos;
};

const convertirACifradoAmericano = () => {
    const acordesBody = document.querySelector('.acordes-lyrics');
    const acordesTexto = acordesBody.innerHTML;
    const acordesConvertidos = acordesTexto.replace(/\b(?:A|B|C|D|E|F|G|A7|B7|C7|D4|D7|D9|E7|F7|G7|Am|Bm|Cm|Dm|Em|Fm|Gm|A#m|C#m|D#m|F#m|G#m)\b/g, match => {
        return acordesAmericanoAEspañol[match] || match;
    });
    acordesBody.innerHTML = acordesConvertidos;
};

const acordesTransposicion = {
    "C": "C#",
    "C#": "D",
    "Db": "D",
    "D": "D#",
    "D#": "E",
    "Eb": "E",
    "E": "F",
    "F": "F#",
    "F#": "G",
    "Gb": "G",
    "G": "G#",
    "G#": "A",
    "Ab": "A",
    "A": "A#",
    "A#": "B",
    "Bb": "B",
    "B": "C",
    "Cm": "C#m",
    "C#m": "Dm",
    "Dbm": "Dm",
    "Dm": "D#m",
    "D#m": "Em",
    "Ebm": "Em",
    "Em": "Fm",
    "Fm": "F#m",
    "F#m": "Gm",
    "Gbm": "Gm",
    "Gm": "G#m",
    "G#m": "Am",
    "Abm": "Am",
    "Am": "A#m",
    "A#m": "Bm",
    "Bbm": "Bm",
    "Bm": "Cm",
    "C7": "C#7",
    "C#7": "D7",
    "Db7": "D7",
    "D7": "D#7",
    "D#7": "E7",
    "Eb7": "E7",
    "E7": "F7",
    "F7": "F#7",
    "F#7": "G7",
    "Gb7": "G7",
    "G7": "G#7",
    "G#7": "A7",
    "Ab7": "A7",
    "A7": "A#7",
    "A#7": "B7",
    "Bb7": "B7",
    "B7": "C7"
};

const acordesTransposicionInversa = Object.keys(acordesTransposicion).reduce((obj, key) => {
    obj[acordesTransposicion[key]] = key;
    return obj;
}, {});

const transponerAcordesArriba = () => {
    const acordesBody = document.querySelector('.acordes-lyrics');
    const acordesTexto = acordesBody.innerHTML;
    const acordesConvertidos = acordesTexto.replace(/\b(?:C|C#|Db|D|D#|Eb|E|F|F#|Gb|G|G#|Ab|A|A#|Bb|B|Cm|C#m|Dbm|Dm|D#m|Ebm|Em|Fm|F#m|Gbm|Gm|G#m|Abm|Am|A#m|Bbm|Bm|C7|C#7|Db7|D7|D#7|Eb7|E7|F7|F#7|Gb7|G7|G#7|Ab7|A7|A#7|Bb7|B7)\b/g, match => {
        return acordesTransposicion[match] || match;
    });
    acordesBody.innerHTML = acordesConvertidos;
};

const transponerAcordesAbajo = () => {
    const acordesBody = document.querySelector('.acordes-lyrics');
    const acordesTexto = acordesBody.innerHTML;
    const acordesConvertidos = acordesTexto.replace(/\b(?:C|C#|Db|D|D#|Eb|E|F|F#|Gb|G|G#|Ab|A|A#|Bb|B|Cm|C#m|Dbm|Dm|D#m|Ebm|Em|Fm|F#m|Gbm|Gm|G#m|Abm|Am|A#m|Bbm|Bm|C7|C#7|Db7|D7|D#7|Eb7|E7|F7|F#7|Gb7|G7|G#7|Ab7|A7|A#7|Bb7|B7)\b/g, match => {
        return acordesTransposicionInversa[match] || match;
    });
    acordesBody.innerHTML = acordesConvertidos;
};

const toggleImagen = () => {
    const imagenContainer = document.getElementById('acordes-imagen');
    const botonAcordes = document.getElementById('toggle-imagen-btn');

    if (imagenContainer.style.display === 'none') {
        imagenContainer.style.display = 'block';
        botonAcordes.textContent = 'CERRAR ACORDES';
    } else {
        imagenContainer.style.display = 'none';
        botonAcordes.textContent = 'ACORDES';
    }
};
