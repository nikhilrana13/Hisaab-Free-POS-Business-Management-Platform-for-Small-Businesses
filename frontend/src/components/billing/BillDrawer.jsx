import React from 'react';
import EmptyBillState from './EmptyBillingState';
import BillSummary from './BillSummary';


const BillDrawer = ({selectedProducts,setSelectedProducts}) => {
    const isEmpty = selectedProducts.length === 0
    return (
            <aside className="hidden lg:block">
                <div className="sticky top-5 h-fit w-[380px] rounded-3xl border border-[#e5e7eb] bg-white p-5 shadow-xl">
                    {isEmpty ? (
                        <EmptyBillState />
                    ):(
                        <BillSummary selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />
                    )
                }
                </div>
            </aside> 
    );
}

export default BillDrawer;
