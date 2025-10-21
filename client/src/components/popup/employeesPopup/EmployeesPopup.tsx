import { GiCrossedAxes } from "react-icons/gi"
import './employeesStyle.scss'
import type { User } from "../../../types/interface/employees"

interface IProps {
    openPopup: boolean,
    selectedUser: User | null,
    setOpenPopup: (openPopup: boolean) => void,
}

const EmployeesPopup = ({ selectedUser, openPopup, setOpenPopup }: IProps) => {
    return (
        <dialog open={openPopup}>
            {selectedUser &&
                <div className="employees-popup-container">
                    <GiCrossedAxes size={20} className='exist-button' onClick={() => setOpenPopup(false)} />
                    <p>ID: {selectedUser.id}</p>
                    <p>Maiden Name: {selectedUser.maidenName}</p>
                    <p>Age: {selectedUser.age}</p>
                    <p>Gender: {selectedUser.gender}</p>
                    <p>Email: {selectedUser.email}</p>
                    <p>Phone: {selectedUser.phone}</p>
                    <p>Username: {selectedUser.username}</p>
                    <p>Password: {selectedUser.password}</p>
                    <p>Birth Date: {selectedUser.birthDate}</p>
                    <p>Blood Group: {selectedUser.bloodGroup}</p>
                    <p>Height: {selectedUser.height} cm</p>
                    <p>Weight: {selectedUser.weight} kg</p>
                    <p>Eye Color: {selectedUser.eyeColor}</p>
                    <p>Hair Color: {selectedUser.hair?.color}</p>
                    <p>Hair Type: {selectedUser.hair?.type}</p>
                    <p>IP: {selectedUser.ip}</p>
                    <p>Address: {selectedUser.address?.address}, {selectedUser.address?.city}, {selectedUser.address?.state} ({selectedUser.address?.stateCode}) {selectedUser.address?.postalCode}, {selectedUser.address?.country}</p>
                    <p>Coordinates: {selectedUser.address?.coordinates?.lat}, {selectedUser.address?.coordinates?.lng}</p>
                    <p>MAC Address: {selectedUser.macAddress}</p>
                    <p>University: {selectedUser.university}</p>
                    <p>Bank Card: {selectedUser.bank?.cardNumber} ({selectedUser.bank?.cardType})</p>
                    <p>Card Expire: {selectedUser.bank?.cardExpire}</p>
                    <p>Currency: {selectedUser.bank?.currency}</p>
                    <p>IBAN: {selectedUser.bank?.iban}</p>
                    <p>Company: {selectedUser.company?.name}</p>
                    <p>Department: {selectedUser.company?.department}</p>
                    <p>Title: {selectedUser.company?.title}</p>
                    <p>Company Address: {selectedUser.company?.address?.address}, {selectedUser.company?.address?.city}, {selectedUser.company?.address?.state} ({selectedUser.company?.address?.stateCode}) {selectedUser.company?.address?.postalCode}, {selectedUser.company?.address?.country}</p>
                    <p>EIN: {selectedUser.ein}</p>
                    <p>SSN: {selectedUser.ssn}</p>
                    <p>User Agent: {selectedUser.userAgent}</p>
                    <p>Crypto Coin: {selectedUser.crypto?.coin}</p>
                    <p>Wallet: {selectedUser.crypto?.wallet}</p>
                    <p>Network: {selectedUser.crypto?.network}</p>
                    <p>Role: {selectedUser.role}</p>
                </div>
            }

        </dialog>
    )
}

export default EmployeesPopup