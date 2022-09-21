import React from 'react';


class Counter extends React.Component {

   
 
    styles={

        fontSize:30,
        fontWeight : "bold" 
    };
     

   
    render() { 
        console.log('props',this
        .props) ;


       
        return(

        <div>
         {this.props.id}
         <span  style={this.styles} className={this.buttonColor()}>{this.formatCount()}</span>

         <button onClick={()=>this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm">incriment</button>


         <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">delete</button>
        
        </div>
        ) ;
    }

    buttonColor() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter ; 
       return  value === 0 ? "zero" : value ; 
    }
}
 
export default Counter;
