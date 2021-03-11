import React, { Component } from 'react';
import './addTreatment.scss';
import StepProgressBar from 'react-step-progress';
import 'react-step-progress/dist/index.css';
import CheckMark from '../../components/CheckMark/checkMark';

const Step1 = () => {
  return (
    <div className="stepWrapper">
      <form className="needs-validation" noValidate>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip01">First name</label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip01"
              value="Mark"
              required
            />
            <div className="valid-tooltip">Looks good!</div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip02">Last name</label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip02"
              value="Otto"
              required
            />
            <div className="valid-tooltip">Looks good!</div>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip03">City</label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip03"
              required
            />
            <div className="invalid-tooltip">Please provide a valid city.</div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip04">State</label>
            <select className="custom-select" id="validationTooltip04" required>
              <option selected disabled value="">
                Choose...
              </option>
              <option>...</option>
            </select>
            <div className="invalid-tooltip">Please select a valid state.</div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationTooltip05">Zip</label>
            <input
              type="text"
              className="form-control"
              id="validationTooltip05"
              required
            />
            <div className="invalid-tooltip">Please provide a valid zip.</div>
          </div>
        </div>
      </form>
    </div>
  );
};
const Step2 = () => {
  return (
    <div classNameName="stepWrapper">
      <form className="was-validated">
        <div className="mb-3">
          <label htmlFor="validationTextarea">Textarea</label>
          <textarea
            className="form-control is-invalid"
            id="validationTextarea"
            placeholder="Required example textarea"
            required
          ></textarea>
          <div className="invalid-feedback">
            Please enter a message in the textarea.
          </div>
        </div>

        <div className="custom-control custom-checkbox mb-3">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customControlValidation1"
            required
          />
          <label
            className="custom-control-label"
            htmlFor="customControlValidation1"
          >
            Check this custom checkbox
          </label>
          <div className="invalid-feedback">Example invalid feedback text</div>
        </div>

        <div className="custom-control custom-radio">
          <input
            type="radio"
            className="custom-control-input"
            id="customControlValidation2"
            name="radio-stacked"
            required
          />
          <label
            className="custom-control-label"
            htmlFor="customControlValidation2"
          >
            Toggle this custom radio
          </label>
        </div>
        <div className="custom-control custom-radio mb-3">
          <input
            type="radio"
            className="custom-control-input"
            id="customControlValidation3"
            name="radio-stacked"
            required
          />
          <label
            className="custom-control-label"
            htmlFor="customControlValidation3"
          >
            Or toggle this other custom radio
          </label>
          <div className="invalid-feedback">
            More example invalid feedback text
          </div>
        </div>

        <div className="mb-3">
          <select className="custom-select" required>
            <option value="">Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <div className="invalid-feedback">
            Example invalid custom select feedback
          </div>
        </div>

        <div className="custom-file mb-3">
          <input
            type="file"
            className="custom-file-input"
            id="validatedCustomFile"
            required
          />
          <label className="custom-file-label" htmlFor="validatedCustomFile">
            Choose file...
          </label>
          <div className="invalid-feedback">
            Example invalid custom file feedback
          </div>
        </div>

        <div className="mb-3">
          <div className="input-group is-invalid">
            <div className="input-group-prepend">
              <span
                className="input-group-text"
                id="validatedInputGroupPrepend"
              >
                @
              </span>
            </div>
            <input
              type="text"
              className="form-control is-invalid"
              aria-describedby="validatedInputGroupPrepend"
              required
            />
          </div>
          <div className="invalid-feedback">
            Example invalid input group feedback
          </div>
        </div>

        <div className="mb-3">
          <div className="input-group is-invalid">
            <div className="input-group-prepend">
              <label
                className="input-group-text"
                htmlFor="validatedInputGroupSelect"
              >
                Options
              </label>
            </div>
            <select
              className="custom-select"
              id="validatedInputGroupSelect"
              required
            >
              <option value="">Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="invalid-feedback">
            Example invalid input group feedback
          </div>
        </div>

        <div className="input-group is-invalid">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="validatedInputGroupCustomFile"
              required
            />
            <label
              className="custom-file-label"
              htmlFor="validatedInputGroupCustomFile"
            >
              Choose file...
            </label>
          </div>
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              Button
            </button>
          </div>
        </div>
        <div className="invalid-feedback">
          Example invalid input group feedback
        </div>
      </form>
    </div>
  );
};

const Step3 = () => {
  return (
    <div className="stepWrapper">
      {/* <Tick size={200} /> */}
      <CheckMark />
    </div>
  );
};

class AddTreatment extends Component {
  render() {
    const step1Content = <Step1 />;
    const step2Content = <Step2 />;
    const step3Content = <Step3 />;

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
              content: step1Content,
            },
            {
              label: 'Step 2',
              subtitle: '50%',
              name: 'step 2',
              content: step2Content,
              validator: step2Validator,
            },
            {
              label: 'Step 3',
              subtitle: '100%',
              name: 'step 3',
              content: step3Content,
              validator: step3Validator,
            },
          ]}
        />
      </div>
    );
  }
}

export default AddTreatment;
