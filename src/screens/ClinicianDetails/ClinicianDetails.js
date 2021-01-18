import React, { useState, useEffect } from 'react';
import store from '../../store';
import { MDBDataTable, MDBBtn } from 'mdbreact';
import './ClinicianDetails.scss';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const ClinicianDetails = ({ match }) => {
  const dentistId = match.params.id;

  const [dentist, setDentist] = useState(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  useEffect(() => {
    let mounted = true;
    store.getDentistDetail({ dentistId }).then((items) => {
      if (mounted) {
        setDentist(items.data);
      }
    });
    return () => (mounted = false);
  }, []);

  const onEditorStateChange = (editorStatee) => {
    setEditorState(editorStatee);
  };

  const tableData = {
    columns: [
      {
        label: 'Treatment Type',
        field: 'treatmentType',
        sort: 'asc',
        width: 50,
      },
    ],
    rows: dentist?.treatmentType.map((treatment) => ({
      treatmentType: treatment,
    })),
  };

  return (
    <div>
      <div class='tableAvatarr'>
        <h2>
          {dentist?.name} {dentist?.surname}{' '}
        </h2>
        <img
          style={{
            height: '100px',
            width: '100px',
            marginLeft: '0px',
            borderRadius: '100%',
          }}
          src={dentist?.avatar}
        />
      </div>
      <form style={{ marginTop: '20px' }}>
        <div className={'item profileInfoPart'}>
          <div className={'content'}>
            <div class='form-row'>
              <div class='col-md-4 mb-3'>
                <label for='validationDefault01'>İsim</label>
                <input
                  type='text'
                  class='form-control'
                  id='validationDefault01'
                  value={`${dentist?.name} ${
                    dentist?.surname ? dentist.surname : ''
                  }`}
                  required
                />
              </div>
              <div class='col-md-4 mb-3'>
                <label for='validationDefault02'>Telefon Numarasi</label>
                <input
                  type='text'
                  class='form-control'
                  id='validationDefault02'
                  value={dentist?.phone}
                  required
                />
              </div>
              <div class='col-md-4 mb-3'>
                <label for='inputTC'>Rate</label>
                <input
                  disabled
                  type='text'
                  class='form-control'
                  id='inputCountry'
                  value={dentist?.rate}
                />
              </div>
              <div class='col-md-4 mb-3'>
                <label for='inputTC'>Email</label>
                <input
                  type='text'
                  class='form-control'
                  id='inputCountry'
                  value={dentist?.email}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
      <div className='treatmentTypeTable'>
        <MDBDataTable
          striped
          bordered
          small
          data={tableData}
          searchLabel={'Ara'}
          info={false}
          paginationLabel={['Önceki', 'Sonraki']}
        />
      </div>

      <h2>
        {dentist?.name} {dentist?.surname} Hakkinda
      </h2>
      <div style={{ paddingBottom: '5rem' }} className='settingsWrapper'>
        <div className='row'>
          <div>
            <Editor
              editorState={editorState}
              wrapperClassName='demo-wrapper'
              editorClassName='demo-editor'
              onEditorStateChange={onEditorStateChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicianDetails;
