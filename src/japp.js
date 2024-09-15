import "./app.css";

const HelloUserStyle ={
   color:"tomato",
   fontSize:"40px",
   margin:"20px" ,
    

    

}
const InfoStudentStyle ={
color: "green"
}





function HelloUser({name,surname}){
    
    return(
        <div style={HelloUserStyle}>
          Hello ,<span className="test-1"> {name} {surname}
            </span>
        </div>
    )


}
function InfoStudent({name,Class,age}){
    return(
        <h2>
        <div className="test-3">
           <span className="test-4">
            <span className="test-5">Name: <span style={InfoStudentStyle}>{name}</span></span>
            <span className="test-5"> Class: <span style={InfoStudentStyle}>{Class}</span> </span>
            <span className="test-5">Age: <span style={InfoStudentStyle}>{age}</span></span>
            </span>
        </div>
        </h2>
    )

}

function NewTest(){
    return(
        <div className="test-2">
        <h1>
            hey hii i am Good what About You
        </h1>
        </div>
    )
}

export default HelloUser;
export{
    NewTest,
    InfoStudent
    
};