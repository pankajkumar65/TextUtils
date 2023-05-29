 


export default function About(props) {
     
      let myStyle = {
        color:props.mode ==='dark'?'white':'#092246',
        backgroundColor: props.mode==='dark'? '#33598d':'white'
      }
   

  return (
    <div className='container' style={{color: props.mode==='dark'? 'white':'#092246'}}>
        <h1 className='my-3'>About Us</h1>
            <div className="accordion" style={myStyle} id="accordionExample">
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
            <strong>Analyse Your text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong>Text analysis, also known as text mining and text analytics, is the process of transforming text into data that machines can understand, process, and interpret, to deliver valuable insights. 
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            <strong>Free to use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> Textutils is a free character counter tool that provides instant character count & word count statics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyle}>
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> TextUtil is Browser compatible, This means that the website’s HTML coding, as well as the scripts on that website, should be compatible to run on the browsers. This is of immense importance, especially today when there is a large variety of web browsers available.
            </div>
            </div>
        </div>
        </div>
        {/* <div>
           <button onClick={togglestyle} type="button" className="btn btn-primary my-3" >{btnText}</button>
        </div> */}
    </div>
  )
}
