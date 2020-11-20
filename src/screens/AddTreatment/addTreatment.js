import React, { Component } from 'react';
import styles from "./addTreatment.scss"
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';

  
const Step1 = () => {
  return (
    <div className = "stepWrapper">
      Step 1 Content
    </div>
  );
}

const Step2 = () => {
  return (
    <div className = "stepWrapper">
      Step 2 Content
    </div>
  );
}

const Step3 = () => {
  return (
    <div className = "stepWrapper">
      Step 3 Content
    </div>
  );
}


class AddTreatment extends Component {

  render() {

    const step1Content = <Step1/>;
    const step2Content = <Step2/>;
    const step3Content = <Step3/>;

    function step2Validator() {
      // return a boolean
      return true;
    }

    function step3Validator() {
      // return a boolean
      return true;
    }

    function onFormSubmit() {
      // handle the submit logic here
      // This function will be executed at the last step
      // when the submit button (next button in the previous steps) is pressed
    }

    return (
      <div>
        <StepProgressBar
          startingStep={0}
          onSubmit={onFormSubmit}
          steps={[
            {
              label: 'Step 1',
              subtitle: '0%',
              name: 'step 1',
              content: step1Content
            },
            {
              label: 'Step 2',
              subtitle: '50%',
              name: 'step 2',
              content: step2Content,
              validator: step2Validator
            },
            {
              label: 'Step 3',
              subtitle: '100%',
              name: 'step 3',
              content: step3Content,
              validator: step3Validator
            }
          ]}
        />
      </div>
    );
  }
}

export default AddTreatment;
