import AuthForm from "../components/AuthForm";

const login = ({ setIsAuthenticated }) => <AuthForm mode="login" setIsAuthenticated={setIsAuthenticated} />;

export default login;