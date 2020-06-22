import React, { Component } from 'react';
import axios from 'axios';
export default class EditInstitute extends Component {

    constructor(props) {
        super(props);

        this.onChangeInstituteName = this.onChangeInstituteName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeNumberOfStudents = this.onChangeNumberOfStudents.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state= {
            institute_name:'',
            phone_number:'',
             email:'',
             address:'',
             number_of_students:''
        }
    }

    componentDidMount(){
        axios.get('http://localhost:4000/institute/'+this.props.match.params.id)
            .then(response =>{
                this.setState({
                    institute_name:response.data.institute_name,
                    phone_number:response.data.phone_number,
                    email:response.data.email,
                    address:response.data.address,
                    number_of_students:response.data.number_of_students
                })
            })
            .catch(function(error){
                console.log(error)
            })
    }

    onChangeInstituteName(e) {

        this.setState({
            institute_name:e.target.value
        });
    }

    onChangePhoneNumber(e){

        this.setState({
            phone_number:e.target.value
        });
    }

    onChangeEmail(e){

        this.setState({

            email:e.target.value
        });
    }

    onChangeAddress(e){

        this.setState ({

            address:e.target.value
        });
    }

    onChangeNumberOfStudents(e){

        this.setState ({

            number_of_students:e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
 
        console.log(`Form submitted:`);
        console.log(`Institute Name: ${this.state.institute_name}`);
        console.log(`Phone Number: ${this.state.phone_number}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Address: ${this.state.address}`);
        console.log(`Number Of Students: ${this.state.number_of_students}`);
 
        const newInstitute = {
            institute_name:this.state.institute_name,
            phone_number:this.state.phone_number,
            email:this.state.email,
            address:this.state.address,
            number_of_students:this.state.number_of_students
 
        }
 
        axios.post('http://localhost:4000/institute/update.'+this.props.match.params.id , newInstitute)
        .then(res => console.log(res.data));
        
        this.props.history.push('/');
 
    }
 




    render(){

        return (
            <div>
               <h3 > Update Institute Details</h3>
               <form onSubmit={this.onSubmit}>
               <div className="form-group">
                        <label>Institute Name: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.institute_name}
                               onChange={this.onChangeInstituteName}                         
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.phone_number}
                               onChange={this.onChangePhoneNumber}                         
                        />
                    </div>

                    <div className="form-group">
                        <label>Email: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.email}
                               onChange={this.onChangeEmail}                         
                        />
                    </div>

                    <div className="form-group">
                        <label> Address: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.address}
                               onChange={this.onChangeAddress}                         
                        />
                    </div>

                    <div className="form-group">
                        <label>Number Of Students: </label>
                        <input type="text"
                               className="form-control"
                               value={this.state.number_of_students}
                               onChange={this.onChangeNumberOfStudents}                         
                        />
                    </div>
               <br/>
               <div className="form-group">
                   <input type="submit" value="Update Institute" className="btn btn-primary"/>


               </div>



               </form>
            </div>
        )
    }
}