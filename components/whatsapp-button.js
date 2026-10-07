import { getWhatsAppUrl } from "../lib/clinic-config";

export default function WhatsAppButton({
  className = "",
  children = "WhatsApp",
  message,
}) {
  const href = getWhatsAppUrl(message);

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={className}
        title="WhatsApp contact has not been configured"
      >
        {children}
      </span>
    );
  }

  return (
    <a
      className={className}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}
