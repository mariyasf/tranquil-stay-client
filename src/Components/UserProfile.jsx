import { ToastContainer, toast } from 'react-toastify';
import UseAuth from '../Hooks/UseAuth';
import profile from '/Images/user.png'
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';


const UserProfile = () => {

    const { user, updateUserProfile } = UseAuth();
    const [updateUserInfo, setUpdateUserInfo] = useState(null);

    useEffect(() => {
        if (user) {
            setUpdateUserInfo(user);
        }
    }, [user]);

    // const { displayName, email, phoneNumber, photoURL } = user;

    function isValidURL(url) {
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
        return urlPattern.test(url);
    }

    // console.log(phoneNumber);

    const handleUpdate = (e) => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const imageUrl = form.get('imageUrl');
        const phoneNumber = form.get('phoneNumber');

        // Reset error or success
        toast.dismiss();

        updateUserProfile(name, imageUrl, phoneNumber)
            .then(() => {
                toast.success("Profile updated")
                setUpdateUserInfo({
                    ...updateUserInfo,
                    displayName: name,
                    photoURL: imageUrl,
                    phoneNumber: phoneNumber
                })
            })
            .catch(error => {
                console.log(error);
            })

    }
    // console.log('updateUserInfo', updateUserInfo)

    return (
        <>
            <Helmet >
                <title>My Profile</title>
            </Helmet>

            <div className="flex flex-col lg:flex-row max-w-[1140px] 
            gap-10 mt-32 mx-auto my-10 bg-white">
                <div className="flex-1 border-r-2 space-y-5 mt-10 text-center">
                    <img alt="Profile"
                        className="rounded-full w-32 h-32 mx-auto"
                        src={updateUserInfo && isValidURL(updateUserInfo.photoURL) ? updateUserInfo.photoURL : profile} />

                    <p >Name: {updateUserInfo?.displayName}</p>
                    <p >Email: {updateUserInfo?.email}</p>

                </div>
                <div className='flex-1 mt-10'>
                    <form className="card-body border"
                        onSubmit={handleUpdate} >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={updateUserInfo?.displayName}
                                placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="imageUrl" defaultValue={updateUserInfo?.photoURL}
                                placeholder="Photo URL" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" name="phoneNumber" defaultValue={updateUserInfo?.phoneNumber}
                                placeholder="Phone Number" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary uppercase">Update</button>
                        </div>
                    </form>
                </div>



                <ToastContainer />
            </div>

        </>
    );
};

export default UserProfile;