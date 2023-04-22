import { useContext, useState } from 'react'
import PhoneBookForm from './components/phoneBookForm/phoneBookForm'
import SearchBar from './components/searchBar/searchBar'
import { PhoneBookContext } from './context/PhoneBookContext'
import './App.css'
import ContactCard from './components/contactCard/contactCard'


function App() {
  const { contacts, addContact } = useContext(PhoneBookContext)
  const [searchResults, setSearchResults] = useState(contacts)
  const [searchValue, setSearchValue] = useState('');

  const onHandleSave = (phoneFormData) => {
    addContact(phoneFormData)
  }

  const onHandleSearch = (searchValue) => {
    const filterContacts = contacts.filter(
      (contact) => (
          contact.phoneNumber  === searchValue ||
          contact.firstName  === searchValue ||
          contact.lastName  === searchValue
        )
    )

    setSearchResults(filterContacts)
  }

  const onHandleChange = (event) => {
    setSearchValue(event.target.value)
  }

  const onHandleGoBack = () => {
    setSearchResults(contacts)
    setSearchValue('')
  }

  return (
    <main className='main'>

      <div className='main__right'>
        <PhoneBookForm onHandleSave={onHandleSave}/>
      </div>
      <div className='main__left'>
        <div className='main__left__searchBar'>
          <SearchBar 
            searchValue={searchValue}
            onHandleChange={onHandleChange}
            onHandleSearch={onHandleSearch}/>
        </div>
        <div className='main__left__list'>
          {searchResults.length > 0 ? searchResults.map((contact, index) => {
            const { firstName, lastName, phoneNumber} = contact
            const name = `${firstName} ${lastName}`

            return (<ContactCard key={index} name={name} phoneNumber={phoneNumber}/>)
          }) : (
            <>
              <h2>No contacts saved</h2>
              <button
                className='main__left__list__btn'
                onClick={() => onHandleGoBack()}>
                Go back
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  )
}

export default App
