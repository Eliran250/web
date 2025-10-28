import { countryCode } from '../../flags/flags'
import { firstName, lastName, user } from '../../localStorage/localStorage'
import './profileStyle.scss'

const Profile = () => {

  return (
    <div className='profile-container'>
      <h1 className='title'>Profile</h1>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Email: {user?.email}</p>
      <div className="contry_and_flag">
        <p>Country: {user?.country}</p>
        <img className="flag" src={`https://flagcdn.com/w80/${countryCode.toLowerCase()}.png`} alt="" />
      </div>
      <p>Date: {user?.date}</p>
      <p>Gender: {user?.gender}</p>
    </div>
  )
}

export default Profile