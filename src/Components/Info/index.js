import React from 'react';
//import styled , { css } from 'styled-components';
import { RiSettings5Fill } from 'react-icons/ri';
import './index.css';
import '../Info/index.css';

function Info(){
    return(
        <div className="splash">
            <button className="settings">
                <RiSettings5Fill />
            </button>
        </div>
    )
}


export default Info;