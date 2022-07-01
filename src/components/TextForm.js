import React,{useState} from 'react'

export default function TextForm(props) {
    const buttonupclick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showalert("converted to uppercase!!","success")
    }
    const buttonloclick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
      props.showalert("converted to lowercase!!","success")
  }
    const handleonchange=(event)=>{
        setText(event.target.value);
    }
    const buttonCapclick=()=>{
      let arr=text.split(' ');
      for(let i=0;i<arr.length;i++){
        arr[i] =arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
      }
      setText(arr.join(' '));
      props.showalert("Capitalized the Word!!","success")

    }
    const buttonemailextracter=()=>{
      let arr=text.split(' ');
      let b=[];
      for(let i=0;i<arr.length;i++ ){
        if(arr[i].includes("@")&&arr[i].includes(".com")){
          b.push(arr[i]);
        }
      }
      if(b.length===0){
        props.showalert("does not contain any email !!","danger")

      }
      else{
        props.showalert("email extracted!!","success")

      }
      for(let i=0;i<b.length;i++){
        document.getElementById('email').innerHTML+="<li>"+b[i]+"</li>";
      }

  }
  const buttoncopy=()=>{
    let text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copied to clipboard!!","success")

}
  const buttonclear=()=>{
    let newtext="";
    setText(newtext);
    props.showalert("Cleared!!","success")

}

    const[text,setText]=useState('');//by default entertext
    // text="hello";//wrong way
    // setText("hello yash write something here..")//right

    const findword=()=>{
      let a=text.split(" ");
      let cnt=0;
      for(let i=0;i<a.length;i++){
        if(a[i]===""){
          continue;
        }
        else{
          cnt++;
        }
      }
      return cnt;
    }
  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="my-3">
        <textarea className="form-control" value={text} onChange={handleonchange} style={{backgroundColor: props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={buttonupclick}  >Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={buttonloclick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={buttonCapclick} >Capitalize</button>
        <button className="btn btn-primary mx-1" onClick={buttonemailextracter} >Email Extracter</button>
        <button className="btn btn-primary mx-1" onClick={buttoncopy} >Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={buttonclear} >Clear Text</button>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
      <h1>Your text summary</h1>
      <p>{findword()} words, {text.length} characters</p>
      <p>{0.008*(findword())} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter some text in above box to preview it"}</p>
      <h3>Extracted Email</h3>
      <ul id="email"></ul>

    </div>
    </>
  )
}
// average time to read 125 words is 1 minute--data by google 
// for  1 word 0.008 minutes
