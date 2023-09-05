import './employers-list.css';
import EmployersListItem from "../employers-list-item/employers-list-item";

const EmployersList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            // <EmployersListItem name={item.name} salary={item.salary}/>
            // с использование обжект спред оператор
            <EmployersListItem key={id} {...itemProps}/>

            // консоль выдает ошибку "Warning: Each child in a list should have a unique "key" prop." но ее позже будем разбирать
        )
    }) 


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    );
}

export default EmployersList;