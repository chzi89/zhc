export const clinicConfig = {
  name: "Zikriya Homeopathy Clinic",
  doctor: "Dr. AmanUllah",
  qualification: "BHMS",
  phone: "+923468668121",
  whatsappNumber: "+923038668121",
  email: "",
  address: "Shaheenabad, Sargodha",
  clinicHours: "Saturday–Thursday: 9:00 AM–6:00 PM; Friday: Closed",
};

export function getWhatsAppUrl(message) {
  const number = clinicConfig.whatsappNumber.replace(/\D/g, "");

  if (!number) {
    return null;
  }

  const query = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${query}`;
}
