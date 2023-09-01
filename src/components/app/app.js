import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';

function App() {
    return (
        <div className="app">
            <AppInfo></AppInfo>

            <div className="search-panel panel">
                <SearchPanel></SearchPanel>
                <AppFilter></AppFilter>
            </div>
            <EmployersList/>
        </div>
    );
}

export default App;