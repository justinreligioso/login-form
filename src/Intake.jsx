import { render } from "@testing-library/react";
import React, { useState } from "react";

// const name = 'Josh Perez';
// const element = <h1>Hello, {name}</h1>;

// function appendInput() {
//     var newInput = `input-${this.state.inputs.length}`;
//     this.setState(prevState => ({ inputs: prevState.inputs.concat([newInput]) }));
// }
// const requestOptions = {
//     method : 'POST',
//     headers : {'Content-Type' : 'application/json'} ,
//     body: JSON.stringify({title: 'React POST Request Example'})

// };

// const handleSubmit = (e) => {
//     //https://jacob-tdp-backend.azurewebsites.net/api/AddRequirements
//     e.preventDefault();
//     fetch('https://reqres.in/api/posts', requestOptions) 
//         .then(response => response.json())
//         .then(data => this.setState({postId: data.id}))
     
    
//     //    method: 'POST',
//     //    body: JSON.stringify({
//     //         Disaster_Recovery_Preferences: "none",
//     //         Infrastructure_Required: true,
//     //         Helpdesk_Required: true
//     //     //   userId: Math.random().toString(36).slice(2),
//     //    }),
//     //    headers: {
//     //       'Content-type': 'application/json; charset=UTF-8',
//     //    },
    
//     //    .then((res) => res.json())
//     //    .then((post) => {
//     //     //   setPosts((posts) => [post, ...posts]);
//     //     //   setTitle('');
//     //     //   setBody('');
//     //    })
//     //    .catch((err) => {
//     //       console.log(err.message);
//     //    });
//        //console.log(res.json());
//     const {postId} = this.state;
//     console.log(postId)
// };


// export const Intake = (props) => {

// return (
    
//         <div className="intake-form-container">
//             <h2>Intake</h2> 
//             <form className = "intake-form">
//                 <label htmlFor="dbfield">Enter your database fields here:</label>
//                 <input type="dbfield" placeholder="Database Field" id="dbfield" name = "dbfield"/>
//                 <input type="dbfield" placeholder="Database Field" id="dbfield" name = "dbfield"/>
//                 <input type="dbfield" placeholder="Database Field" id="dbfield" name = "dbfield"/>


//                 <button type="submit">Submit</button>
//             </form>
//             <button className= "link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
//             <button className= "link-btn" onClick={() => props.onFormSwitch("register")}>Don't have an account? Register here.</button>
//         </div>

        
        
//     )
// }

class Intake extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postId: null
        }
    };

    componentDidMount() {

        // * Requierments
        fetch("https://jacob-tdp-backend.azurewebsites.net/api/AddRequirements", {
            method: 'POST',
            mode:'no-cors',
            body: JSON.stringify({
                // title: 'React POST Request Example' 
                Disaster_Recovery_Preferences: "uhhhhhhh",
                Infrastructure_Required: true,
                Helpdesk_Required: true
            }),
            headers: {
                "Content-type": 'application/json'
            }
            
        })

        // * App
        fetch("https://jacob-tdp-backend.azurewebsites.net/api/AddApp", {
            method: 'POST',
            mode:'no-cors',
            body: JSON.stringify({
                Aide_App_ID: 'ishika test id' ,
                App_Name: "test app name",
                App_Service_Description: "test app service description",
                Software_Type: "test software type",
                Created: "2023-07-25T11:00:01.511Z",
                Last_Updated: "2023-07-25T01:00:01.511Z"
            }),
            headers: {
                "Content-type": 'application/json'
            }
            
        })

        // * Env
        fetch("https://jacob-tdp-backend.azurewebsites.net/api/AddEnv", {
            method: 'POST',
            mode:'no-cors',
            body: JSON.stringify({
                ENV_ID: 'ishika env id' ,
                Num_Environments: 1,
                ENV_Request_Prod: "string",
                ENV_Request_DR: "string",
                ENV_Request_Stage: "string",
                ENV_Request_Test: "string",
                ENV_Request_Dev: "string",
                ENV_Request_High_Avail: "string"
            }),
            headers: {
                "Content-type": 'application/json'
            }
            
        })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          

        // * Business
        fetch("https://jacob-tdp-backend.azurewebsites.net/api/AddBusiness", {
            method: 'POST',
            mode:'no-cors',
            body: JSON.stringify({
                Bus_ID: "",
                SLO_Name: "" ,
                Bus_Segment:"",
                Bus_Owner:"",
                Technical_Owner: "me"
            }),
            headers: {
                "Content-type": 'application/json'
            }
            
        })

        
        // * Architect

        fetch("https://jacob-tdp-backend.azurewebsites.net/api/AddArchitect", {
            method: 'POST',
            mode:'no-cors',
            body: JSON.stringify({
                Architect_Reviewer_ID : "",
                Architect_Review_Date : "",
                Architect_Reviewer : "",
                Architect_Reviewer_Comments : ""
            }),
            headers: {
                "Content-type": 'application/json'
            }
            
        })

        // * Arch_App

        fetch("https://jacob-tdp-backend.azurewebsites.net/api/AddArch_App", {
            method: 'POST',
            mode:'no-cors',
            body: JSON.stringify({
                Architect_Reviewer_ID : "",
                Aide_App_ID : "",
                App_Review_status : "",
                OS_Platform : "",
                App_Status : "",
                Cloud_Op_Status : ""
            }),
            headers: {
                "Content-type": 'application/json'
            }
            
        })



        // .then((response) => response.json())
        // .then((json) => console.log(json));

        
        // const requestOptions = {
        //     method: 'POST',
        //     mode:'cors',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //     })
        // };

        // fetch('https://jacob-tdp-backend.azurewebsites.net/api/AddRequirements', requestOptions)
        //     .then(response => response.json())
        //     .then(data => this.setState({postId: data.id}));
    }

    render() {
        const { postId } = this.state;
        return (
            <div className = "card text-center m-3">
                <h2>Intake</h2> 
                <h5 className="card-header"> Simple POST Request</h5>
                <div className = "card-body">
                    Returned Id: {postId}
                </div>
            </div>
            
        );
    }
}

export { Intake };