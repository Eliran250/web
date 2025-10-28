import './addEmployees.scss'

const AddEmployees = () => {
    return (
        <form className="add-employees-card">
            <h1 className='title'>Add employees</h1>
            <input type="text" placeholder='ID' />
            <input type="text" placeholder='Full name' />
            <input type="date" placeholder='Birth Date' />
            <input type="email" placeholder='Email' />
            <input type="tel" placeholder='Phone' />
            <input type="text" placeholder='Address' />
            <input type="text" placeholder='Position' />
            <input type="text" placeholder='Salery' />
            <input type="text" placeholder='Work time' />
            <input type="text" placeholder='Role' />
            <label htmlFor="Male">Male</label>
            <input type="radio" name="gender" value={"male"} required={true} />
            <label htmlFor="female">female</label>
            <input type="radio" name="gender" value={"female"} required={true} />
            <button type="submit">Add Employee</button>
        </form>
    )
}

export default AddEmployees