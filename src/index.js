import React from 'react';
import ReactDOM from 'react-dom/client';
import style from "./index.css"
import one from "./images/ns1.jpg"
import two from "./images/ns2.jpg"
import three from "./images/ns3.jpg"
import four from "./images/ns4.jpg"
import five from "./images/ns5.jpg"
import six from "./images/ns3.jpg"
import seven from "./images/ns7.jpg"
import eight from "./images/ns8.jpg"
import nine from "./images/ns9.jpg"
import ten from "./images/ns10.jpg"
const root=ReactDOM.createRoot(document.getElementById("root"))

function Title(){
  return(<h1 style={{textAlign:"center",fontSize:"5xl"}}>ImageGallery</h1>)
}
function Image(props){
  return(<div style={{display:"flex", border:"solid skyBlue"}}>
    <div >
      <img  src={props.image} alt="" style={{width:"250px" ,height:"250px" ,boxShadow:"30px grey"}}></img>
      <p style={{textAlign:"center"}}>{props.dec}</p>
    </div>
    </div>
  )
}
var arr=[
  {
  image:one,
dec:"Look deep into nature"},
{
  image:two,
dec:"Nature never goes out of style"},

{
  image:three,
dec:"Nature at its best"},
{
  image:four,
dec:"Study,love,Stay close to Nature"},{
  image:five,
dec:"Mother Nature is my kinda girl"},{
  image:six,
dec:"Nature is the Art of God"},{
  image:seven,
dec:"Nature never goes out of style"},{
  image:eight,
dec:"Land really is the best art"},{
  image:nine,
dec:"Nature is Pleased with simplicity"},{
  image:ten,
dec:"Nature is my medicine"}


]
root.render(<div>
<Title></Title>
    <div style={{display:"flex", flexWrap:"wrap", gap:"20px",justifyContent:"center"}}>
    {
      arr.map(function(item){
        return <Image image={item.image} dec={item.dec}></Image>
      }
      
    )
    }
  
  </div></div>
)