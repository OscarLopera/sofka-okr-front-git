import swal from 'sweetalert';
import axios from 'axios'
import { environment } from '../../../environment/backendurl'


const DeleteOkr = (idOkr) => {
  swal({
    title: "¿Estás seguro que quieres eliminar este OKR",
    text: "Una vez lo elimines no podrás recuperarlo",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
    .then((willDelete) => {
      if (willDelete) {
        const urlOkr = environment.apiOkrUrl
        axios.delete(`${urlOkr}/deleteOkr/${idOkr}`).then((res) => {
          if (res.status === 200) {
            swal("Tu OKR ha sido eliminado", {
              icon: "success",
            });
            window.location.reload();
          }
        })
      } else {
        swal("Tu OKR está a salvo");
      }
    });
}

export default DeleteOkr;







