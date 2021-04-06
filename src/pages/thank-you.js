import { none } from "ol/centerconstraint"
import * as React from "react"
import styled from "styled-components"

// styles
const pageStyles = {
  boxSizing:"border-box",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  color: "#020e37",
}
const headingStyles = {
  position:"relative"
}
const subHeadingStyles = {
  padding:"10px 0px 30px 0px"
}

const titleContainerStyles = {
  height:500,
  display:"flex",
  textAlign:"center",
  marginTop:"50vh",
  justifyContent:"center",
  padding:20
}

const titleWrapperStyles = {
  marginTop:"-250px",
  maxWidth:1000,
  padding:20,
  boxSizing:"border-box",
  width:"100%"
}

const SubmitButton = styled.button`
  border:none;
  color:white;
  background-color:#e2573b;
  height:50px;
  font-size:20px;
  min-width:100px;
  max-width:150px;
  cursor:pointer;
  flex:"1";
  flex-grow:2;
  display:inline-block;

  &:hover{
    background-color:#fe8269;
  }
`

const inputStyle = {
  borderRadius:0,
  fontSize:20,
  height:46,
  paddingLeft:20,
  border:"solid 1px #eee",
  flex:"1 1 auto",
  width: "100%",
  maxWidth:"400px"
}

const updates = [
  {
    date:"06/04/21",
    updates:[
      "Create static landing page",
      "Setup android project"
    ],
  },
  {
    date:"05/04/21",
    updates:[
      "Buy domain name \"getsquad.org\""
    ]
  }
]

const HorizontalLine = styled.div`
  height:2px;
  border-bottom:solid 1px #eee;
`


// markup
const ThankYouPage = () => {
  return (
    <main style={pageStyles}>
      <title>Welcome to Squad</title>
      <div style={titleContainerStyles}>
        <div style={titleWrapperStyles}>
          <h1 style={headingStyles}>
            <span style={{fontSize:"14px"}}>We received your email! 🎉 </span><br></br>
            <span>We'll notify you once we're live! </span>
            <span role="img" aria-label="Party popper emojis">
            </span>
          </h1>
          </div>
        </div>
    </main>
  )
}

export default ThankYouPage 
