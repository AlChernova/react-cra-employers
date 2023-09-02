import './employers-list.css';
import EmployersListItem from "../employers-list-item/employers-list-item";

const EmployersList = ({data}) => {

    const elements = data.map(item => {
        return (
            // <EmployersListItem name={item.name} salary={item.salary}/>
            // с использование обжект спред оператор
            <EmployersListItem {...item}/>

            // консоль выдает ошибку "Warning: Each child in a list should have a unique "key" prop." но ее позже будем разбирать
        )
    }) 

    return (
        <ul className="app-list panel list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;