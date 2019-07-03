import React, {Component} from 'react';
import ItemList from '../item-list/item-list';
import ItemDetails, {Record} from '../item-details/item-details';
import ErrorBoundry from "../error-indicator/error-indicator";
import './people-page.css';
import SWApiService from "../../services/swapi-service";
import Row from "../row/row";



export default class PeoplePage extends Component {
    swapiService = new SWApiService();
    state = {
        selectedPerson: null
    };

    onPersonSelected = (selectedPerson) =>{
        this.setState({
            selectedPerson
        })
    };

    render() {
        if(this.state.hasError) return <ErrorBoundry />;
        const itemList =
            <ItemList onItemSelected={this.onPersonSelected}
                      getData={this.swapiService.getAllPeople}>
                      {({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})`}
            </ItemList>
        ,
            personDetails =  <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedPerson}
                             getData={this.swapiService.getPerson}
                             getImageUrl={this.swapiService.getPersonImage}>
                    <Record field='name' label='Name'/>
                    <Record field='gender' label='Gender'/>
                    <Record field='birthYear' label='Birth Year'/>
                    <Record field='eyeColor' label='Eye Color'/>
                </ItemDetails>
                </ErrorBoundry>;

        return <Row left={itemList} right={personDetails}/>
    }
}