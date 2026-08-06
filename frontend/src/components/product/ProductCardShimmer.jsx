const ProductCardShimmer = () => {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border border-[#e5e7eb] bg-white shadow-sm">
      {/* Image */}
      <div className="h-44 w-full bg-[#eef2f7]" />

      {/* Content */}
      <div className="space-y-5 p-5">
        {/* Title */}
        <div>
          <div className="h-6 w-40 rounded-md bg-[#eef2f7]" />
          <div className="mt-3 h-4 w-28 rounded-md bg-[#f3f4f6]" />
        </div>

        {/* Select */}
        <div>
          <div className="mb-2 h-4 w-12 rounded bg-[#eef2f7]" />

          <div className="h-11 w-full rounded-xl bg-[#eef2f7]" />
        </div>

        {/* Quantity */}
        <div className="flex items-center justify-between rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-2">
          <div className="h-10 w-10 rounded-xl bg-[#eef2f7]" />

          <div className="h-6 w-8 rounded bg-[#eef2f7]" />

          <div className="h-10 w-10 rounded-xl bg-[#eef2f7]" />
        </div>

        {/* Total */}
        <div className="flex items-center justify-between rounded-xl bg-[#EEF2FF] px-4 py-3">
          <div className="h-5 w-12 rounded bg-[#dbeafe]" />
          <div className="h-6 w-16 rounded bg-[#dbeafe]" />
        </div>

        {/* Button */}
        <div className="h-12 w-full rounded-2xl bg-[#dbeafe]" />
      </div>
    </div>
  );
};

export default ProductCardShimmer;