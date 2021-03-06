import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchEmployees } from "../../redux/actions/admin/Accounts";
import Cookies from "universal-cookie";

import Select from 'react-select'
import 'react-select/dist/react-select.css';

class MultipleSelect extends Component {

  state = {
    selectedOption: '',
  }

  componentWillMount() { 
    const cookies = new Cookies();
    var token = cookies.get("token");
    this.props.dispatch(fetchEmployees(token));
  }

  handleChange = (selectedOption) => {
    const employeeId = [];
    
    selectedOption.map(id => {
      employeeId.push(id.value)
    })
    this.setState({ selectedOption: employeeId });
  }

  setEmp(selectedOption) {
    this.props.getEmps(this.state.selectedOption)
  }

  render() {
  	const { selectedOption } = this.state;
    const { employees } = this.props;

    return (
      <Select
        multi={true}
        name="employees[]"
        placeholder="Välj Anställd"
        value={selectedOption}
        onChange={this.handleChange}
        onBlur={this.setEmp.bind(this)}
        options={ 
          employees.map(employee => (
            { value: employee.id, label: employee.name }
          ))
        }
      />
    );
  }
}

const mapStateToProps = state => ({ 
  employees: state.adminAccounts.employees, 
});

export default connect(mapStateToProps)(MultipleSelect)