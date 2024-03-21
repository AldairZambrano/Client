// eslint-disable-next-line react/prop-types
export function Modal ({onclick, nameusu}) {
    return(<>
<button  type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
<i className="bi bi-person" style={{fontSize:'22px',fontWeight:'bold'}} ></i>
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Perfil</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
    Usuario {nameusu}
      </div>
      <div className="modal-footer">
      <button type="button" className="btn btn-success btnFooter" data-bs-dismiss="modal" >Cancelar</button>
        <button type="button" className="btn btn-danger btnFooter" data-bs-dismiss="modal" onClick={onclick}>Cerrar sesión</button>
      </div>
    </div>
  </div>
</div>
</>)}