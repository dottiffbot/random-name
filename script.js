const nameContainer = document.querySelector('.name')
const randomButton = document. querySelector('.button')

function getRandomName(names){
    const randomizeNames = Math.floor(Math.random() * names.length)
    return names[randomizeNames]
}

function displayRandomName (){
    const studentName = [
        'Minjung', 
        'Malaz',
        'Victoria',
        'Mick',
        'Shangwen / Whitney', 
        'ChenYun', 
        'Jackie',
        'Helen',
        'Arav',
        'Jiaming',
        'Chenxing / Felix', 
        'Jack',
        'Z',
        'Elaine',
        'Ruoqing / Lucy'
    ]
    const randomName = getRandomName(studentName);
    nameContainer.textContent = randomName;
}

randomButton.addEventListener('click', displayRandomName )




