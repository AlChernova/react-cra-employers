import { Component} from 'react';
import './employers-add-form.css';

class EmploersAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: '',
        }
    }

    onValueChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };    

    render() {
        const {name, salary} = this.state;

        return (
            <div className="app-add-form panel">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text" name="name"
                        className="form-control new-post-label"
                        onChange={this.onValueChange}
                        value={name}
                        placeholder="Как его зовут?" />
                    <input type="number" name="salary"
                        className="form-control new-post-label"
                        onChange={this.onValueChange}
                        value={salary}
                        placeholder="З/П в $?" />
    
                    <button type="submit"
                        className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        );
    }
};

export default EmploersAddForm;