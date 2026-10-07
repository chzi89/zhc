const iconShapes = {
  arrow_forward: (
    <>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </>
  ),
  bedtime: (
    <>
      <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
      <path d="M16 3v4m-2-2h4" />
    </>
  ),
  call: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
  ),
  chat: (
    <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 3.9a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
  ),
  check_circle: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12 2.5 2.5L16 9" />
    </>
  ),
  checklist: (
    <>
      <path d="M9 5h11M9 12h11M9 19h11" />
      <path d="m3.5 5 1 1 2-2m-3 8 1 1 2-2m-3 8 1 1 2-2" />
    </>
  ),
  close: <path d="m18 6-12 12M6 6l12 12" />,
  health_and_safety: (
    <>
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
      <path d="M12 8v8m-4-4h8" />
    </>
  ),
  hearing: (
    <>
      <path d="M6 10a6 6 0 0 1 12 0c0 3-2 4-3.5 5.5-1 1-1 2.5-2.5 2.5a2 2 0 0 1-2-2" />
      <path d="M9 10a3 3 0 0 1 6 0c0 1.5-1 2-2 3" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5m0-8h.01" />
    </>
  ),
  mail_outline: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
  menu_book: (
    <>
      <path d="M12 7v14m0-14C10.5 5.7 8.5 5 6 5H3v14h4c2 0 3.5.7 5 2m0-14c1.5-1.3 3.5-2 6-2h3v14h-4c-2 0-3.5.7-5 2" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M5 21a7 7 0 0 1 14 0" />
    </>
  ),
  print: (
    <>
      <path d="M6 9V3h12v6M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
      <path d="M6 14h12v7H6z" />
      <path d="M18 12h.01" />
    </>
  ),
  psychology: (
    <>
      <path d="M12 3a4 4 0 0 0-7 2.6A4 4 0 0 0 4 12a4 4 0 0 0 2 6.5A4 4 0 0 0 12 21" />
      <path d="M12 3a4 4 0 0 1 7 2.6A4 4 0 0 1 20 12a4 4 0 0 1-2 6.5A4 4 0 0 1 12 21M8 8h.01M7 14h.01M16 8h.01M17 14h.01M12 7v10" />
    </>
  ),
  send: (
    <>
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </>
  ),
  thermostat: (
    <>
      <path d="M14 14.8V5a3 3 0 0 0-6 0v9.8a5 5 0 1 0 6 0Z" />
      <path d="M11 11v6" />
    </>
  ),
};

export default function Icon({ name, className = "", title }) {
  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      aria-label={title}
      className={className}
      fill="none"
      role={title ? "img" : undefined}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
    >
      {iconShapes[name] ?? <circle cx="12" cy="12" r="8" />}
    </svg>
  );
}
