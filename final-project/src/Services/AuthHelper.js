const AuthHelper = {};

const authUrl = "https://posts-pw2021.herokuapp.com/api/v1/auth/signin";

AuthHelper.login = async (e) => {
  e.preventDefault();
  let loginStatus = {};
  let loginForm = new FormData(document.querySelector("#loginForm"));
  let request = await fetch(authUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `username=${loginForm.get("username")}&password=${loginForm.get(
      "password"
    )}`,
  });
  let response = await request.json();
  if (request.ok) {
    loginStatus = {logged:true, user: loginForm.get("username"), ...response };
    localStorage.setItem("login", JSON.stringify(loginStatus));
  } else {
    loginStatus.logged = false;
    loginStatus.body = response;
  }
  
  return loginStatus;
};

export default AuthHelper;
