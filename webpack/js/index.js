import ProgressBar from './progressBar';
import '../sass/progress.scss';
import steps from './steps.json';

import '../sass/main.scss';
const App = (function() {

	const progressBar = new ProgressBar();
	const refNode = document.querySelector('#progress-title');
	progressBar.properties = steps;
	refNode.parentNode.insertBefore(progressBar, refNode.nextSibling);

})();
