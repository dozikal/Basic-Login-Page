import React from 'react';

export default class LandingPage extends React.Component{

    render(){
        return(
            <div className="animated slideInRight">
                <h1>
                    {'Welcome ' + this.props.username}
                </h1>
            </div>
        )
    }
}