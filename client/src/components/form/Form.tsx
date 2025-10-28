import { GoogleLogin } from '@react-oauth/google'
import { useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { countryNames } from '../../flags/flags';
import './formStyle.scss'

interface FormProps {
    isSignUp: boolean;
}

const Form = ({ isSignUp }: FormProps) => {

    const navigate = useNavigate();

    const [fullName, setFullName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [gender, setGender] = useState<string>("");


    const handleGoogleLogin = (res: any) => {
        const user: any = jwtDecode(res.credential);
        setFullName(user.name || "");
        setEmail(user.email || "");
        toast.success("The connect success, please fill the rest.");
    }

    const createUser = async (e: any) => {
        e.preventDefault();
        const userData = { fullName, email, country, phone, date, password, gender }

        if (!fullName || !email || !country || !phone || !date || !password || !gender) {
            toast.error("Fill all the fields");
            return;
        }
        try {
            const response = await axios.post("http://localhost:3000/users/create", userData);
            if (response.status == 201) {
                toast.success("User created.");
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            }
        } catch (error: any) {
            if (error.response.status == 500) {
                toast.error("User already exists");
            }
            console.error(error);
        }
    }

    const login = async (e: any) => {
        e.preventDefault();
        const userData = { email, password };
        if (!email || !password) {
            toast.error("Fill all the fields");
            return;
        }
        try {
            const response = await axios.post("http://localhost:3000/users/login", userData);
            console.log(response);

            if (response.status == 200) {
                localStorage.setItem('user', JSON.stringify(response.data));
                toast.success("You Succses to login to the account.");
                setInterval(() => {
                    navigate('/');
                }, 2000);
            }
        } catch (error: any) {
            if (error.response.status == 401) {
                toast.error("Invalid email or password");
            }
            console.error(error);
        }
    }


    return (
        <>
            <div className="form-container">
                <form action="">
                    {!isSignUp &&
                        (<>
                            <div className="full-name">
                                <label htmlFor="firstName">Full name:</label>
                                <input type="text" placeholder='Full name' value={fullName} onChange={(e) => setFullName(e.target.value)} required={true} />
                            </div>
                            <div className="email">
                                <label htmlFor="email">Email:</label>
                                <input type="text" placeholder='example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
                            </div>

                            <div className="country">
                                <label htmlFor="country">Country:</label>
                                <select onChange={(e) => setCountry(e.target.value)} value={country} required={true}>
                                    <option value="">Select</option>
                                    {countryNames.map((country: string) => (
                                        <option value={country}>{country} <img src="" alt="" /></option>
                                    ))}
                                </select>
                            </div>

                            <div className="phone">
                                <label htmlFor="phone">Phone:</label>
                                <input type="phone" placeholder='+972-50-123-4567' onChange={(e) => setPhone(e.target.value)} value={phone} required={true} />
                            </div>

                            <div className="radio">
                                <label htmlFor="Male">Male</label>
                                <input type="radio" name="gender" onChange={(e) => setGender(e.target.value)} value={"male"} required={true} />
                                <label htmlFor="female">female</label>
                                <input type="radio" name="gender" onChange={(e) => setGender(e.target.value)} value={"female"} required={true} />
                            </div>

                            <div className="date">
                                <label htmlFor="date">Date:</label>
                                <input type="date" onChange={(e) => setDate(e.target.value)} value={date} required={true} />
                            </div>

                            <div className="password">
                                <label htmlFor="Password">Password:</label>
                                <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} required={true} />
                            </div>

                            <div className="button-container-form">
                                <input className='submit-button' type="submit" onClick={createUser} />
                                <input className='reset-button' type="reset" />
                            </div>
                            <GoogleLogin onSuccess={handleGoogleLogin} onError={() => console.error("Error")} size='medium' shape='circle' />

                        </>
                        )}
                    {isSignUp && (<>
                        <div className="email">
                            <label htmlFor="email">Email:</label>
                            <input type="text" placeholder='example@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
                        </div>
                        <div className="password">
                            <label htmlFor="Password">Password:</label>
                            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} value={password} required={true} />
                        </div>
                        <div className="button-container-form">
                            <input className='submit-button' type="submit" onClick={login} />
                            <input className='reset-button' type="reset" />
                        </div>
                    </>)}
                </form>
                <ToastContainer />
            </div>
        </>
    )
}

export default Form