import { useState } from 'react'
import TextField from '../textField/textField'
import './phoneBookForm.css'


const PhoneBookForm = ({ onHandleSave }) => {
    const [phoneFormData, setPhoneFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: ''
    })
    const disabledValidation = (phoneFormData.firstName && phoneFormData.phoneNumber) === ''

    const handleChange = (event) => {
        const { name, value } = event.target
        setPhoneFormData({...phoneFormData, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onHandleSave(phoneFormData)
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <fieldset className='fieldset'>
                <legend className='fieldset__title'>Add contact form</legend>

                <TextField
                    label={'First name*'}
                    name='firstName'
                    value={phoneFormData.firstName}
                    onChange={(event) => handleChange(event)}
                    type="text" 
                />

                <TextField
                    label={'Last name'}
                    name='lastName'
                    value={phoneFormData.lastName}
                    onChange={(event) => handleChange(event)}
                    type="text"
                />

                <TextField
                    label={'Phone number*'}
                    name='phoneNumber'
                    value={phoneFormData.phoneNumber}
                    onChange={(event) => handleChange(event)}
                    type="text"
                />

                <p className='fieldset__help'>* - required fields</p>

                <input
                    className={disabledValidation ? 'fieldset__btn--disabled' : 'fieldset__btn'}
                    disabled={disabledValidation}
                    type='submit'
                    value='Add contact'/>
            </fieldset>
        </form>
    )
}

export default PhoneBookForm
