const Modal = ({cerrarModal}) => {  
  return (
    <div className="modal">
    <button onClick={cerrarModal}>Cerrar Modal</button>
    Hola, soy un modal
  </div>
  )
}

export default Modal
