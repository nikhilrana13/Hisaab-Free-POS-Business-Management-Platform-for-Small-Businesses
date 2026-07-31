"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useForm } from "react-hook-form";
import { ThreeDots } from "react-loader-spinner";
import { api } from "@/services/api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { SetUser } from "@/redux/AuthSlice";
import { useRouter } from "next/navigation";

const page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const {register,handleSubmit,formState: { errors },} = useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const router = useRouter()

  const onSubmit = async (data) => {
    const formData = {
      email: data.email,
      password: data.password,
    };
    try {
        setLoading(true)
        const response = await api.post("/api/auth/login",formData)
        if(response){
        toast.success(response?.message)
        const user = response?.data?.user 
        const token = response?.data?.token 
        localStorage.setItem("token",token)
        dispatch(SetUser(user))
        if(user?.isOnboarded){
          router.replace("/dashboard")
        }else{
          router.replace("/onboarding")
        }
      }
    } catch (error) {
      console.error("failed to login",error)
      toast.error(error?.response?.data?.message || "Internal server error")
    }finally{
      setTimeout(() => {
        setLoading(false)
      }, 3000);
    }
  };

  return (
    <section className="w-full md:h-screen overflow-hidden bg-white md:flex">
      {/* Left Side */}
      <div className="relative hidden w-1/2 items-center justify-center overflow-hidden bg-[#f8fafc] md:flex">
        <Image
          src="/authlogin.webp"
          alt="Your business is under control"
          fill
          priority
          className="object-contain"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f8fafc]/60" />
      </div>

      {/* Right Side */}
      <div className="flex w-full items-center justify-center bg-white px-6 py-10 md:w-1/2 md:px-12">
        <div className="w-full max-w-[420px]">
          {/* Logo */}
          <Link
            href="/"
            className="mb-10 block text-center text-3xl font-bold tracking-tight text-[#2563eb] md:text-left"
          >
            Hisaab
          </Link>

          {/* Heading */}
          <div className="mb-8 text-center md:text-left">
            <h1 className="mb-2 text-4xl font-bold text-[#0f172a]">
              Welcome Back 👋
            </h1>

            <p className="text-[#475569]">Let's get your business running.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email / Mobile */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#0f172a]">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: "/^\S+@\S+$/i,",
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-sm my-1 text-red-500">
                  {errors?.email?.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-medium text-[#0f172a]">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 pr-12 text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
                  {...register("password", {
                    required: "Password is Required",
                    minLength: {
                      value: 6,
                      message: "Minimum 6 characters required",
                    },
                  })}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748b]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm my-1 text-red-500">
                  {errors?.password?.message}
                </p>
              )}
            </div>

            {/* Remember */}
            <div className="flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-[#d1d5db] text-[#2563eb] focus:ring-[#2563eb]"
                />

                <span className="text-sm text-[#475569]">Remember Me</span>
              </label>

              <Link
                href="/forgot-password"
                className="text-sm font-medium text-[#2563eb] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login */}
            <button
              disabled={loading}
              type="submit"
              className="flex h-12 w-full cursor-pointer items-center justify-center rounded-xl bg-[#2563eb] font-semibold text-white transition hover:bg-[#1d4ed8]"
            >
              {loading ? (
                <ThreeDots
                  visible={true}
                  height="25"
                  width="25"
                  color="#ffffff"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="flex-1 border-t border-[#e5e7eb]" />

            <span className="px-4 text-sm text-[#64748b]">
              Or continue with
            </span>

            <div className="flex-1 border-t border-[#e5e7eb]" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-[#e5e7eb] bg-white font-medium text-[#0f172a] transition hover:bg-[#f8fafc]"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.67 15.63 16.89 16.79 15.72 17.57V20.34H19.29C21.37 18.42 22.56 15.6 22.56 12.25Z"
              />
              <path
                fill="#34A853"
                d="M12 23C14.97 23 17.46 22.02 19.29 20.34L15.72 17.57C14.73 18.23 13.48 18.63 12 18.63C9.14 18.63 6.71 16.7 5.84 14.12H2.15V16.98C3.96 20.58 7.68 23 12 23Z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.12C5.62 13.46 5.49 12.74 5.49 12C5.49 11.26 5.62 10.54 5.84 9.88V7.02H2.15C1.41 8.5 1 10.2 1 12C1 13.8 1.41 15.5 2.15 16.98L5.84 14.12Z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38C13.62 5.38 15.06 5.94 16.21 7.03L19.38 3.86C17.45 2.06 14.97 1 12 1C7.68 1 3.96 3.42 2.15 7.02L5.84 9.88C6.71 7.3 9.14 5.38 12 5.38Z"
              />
            </svg>
            Continue with Google
          </button>

          {/* Footer */}
          <div className="mt-10 text-center">
            <p className="text-[#64748b]">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="font-semibold text-[#2563eb] hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
