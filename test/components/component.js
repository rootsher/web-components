var importFile = document.querySelector('link[rel="import"].helloWorldTemplate').import;
var template = importFile.querySelector('template');

var proto = Object.create(HTMLElement.prototype, {
	createdCallback: {
		value: function() {
			var shadow = this.createShadowRoot();
			shadow.appendChild(template.content);
		}
	}
});

document.registerElement('hello-world', {
	prototype: proto
});