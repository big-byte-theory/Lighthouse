export const llmFormValidity = (props) => { 
  let messages = [];

  if (props.name === "") {
    messages.push({ field: "name", msg: "Please enter the name of the LLM."});
  }

  if (props.organization === "") {
    messages.push({ field: "organization", msg: "Please enter the organization name." });
  }

  if (props.created_date === "") {
    messages.push({ field: "created_date", msg: "Please enter the creation date." });
  }

  if (props.access === "") {
    messages.push({ field: "access", msg: "Please select the access level."});
  }

  if (props.type === "") {
    messages.push({field: "type", msg: "Please select the type."});
  }

  return messages;
};