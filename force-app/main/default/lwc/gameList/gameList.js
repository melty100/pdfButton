import { LightningElement, wire } from 'lwc';
import getAllGames from '@salesforce/apex/GameController.getAllGames';


export default class GameList extends LightningElement {
    games;
    value = 'Name';

    get options() {
        return [
            {label: 'Name', value: 'Name'},
            {label: 'Rating', value: 'Rating__c'},
            {label: 'Released', value: 'Released__c'},
        ];
    }

    handleChange(event){
        this.value = event.detail.value;
        console.log(event);
    }

    @wire(getAllGames, {sortBy: '$value'})
    getGames(result){
        this.games = result;
    }
}