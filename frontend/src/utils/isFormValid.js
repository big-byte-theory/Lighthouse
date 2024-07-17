export const isFormValid = (props) => {
  let messages = [];
  let charRegex = /^[a-zA-Z]+$/;

  if (props.path === "/sign-up") {
    if (props.firstName === "") {
      messages.push("Please enter your first name.");
    }

    if (!charRegex.test(props.firstName)) {
      messages.push("First name must contain only letters.");
    }

    if (!charRegex.test(props.lastName)) {
      messages.push("Last name must contain only letters.");
    }
  }

  if (props.path === "/login" || props.path === "/sign-up") {
    if (props.emailAddress === "") {
      messages.push("Please enter your email.");
    }
    if (props.password === "") {
      messages.push("Please enter your password.");
    }
  }

  return messages;
};