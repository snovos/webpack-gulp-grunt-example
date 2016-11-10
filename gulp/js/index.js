import ProgressBar from './progressBar';
import steps from './steps.json';

const App = (function() {

	const progressBar = new ProgressBar();
	const refNode = document.querySelector('#progress-title');
	progressBar.properties = JSON.parse(steps);
	refNode.parentNode.insertBefore(progressBar, refNode.nextSibling);

})();
