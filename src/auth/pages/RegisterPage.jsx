
import { Link } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm, useAuthStore } from '../../calendar';
import './LoginPage.css';


const formData = {
  email:'manuel@correo.es',
  password:'1234',
  displayName:'Manuel Casas',
}

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: ''
}

export const RegisterPage = () => {

    const {startRegister,errorMessage} = useAuthStore();
    const {registerEmail, registerName, registerPassword, registerPassword2, onInputChange: onRegisterInputChange} = useForm(registerFormFields);

  const registerSubmit = (event) => {
    event.preventDefault();
    if(registerPassword !== registerPassword2) {
        Swal.fire('Error en el registro','Las contraseñas son diferentes.','error');
        return;
    }
    console.log({registerEmail, registerName, registerPassword, registerPassword2});
    startRegister({name:registerName, email:registerEmail, password:registerPassword});
  }

    return (
      <div className="container mt-5 d-flex justify-content-center">
        <div className="col-md-6 login-form-1">
                  <h3>Registro</h3>
                  <form onSubmit={registerSubmit}>
                      <div className="form-group mb-2">
                          <input
                              type="text"
                              className="form-control"
                              placeholder="Nombre"
                              name="registerName"
                              value={registerName}
                              onChange={onRegisterInputChange}
                          />
                      </div>
                      <div className="form-group mb-2">
                          <input
                              type="email"
                              className="form-control"
                              placeholder="Correo"
                              name="registerEmail"
                              value={registerEmail}
                              onChange={onRegisterInputChange}
                          />
                      </div>
                      <div className="form-group mb-2">
                          <input
                              type="password"
                              className="form-control"
                              placeholder="Contraseña" 
                              name="registerPassword"
                              value={registerPassword}
                              onChange={onRegisterInputChange}
                          />
                      </div>

                      <div className="form-group mb-2">
                          <input
                              type="password"
                              className="form-control"
                              placeholder="Repita la contraseña" 
                              name="registerPassword2"
                              value={registerPassword2}
                              onChange={onRegisterInputChange}
                          />
                      </div>

                      <div className="d-grid gap-2">
                          <input 
                              type="submit" 
                              className="btnSubmit" 
                              value="Crear cuenta"
                            />
                      </div>
                      <div className="d-flex justify-content-end">
                          <Link component= {RouterLink} to="/auth/login">
                            Ingreso
                          </Link>
                      </div>
                  </form>
              </div>
        </div>

    )
  }