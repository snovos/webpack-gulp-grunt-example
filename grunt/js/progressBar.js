const _HTMLElement = function() {};
_HTMLElement.prototype = HTMLElement.prototype;

class ProgressBarEl extends _HTMLElement {
	constructor() {
		super();
	}
	//createdCallback(){ . . }  The behavior you define occurs when the element is registered.
	//detachedCallback(){ . . } The behavior occurs when the element is removed from the DOM
	//attributeChangedCallback() The behavior occurs when an attribute of the element is added, changed, or removed

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
