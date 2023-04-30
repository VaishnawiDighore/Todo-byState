// import React, {useState} from 'react';

// const ToDo = () => {
//     const [name, setName] = useState([]);
//     const [inpname, setInpname] = useState("");
//     const [remove, setRemove] = useState("");
//   return (
//     <>
//      <h2>ToDo List</h2>
//      <input type="text" value={inpname}
//      onChange={(e) => setInpname(e.target.value)}
//      /> 
//      <button onClick={() => {
//         setName((prev) => [...prev, inpname]);
//         setInpname("");
//         setRemove("")
//      }}>Add data</button>
//      {name.map((nm, index) => {
//         return <h3>{index + 1} {nm}</h3>
//      })}

// {/* const changeTheme =()=>{
//           if(color.textColor === "black"){
//              setColor({
//                 bgColor:"black",
//                 textColor:"white",
//                 title:"Uncheck to switch Light Mode"

//              })
//           } else {
//             setColor({
//                 bgColor:"white",
//                 textColor:"black",
//                 title:"Check to switch Dark Mode"
//              })
//           }
//      } */}

// {/* <input type="checkbox" onChange={changeTheme} />  */}
//                  {/* <label>{color.title}</label> */}
//     </>
//   )
// }

// export default ToDo
