import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/errorHandler.js";
import { Users } from "../models/users.models.js";
import { uploadFile } from "../utils/fileUpload.js";
import { ApiResponse } from "../utils/apiResponse.js";

const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, username, password } = req.body;

  if ([fullName, email, username, password].some((res) => res?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }
  const existingUser = await Users.findOne({
    $or: [{ username }, { email }],
  });
  if (existingUser) throw new ApiError(409, "User already exists.");

  const avatarFile = req.files?.avatar[0]?.path;
  const coverFile = req.files?.coverImage[0]?.path;

  if (!avatarFile) throw new ApiError(400, "Avatar Image required.");

  const avatarFileRes = await uploadFile(avatarFile);
  const coverFileRes = await uploadFile(coverFile);

  if (!avatarFileRes) throw new ApiError(400, "Error while uploading avatar.");
  const userObj = {
    fullName,
    avatar: "",
    email,
    username: username.toLowerCase(),
    coverImage: " ",
    password,
  };
  const usr = await Users.create(userObj);

  if (!usr) throw new ApiError(400, "Error while registering user");
  return new ApiResponse(200, "User registered successfully", usr);
});

export { registerUser };
