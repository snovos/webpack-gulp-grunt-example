const _HTMLElement = function() {};
_HTMLElement.prototype = HTMLElement.prototype;

class ProgressBarEl extends _HTMLElement {
	constructor() {
		super();
	}
	attachedCallback(){
		this.innerHTML = `
			<div class="progress-wrap">
			<ul class="progress-bar">
				${this.steps.map((step, index) => `
					<li class="${step.status}" data-text="${index+1}">
					<span class="label">${step.text}</span>
					</li>
				`).join('')}
			</ul>
			</div>
			`;
	}

	set properties(props) {
		this.steps = props;
	}
}
const ProgressBar = document.registerElement("progress-bar", ProgressBarEl);

export default ProgressBar
