import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const searchForm = document.querySelector('.form');
const loadingText = document.createElement('p');
loadingText.className = 'loading-text';
loadingText.style.display = 'none';
searchForm.after(loadingText);

searchForm.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements['search-text'].value.trim();

  if (!searchQuery) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term',
      position: 'topRight',
    });
    return;
  }

  try {
    showLoader();
    loadingText.textContent = 'Loading images, please wait...';
    loadingText.style.display = 'block';
    clearGallery();

    const data = await getImagesByQuery(searchQuery);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Check your connection and try again.',
      position: 'topRight',
    });
    console.error('Fetch error:', error);
  } finally {
    hideLoader();
    loadingText.style.display = 'none';
    searchForm.reset();
  }
}
