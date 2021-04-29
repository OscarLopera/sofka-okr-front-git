import swal from 'sweetalert';


const DeleteOkr = () => {
swal({
    title: "¿Estás seguro que quieres eliminar este OKR",
    text: "Una vez lo elimines no podrás recuperarlo",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Tu OKR ha sido eliminado", {
        icon: "success",
      });
    } else {
      swal("Tu OKR está a salvo");
    }
  });
}
export default DeleteOkr; 







