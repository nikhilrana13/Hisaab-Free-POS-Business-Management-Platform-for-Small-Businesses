import { ArrowRight } from 'lucide-react';
import React from 'react';

const NavigationButtons = ({ back, next, disabled, submit, step, loading }) => {
  return (
    <div className="mt-10 flex border-t gap-5 border-[#e5e7eb] pt-6 justify-between">
      {step === 0 && (
        <button type="submit" onClick={next} className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#2563eb] py-3 font-semibold cursor-pointer text-white transition hover:bg-[#1d4ed8]">
          Let's Start
          <ArrowRight size={18} />
        </button>
      )}
      {step === 1 && (
          <button
          type="submit"
          onClick={next}
          className="flex w-full items-center cursor-pointer justify-center gap-2 rounded-xl bg-[#2563eb] py-3 font-semibold text-white transition hover:bg-[#1d4ed8]"
        >
          Next
          <ArrowRight size={18} />
        </button>
      )}
      {step === 2 && (
        <>
        <button
          type="submit"
            onClick={back}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#e5e7eb] bg-white py-3 font-semibold text-[#2563eb] transition hover:bg-[#EEF2FF]"
          >
            Back
          </button>
        <button
          type="submit"
          className="flex w-full items-center cursor-pointer justify-center gap-2 rounded-xl bg-[#2563eb] py-3 font-semibold text-white transition hover:bg-[#1d4ed8]"
        >
          {loading ? "Submitting..." : "Finish Setup"}
        </button>
        </>
      )}
    </div>
  );
}

export default NavigationButtons;
