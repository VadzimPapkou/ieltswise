import classes from "./ErrorPaymentModal.module.scss";
import ModalFade from "../../components/ModalFade";
import Modal from "../../components/Modal";

export function ErrorPaymentModal ({ setShow }) {
  const close = () => setShow(false);

  return (
    <ModalFade onClickOutside={close}>
      <Modal onCloseClick={close} className={classes.modal}>
        Error
      </Modal>
    </ModalFade>
  );
}