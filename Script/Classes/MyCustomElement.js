/*testing directly copying from mdn web docs.
had some trouble defining custom element before, so checking if I did it wrong*/

class MyCustomElement extends HTMLElement {
    static observedAttributes = ["color", "size"];

    constructor() {
        super();
    }

    connectedCallback() {
        console.log("Skal printe når elementet legges til");
    }

    disconnectedCallback() {
        console.log("Skal printe når elementet blir fjernet");
    }

    adoptedCallback() {
        console.log("Skal printe når elementet blir flyttet til ny side");
    }

    attributeCangedCallback(name, oldValue, newValue) {
        console.log(`Skal printe når ${name} har blitt endret`);
    }

    updateView(){

    }
}


//Almost like exporting react hooks in a way, only much easier
customElements.define("my-custom-element", MyCustomElement);

/*I see now that what I did wrong, was trying to define  the element within the class.
I blame this on Terje for showing it that way.
It does work, but only if you run the class as an expression within an anonymous function*/