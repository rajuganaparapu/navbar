


const Data = () => {
    const username = "raju";
    const subjects = ["html", "java", "react", "js", "anguler", "python"];

    const price =1575;
     const discount =18 ;
     {/*const amountToPay =(price,discount)=>{
         return Math.floor(price-(price*discount/100))
     }*/}
     const amountToPay =(price,discount)=> Math.floor(price-(price*discount/100))
    return <div>
        <h1>this is  data component</h1>
        <p>This is {username}</p>
        <ul>
            {
            subjects.map((item,index)=><li key ={index}> {item}</li>)
        }

        <h1>amount to pay={amountToPay(price,discount)}</h1>
        <h1>amount to pay th shirt={amountToPay(price,discount)}</h1>
        <h1>amount to pay the jeans={amountToPay(1400,23)}</h1>
        <h1>amount to pay the t shirt={amountToPay(4537,59)}</h1>

        </ul>
        <h4>the price of the product is:{price},the product discount:{discount},after the discount you will pay the amount----:{Math.floor(price-(price*discount/100))}</h4>

        {/*<ul>

            <li>{subjects[0]}</li>
            <li>{subjects[1]}</li>
            <li>{subjects[2]}</li>
            <li>{subjects[3]}</li>
            <li>{subjects[4]}</li>
            
            <li>html</li>
            <li>java</li>
            <li>react</li>
            <li>html</li>
         </ul>*/}
    </div>
}
export default Data;