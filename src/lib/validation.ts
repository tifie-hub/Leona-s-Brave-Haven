const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9+().\-\s]{7,20}$/;

export type FieldErrors = Record<string, string>;

function read(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export function isHoneypotFilled(formData: FormData) {
  return read(formData, "company_website").length > 0;
}

export function validateContact(formData: FormData) {
  const values = {
    name: read(formData, "name"),
    email: read(formData, "email"),
    phone: read(formData, "phone"),
    topic: read(formData, "topic"),
    message: read(formData, "message"),
  };

  const errors: FieldErrors = {};

  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.phone && !PHONE_PATTERN.test(values.phone)) {
    errors.phone = "Please enter a valid phone number or leave this blank.";
  }
  if (!values.topic) errors.topic = "Please choose a topic.";
  if (values.message.length < 10) {
    errors.message = "Please share a little more so we can respond helpfully.";
  }
  if (values.message.length > 4000) {
    errors.message = "Please keep your message under 4,000 characters.";
  }

  return { values, errors, valid: Object.keys(errors).length === 0 };
}

export function validateApplication(formData: FormData) {
  const values = {
    interest: read(formData, "interest"),
    name: read(formData, "name"),
    email: read(formData, "email"),
    phone: read(formData, "phone"),
    city: read(formData, "city"),
    household: read(formData, "household"),
    experience: read(formData, "experience"),
    dogReference: read(formData, "dogReference"),
    message: read(formData, "message"),
    consent: read(formData, "consent"),
  };

  const errors: FieldErrors = {};

  if (!values.interest) errors.interest = "Please choose how you would like to help.";
  if (values.name.length < 2) errors.name = "Please enter your name.";
  if (!EMAIL_PATTERN.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (values.phone && !PHONE_PATTERN.test(values.phone)) {
    errors.phone = "Please enter a valid phone number or leave this blank.";
  }
  if (values.city.length < 2) {
    errors.city = "Please share your city or nearest area.";
  }
  if (values.message.length < 10) {
    errors.message = "Please tell us a little about your interest or situation.";
  }
  if (values.message.length > 4000) {
    errors.message = "Please keep your message under 4,000 characters.";
  }
  if (values.consent !== "yes") {
    errors.consent =
      "Please confirm that we may use this information to follow up with you.";
  }

  return { values, errors, valid: Object.keys(errors).length === 0 };
}
