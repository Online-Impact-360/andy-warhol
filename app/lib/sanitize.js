import xss from "xss";

export function sanitizeSubmission(input) {
  const clean = (v) => (v ? xss(v, { whiteList: {} }).trim() : v);

  return {
    fullName: clean(input?.fullName),
    email: input?.email ? clean(input.email).toLowerCase() : input?.email,
    role: clean(input?.role),
    city: clean(input?.city),
    country: clean(input?.country),
    message: clean(input?.message),
  };
}
