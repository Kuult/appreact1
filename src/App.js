import React, {Component} from 'react';
import Article from './Article/Article';
import './Article/Article.module.css';
import styled from 'styled-components';
import './App.css';



const StyledButton = styled.button`
      background-color: white;
      border: ${props => props.altButton ? '2px solid red' : '2px solid #326647'};
      color: black;
      padding: 10px 16px;
      text-align: center;
      font-size: 20px;
      cursor: pointer;
      margin-top: 10px;
      margin-bottom: 10px;
      transition-duration: 0,4s;
      &:hover{
        background-color: ${props => props.altButton ? 'red' : '#326647'};
        color: white;
        }
`

class App extends Component {



  state = {
    articles:[
      {id: 'dsav3', title: "title1", content:"This is content 1"},
      {id: 'hgf43', title: "title2", content:"This is content 2"},
      {id: 'gdrfh4', title: "title3", content:"This is content 3"},
      {id: '2345rf', title: "title4", content:"This is content 4"},
      {id: 'hytg89o', title: "title5", content:"This is content 5"}
    ],
    showArticles: false
  }

  deleteArticleHandler = (articleIndex) =>{
    //const articles = this.state.articles.slice();
    const articles = [...this.state.articles];
    articles.splice(articleIndex,1);
    this.setState({articles: articles})
  }

  toggleArticlesHandler = () =>{
    const doesShow = this.state.showArticles;
    this.setState({showArticles: !doesShow});
  }

  render(){

    let articles = null;

    if(this.state.showArticles){
      articles = this.state.articles.map((article, index) =>{
        return(<Article
          title={article.title}
          content={article.content}
          deleteClick={() => this.deleteArticleHandler(index)}
          key={article.id}
        />);
      });
    }

    const articleStyles = [];

    if(this.state.articles.length === 1){
      articleStyles.push('OneArticle');
    }

    if(this.state.articles.length >= 4){
      articleStyles.push('GreenArticles');
    } else{
      articleStyles.push('OrangeArticles');
    }

    return(
      <div className='App'>
        <StyledButton altButton={this.state.showArticles}
          onClick={this.toggleArticlesHandler}>Toggle articles</StyledButton>
        <div className={articleStyles.join(' ')}>
          {articles}
        </div>

      </div>
    );
  }
}

export default App;
