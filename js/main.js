import {getData} from './network.js';
import {renderPictures} from './render-pictures.js';
import {showAlert} from './util.js';
import './uploading-picture-modal.js';
import './scale-preview.js';
import {setOnFiltersClick} from './filter-pictures.js';

// TODO get rid of picturesData's export
let picturesData;

try {
  picturesData = await getData();
  renderPictures(picturesData);
  document.querySelector('.img-filters').classList.remove('img-filters--inactive');
  setOnFiltersClick(renderPictures, picturesData);
} catch (err) {
  showAlert(err.message);
}


export {picturesData};
