import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Institute = props =>(
    <tr>
        <td>{props.institute.institute_name}</td>
        <td>{props.institute.phone_number}</td>
        <td>{props.institute.email}</td>
        <td>{props.institute.address}</td>
        <td>{props.institute.number_of_students}</td>
        
        <td>
            <Link to={"/edit/" + props.institute._id}>Edit</Link>
        </td>
    </tr>
)


export default class InstitutesList extends Component{

    constructor(props) {

        super(props);
        this.state = {institutes: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/institute/')
        .then(response => {
            this.setState({institutes:response.data});
            
        })
        .catch(function (error){
            console.log(error);
        })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/institute/')
        .then(response => {
            this.setState({institutes:response.data});
            
        })
        .catch(function (error){
            console.log(error);
        })
    }



    instituteList() {

        return this.state.institutes.map(function(currentInstitute,i){

           return <Institute institute={currentInstitute} key={i}/>;


        });
    }
   
   
    render(){
    return (

            <div>
                <h3>Institutes List</h3>
                <table className="table table-striped" style={{marginTop:20}}>
                    <thead>
                        <tr>

                            <th>Institute Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Number Of Students</th>
                            <th>Actions</th>

                        </tr>
                    </thead>

                    <tbody>
                        {this.instituteList()}
                    </tbody>

                </table>
            </div>

        )
    }

}