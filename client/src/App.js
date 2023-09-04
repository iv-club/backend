import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Customer from './components/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overfloxX: "auto"
  },
  table:{
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2 //위 쪽으로 2만큼 마진
  }
})

class App extends Component { // class 컴포넌트

  state = { // 변경될수 있는 변수 그러나 props는 변경될 수 없는 변수를 의미 
    customers: "",
    completed : 0
  }

  componentDidMount() { // API 서버에서 데이터를 받아올 수 있는 작업을 처리
    this.timer = setInterval(this.progress, 20); // 0.02초마다 progress 함수가 실행
    // this.callApi()
    // .then(res => this.setState({customers: res}))
    // .catch(err => console.log(err));
  }

  callApi = async () => { // 비동기적으로 수행
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState( { completed : completed >= 100 ? 0 : completed + 1});
  }
  render(){
    const {classes} = this.props;
    return (
      <div>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
          {this.state.customers ? this.state.customers.map(c=> { return( <Customer key={c.id} id={c.id} image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}/>);
                }) : 
                <TableRow>
                  <TableCell colSpan="6" align="center">
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                  </TableCell>
                </TableRow>
                }
            </TableBody>
          </Table>
        </Paper>
  </div>
    );
  }
  
}

export default withStyles(styles)(App);
