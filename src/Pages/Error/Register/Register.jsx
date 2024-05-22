import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { IoEye, IoEyeOff } from "react-icons/io5";
import UseAuth from "../../../Hooks/UseAuth";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    document.title = 'Register'
    const { createNewUser, updateUserProfile } = UseAuth();

    const [showPass, setShowPass] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('imageUrl');
        const phoneNumber = form.get('phoneNumber');
        const password = form.get('password');
        const termsAC = e.target.terms.checked;
        console.log(name, photo, email, password);

        // Reset error or success
        toast.dismiss();

        // Check Password Authentication

        if (password.length < 6) {
            return toast.error('Password should be at least 6 characters');
        }
        if (!/[A-Z]/.test(password)) {
            return toast.error('Password should contain at least one uppercase letter');
        }
        if (!/[a-z]/.test(password)) {
            return toast.error('Password should contain at least one lowercase letter');
        }
        if (!termsAC) {
            return toast.error('Please accept our terms and conditions');
        }


        // create new User
        createNewUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Registration successful! You can now log in.');

                // Update Profile
                updateUserProfile(name, photo, phoneNumber)
                    .then()
                    .catch()

                const createdAt = result.user?.metadata?.creationTime;
                const user = { name, email, createAt: createdAt };
                fetch(`https://tranquil-stay-server.vercel.app/user`, {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.insertedId) {
                            console.log('Register user')
                        }
                    })


                e.target.reset();


            })
            .catch(error => {
                console.error(error);
                toast.error('Registration failed. Please try again later.');
            });
    }

    return (
        <div className="bg-[#f6f5f5]">
            <ToastContainer />
            <div className="hero-content flex-col lg:flex-row gap-10 py-20">
                <div className="text-center lg:text-left">
                    <img src="/Images/lr.png" alt="" />
                </div>

                <div className="card shrink-0 w-full max-w-lg border  border-[#c09d73]">
                    <form className="card-body" onSubmit={handleRegister}>
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="imageUrl" placeholder="Photo URL" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-5">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" name="phoneNumber" placeholder="Phone Number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className='relative gap-2'>
                                <input
                                    type={showPass ? "text" : "password"}
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered w-full"
                                    required />
                                {/* Toggle Show password */}
                                <span
                                    className="absolute top-1/3 text-black text-xl"
                                    onClick={() => setShowPass(!showPass)}>
                                    {showPass ? <IoEyeOff /> : <IoEye />}</span>
                            </div>
                        </div>

                        <div>
                            <input type="checkbox" name="terms" id="" />
                            <label className="ml-2" htmlFor="terms">Accept our Terms and condition</label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary uppercase">Register</button>
                        </div>
                    </form>

                    <p className="text-center pb-4">
                        Already have an account? Please  <Link to={'/login'} className=" text-blue-600 font-bold">Login</Link>
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Register;