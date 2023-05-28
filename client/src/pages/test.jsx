import { useEffect}  from 'react'
import Swal from 'sweetalert2';

function test() {
  

const Alert = () =>{
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
}

return (
    <>
    <p>Hallo</p>
    <button onClick={Alert}>Hallo</button>
    </>
  )
}

export default test