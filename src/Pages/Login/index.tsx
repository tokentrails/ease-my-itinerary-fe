/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import InputComponent from "../../customComponents/inputComponent";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useFormik } from "formik";
import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
import PhoneInputComponent from "../../customComponents/inputPhoneNumber";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import * as yup from "yup";
import { apiCaller } from "../../utils/apiCall";
import { CircularProgress } from "@mui/material";
import { showToast } from "../../utils/toastHelper";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../../Store/user-slice";
import { useNavigate } from "react-router-dom";
interface FormValues {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone: string;
  confirmPassword: string;
}
const phoneRegExp = /^[0-9]{10}$/;
const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
const registerSchema = yup.object().shape({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number must be 10 digits")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("Please confirm your password"),
});
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const initialValues: FormValues = {
    email: "koushik@gmail.com",
    password: "Koushik@12345",
    first_name: "",
    last_name: "",
    phone: "",
    confirmPassword: "",
  };
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: isRegister ? registerSchema : loginSchema,
    onSubmit: async (values) => {
      let payLoad = {};
      const { confirmPassword, ...rest } = values;
      if (isRegister) {
        payLoad = {
          ...rest,
        };
      } else {
        payLoad = {
          email: values.email,
          password: values.password,
        };
      }
      setIsLoading(true);
      await apiCaller(
        `/api/v1/auth/${isRegister ? "register" : "login"}`,
        "POST",
        payLoad
      )
        .then((resp: any) => {
          if (resp.data) {
            dispatch(
              setUserInfo({
                ...resp.data.user,
                access_token: resp.data.access_token,
                refresh_token: resp.data.refresh_token,
              })
            );
            window.localStorage.setItem("userInfo",JSON.stringify(resp.data.user))
            window.localStorage.setItem("auth",resp.data.access_token)
            window.localStorage.setItem("refresh",resp.data.refresh_token)
            navigate("/Itinerary");
          }

          showToast("Login successful.", "success");
        })
        .catch((err) => {
          showToast("Failed to login.", "error");
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
  });

  return (
    <AnimatePresence>
      <motion.div className="w-full h-full min-h-[90vh]  flex flex-col items-center justify-center">
        <motion.div
          className="shadow-xl rounded-2xl p-[30px] max-w-[600px] min-w-1/2"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <p className="text-2xl font-semibold text-center my-5">Welcome</p>
          <p className="text-center">Login to continue planning your trip</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              formik.handleSubmit();
            }}
            className="w-full my-5"
          >
            {isRegister && (
              <div className="flex flex-col  justify-between ">
                <div className="w-full">
                  {" "}
                  <InputComponent
                    title={"First Name"}
                    type={"text"}
                    isDisabled={isLoading}
                    onUpdate={(value: string) => {
                      formik.setFieldValue("first_name", value);
                    }}
                    value={formik.values.first_name}
                    errorMessage={formik.errors.first_name}
                    placeHolder={"Enter First Name"}
                  />
                </div>
                <div className="w-full">
                  <InputComponent
                    title={"Last Name"}
                    type={"text"}
                    isDisabled={isLoading}
                    onUpdate={(value: string) => {
                      formik.setFieldValue("last_name", value);
                    }}
                    value={formik.values.last_name}
                    errorMessage={formik.errors.last_name}
                    placeHolder={"Enter Last Name"}
                  />
                </div>
              </div>
            )}
            {isRegister && (
              <PhoneInputComponent
                title={"Phone Number"}
                onUpdate={function (val: string): void {
                  formik.setFieldValue("phone", val);
                }}
                errorMessage={formik.errors.phone}
                value={formik.values.phone}
                isDisabled={isLoading}
                Icon={<PhoneOutlinedIcon />}
                placeHolder={"Enter Phone Number"}
              />
            )}

            <InputComponent
              title={"Email"}
              type={"email"}
              onUpdate={(value: string) => {
                formik.setFieldValue("email", value);
              }}
              errorMessage={formik.errors.email}
              value={formik.values.email}
              Icon={<EmailOutlinedIcon />}
              isDisabled={isLoading}
              placeHolder={"Enter Email"}
            />

            <InputComponent
              title={"Password"}
              type={"password"}
              onUpdate={(value: string) => {
                formik.setFieldValue("password", value);
              }}
              errorMessage={formik.errors.password}
              value={formik.values.password}
              Icon={<PasswordOutlinedIcon />}
              isDisabled={isLoading}
              placeHolder={"Enter Password"}
            />

            {isRegister && (
              <InputComponent
                title={"Confirm Password"}
                type={"password"}
                onUpdate={(value: string) => {
                  formik.setFieldValue("confirmPassword", value);
                }}
                value={formik.values.confirmPassword}
                Icon={<PasswordOutlinedIcon />}
                isDisabled={isLoading}
                errorMessage={formik.errors.confirmPassword}
                placeHolder={"Re-enter Password"}
              />
            )}

            <div className=" w-full flex items-center justify-center mt-5">
              {isRegister && (
                <motion.button
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                  }}
                  className="  min-w-1/2 py-2 px-5 rounded-md cursor-pointer font-semibold"
                  onClick={() => {
                    setIsRegister(false);
                  }}
                >
                  Back
                </motion.button>
              )}
              <button
                type="submit"
                disabled={isLoading}
                className=" border cursor-pointer font-semibold min-w-1/2 py-2 px-5 rounded-md"
                style={{ borderColor: '#2093EF', backgroundColor: '#eaf3ff' }}
              >
                {isLoading ? (
                  <CircularProgress size={18} />
                ) : isRegister ? (
                  "Sign Up"
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </motion.div>
        <AnimatePresence>
          {!isRegister && (
            <motion.div
              key="signUp"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              exit={{
                opacity: 0,
              }}
              className="mt-10"
            >
              <p>
                Don't have account?{" "}
                <span
                  onClick={() => {
                    setIsRegister(true);
                  }}
                  className="cursor-pointer"
                  style={{ color: '#2093EF' }}
                >
                  Sign Up
                </span>
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default Login;
