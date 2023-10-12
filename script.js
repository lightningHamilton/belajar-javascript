function cekUmur() {
            var nama = document.getElementById("nama").value;
            var umur = document.getElementById("umur").value;

            if (umur < 7) {
                alert(nama + ", kamu anak-anak.");
            } else if (umur >= 7 && umur < 18) {
                alert(nama + ", kamu remaja.");
            } else if (umur >= 18 && umur < 60) {
                alert(nama + ", kamu dewasa.");
            } else {
                alert(nama + ", kamu lansia.");
            }
        }
