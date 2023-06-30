import React from "react";
import "./Article.css";
import styled from 'styled-components';
import styles from "./Article.module.css";

const StyledDiv = styled.div`

width: 70%;
margin: auto;
border: 1px solid #537655;
box-shadow: 0 3px 4px #bbbbbb;
padding: 12px;
text-align: center;
margin-bottom: 10px;

@media (min-width: 900px){

    width: 630px;

}
`;

const article = props => {

    return(
        //<div className="Article" style={style}>
        <StyledDiv>
            <h2>{props.title}</h2>
            <p className={styles.violet}>{props.content}</p>
            <button onClick={props.deleteClick}>Delete article</button>
            <br />
            <br />
        </StyledDiv>
    );
}

export default article;
