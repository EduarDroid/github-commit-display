import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import moment from 'moment';

export default class CommitDisplay extends Component{
  constructor(props){
    super(props);
    this.state = {
      commits : []
    };
  }


  componentDidMount() {
    axios
      .get('https://api.github.com/repos/eduardroid/github-commit-display/commits')
      .then(res => {
        console.log(res.data);
        this.setState({
          commits: res.data
        })
      })
      .catch(err =>{
        console.log('Error from commits');
      })
  };
//{commit.commit.author.date}
  render(){
    return (
      <ListGroup>
        {this.state.commits.map(commit => (
          <ListGroup.Item key={commit.sha}>
            <span className="fs-6">{commit.commit.message} 
              
            </span>
          
            <figcaption className="blockquote-footer">
              {moment(commit.commit.author.date)
              .startOf('hour')
              .fromNow()}
              <em> by </em>
              <Badge variant="warning">
                <span className="font-monospace">{commit.commit.author.name}</span>
              </Badge>
              
            </figcaption>
           
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}

//export default CommitDisplay;