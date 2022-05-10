import React from 'react'

class Footer extends React.Component{
    constructor() {
        super();
        this.name = {
            companyname: "BCCI",
            sponsor: "TATA"
        }
    }


    render() {
        return (
            <div>
                <div style={{fontSize:"1.5rem" ,  color:'red', textAlign:'center', marginTop:'22rem'}}>Copyright 2022 - {this.name.companyname} | Title Sponsor - {this.name.sponsor}</div>

            </div>
        )
    }
}



export default Footer;