const accessKey = '0afBlKCZzO7N55AUBf6i54BvXZ70r729xuQzF8WJpUA';

const formEl = document.querySelector('form');

const inputEL = document.querySelector('#search-input')

const searchResultsEl = document.querySelector('.search-results');

const showMoreButtonEl = document.querySelector('#show-more-button');

let inputData = '';
let page = 1;


async function searchImages(){
  inputData = inputEL.value;

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  // console.log(url);

  const response = await fetch(url);
  // it will wait untill the url was fetched fully

  const data = await response.json();
  // but the response data cant be used, need to converted to json format, and have to use await as well, because it takes time
  // console.log(data);

  if (page === 1) {
    searchResultsEl.innerHTML = '';
  }

  const results = data.results;
  // console.log(results);

  results.map((result) =>{
    const imageWrapper = document.createElement('div');

    imageWrapper.classList.add('search-result');

    const image = document.createElement('img');

    image.src = result.urls.small;

    image.alt = result.alt_description;

    const imageLink = document.createElement('a');

    imageLink.href = result.links.html;

    imageLink.target = '_blank';

    imageLink.textContent = result.alt_description;

    //add images and description links into the parent div

    imageWrapper.append(image);
    imageWrapper.append(imageLink);

    searchResultsEl.append(imageWrapper);
  });

  page++;
  // console.log(page);

  if(page>1){
    showMoreButtonEl.style.display = 'block';
  }
}

formEl.addEventListener('submit', (event)=> {
  event.preventDefault();
  page = 1;
  searchImages();

});

showMoreButtonEl.addEventListener('click', () => {
  searchImages();
})