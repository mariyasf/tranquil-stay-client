import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import { Helmet } from "react-helmet";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";


const Login = () => {
    const { signIn, handleGoogleSignIn } = UseAuth();
    const axiosSecure = UseAxiosSecure()
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = async e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)
        try {
            const result = await signIn(email, password)

            // console.log(result.user)
            const { data } = await axiosSecure.post(`/jwt`,
                {
                    email: result?.user?.email
                },


            )
            // console.log(data)

            // NAvigate after login
            navigate(location?.state ? location.state : '/')
        }
        catch (error) {
            console.error(error);
        }




    }

    const handleGoogle = async () => {
        console.log("YES");
        try {
            const result = await handleGoogleSignIn()

            // console.log(result.user)
            const { data } = await axiosSecure.post(`/jwt`,
                {
                    email: result?.user?.email
                },


            )

            // NAvigate after login
            navigate(location?.state ? location.state : '/')
        }
        catch (error) {
            console.error(error);
        }

    }
    return (
        <div className="hero min-h-screen bg-[#f6f5f5]">
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row gap-12">
                <div className=" w-1/2">
                    <img src="/Images/lr.png" alt="" />
                </div>

                <div className="card shrink-0 w-full max-w-lg border border-[#c09d73]">
                    <h2 className='text-3xl  pt-5 font-bold text-center'>Login Now</h2>

                    <div className="border-y-2 pb-5 mx-10">
                        <h2 className="text-lg text-center font-bold py-5">Continue With</h2>

                        <button onClick={handleGoogle}
                            className=" flex items-center justify-center gap-5  border-2 border-[#c09d73] hover:bg-[#c09d73] hover:text-white rounded-lg w-full">

                            <img

                                className=" w-12 h-12"
                                src="/Images/google.png" alt="" />
                            <span className="font-bold">Login With Google</span>

                        </button>

                    </div>

                    <form className="card-body" onSubmit={handleLogin}>
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