import './contactCard.css'


const ContactCard = ({ name, phoneNumber}) => {
    return (
        <div className='contact-card'>
            <p className='contact-card__name'>
                <span className='contact-card__name__bold'>Contact name: </span>{name}
            </p>
            <p className='contact-card__name'>
                <span className='contact-card__name__bold'>Phone number: </span>{phoneNumber}
            </p>
        </div>
    )
}

export default ContactCard
