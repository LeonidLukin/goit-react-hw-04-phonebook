import PropTypes from 'prop-types';

import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import css from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const onChangeName = e => setName(e.currentTarget.value);
    const onChangeNumber = e => setNumber(e.currentTarget.value);

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit({ name, number });
        reset();
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    const notify = () => toast(`${name} added to your contacts`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
    })

    return (
        <form className={css.form} onSubmit={handleSubmit}>
            <label className={css.label}>
                <span className={css.title}>Name</span>
                <input
                    className={css.input}
                    onChange={onChangeName}
                    type="text"
                    name="name"
                    value={name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className={css.label}>
                <span className={css.title}>Number</span>
                <input
                    className={css.input}
                    onChange={onChangeNumber}
                    type="tel"
                    name="number"
                    value={number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={css.button} type="submit" onClick={notify}>
                Add contact
            </button>
            <ToastContainer />
        </form>
    );
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func
};

// class ContactForm extends Component {
//     static propTypes = {
//         onSubmit: PropTypes.func
//     };

//     state = {
//         name: '',
//         number: '',
//     };


//     handleChange = e => {
//         const { name, value } = e.currentTarget;
//         this.setState({ [name]: value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         const { onSubmit } = this.props;
//         onSubmit(this.state);
//         this.reset();
//     };

//     reset = () => {
//         this.setState({ name: '', number: '' });
//     };

//     render() {
//         const { name, number } = this.state;
//         const notify = () => toast(`${name} added to your contacts`, {
//             position: "bottom-right",
//             autoClose: 2000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: 'light',
//         })
//         return (
//             <form className={css.form} onSubmit={this.handleSubmit}>
//                 <label className={css.label}>
//                     <span className={css.title}>Name</span>
//                     <input
//                         className={css.input}
//                         onChange={this.handleChange}
//                         type="text"
//                         name="name"
//                         value={name}
//                         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//                         required
//                     />
//                 </label>
//                 <label className={css.label}>
//                     <span className={css.title}>Number</span>
//                     <input
//                         className={css.input}
//                         onChange={this.handleChange}
//                         type="tel"
//                         name="number"
//                         value={number}
//                         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                         title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//                         required
//                     />
//                 </label>
//                 <button className={css.button} type="submit" onClick={notify}>
//                     Add contact
//                 </button>
//                 <ToastContainer />
//             </form>
//         );
//     }
// }

// export default ContactForm;