

// option 1

// const myModal = new bootstrap.Modal('#disclaimer_modal');

// window.addEventListener('DOMContentLoaded', () => {
//     myModal.show();
// });


const myModal = bootstrap.Modal.getOrCreateInstance('#disclaimer_modal');

window.addEventListener('DOMContentLoaded', () => {
    myModal.show();
});


// $(document).ready(function(){
//     $('#disclaimer_modal').modal('show');
// })