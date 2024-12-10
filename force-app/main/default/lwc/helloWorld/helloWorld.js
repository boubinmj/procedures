import { LightningElement } from 'lwc';
export default class HelloWorld extends LightningElement {
        greeting = 'Matt';
        changeHandler(event) {
        this.greeting = event.target.value;
        }
}