import React from "react";
import styles from "./modal.scss";

export default function Modal(props) {
  const {
    modalTitle,
    modalFooterButtonTitle,
    modalId,
    modalFooterButtonType,
    modalFooterButtonOnClick,
    modalFooterVisibility,
    modalFooterSecondButtonTitle,
    modalFooterSecondButtonType,
    modalFooterSecondButtonOnClick,
  } = props;
  return (
    <div class="modal fade" id={modalId} tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{modalTitle}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">{props.children}</div>
          {!modalFooterVisibility ? (
            <div class="modal-footer">
              <button
                type="button"
                onClick={modalFooterButtonOnClick}
                class={`btn ${
                  !modalFooterButtonType ? "btn-secondary" : ""
                } btn-${modalFooterButtonType}`}
                data-dismiss="modal"
              >
                {modalFooterButtonTitle}
              </button>
              {modalFooterSecondButtonTitle ? (
                <button
                  type="button"
                  onClick={modalFooterSecondButtonOnClick}
                  class={`btn ${
                    !modalFooterSecondButtonType ? "btn-secondary" : ""
                  } btn-${modalFooterSecondButtonType}`}
                  data-dismiss="modal"
                >
                  {modalFooterSecondButtonTitle}
                </button>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
