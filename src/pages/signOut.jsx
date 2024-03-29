import appfirebase from '../Credenciales'
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'

const auth = getAuth(appfirebase)

export default function signOut () {
    
    const funcAutentication = async(e) => {
        e.preventDefault()  //evita que el formulario se recargue la pag
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

       
    try{
        await createUserWithEmailAndPassword(auth, correo, contraseña)

    }catch (error) {
        alert("asegurate que la contraseña tenga mas de 8 caracteres")
    }
}
    return(
     
      <div className="body">
         <form className="row g-3">
  <div className="col-md-4">
    <label form="validationDefault01" className="form-label">First name</label>
    <input type="text" className="form-control" id="validationDefault01" value="Mark" required />
  </div>
  <div className="col-md-4">
    <label form="validationDefault02" className="form-label">Last name</label>
    <input type="text" className="form-control" id="validationDefault02" value="Otto" required/>
  </div>
  <div className="col-md-4">
    <label form="validationDefaultUsername" className="form-label">Username</label>
    <div className="input-group">
      <span className="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required/>
    </div>
  </div>
  <div className="col-md-6">
    <label form="validationDefault03" className="form-label">City</label>
    <input type="text" className="form-control" id="validationDefault03" required/>
  </div>
  <div className="col-md-3">
    <label form="validationDefault04" className="form-label">State</label>
    <select className="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div className="col-md-3">
    <label form="validationDefault05" className="form-label">Zip</label>
    <input type="text" className="form-control" id="validationDefault05" required/>
  </div>
  <div className="col-12">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label className="form-check-label" form="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
    </div>
    )
}