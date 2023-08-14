import { Component } from "react";
import App from "./App";

class Dataclass extends Component
{
    subjects = ["html", "java", "react", "js", "anguler", "python"];

    amountToPay =(price,discount)=> Math.round(price-(price*discount/100))

    render()
    {
    return <div>
        <h1>Dataclass component</h1>
       <h4>Amount to pay shirt---------{this.amountToPay(1200,26)}</h4> 
        Amount to pay shirt---------{this.amountToPay(2000,26)}
        Amount to pay shirt---------{this.amountToPay(4000,50)}

        <ul>
            {
                this.subjects.map((item,index) =><li key={index}>{item}</li>)
            }
        </ul>
        </div>
    }
}
export default Dataclass;