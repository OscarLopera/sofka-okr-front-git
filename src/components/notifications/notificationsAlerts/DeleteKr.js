import swal from 'sweetalert';
import axios from 'axios';
import { environment } from '../../../environment/backendurl'


const DeleteOkr = (idKr) => {
  swal({
    title: "¿Estás seguro que quieres eliminar este KR",
    text: "Una vez lo elimines no podrás recuperarlo",
    icon: "warning",
    buttons: true,
    dangerMode: true,
    getByRole: 'alert-deletekr-notification'
  })
    .then((willDelete) => {
      if (willDelete) {

        const urlKr = environment.apiKrUrl

        axios.delete(`${urlKr}/deleteKr/${idKr}`).then((res) => {
          console.log(res)
          if (res.status === 200) {
            swal("Tu KR ha sido eliminado", {
              icon: "success",
            });
          }
        })
      } else {
        swal("Tu KR está a salvo");
        return false;
      }
    });
}
export default DeleteOkr;


