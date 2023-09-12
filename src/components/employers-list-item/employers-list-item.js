import { Component } from 'react';

import './employers-list-item.css';

class EmployersListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            increase: this.props.increase,
            favs: false,
        };
    }

    onIncrease = () => {
        this.setState(({increase}) => ({
            increase: !increase
        }));
    };  

    onFavorites = () => {
        this.setState(({favs}) => ({
            favs: !favs
        })); 
    };

    render() {
        const{name, salary, onDelete} = this.props;
        const{increase, favs} = this.state;

        let classNames = "list-group-item d-flex justify-content-between";
        if (increase) {
            classNames += " increase";
        }
        if (favs) {
            classNames += " like";
        }
        return (
            <li className={classNames}>
                <button onClick={this.onFavorites} className="list-group-item-label">{name}</button>
                <input type="text" className="list-group-item-input" defaultValue={salary + ' руб.'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button onClick={this.onIncrease} type="button"
                        className="btn-cookie btn-sm">
                        <i className="fas fa-cookie"></i>
                    </button>
                    <button onClick={onDelete} type="button"
                            className="btn-trash btn-sm">
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>        
        );
    }
} 

export default EmployersListItem;