    const button = document.getElementById('color-change-button');
    const container = document.getElementById('color-container');
    const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    const hexValue = document.getElementById('hex-value');
    
    container.style.backgroundColor = '#0089aa';
    
    const changeHexBackground = () => {
        let hex = '#'
    
        for (i = 0; i < 6; i++) {
            const index = Math.floor(Math.random()*hexCharacters.length)
            hex += hexCharacters[index]
        }
    
        hexValue.textContent = hex
        container.style.backgroundColor = hex
    };
    
    button.addEventListener('click', changeHexBackground);


