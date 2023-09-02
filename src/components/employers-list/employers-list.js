import './employers-list.css';
import EmployersListItem from "../employers-list-item/employers-list-item";

const EmployersList = () => {
    return (
        <ul className="app-list panel list-group">
            <EmployersListItem name="Mary" salary={800}/>
            <EmployersListItem name="Anna" salary={1000}/>
            <EmployersListItem name="Claudia" salary={560}/>
        </ul>
    );
}

export default EmployersList;