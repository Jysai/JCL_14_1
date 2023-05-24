import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal, selectModal } from "../feature/modalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = () => {
  const dispatch = useDispatch();
  const openModal = useSelector(selectModal)

  const closeModalHandler = () => {
    dispatch(closeModal());
  };

  return (
    <>
      {openModal.isOpen === true && (
        <div className="blocker ">
      
          <div className="modal">
            <p className="modal-content">Employee Created!</p>
            <FontAwesomeIcon
              icon={faXmark}
              onClick={closeModalHandler}
              className="cross-modal"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
