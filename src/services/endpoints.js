const url = "http://127.0.0.1:3333";
const registration_route = "registration";
const login_route = "login";
const allusers_route = "user/all";

const registration_endpoint = `${url}/${registration_route}`;
const login_endpoint = `${url}/${login_route}`;
const allusers_endpoint = `${url}/${allusers_route}`;

export { registration_endpoint, login_endpoint, allusers_endpoint };
