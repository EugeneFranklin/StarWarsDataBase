import React, {Component} from 'react';
import './item-list.css';
import Spinner from "../spinner/spinner";


export default class ItemList extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then(itemList => {
                this.setState({itemList})
            })
    }

    renderItems(items) {
        return items.map((item) => {
            const {id} = item,
                label = this.props.children(item);
            return(
                <li className="list-group-item" key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            )
        })
        }
    render() {
        const {itemList} = this.state;
        if (!itemList) return <Spinner/>;
        return (
            <ul className="item-list list-group">
                {this.renderItems(itemList)}
            </ul>
        )
    }
}

    /*constructor(props) {
        super(props);
        this.state = {
            itemsList: null
        }
    }

    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then (itemsList =>{
                this.setState({itemsList});
            })
    }

    renderItems(items) {
        return items.map((item) => {
                const {id} = item,
                    label = this.props.renderItem(item);
                return (
                    <li className="list-group-item" key={id}
                        onClick={() => this.props.onItemSelected(id)}>
                        {label}
                    </li>
                )
            }
        )
    }*/

   // render() {
        /*const {itemsList} = this.state;
        if (!itemsList) return <Spinner/>;
        return (
            <ul className="item-list list-group">
                {this.renderItems(itemsList)}
            </ul>
        );*/
        //return(
 /*       <ul className="item-list list-group" >
            <li className="list-group-item">Luke Sky</li>
            <li className="list-group-item">Dart Vader</li>
            <li className="list-group-item">R2-D2</li>
        </ul>
        );
    }*/
//}