import React from "react";
import Pledges from "./Pledges";
import closeModal from "../images/icon-close-modal.svg";

const Modal = () => {
  return (
    <>
      <section className="bg-white mx-5 py-10 px-5 border-2 mt-5">
        <div className="flex  justify-between">
            <div>
          <h4 className="font-bold text-lg">Back this project</h4>
          <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser
            out in the world?
          </p>
          </div>
          <div className="mt-2">
          <img src={closeModal} alt="" className="w-6" />
        </div>
        </div>
       
      </section>
      <Pledges />
    </>
  );
};

export default Modal;
