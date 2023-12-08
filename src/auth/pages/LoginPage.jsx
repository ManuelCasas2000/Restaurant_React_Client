import { Link } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';
import { useForm, useAuthStore } from '../../calendar';
import './LoginPage.css';

const loginFormFields = {
    loginEmail: '',
    loginPassword: ''
}

export const LoginPage = () => {
    const { startLogin, errorMessage } = useAuthStore();
    const {loginEmail, loginPassword, onInputChange: onLoginInputChange} = useForm(loginFormFields);
    
    const loginSubmit = (event) => {
        event.preventDefault();
        console.log({loginEmail, loginPassword});
        startLogin({email:loginEmail, password:loginPassword});
    }

  return (
    <div className="container mt-5 d-flex justify-content-center">
        <div className="col-md-6 login-form-1">
            <div className="row">
                  <h3>Ingreso</h3>
                  <form onSubmit={loginSubmit}>
                      <div className="form-group mb-2">
                          <input 
                              type="text"
                              className="form-control"
                              placeholder="Correo"
                              name="loginEmail"
                              value = {loginEmail}
                              onChange = {onLoginInputChange}
                          />
                      </div>
                      <div className="form-group mb-2">
                          <input
                              type="password"
                              className="form-control"
                              placeholder="Contraseña"
                              name="loginPassword"
                              value={loginPassword}
                              onChange={onLoginInputChange}
                          />
                      </div>
                      <div className="d-grid gap-2">
                          <input
                              type="submit"
                              className="btnSubmit"
                              value="Login"
                            />
                      </div>
                      <div className="d-flex justify-content-end">
                          <Link component= {RouterLink}  to="/auth/register">
                            Crear una cuenta
                          </Link>
                      </div>
                  </form>
            </div>
        </div>
    </div>
  )
}
