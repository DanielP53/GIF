console.log('CODE LOADED');

fetch('https://api.giphy.com/v1/gifs/trending?api_key=J5CCLFL7rpPbWweAEIFM2bNpfdonszs4&limit=10&rating=g')
  .then(response => response.json())
  .then(data =>{
        const container = document.querySelector('.gif-container');

        data.data.forEach(element => {
            let insertElement = document.createElement('img');

            insertElement.className = 'col-3 m-2 img-fluid'
            insertElement.src = element.images.original.url;
            container.appendChild(insertElement);
        });
  });
