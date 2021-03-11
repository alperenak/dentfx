import React from 'react';
import './modal.scss';
import { Modal as ModalComp, Button } from 'react-bootstrap';
export default function Modal(props) {
  const {
    modalTitle,
    modalFooterButtonTitle,
    modalId,
    modalShow,
    modalFooterButtonType,
    modalFooterButtonOnClick,
    modalFooterVisibility,
    modalHandleClose,
    modalFooterSecondButtonTitle,
    modalFooterSecondButtonType,
    modalFooterSecondButtonOnClick,
  } = props;
  return (
    // <div className="modal fade" id={modalId} tabIndex="-1">
    <ModalComp show={modalShow} onHide={modalHandleClose} key={modalId}>
      <ModalComp.Header closeButton>
        <ModalComp.Title>{modalTitle}</ModalComp.Title>
      </ModalComp.Header>

      <ModalComp.Body>{props.children}</ModalComp.Body>

      {!modalFooterVisibility && (
        <ModalComp.Footer>
          <Button
            variant={
              modalFooterButtonType ? modalFooterButtonType : 'secondary'
            }
            onClick={modalFooterButtonOnClick}
          >
            {modalFooterButtonTitle}
          </Button>
          <Button
            variant={
              modalFooterSecondButtonType
                ? modalFooterSecondButtonType
                : 'secondary'
            }
            onClick={modalFooterSecondButtonOnClick}
          >
            {modalFooterSecondButtonTitle}
          </Button>
        </ModalComp.Footer>
      )}
    </ModalComp>

    //     ) : (
    //       ''
    //     )}
    // ) : (
    //   ''
    // )}
  );
}
// function Example() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// render(<Example />);
// {/* <button
//   type="button"
//   onClick={modalFooterButtonOnClick}
//   className={`btn ${
//     !modalFooterButtonType ? 'btn-secondary' : ''
//   } btn-${modalFooterButtonType}`}
//   data-dismiss="modal"
// >
//   {modalFooterButtonTitle}
// </button>
// {modalFooterSecondButtonTitle ? (
//   <button
//     type="button"
//     onClick={modalFooterSecondButtonOnClick}
//     className={`btn ${
//       !modalFooterSecondButtonType ? 'btn-secondary' : ''
//     } btn-${modalFooterSecondButtonType}`}
//     data-dismiss="modal"
//   >
//     {modalFooterSecondButtonTitle}
//   </button> */}
