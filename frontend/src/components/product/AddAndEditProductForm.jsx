import useProductAddAndEdit from '@/hooks/useProductAddAndEdit';
import React, { useEffect, useRef, useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';
import { MdDelete } from 'react-icons/md';
import { RotatingLines } from 'react-loader-spinner';


const AddAndEditProductForm = ({ onClose, isEdit, product }) => {
    const imgRef = useRef()
    const [previewImage, setPreviewImage] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const { register, handleSubmit, reset, formState: { errors }, control } = useForm({
        defaultValues: {
            productName: '',
            priceOptions: [
                { unit: '', price: "" },
            ],
            image: {}
        }
    })
    // fetch product Details 
    useEffect(() => {
        if (isEdit && product) {
            reset({
                productName: product.productName,
                priceOptions: product.priceOptions,
            });

            setPreviewImage(product?.image?.url || null);
            setSelectedImage(null);
        } else {
            reset({
                productName: "",
                priceOptions: [
                    { unit: "", price: "" },
                ],
            });
            setPreviewImage(null);
            setSelectedImage(null);
        }
    }, [isEdit, product, reset]);

    const { SubmitProduct, loading } = useProductAddAndEdit({
        isEdit,
        productId: product?._id,
        onSuccess: () => {
            reset()
            setSelectedImage(null)
            setPreviewImage(null)
            onClose && onClose()
        }
    })
    const { fields, append, remove } = useFieldArray({
        control,
        name: 'priceOptions'
    })


    const handleImageChange = (e) => {
        const file = e.target.files?.[0]
        if (!file) return
        setSelectedImage(file)
        setPreviewImage(URL.createObjectURL(file))
    }
    // cleanup browser memory
    useEffect(() => {
    return () => {
        if (previewImage?.startsWith("blob:")) {
            URL.revokeObjectURL(previewImage);
        }
    };
}, [previewImage]);

    const onSubmit = async (data) => {
        if (!isEdit && !selectedImage) {
            toast.error("Product image is required");
            return;
        }
        await SubmitProduct(data, selectedImage)
    }

    const handleClose = () => {
        onClose && onClose()
    }
    return (
        <div className='fixed inset-0 border z-[999] rounded-md flex justify-center items-center p-4 sm:p-6 '>
            {/* backdrop */}
            <div
                className="fixed inset-0 bg-[#161021]/60 backdrop-blur-sm"
                onClick={handleClose}
            />
            {/* content */}
            <div className='relative w-full h-[500px] overflow-y-auto max-w-xl bg-white border p-3 border-[#006e2f]/10 rounded-lg shadow-2xl overflow-hidden custom-scrollbar'>
                {/* heading */}
                <div className='flex justify-between'>
                    <h3 className="text-[1.4rem] font-bold text-[#2563eb]">
                        {isEdit ? "Edit Product" : "Add a Product"}
                    </h3>
                    <button
                        onClick={() => handleClose()}
                        className="text-gray-400 cursor-pointer hover:text-gray-500 dark:hover:text-gray-300"
                    >
                        <IoMdClose size={24} />
                    </button>
                </div>
                {/* form */}
                <form onSubmit={handleSubmit(onSubmit)} className='mt-5 space-y-5 '>
                    {/* product name */}
                    <div className="space-y-1.5 sm:space-y-2">
                        <label className="block text-xs font-semibold text-[#3d4a3d] ml-1">
                            Product Name
                        </label>
                        <input
                            type="text"
                            name='productName'
                            placeholder="e.g Veg noodles"
                            className="w-full px-3 py-3 sm:py-4 bg-[#e7e8ea] rounded-lg placeholder:text-[#94a3b8] focus:border-[#2563eb] focus:ring-4 focus:ring-[#2563eb]/10 outline-none placeholder:text-sm"
                            {...register("productName", {
                                required: "Product Name is Required", maxLength: {
                                    value: 30,
                                    message: "Max 30 characters allowed"
                                }
                            })}
                        />
                        {errors?.productName && (
                            <p className='text-red-500 text-sm'>{errors?.productName?.message}</p>
                        )}
                    </div>
                    {/* price and units */}
                    <div className='space-y-1.5 sm:space-y-2'>
                        <div className='flex justify-between'>
                            <label className="text-xs font-semibold text-[#3d4a3d] ml-1">
                                Pricing & Units
                            </label>
                            <button
                                type="button"
                                onClick={() =>
                                    append({ unit: "", price: 0 })
                                }
                                className="text-sm cursor-pointer text-[#2563eb] font-semibold"
                            >
                                + Add Option
                            </button>
                        </div>
                        {/* Unit and Quantity Section */}
                        {fields?.map((field, index) => {
                            return (
                                <div key={field.id} className="relative grid px-1 my-2 grid-cols-2 md:grid-cols-4 gap-4 p-3 rounded-lg">
                                    {/* Unit */}
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase font-bold text-[#6d7b6c] block">
                                            Unit
                                        </label>
                                        <select {...register(`priceOptions.${index}.unit`, { required: "Unit is required" })} className="w-full h-10 px-2.5 rounded-lg bg-white text-sm outline-none focus:ring-2 focus:ring-[#006e2f]/20 focus:bg-white border border-gray-200 transition-all"
                                        >
                                            <option value="">Select</option>
                                            <option value="half">Half</option>
                                            <option value="full">Full</option>
                                        </select>
                                        {errors?.priceOptions?.[index]?.unit && (
                                            <p className='text-red-500 text-sm'>{errors?.priceOptions[index].unit.message}</p>
                                        )}
                                    </div>
                                    {/* price */}
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] uppercase font-bold text-[#6d7b6c] block">
                                            Price (₹)
                                        </label>
                                        <input
                                            type="number"
                                            placeholder="0.00"
                                            {...register(`priceOptions.${index}.price`, {
                                                required: "Price is required",
                                                valueAsNumber: true
                                            })}
                                            className="w-full h-10 px-2.5 rounded-lg bg-white text-sm outline-none focus:ring-2 focus:ring-[#006e2f]/20 focus:bg-white border border-gray-200 transition-all placeholder:text-gray-400"
                                        />
                                        {errors?.priceOptions?.[index]?.price && (
                                            <p className='text-red-500 text-sm'>{errors?.priceOptions[index].price.message}</p>
                                        )}
                                    </div>

                                    {fields.length > 1 && (
                                        <button type="button" onClick={() => remove(index)} className="absolute top-2 right-2 p-1.5 rounded-full text-red-500 hover:bg-red-100 transition">
                                            <MdDelete />
                                        </button>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    {/* images */}
                    <div className='space-y-1.5 sm:space-y-2'>
                        <label className="text-xs font-semibold text-[#3d4a3d] ml-1">
                            Upload Image
                        </label>
                        <div
                            onClick={() => imgRef.current?.click()}
                            className="group mt-3 relative flex h-44 w-full cursor-pointer items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-[#dbe2ea] bg-[#f8fafc] transition hover:border-[#2563eb] hover:bg-[#f8fbff]"
                        >
                            {previewImage ? (
                                <>
                                    <img
                                        src={previewImage}
                                        alt="Product preview"
                                        className="h-full w-full object-cover"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition group-hover:opacity-100">
                                        <span className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0f172a]">
                                            Change Image
                                        </span>
                                    </div>
                                </>
                            ) : (
                                <div className="text-center">
                                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EEF2FF] text-[#2563eb]">
                                        📷
                                    </div>
                                    <p className="text-sm font-semibold text-[#334155]">
                                        Choose Product Image
                                    </p>

                                    <p className="mt-1 text-xs text-[#94a3b8]">
                                        JPG, PNG or WEBP
                                    </p>
                                </div>
                            )}
                            <input
                                ref={imgRef}
                                type="file"
                                accept="image/png,image/jpeg,image/webp"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </div>
                        {isEdit && previewImage && !selectedImage && (
                            <p className="text-xs text-[#64748b]">
                                Current product image. Click to replace it.
                            </p>
                        )}
                        {selectedImage && (
                            <p className="truncate text-xs font-medium text-[#2563eb]">
                                New image: {selectedImage.name}
                            </p>
                        )}
                    </div>
                    <div className='flex mt-10 justify-end'>
                        <button type='submit' className='flex items-center gap-2 px-4 sm:px-8 py-1 sm:py-2 bg-[#2563eb] text-white font-bold rounded-xl cursor-pointer shadow-lg disabled:opacity-50'>
                            {
                                loading ? (
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
                                ) : isEdit ? "Update Product" : "Add Product"
                            }
                        </button>
                    </div>
                </form>

            </div>

        </div>
    );
}

export default AddAndEditProductForm;
