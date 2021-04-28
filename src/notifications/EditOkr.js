import swal from 'sweetalert';
import React from "react";

const EditOkr = () => {
swal({
    title: "¿Estás seguro que quieres editar este OKR",
    text: "",
    icon: "success",
    buttons: true
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Tu OKR ha sido editado", {
        icon: "success",
      });
    } else {
      swal("No hay cambios en tu OKR");
    }
  });
}
export default EditOkr; 