"use client";
import "./CommonModal.css";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function CommonModal({
  modalTitle,
  mainContent,
  showButtons,
  buttonComponent,
  show,
  setShow,
  showModalTitle,
}) {
  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className={"relative z-10"} onClose={setShow}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-900"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="CommonModalFirst" />
        </Transition.Child>
        <div className="commonModalSecond">
          <div className="commonModalThird">
            <div className="commonModalFourth">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-900"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="fifthModal">
                  <div className="sixthModal">
                    <div className="seventhModal">
                      {showModalTitle ? (
                        <div className="eigthModal">
                          <Dialog.Title>{modalTitle}</Dialog.Title>
                        </div>
                      ) : null}
                      <div style={{ marginTop: "5rem" }}>{mainContent}</div>
                    </div>
                    {showButtons ? (
                      <div className="ninthModal">{buttonComponent}</div>
                    ) : null}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
