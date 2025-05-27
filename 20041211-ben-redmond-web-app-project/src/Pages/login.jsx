import AuthForm from "../components/AuthForm";

const login = ({ setIsAuthenticated }) => 
<AuthForm mode="signin" setIsAuthenticated={setIsAuthenticated} />;

export default login;