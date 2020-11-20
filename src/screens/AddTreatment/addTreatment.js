import React, { Component } from 'react';
import styles from "./addTreatment.scss"
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import { Tick } from 'react-crude-animated-tick';
import CheckMark from './checkMark'

const Step1 = () => {
  return (
    <div className="stepWrapper">
      <form class="needs-validation" novalidate>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationTooltip01">First name</label>
            <input type="text" class="form-control" id="validationTooltip01" value="Mark" required />
            <div class="valid-tooltip">
              Looks good!
      </div>
          </div>
          <div class="col-md-6 mb-3">
            <label for="validationTooltip02">Last name</label>
            <input type="text" class="form-control" id="validationTooltip02" value="Otto" required />
            <div class="valid-tooltip">
              Looks good!
      </div>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6 mb-3">
            <label for="validationTooltip03">City</label>
            <input type="text" class="form-control" id="validationTooltip03" required />
            <div class="invalid-tooltip">
              Please provide a valid city.
      </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationTooltip04">State</label>
            <select class="custom-select" id="validationTooltip04" required>
              <option selected disabled value="">Choose...</option>
              <option>...</option>
            </select>
            <div class="invalid-tooltip">
              Please select a valid state.
      </div>
          </div>
          <div class="col-md-3 mb-3">
            <label for="validationTooltip05">Zip</label>
            <input type="text" class="form-control" id="validationTooltip05" required />
            <div class="invalid-tooltip">
              Please provide a valid zip.
      </div>
          </div>
        </div>
        <button class="btn btn-primary" type="submit">Submit form</button>
      </form>
    </div>
  );
}
const Step2 = () => {
  return (
    <div className="stepWrapper">
      <form class="was-validated">
        <div class="mb-3">
          <label for="validationTextarea">Textarea</label>
          <textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
          <div class="invalid-feedback">
            Please enter a message in the textarea.
    </div>
        </div>

        <div class="custom-control custom-checkbox mb-3">
          <input type="checkbox" class="custom-control-input" id="customControlValidation1" required />
          <label class="custom-control-label" for="customControlValidation1">Check this custom checkbox</label>
          <div class="invalid-feedback">Example invalid feedback text</div>
        </div>

        <div class="custom-control custom-radio">
          <input type="radio" class="custom-control-input" id="customControlValidation2" name="radio-stacked" required />
          <label class="custom-control-label" for="customControlValidation2">Toggle this custom radio</label>
        </div>
        <div class="custom-control custom-radio mb-3">
          <input type="radio" class="custom-control-input" id="customControlValidation3" name="radio-stacked" required />
          <label class="custom-control-label" for="customControlValidation3">Or toggle this other custom radio</label>
          <div class="invalid-feedback">More example invalid feedback text</div>
        </div>

        <div class="mb-3">
          <select class="custom-select" required>
            <option value="">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div class="invalid-feedback">Example invalid custom select feedback</div>
        </div>

        <div class="custom-file mb-3">
          <input type="file" class="custom-file-input" id="validatedCustomFile" required />
          <label class="custom-file-label" for="validatedCustomFile">Choose file...</label>
          <div class="invalid-feedback">Example invalid custom file feedback</div>
        </div>

        <div class="mb-3">
          <div class="input-group is-invalid">
            <div class="input-group-prepend">
              <span class="input-group-text" id="validatedInputGroupPrepend">@</span>
            </div>
            <input type="text" class="form-control is-invalid" aria-describedby="validatedInputGroupPrepend" required />
          </div>
          <div class="invalid-feedback">
            Example invalid input group feedback
    </div>
        </div>

        <div class="mb-3">
          <div class="input-group is-invalid">
            <div class="input-group-prepend">
              <label class="input-group-text" for="validatedInputGroupSelect">Options</label>
            </div>
            <select class="custom-select" id="validatedInputGroupSelect" required>
              <option value="">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="invalid-feedback">
            Example invalid input group feedback
    </div>
        </div>

        <div class="input-group is-invalid">
          <div class="custom-file">
            <input type="file" class="custom-file-input" id="validatedInputGroupCustomFile" required />
            <label class="custom-file-label" for="validatedInputGroupCustomFile">Choose file...</label>
          </div>
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Button</button>
          </div>
        </div>
        <div class="invalid-feedback">
          Example invalid input group feedback
  </div>
      </form>
    </div>
  );
}


const Step3 = () => {
  return (
    <div className="stepWrapper">
      {/* <Tick size={200} /> */}
      <CheckMark/>
    </div>
  );
}


class AddTreatment extends Component {

  render() {

    const step1Content = <Step1 />;
    const step2Content = <Step2 />;
    const step3Content = <Step3 />;

    function step1Validator() {
      //return a boolean
      return true;
    }

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
      <div>8
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
