function validasi() {
    var nama = document.getElementById("username").value;
    var Panggilan = document.getElementById("name").value;
    var alamat = document.getElementById("alamat").value;
    var TempatLahir = document.getElementById("tl").value;
    var TanggalLahir = document.getElementById("date").value;
    if (nama != "" || Panggilan != "" || alamat !="" ||TempatLahir != "" ||  TanggalLahir!= ""){
        swal({
            title: "Yakin!",
            text: "Apakah Data Anda Sudah Benar?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("data anda sudah tersimpan", {
                icon: "success",
            })
            } else {
              swal("silahkan ubah data anda");
            }
        })
    }
    else{
        swal("Maaf","from tidak boleh kosong", "error");  
}
}
function logout(){
  swal({
    title: "Yakin!",
    text: "Apakah anda yakin akan Logout",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Anda berhasil keluar", {
        icon: "success",
    }).then(function(){
         window.location.href = 'daftar.html'
      })
    } 
})
}