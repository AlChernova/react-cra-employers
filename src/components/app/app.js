import { Component } from 'react';

import './app.css';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { name: 'Мария', salary: 800, increase: false, id: 1},
                { name: 'Анна', salary: 1100, increase: true, id: 2},
                { name: 'Зульфия', salary: 560, increase: false, id: 3}
            ]
        }
    }
    
    render() {
        return (
            <div className="app">
                <AppInfo></AppInfo>
        
                <div className="search-panel panel">
                    <SearchPanel></SearchPanel>
                    <AppFilter></AppFilter>
                </div>
                <EmployersList data={this.state.data} onDelete={id => console.log(id)} />
                <EmployersAddForm/>
            </div>
        );
    }
}
    

export default App;