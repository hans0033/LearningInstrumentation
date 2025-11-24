document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const pesan = document.getElementById('pesan').value;

        if (nama && email && pesan) {
            alert('Pesan berhasil dikirim! Terima kasih atas masukan Anda.');
            form.reset();
        } else {
            alert('Mohon isi semua kolom.');
        }
    });
});