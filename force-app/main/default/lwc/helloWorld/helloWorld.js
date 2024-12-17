import { LightningElement , track, wire} from 'lwc';
import searchAccounts from '@salesforce/apex/AccountSearchController.searchAccounts';
export default class HelloWorld extends LightningElement {
        @track searchKey = '';
        @track accounts = [];
        @track error;

        // Event to handle user input
        handleSearchInput(event) {
                this.searchKey = event.target.value;
                if (this.searchKey.length >= 2) {
                this.performSearch();
                } else {
                this.accounts = []; // Clear results if input is too short
                }
        }

        // Call Apex to search for accounts
        performSearch() {
                searchAccounts({ searchKey: this.searchKey })
                .then(result => {
                        this.accounts = result;
                        this.error = undefined;
                })
                .catch(error => {
                        this.error = error;
                        this.accounts = [];
                });
        }
}
