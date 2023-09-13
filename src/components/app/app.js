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
        this.maxId = 4;   
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            // console.log(index);
            /* соблюдаем неизменяемость данных.*/
            
            // спосолб 1. 
            // находим индекс нужного эл-та в массиве
            // const index = data.findIndex(elem => elem.id === id);
            // копируем часть массива от начала до искомого элемента 
            // const before = data.slice(0, index);
            // копируем часть массива начиная с элемента после искомого и до конца
            // const after = data.slice(index + 1); 
            // таким образом искомый элемент выпадает
            // объединяем эти массивы
            // const newArr = [...before, ...after];

            // способ 2.
            // фильтруем массив: все элементы кроме нужного
            const newArr = data.filter(item => item.id !== id);

            return {
                data: newArr
            }
        });
    }

    addItem = (name, salary) => {
        /* console.log({name, salary}); */
        const newItem = {
            name,
            salary,
            increase: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }

        })
    }
    
    render() {
        return (
            <div className="app">
                <AppInfo></AppInfo>
        
                <div className="search-panel panel">
                    <SearchPanel></SearchPanel>
                    <AppFilter></AppFilter>
                </div>
                <EmployersList data={this.state.data} onDelete={this.deleteItem} />
                <EmployersAddForm onAdd={this.addItem}/>
            </div>
        );
    }
}
    

export default App;