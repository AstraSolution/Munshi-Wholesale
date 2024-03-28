import { FaRegEdit } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import { useState } from "react";
import { useForm } from "react-hook-form";
import "./profile.css";
import useImageURL from "../../hooks/ImageUrl/useImageURL";
import { IoIosCamera } from "react-icons/io";
import useGetOneUsers from "../../hooks/users/useGetOneUsers";
import useAxiosPublic from "../../hooks/axios/useAxiosPublic";
import Swal from "sweetalert2";

const Profile = () => {
  const { register, handleSubmit } = useForm();
  const [editMode, setEditMode] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const { imageUrl, uploadImage } = useImageURL(selectedFile);

  const axiosPublic = useAxiosPublic();
  // console.log(user);

  const { currentUser } = useGetOneUsers();
  console.log(currentUser);
  const profilePic = currentUser?.image;
  console.log(profilePic);

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const onSubmit = async (data) => {
    const uploadedImageUrl = await uploadImage();
    const { username, birthday, phoneNumber, email, gender } = data || {};
    const updateUser = {
      username,
      birthday,
      phoneNumber,
      email,
      gender,
      image: uploadedImageUrl,
    };
    toggleEditMode();
    console.log(updateUser);
    axiosPublic
      .patch(`/users/${currentUser._id}`, updateUser)
      .then((res) => {
        // Assuming your API returns the updated user document
        const updatedUser = res.data;
        if (updatedUser) {
          Swal.fire(" Profile Update successfully");
          // router.push("/dashboard/profile");
        } else {
          console.error("Update failed: User not found or update unsuccessful");
          Swal.fire("Update failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error occurred during update:", error);
        Swal.fire("Update failed. Please try again.");
      });
  };
  const onSelectFile = (e) => {
    const files = e.target.files;

    if (!files || files.length === 0) {
      setSelectedFile(undefined);
      setPreview(undefined);
      return;
    }

    const selectedImage = files[0];
    setSelectedFile(selectedImage);

    const objectUrl = URL.createObjectURL(selectedImage);
    setPreview(objectUrl);
  };

  return (
    
    <div className="container-xl px-4 mt-4">
      {/* Toggle Edit Mode Button */}
      <button
        className="btn btn-primary btn-sm float-end"
        onClick={toggleEditMode}
      >
        {editMode ? <MdCancel /> : <FaRegEdit />}
      </button>
      {/* Account page navigation*/}
      <hr className="mt-0 mb-4" />
      <div className="row">
        <div className="absolute mr-[70px]  text-3xl ">
          <input
            type="file"
            id="fileInput"
            {...register("image")}
            hidden
            onChange={onSelectFile}
          />

          <button
            onClick={() => {
              document.getElementById("fileInput").click();
            }}
            style={{ border: "none", background: "none", cursor: "pointer" }}
          >
            <IoIosCamera />
          </button>
        </div>
        {!selectedFile ? (
          <img
            src={
              profilePic ||
              "https://t4.ftcdn.net/jpg/05/89/93/27/360_F_589932782_vQAEAZhHnq1QCGu5ikwrYaQD0Mmurm0N.jpg"
            }
            className="object-cover w-40 h-40 mb-2 rounded-full shadow"
            alt=""
          />
        ) : (
          <img
            src={preview}
            className="object-cover w-40 h-40 mb-2 rounded-full shadow"
            alt=""
          />
        )}

        <div className="col-xl-8">
          {/* Account details card*/}
          <div className="card mb-4">
            <div className="p-3 mb-0 bg-gray-300 text-xl font-bold">
              Account Details
            </div>
            <div className="">
              <form onSubmit={handleSubmit(onSubmit)} className="">
                {/* Form Group (username)*/}
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputUsername">
                    Username (how your name will appear to other users on the
                    site)
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    defaultValue={currentUser?.name}
                   
                    {...register("username")}
                    readOnly={!editMode}
                  />
                  {/* <h1>{currentUser?.name}</h1> */}
                </div>
                {/* Form Row*/}

                {/* Form Row */}
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputGender">
                    Gender
                  </label>
                  <div className="flex gap-5">
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="male"
                        value="male"
                        {...register("gender")}
                        disabled={!editMode}
                        name="gender" // Added unique name for male radio input
                      />
                      <label className="form-check-label" htmlFor="male">
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="female"
                        value="female"
                        {...register("gender")}
                        disabled={!editMode}
                        name="gender"
                      />
                      <label className="form-check-label" htmlFor="female">
                        Female
                      </label>
                    </div>
                  </div>
                </div>

                {/* Form Group (email address)*/}
                <div className="mb-3">
                  <label className="small mb-1" htmlFor="inputEmailAddress">
                    Email address
                  </label>
                  <input
                    className="form-control"
                    id="inputEmailAddress"
                    type="email"
                    placeholder="Enter your email address"
                    defaultValue={currentUser?.email}
                    {...register("email")}
                    readOnly={!editMode}
                  />
                </div>
                {/* Form Row*/}
                <div className="row gx-3 mb-3">
                  {/* Form Group (phone number)*/}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputPhone">
                      Phone number
                    </label>
                    <input
                      className="form-control"
                      id="inputPhone"
                      type="tel"
                      placeholder="Enter your phone number"
                      defaultValue="555-123-4567"
                      {...register("phoneNumber")}
                      readOnly={!editMode}
                    />
                  </div>
                  {/* Form Group (birthday)*/}
                  <div className="col-md-6">
                    <label className="small mb-1" htmlFor="inputBirthday">
                      Birthday (DD/MM/YY)
                    </label>
                    <input
                      className="form-control"
                      id="inputBirthday"
                      type="text"
                      name="birthday"
                      placeholder="Enter your birthday"
                      defaultValue="06/10/1988"
                      {...register("birthday")}
                      readOnly={!editMode}
                    />
                  </div>
                </div>
                {/* Save changes button*/}
                {editMode && (
                  <button
                    className="bg-slate-500 flex justify-center py-2 rounded-xl px-3 mx-auto text-cyan-50"
                    type="submit"
                  >
                    Submit
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
