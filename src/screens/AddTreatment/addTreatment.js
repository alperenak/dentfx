import React, { Component } from 'react';
import styles from "./addTreatment.scss"
import Multistep from 'react-multistep'

class AddTreatment extends Component {
    
    render() {

        const steps = [
            {name: 'StepOne', component: <div>fist</div>},
            {name: 'StepTwo', component: <div>secnd</div>},
            {name: 'StepThree', component: <div>thrd</div>},
            {name: 'StepFour', component: <div>forth</div>}
          ]; 
        
        const prevStyle = {'background': '#33c3f0', 'border-width': '2px'}
        const nextStyle = {'background': '#33c3f0',  'border-width': '2px'}

        return (
            
            <div>
                <Multistep showNavigation={true} steps={steps} prevStyle={prevStyle} nextStyle={nextStyle}/>
            </div>
        );
    }
}

export default AddTreatment;
