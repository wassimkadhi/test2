import React from 'react';
import NavBar from'./components/navbar';
import Counters from'./components/counters';
//import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state ={
    counters : [
        {id:1 , value :4},
        {id:2 , value: 0},
        {id:3 , value: 0},
        {id:4 , value: 0}
    ]

      } ;


      handelIncrement= counter => { 
   
          const counters=[...this.state.counters] ;
          const index = counters.indexOf(counter)
          counter[index]={...counter};
          counters[index].value++ ; 
          this.setState({counters}) ;
                                       } ;

  handleDelete =(counterId)=>{
    const counters =this.state.counters.filter(c=>c.id !== counterId) ;
    this.setState({counters});


  };

   handeleReset=()=>{
                     const counters=  this.state.counters.map(c=>{c.value=0 ; return c ;});
                     this.setState(counters)
                   };


    render() { 
    return (
    <React.Fragment>
    <NavBar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
    <main className="container">
      <Counters
      counters={this.state.counters}
       onReset={this.handeleReset}
       onIncrement={this.handelIncrement}
       onDelete={this.handleDelete }/>
    </main>
    </React.Fragment>
    );
  }
} 
 
export default App;

