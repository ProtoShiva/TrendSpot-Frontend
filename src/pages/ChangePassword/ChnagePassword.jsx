import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import * as Yup from "yup"
import { changePassword } from "../../redux/slices/users/usersSlices.js"

const formSchema = Yup.object({
  password: Yup.string().required("Password is required")
})

const ChnagePassword = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isRight, setIsRight] = useState(false)

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: ""
    },
    onSubmit: (values) => {
      if (values.password === values.confirmPassword) {
        dispatch(changePassword(values.password))
      } else {
        setIsRight(true)
      }
    },
    validationSchema: formSchema
  })

  const {
    loading,
    user,
    appErr: appError,
    serverErr: serverError,
    userPassChange
  } = useSelector((state) => state?.users)

  useEffect(() => {
    if (!user) {
      navigate("/login")
    } else if (userPassChange) {
      navigate("/")
    }
  }, [user, userPassChange, navigate])

  useEffect(() => {
    setIsRight(false)
  }, [])

  return (
    <div>
      {" "}
      <section className="bg-[#F4F7FF] py-20 lg:py-[120px] font-poppins h-screen">
        <div className="container mx-auto">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg bg-white py-16 sm:mt-24 px-10 text-center sm:px-12 md:px-[60px]">
              <form onSubmit={formik.handleSubmit} className="mt-10">
                <p className="text-gray-600 mb-10 text-2xl ">
                  Type in your new password!
                </p>
                <input
                  value={formik.values.password}
                  onChange={formik.handleChange("password")}
                  onBlur={formik.handleBlur("password")}
                  type="password"
                  placeholder="New Password"
                  className="mb-8 border-gray-200 w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                />
                <input
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange("confirmPassword")}
                  onBlur={formik.handleBlur("confirmPassword")}
                  type="password"
                  placeholder="Confirm Password"
                  className="mb-8 border-gray-200 w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                />
                {isRight ? (
                  <p className="mb-6 text-red-600">Password's Dont Match!</p>
                ) : null}
                {appError || serverError ? (
                  <p className="mb-6 text-red-600">{appError}</p>
                ) : null}

                <div className="mb-10">
                  <button
                    className="border-blue-500 w-full cursor-pointer rounded-md border bg-blue-600 py-3 px-5 text-base text-white transition hover:bg-opacity-90"
                    type="submit"
                  >
                    Change Password
                  </button>
                </div>
              </form>

              <div>
                <span className="absolute top-1 right-1">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.39737"
                      cy="38.6026"
                      r="1.39737"
                      transform="rotate(-90 1.39737 38.6026)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.39737"
                      cy="1.99122"
                      r="1.39737"
                      transform="rotate(-90 1.39737 1.99122)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.6943"
                      cy="38.6026"
                      r="1.39737"
                      transform="rotate(-90 13.6943 38.6026)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.6943"
                      cy="1.99122"
                      r="1.39737"
                      transform="rotate(-90 13.6943 1.99122)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="25.9911"
                      cy="38.6026"
                      r="1.39737"
                      transform="rotate(-90 25.9911 38.6026)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="25.9911"
                      cy="1.99122"
                      r="1.39737"
                      transform="rotate(-90 25.9911 1.99122)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.288"
                      cy="38.6026"
                      r="1.39737"
                      transform="rotate(-90 38.288 38.6026)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.288"
                      cy="1.99122"
                      r="1.39737"
                      transform="rotate(-90 38.288 1.99122)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.39737"
                      cy="26.3057"
                      r="1.39737"
                      transform="rotate(-90 1.39737 26.3057)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.6943"
                      cy="26.3057"
                      r="1.39737"
                      transform="rotate(-90 13.6943 26.3057)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="25.9911"
                      cy="26.3057"
                      r="1.39737"
                      transform="rotate(-90 25.9911 26.3057)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.288"
                      cy="26.3057"
                      r="1.39737"
                      transform="rotate(-90 38.288 26.3057)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.39737"
                      cy="14.0086"
                      r="1.39737"
                      transform="rotate(-90 1.39737 14.0086)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.6943"
                      cy="14.0086"
                      r="1.39737"
                      transform="rotate(-90 13.6943 14.0086)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="25.9911"
                      cy="14.0086"
                      r="1.39737"
                      transform="rotate(-90 25.9911 14.0086)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.288"
                      cy="14.0086"
                      r="1.39737"
                      transform="rotate(-90 38.288 14.0086)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
                <span className="absolute left-1 bottom-1">
                  <svg
                    width="29"
                    height="40"
                    viewBox="0 0 29 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="2.288"
                      cy="25.9912"
                      r="1.39737"
                      transform="rotate(-90 2.288 25.9912)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="14.5849"
                      cy="25.9911"
                      r="1.39737"
                      transform="rotate(-90 14.5849 25.9911)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.7216"
                      cy="25.9911"
                      r="1.39737"
                      transform="rotate(-90 26.7216 25.9911)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="2.288"
                      cy="13.6944"
                      r="1.39737"
                      transform="rotate(-90 2.288 13.6944)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="14.5849"
                      cy="13.6943"
                      r="1.39737"
                      transform="rotate(-90 14.5849 13.6943)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.7216"
                      cy="13.6943"
                      r="1.39737"
                      transform="rotate(-90 26.7216 13.6943)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="2.288"
                      cy="38.0087"
                      r="1.39737"
                      transform="rotate(-90 2.288 38.0087)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="2.288"
                      cy="1.39739"
                      r="1.39737"
                      transform="rotate(-90 2.288 1.39739)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="14.5849"
                      cy="38.0089"
                      r="1.39737"
                      transform="rotate(-90 14.5849 38.0089)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.7216"
                      cy="38.0089"
                      r="1.39737"
                      transform="rotate(-90 26.7216 38.0089)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="14.5849"
                      cy="1.39761"
                      r="1.39737"
                      transform="rotate(-90 14.5849 1.39761)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.7216"
                      cy="1.39761"
                      r="1.39737"
                      transform="rotate(-90 26.7216 1.39761)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ChnagePassword
