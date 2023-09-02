import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

function App() {
    
    const data = [
        { name: 'Мария', salary: 800},
        { name: 'Анна', salary: 1100},
        { name: 'Зульфия', salary: 560}
    ];

    return (
        <div className="app">
            <AppInfo></AppInfo>

            <div className="search-panel panel">
                <SearchPanel></SearchPanel>
                <AppFilter></AppFilter>
            </div>
            <EmployersList data={data}/>
            <EmployersAddForm/>
        </div>
    );
}

export default App;