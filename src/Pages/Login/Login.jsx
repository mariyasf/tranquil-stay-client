import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";


const Login = () => {
    document.title = 'Login'
    const { signIn } = UseAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => console.log(error));

    }


    return (
        <div className="hero min-h-screen bg-[#f6f5f5]">
            <div className="hero-content flex-col lg:flex-row gap-12">
                <div className=" w-1/2">
                    <img src="/Images/lr.png" alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleLogin}>
                        <h2 className='text-3xl font-bold text-center'>Login Now</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-[#c09d73] uppercase text-white">Login</button>
                        </div>
                    </form>

                    <div className='text-center pb-5'>
                        <p>New to Tranquil Stay? <Link className='text-[#c09d73] font-bold' to={'/register'}>Register</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;