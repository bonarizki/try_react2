import React,{Component} from 'react';
// import logo, { ReactComponent } from './../.logo.svg';
import {API_BASE_URL} from './../config.js';


class UserAll extends Component
{
    state = {
        response: []
    }

    componentDidMount() {
    var TOKEN = 'jal9veCYK0KcW7BK4tlSJXA1oUoVKP6Q4XFecMJIdTQFjzmaEhGhsJfhfgk7rIShmyZkUoi9Mk5SDPBD';
    return fetch(`${API_BASE_URL}users`, {
        method: 'GET',
        headers: new Headers({
          Authorization: `Bearer ${TOKEN}`,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
            this.setState({ response: data.data.data })
              console.log(this.state.response)
          }) 
    }

    render() {
        return(
            <React.Fragment>
            <h1>Halaman User</h1>
            <table className="table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                        <td>Nama</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-row-1">
                        <td>Column 1</td>
                        <td>Column 2</td>
                        <td>Column 3</td>
                    </tr>
                    <tr className="table-row-2">
                        <td>Column 1</td>
                        <td>Column 2</td>
                        <td>Column 3</td>
                    </tr>
                    <tr className="table-row-3">
                        <td>Column 1</td>
                        <td>Column 2</td>
                        <td>Column 3</td>
                    </tr>
                </tbody>
            </table>
            </React.Fragment>
        );
    }   

}

export default UserAll;