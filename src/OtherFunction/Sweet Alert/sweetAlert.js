import Swal from 'sweetalert2';

const sweetAlert=(title,text,icon)=>{
    Swal.fire({
        icon: icon,
        title: title,
        text: text,
        timer: 1500
      });
}
export default sweetAlert;