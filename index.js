console.log('CODE LOADED');

fetch('https://api.giphy.com/v1/gifs/trending?api_key=J5CCLFL7rpPbWweAEIFM2bNpfdonszs4&limit=10&rating=g')
  .then(response => response.json())
  .then(data =>{
        const container = document.querySelector('.gif-container');

        data.data.forEach(element => {
            let insertElement = document.createElement('img');

            insertElement.className = 'col-3 m-2 rounded img-fluid'
            insertElement.src = element.images.original.url;
            container.appendChild(insertElement);
        });
  });

function getMore() {
    const container = document.querySelector('.gif-container');

    for (let i = 0; i < 10; i++) {
        fetch('https://api.giphy.com/v1/gifs/random?api_key=J5CCLFL7rpPbWweAEIFM2bNpfdonszs4&tag=&rating=g')
            .then(response => response.json())
            .then(data => {
                let insertElement = document.createElement('img');

                insertElement.className = 'col-3 m-2 rounded img-fluid'
                insertElement.src = data.data.images.original.url;
                container.appendChild(insertElement);
            });
    }
}

function search() {
    const container = document.querySelector('.gif-container');

    container.innerHTML = '';

    const query = document.querySelector('.query').value;

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=J5CCLFL7rpPbWweAEIFM2bNpfdonszs4&q=${query}&limit=10&offset=0&rating=g&lang=en`)
        .then(response => response.json())
        .then(data => {
            data.data.forEach(element => {
                let insertElement = document.createElement('img');
    
                insertElement.className = 'col-3 m-2 rounded img-fluid'
                insertElement.src = element.images.original.url;
                container.appendChild(insertElement);
            }); 
        });
}