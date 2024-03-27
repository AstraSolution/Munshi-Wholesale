
import { FaRegEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import './profile.css'; 
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Profile = () => {
  const { register, handleSubmit, reset } = useForm();
  const [editMode, setEditMode] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const onSubmit = (data) => {
    console.log(data); 
    toggleEditMode(); 
  };

  return (
    <div className="container-xl px-4 mt-4">
      {/* Toggle Edit Mode Button */}
      <button className="btn btn-primary btn-sm float-end" onClick={toggleEditMode}>
        {editMode ? <MdCancel /> : <FaRegEdit /> }
      </button>
      {/* Account page navigation*/}
      <hr className="mt-0 mb-4" />
      <div className="row">
        <div className="col-xl-4">
          {/* Profile picture card*/}
          <div className="card mb-4 mb-xl-0">
            <div className="card-body text-center">
              {/* Profile picture image*/}
              <img className="rounded-xl mb-2 mx-auto h-20" src={user?.photoURL} alt="" />
              {/* Profile picture help block*/}
              <div className="text-muted mb-4">JPG or PNG no larger than 5 MB</div>
              {/* Profile picture upload button*/}
              <label htmlFor="fileInput" className="">
                Upload Photo
              </label>
              <input
                id="fileInput"
                type="file"
                disabled={!editMode}
              />
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          {/* Account details card*/}
          <div className="card mb-4">
            <div className="p-3 mb-0 bg-gray-300 text-xl font-bold">Account Details</div>
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)} className="">
                {/* Form Group (username)*/}
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputUsername">Username (how your name will appear to other users on the site)</label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={user?.displayName}
                    {...register('username')}
                    readOnly={!editMode}
                  />
                </div>
                {/* Form Row*/}
               
                {/* Form Row */}
               
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputGender">Gender</label>
                  <div className='flex gap-5'>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="male"
                        value="male"
                        {...register('gender')}
                        disabled={!editMode}
                      />
                      <label className="form-check-label" htmlFor="male">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="female"
                        value="female"
                        {...register('gender')}
                        disabled={!editMode}
                      />
                      <label className="form-check-label" htmlFor="female">Female</label>
                    </div>
                  </div>
                  {/* Form Group (location)*/}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputLocation">Location</label>
                    <input
                      className="form-control"
                      id="inputLocation"
                      type="text"
                      placeholder="Enter your location"
                      defaultValue="San Francisco, CA"
                      {...register('location')}
                      readOnly={!editMode}
                    />
                  </div>
                </div>
                {/* Form Group (email address)*/}
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputEmailAddress">Email address</label>
                  <input
                    className="form-control"
                    id="inputEmailAddress"
                    type="email"
                    placeholder="Enter your email address"
                    defaultValue={user?.email}
                    {...register('email')}
                    readOnly={!editMode}
                  />
                </div>
                {/* Form Row*/}
                <div className="row gx-3 mb-3">
                  {/* Form Group (phone number)*/}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputPhone">Phone number</label>
                    <input
                      className="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      defaultValue="555-123-4567"
                      {...register('phoneNumber')}
                      readOnly={!editMode}
                    />
                  </div>
                  {/* Form Group (birthday)*/}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputBirthday">Birthday (DD/MM/YY)</label>
                    <input
                      className="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Enter your birthday"
                      defaultValue="06/10/1988"
                      {...register('birthday')}
                      readOnly={!editMode}
                    />
                  </div>
                </div>
                {/* Save changes button*/}
                {editMode && <button className="bg-slate-500 flex justify-center py-2 rounded-xl px-3 mx-auto text-cyan-50" type="submit">Submit</button>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
