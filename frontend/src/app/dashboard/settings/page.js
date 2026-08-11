"use client";
import BusinessFormShimmer from "@/components/common/BusinessFormShimmer";
import useLogout from "@/hooks/useLogout";
import {
  useGetBusinessDetailsQuery,
  useUpdateBusinessDetailsMutation,
} from "@/redux/api/BusinessApi";
import { ChevronDown, Edit3, Upload } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";

const page = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [previewImg, setPreviewImg] = useState(null);
  const {register,handleSubmit,reset,formState: { errors },} = useForm({
    defaultValues: {
      businessName: "",
      businessAddress: "",
      contactno: "",
      logo: {},
    },
  });
  const { data, isLoading, isError } = useGetBusinessDetailsQuery();
  const businessdetails = data?.data?.business
  const businessloading = isLoading;
  const [UpdateBusinessDetails, { isLoading: isUpdating }] = useUpdateBusinessDetailsMutation();
  const {handleLogout} = useLogout()
  // get business details
  useEffect(() => {
    if(!businessdetails) return
      reset({
        businessName: businessdetails?.businessName,
        businessAddress: businessdetails?.businessAddress,
        contactno: businessdetails?.contactno,
      });
      setPreviewImg(businessdetails?.logo?.url || null);
      setSelectedImg(null);
  }, [businessdetails,reset]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setSelectedImg(file);
    setPreviewImg(URL.createObjectURL(file));
  };
  // cleanup browser memory
  useEffect(() => {
    return () => {
      if (previewImg?.startsWith("blob:")) {
        URL.revokeObjectURL(previewImg);
      }
    };
  }, [previewImg]);

  const onSubmit = async (data) => {
    let formdata = new FormData();
    formdata.append("businessName", data.businessName);
    formdata.append("businessAddress", data.businessAddress);
    formdata.append("contactno", data.contactno);
    if (selectedImg) {
      formdata.append("logo", selectedImg);
    }
    try {
      const response = await UpdateBusinessDetails(formdata).unwrap();
      toast.success(response?.message);
    } catch (error) {
      console.error("failed to update business details", error);
      toast.error(error?.data?.message || "Internal server error");
    }
  };
  return (
    <div className="flex flex-col p-5 space-y-6">
      {/* heading */}
      <div>
        <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-[#2563eb]">
          Hisaab Settings
        </span>

        <h2 className="text-2xl font-semibold tracking-tight text-[#0f172a] sm:text-3xl">
          Business Settings
        </h2>

        <p className="mt-1 max-w-2xl text-sm leading-relaxed text-[#64748b] sm:text-base">
          Apni shop ki details, business profile aur account settings yahan se
          manage karein.
        </p>
      </div>
      <div className="space-y-8 ">
        {/* business details */}
        {businessloading ? (
          <BusinessFormShimmer />
        ) : isError ? (
          <p className="text-sm text-center text-red-500">
            Failed to get business Details
          </p>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex bg-white p-6 shadow-md rounded-md flex-col gap-8 md:flex-row md:items-start"
          >
            {/* Logo Upload */}
            <div className="shrink-0">
              <label
                htmlFor="business-logo"
                className="mb-3 block text-sm font-medium text-[#0F172A]"
              >
                Business Logo
              </label>

              <label
                htmlFor="business-logo"
                className="group relative block cursor-pointer"
              >
                <div className="flex relative h-32 w-32 flex-col items-center justify-center gap-2 overflow-hidden rounded-3xl border-2 border-dashed border-[#E5E7EB] bg-[#F8FAFC] transition-colors group-hover:border-[#2563EB]">
                  {previewImg ? (
                    <>
                      <img
                        src={previewImg}
                        alt="Business logo preview"
                        className="h-full w-full object-cover"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/35 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
                          <Edit3 size={17} className="text-[#2563eb]" />
                        </div>
                        <span className="text-xs font-semibold text-white">
                          Change
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <Upload
                        size={28}
                        className="text-[#94A3B8] transition-colors group-hover:text-[#2563EB]"
                      />
                      <span className="px-4 text-center text-xs text-[#94A3B8] transition-colors group-hover:text-[#2563EB]">
                        Click to upload or drag logo
                      </span>
                    </>
                  )}
                </div>
                {/* Edit button */}
                <div className="absolute -bottom-2 -right-2 hidden lg:flex items-center justify-center rounded-full border border-[#E5E7EB] bg-white p-2 shadow-md">
                  <Edit3 size={14} className="text-[#64748B]" />
                </div>
              </label>
              <input
                id="business-logo"
                onChange={handleImageChange}
                type="file"
                accept="image/png,image/jpeg,image/webp"
                className="hidden"
              />
            </div>
            {/* Business Fields */}
            <div className="w-full flex-1 space-y-6">
              {/* Business Name */}
              <div className="space-y-1.5">
                <label className="block text-sm font-medium text-[#0F172A]">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="Enter business name"
                  className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-[#0f172a] placeholder:text-[#94a3b8] shadow-sm outline-none transition focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
                  {...register("businessName", {
                    required: "Business Name is required",
                    maxLength: {
                      value: 30,
                      message: "Business Name should not exceed 30 characters",
                    },
                  })}
                />
                {errors.businessName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.businessName.message}
                  </p>
                )}
              </div>
              {/* business address */}
              <div className="space-y-1.5">
                <label className="mb-2 block text-sm font-medium text-[#0f172a]">
                  Business Address
                </label>
                <input
                  type="text"
                  placeholder="e.g. #123, Main Street, City"
                  className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-[#0f172a] placeholder:text-[#94a3b8] shadow-sm outline-none transition focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
                  {...register("businessAddress", {
                    required: "Business Address is required",
                    minLength: {
                      value: 20,
                      message: "Address must be at least 20 characters",
                    },
                    maxLength: {
                      value: 80,
                      message: "Address must be between 20 and 80 characters",
                    },
                  })}
                />
                {errors.businessAddress && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.businessAddress.message}
                  </p>
                )}
              </div>
              {/* contact no */}
              <div className="space-y-1.5">
                <label className="mb-2 block text-sm font-medium text-[#0f172a]">
                  Contact Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. 9876543210"
                  className="h-12 w-full rounded-xl border border-[#e5e7eb] bg-white px-4 text-[#0f172a] placeholder:text-[#94a3b8] shadow-sm outline-none transition focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10"
                  {...register("contactno", {
                    required: "Contact No is required",
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Contact no should be 10 digits",
                    },
                  })}
                />
                {errors.contactno && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.contactno.message}
                  </p>
                )}
              </div>
              <div className="justify-end flex">
                <button
                  disabled={isUpdating}
                  type="submit"
                  className="flex px-7 items-center cursor-pointer justify-center gap-2 rounded-xl bg-[#2563eb] py-3 font-semibold text-white transition disabled:opacity-50 disabled:cursor-not-allowed  hover:bg-[#1d4ed8]"
                >
                  {isUpdating ? (
                    <RotatingLines
                      visible={true}
                      height="20"
                      width="20"
                      color="#ffffff"
                      strokeWidth="5"
                      animationDuration="0.75"
                      ariaLabel="rotating-lines-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                    />
                  ) : (
                    "Save changes"
                  )}
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
      {/* for mobile */}
      <Link href={"/dashboard/orders"} className="block xl:hidden w-full text-center justify-center items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 bg-[#EEF2FF] text-[#074FC8] ">
          View Orders
      </Link>
      <button onClick={handleLogout} className="block xl:hidden w-full text-center justify-center items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 bg-[#EEF2FF] text-[#074FC8] ">
          Logout
      </button>
    </div>
  );
};

export default page;
