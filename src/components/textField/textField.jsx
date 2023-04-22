import './textField.css'


const TextField = ({label, name, value, onChange}) => {
    return (
        <div className='textField'>
            <label
                className='textField__label'
                htmlFor={name}>{label}</label>
            <input
                className='textField__input'
                name={name}
                value={value}
                onChange={onChange}/>
        </div>
    )
}

export default TextField
