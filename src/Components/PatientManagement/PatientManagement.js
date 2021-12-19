import React, { useReducer, useRef } from 'react';
import {patientReducer , patientState } from '../Reducers/patientReducers';



const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState);

    const handleSumbmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_PATIENT', 
            name: nameRef.current.value, 
            id: state.patients.length + 1
        })
        nameRef.current.value = '';
        console.log(nameRef.current.value);
    }
    console.log(state);

    return (
        <div>
            <h1>Manage Patient: {state.patients.length} </h1>
            <form onSubmit={handleSumbmit}>
                <input type="text" ref={nameRef}/>
            </form>
            {
                state.patients.map(pt => <li key={pt.id} onClick={()=> dispatch({type: 'REMOVE_PATIENT', id: pt.id})}>{pt.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;