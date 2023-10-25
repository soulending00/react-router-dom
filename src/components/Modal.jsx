import classes from './Modal.module.css';
import { useNavigate } from 'react-router-dom';

function Modal({ children }) {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate('/');
  };

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler} />
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
