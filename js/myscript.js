function isEmpty() {
  let email = document.forms["register"]["email"].value;
  let fname = document.forms["register"]["firstname"].value;
  let lname = document.forms["register"]["lastname"].value;
  let username = document.forms["register"]["username"].value;
  let password = document.forms["register"]["password"].value;
  if (
    email == "" ||
    fname == "" ||
    lname == "" ||
    username == "" ||
    password == ""
  ) {
    alert("empty");
  }
  return;
}
function save() {
  let email = document.forms["register"]["email"].value;
  let uname = email.split("@");
  alert("The application of " + uname[0] + " is saved!");
}
