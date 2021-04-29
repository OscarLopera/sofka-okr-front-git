import swal from 'sweetalert';
import React from "react";

const EditKr = () => {
swal({
    title: "¿Estás seguro que quieres editar este KR",
    text: "",
    icon: "success",
    buttons: true
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Tu KR ha sido editado", {
        icon: "success",
      });
    } else {
      swal("No hay cambios en tu KR");
    }
  });
}
export default EditKr; 