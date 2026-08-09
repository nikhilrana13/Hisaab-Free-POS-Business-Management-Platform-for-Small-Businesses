export const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 12) {
    return {
      text: "Good Morning",
      emoji: "☀️",
    };
  }
  if (hour >= 12 && hour < 17) {
    return {
      text: "Good Afternoon",
      emoji: "🌤️",
    };
  }
  if (hour >= 17 && hour < 21) {
    return {
      text: "Good Evening",
      emoji: "🌇",
    };
  }
  return {
    text: "Good Night",
    emoji: "🌙",
  };
};

//  Format a number using the Indian numbering system (e.g. 154000 -> "1,54,000").
export function formatIndianNumber(value) {
  if (value === null || value === undefined || value === "") return "0";
  const num = typeof value === "number" ? value : parseFloat(value);
  if (isNaN(num)) return "0";
  // convert to string without decimals
  const [integer, decimal] = num.toString().split(".");
  let lastThree = integer.slice(-3);
  const otherDigits = integer.slice(0, -3);
  if (otherDigits !== "") {
    lastThree = "," + lastThree;
  }
  const formattedOther = otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return formattedOther + lastThree + (decimal ? "." + decimal : "");
}

export const FormatDate = (date) => {
        if (!date) return "N/A";
        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

export const GetPaymentStyle = (method) => {
        if (method === "upi") {
            return "bg-violet-50 text-violet-700 border-violet-100";
        }

        if (method === "cash") {
            return "bg-emerald-50 text-emerald-700 border-emerald-100";
        }

        return "bg-slate-50 text-slate-600 border-slate-200";
    };