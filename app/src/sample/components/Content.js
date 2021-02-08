'use strict';
import React,{ useState } from 'react';
// import List from './components/List';
import { createStore } from "redux";
// import styled from 'styled-components';

// const FormContainer = styled.form`
//     color: #757575;
//     font-size: 14px;
//     font-weight: bold;
//     border-radius: 3px;
//     border: 1px solid #efefef;
// `
export default function Content({id,name,onChangeId,onChangeName,onSaveItem,checkName}) {
    console.log({id,name,onChangeId,onChangeName,onSaveItem,checkName})
    console.log(onSaveItem)
    return (
        <>
            <Toast id={id} name={name}/>
            <p>content</p>
            <Form
                id={id}
                name={name}
                onChangeId={onChangeId}
                onChangeName={onChangeName}
            />
            <button type="button"
                className="btn btn-outline-success"
                onClick={() => {onSaveItem()}}
                disabled = {!checkName}
                >
                SAVE
            </button>
        </>
    );
}

function Form({id,name,onChangeId,onChangeName}) {
    return (
        <form>
            <div className="form-group">
                <label className="pt-2">ID</label>
                <input id="id"
                    type="text"
                    className="form-control"
                    value={id}
                    onChange={(e)=>onChangeId(e)}
                />
                <label className="pt-2">Name</label>
                <input id="name"
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e)=>onChangeName(e)}
                />
            </div>
        </form>
    )
}


function Toast({id,name}) {
    const st_confirm = {
        color: '#333',
        fontSize: '16pt'
    }
    const p ={
        color: '#B00966'
    }
    return (
        <div id="toast1" className="toast" data-delay="3000" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="toast-body">
                <label style={st_confirm}>Are you sure?</label>
                <hr/>
                <p style={p}>id: {id}</p>
                <p style={p}>name: {name}</p>
            </div>
        </div>
    );
}