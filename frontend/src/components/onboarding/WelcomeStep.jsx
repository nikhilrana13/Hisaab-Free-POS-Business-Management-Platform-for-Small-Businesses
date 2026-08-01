import { ReceiptIndianRupee, Store } from 'lucide-react';
import React from 'react';

const WelcomeStep = () => {
    return (
        <>
            <div className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dbeafe]">
                    <Store className="h-5 w-5 text-[#2563eb]" />
                </div>

                <div>
                    <h3 className="font-semibold text-[#0f172a]">
                        Apni dukaan ki jankari add karein
                    </h3>

                    <p className="mt-1 text-sm text-[#64748b]">
                        Shop ka naam, address aur mobile number add karein.
                    </p>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#dbeafe]">
                    <ReceiptIndianRupee className="h-5 w-5 text-[#2563eb]" />
                </div>

                <div>
                    <h3 className="font-semibold text-[#0f172a]">
                        Roz ka hisaab aasani se rakhein
                    </h3>

                    <p className="mt-1 text-sm text-[#64748b]">
                        Sale, udhaar aur kamai ka record ek hi jagah dekhein.
                    </p>
                </div>
            </div>
            <p className="mt-10 rounded-xl font-normal border border-[#dbeafe] bg-[#eff6ff] p-4 text-sm text-[#2563eb]">
                Setup complete hote hi aap billing aur apni dukaan ka hisaab
                turant shuru kar sakte hain.
            </p>
        </>
    );
}

export default WelcomeStep;
