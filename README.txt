tutorial 

1.simpan dalam file yang sama (dalam folder root agar terbaca)
buat folder baru dengan nama unix-kasir contoh path > unix-kasir/letakan semua disini

2.untuk memastikanya ketik "ls"di terminal lihat apa ada folder dengan nama "unix-kasir"
3.jalankan peritah di terminal "cd ~/aplikasi-Kasir
python3 -m http.server 8000"


untuk menambahkan alias agar tidak terlalu panjang mengetik di terminal 
1.ketik perintah " nano ~/.bashrc "
lalu masukan alias di bawah sebelah kiri contoh( alias 24='cd ~/unix-kasir && python3 -m http.server 8000' )
2. Simpan
Tekan Ctrl + O ➔ Enter

Tekan Ctrl + X untuk keluar

3.ketik " source ~/.bashrc "

4. dan ketik " 24 " ➔ ini adalah kode alias kamu untuk membuka aplikasi

5 .selanjutkan ketika ingin membuka aplikasi cuku dengan mengetik " 24 "

6." lsof -i :8000 " untuk menghentikan localhost yang berjalan maka akan muncul 
alfajrihanif24@penguin:~/unix-kasir$ lsof -i :8081
COMMAND     PID           USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
ld-linux-  6711 alfajrihanif24    6u  IPv4  37820      0t0  TCP localhost:34766->localhost:tproxy (CLOSE_WAIT)
ld-linux-  7606 alfajrihanif24    6u  IPv4  43602      0t0  TCP localhost:39002->localhost:tproxy (CLOSE_WAIT)
ld-linux- 11831 alfajrihanif24    6u  IPv4  68409      0t0  TCP localhost:57802->localhost:tproxy (CLOSE_WAIT)
python3   12101 alfajrihanif24    3u  IPv4  70940      0t0  TCP *:tproxy (LISTEN)
alfajrihanif24@penguin:~/unix-kasir$ 

7 cari python3 ketik perintah " KILL 12101 " ini contoh 

