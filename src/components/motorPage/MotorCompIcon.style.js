import styled from "styled-components";


export const Motorcontainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
justify-content: center;

.column {
    float: left;
    width: 50%;
    padding: 10px;
  }
  
  /* Clear floats after the columns */
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  /* Style the buttons */
  .btn {
    border: none;
    outline: none;
    padding: 12px 16px;
    background-color: #f1f1f1;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #ddd;
  }
  
  .btn.active {
    background-color: #666;
    color: white;
  }

`

