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
                <h5 className="card-header"> Simple POST Request</h5>
                <div className = "card-body">
                    Returned Id: {postId}
                </div>
            </div>
        );
    }
}

export { Intake };