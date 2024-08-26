function ct() {
    
    let valorEmCelsius = document.getElementById("celsius").value;

    let valorEmFahrenheit = (valorEmCelsius * 9/5) + 32;

    document.getElementById("resultado").textContent = valorEmFahrenheit.toFixed(2);
}
