import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import css from './Modal.module.css'

const modalRoot = document.querySelector("#modal-root")

function Modal({ children, onClose, title }) {
    useEffect(() => {
        const onPessKeyDown = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };

        window.addEventListener('keydown', onPessKeyDown);

        return () => window.removeEventListener('keydown', onPessKeyDown);
    }, [onClose]);

    const onBackdropClick = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <div className={css.backdrop} onClick={onBackdropClick}>
            <div className={css.modal}>
                <div className={css.wrapper}>
                    <h2 className={css.title}>{title}</h2>
                    <button className={css.button} type="button" onClick={onClose}>
                        <AiOutlineClose />
                    </button>
                </div>
                {children}
            </div>
        </div>,
        modalRoot,
    );
}

Modal.propTypes = {
    children: PropTypes.element,
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
};

export default Modal;

// export default class Modal extends Component {
//     static propTypes = {
//         children: PropTypes.element,
//         onClose: PropTypes.func.isRequired,
//         title: PropTypes.string,
//     };

//     componentDidMount() {
//         window.addEventListener('keydown', this.handleKeyDown)
//     };

//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.handleKeyDown)
//     };

//     handleKeyDown = e => {
//         if (e.code === 'Escape') {
//             this.props.onClose();
//         }
//     };

//     handleBackdropClick = e => {
//         if (e.target === e.currentTarget) {
//             this.props.onClose();
//         }
//     };

//     render() {
//         const { children, title, onClose } = this.props;

//         return createPortal(
//             <div className={css.backdrop} onClick={this.handleBackdropClick}>
//                 <div className={css.modal}>
//                     <div className={css.wrapper}>
//                         <h2 className={css.title}>{title}</h2>
//                         <button className={css.button} type="button" onClick={onClose}>
//                             <AiOutlineClose />
//                         </button>
//                     </div>
//                     {children}
//                 </div>
//             </div>,
//             modalRoot
//         );
//     }
// }