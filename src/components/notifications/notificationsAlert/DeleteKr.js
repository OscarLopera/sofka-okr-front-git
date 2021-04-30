import swal from 'sweetalert';


const DeleteOkr = () => {
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
        return true;
        swal("Tu KR ha sido eliminado", {
          icon: "success"

        });
      } else {
        swal("Tu KR está a salvo");
        return false;
      }
    });
}
export default DeleteOkr;


