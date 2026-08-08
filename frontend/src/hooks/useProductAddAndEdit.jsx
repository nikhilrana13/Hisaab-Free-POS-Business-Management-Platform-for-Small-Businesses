import { useAddProductMutation, useUpdateProductMutation } from '@/redux/api/ProductApi';
import React from 'react';
import toast from 'react-hot-toast';

const useProductAddAndEdit = ({ isEdit, productId, onSuccess }) => {
    const [AddProduct, { isLoading: isAddingLoading }] = useAddProductMutation()
    const [UpdateProduct, { isLoading: isUpdatingLoading }] = useUpdateProductMutation()

    const loading = isAddingLoading || isUpdatingLoading
    const SubmitProduct = async (data, selectedImage) => {
        const formdata = new FormData()
        formdata.append("productName", data.productName)
        formdata.append("priceOptions", JSON.stringify(data.priceOptions))
        if (selectedImage) {
            formdata.append("image", selectedImage);
        }
        try {
            const response = isEdit ? await UpdateProduct({ formdata, id:productId }).unwrap() : await AddProduct(formdata).unwrap()
            if(response?.status === "success"){
                 toast.success(response?.message)
                 onSuccess?.();
            }
        } catch (error) {
            console.error("failed to add and edit product",error)
            toast.error(error?.data?.message || "Something went wrong");
        }
    }
    return { SubmitProduct, loading }
}

export default useProductAddAndEdit;
