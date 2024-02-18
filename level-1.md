# Level 1
<div style="text-align: justify;"> <br>

**1. Pembuatan repository di Github**<br>
    Pertama masuk kedalam akun Github kita sendiri dan kemudian buat repository baru kemudian isi nama repositorynya dan klik "create repository". Jika sudah maka akan terdapat tampilan berikut ini. <br>
    ![img-1](/img/level-1/img-1.png) <br>
    Kemudian buat directory baru src untuk sumber kode anda README.md serta 4 file md lainnya untuk tiap level. <br>
    ![img-2](/img/level-1/img-2.png) <br>

**2. Implementasi branching** <br>
    Branching ini akan terdiri dari master, development, featureA, dan featureB. Kita bisa membuat branching dari github ataupun terminal local. Saya akan melakukan branching dari local terminal dan kemudian melakukan push ke github nantunya.Saya juga tidak melakukan clone repository dari Github, melainkan akan melakukan remote nantinya. <br>
    - Buat Folder baru di local <br>
        Local folder ini akan kita gunakan untuk melakuakn edit file yang akan kita hubungan dengan github. Nama folder ini sendiri kita buat sama dengan nama repository kita. <br>
    - Init Folder Local <br>
        Selanjutanya kita harus melakuakn inisialisasi Git pada folder tempat kita akan bekerja. Caranya adalah dengan membuat terminal dengan directory tempat kita berkerja, kemudian keti perintah "```git init```". <br>
    - Remote Local Directory dengan Repository Github <br>
        Lakukan remote ini dengan perintah "```git remote add origin <url_repository>```". Remote ini berfungsi untuk menghubungkan local directory tempat kita bekerja dengan repositry github kita. <br>
    - Pull Master Branch <br>
        Lakukan Pull Master Branch untuk memastikan struktur file dari Github tetap sama pada local directory kita. Gunakan code "```git pull origin master```" pada terminal kita. <br>
    - Isi Source Code <br>
        Selanjutnya isi folder "/src" dengan file yang akan kita gunakan.
    - Simpan ke tahap Staged kemudian commit ke local directory <br>
        Untuk menyimpan ke tahap Staged dapat dilakukan dengan "```git add .```" dimana " . " menandakan akan menyimpan semua file. Kemudian melakukan "```git commit -m <message>```", untuk menyimpannya ke local directory kita. <br>
        ![img-3](/img/level-1/img-3.png) <br>
    - Buat Branching
        saya membuat branching dengan development berasal dari branch master, kemudian featureA dan featureB akan berasal dari branch development. Untuk membuat branch development cukup dengan perintah "```git branch development```". Setelah itu saya beralih ke branch development dengan perintah "```git checkout development```" dan melakukan sedikit perubahan dimana menambah komentar untuk development yang akan ditambahkan. Setelah menambahkan komentar, jangan lupa untuk memasukkannya kedalam fase staging ("```git add .```") dan commit file yang sudah kita ubah. berikut untuk gambar development: <br>
        ![img-4](/img/level-1/img-4.png) <br>
        Setelah itu buat branching terhadap featureA dan featureB dari branch development dengan perintah "```git branch featureA```" dan "```git branch featureB```" <br>
        ![img-5](/img/level-1/img-5.png) <br>
    Setelah melakukan branching saya menambahkan isi dari featureA dan featureB dengan cara mengedit source code pada masing-masing branch kemudian melakukan add dan commit file yang sudah diedit. Sehingga git graph saya akan berbentuk seperti ini: <br>
    ![img-6](/img/level-1/img-6.png) <br>

**3. Implementasi** <br>
    - Push <br>
        Kita dapat melakukan push dengan perintah "git push origin &lt;branch&gt;". Berikut ini adalah 4 push tiap branch yang saya miliki: <br>
        -  *Master Branch* <br> 
            ![img-7](/img/level-1/img-7.png) <br>
        -  *Development Branch* <br>
            ![img-8](/img/level-1/img-8.png) <br>
        -  *FeatureA Branch* <br>
            ![img-9](/img/level-1/img-9.png) <br>
        -  *FeatureB Branch* <br>
            ![img-10](/img/level-1/img-10.png) <br> <br>
        Setelah melakukan push keempatnya maka pada Github saya akan terlihat seperti ini: <br>
        ![img-11](/img/level-1/img-11.png) <br>
        Dimana pada gambar tersebut akan terdapat compare and pull request. Jika kita melakukan klik pada tombol tersebut kita akan diarahkan pada tabel pull and request, diaman ktia akan melihat perbandingan apa yang ditambahkan dan permintaan untuk merge branch. Saya akan melakukan Merge dari development ke master dengan melakukan klik compare and pull request untuk branch development, kemudian melakukan merge. <br>
        ![img-12](/img/level-1/img-12.png) <br>
        ![img-13](/img/level-1/img-13.png) <br>
    - Pull <br>
        Pada sebelumnya saya melakukan merge development ke master yang akan mengubah isi branch master sendiri pada github. Namun saya melakuakn mergenya pada github sehingga pada file local belum melakukan merge. Oleh karena ini saya perlu melakukan pull untuk menyesuaikan master branch local dengan master branch origin. Cara melakukannya adalah dengan code "```git pull origin <origin_branch>```" atau bisa dilihat seperti gambar berikut ini:<br>
        ![img-14](/img/level-1/img-14.png) <br>
        Sehingga git Graph saya akan terlihat seperti ini :
        ![img-15](/img/level-1/img-15.png) <br>
    - Diff <br>
        Untuk perintah  Diff, dapat digunakan untuk melihat perubahan yang terjadi setelah kita simpan. Perubahan yang dapat dilihat adalah pada fase staged, dari branch ke branch lain, atau pun dari commit sebelum dan sesuah. Saya memilih untuk melihat perbedaan dari staged, dimana saya akan dapat melihat perubahan apa yang saya lakukan setelah saya melakukan "git add .". Untuk melihat perbedaan pada staged dapat menggunakan code berikut ini "```git diff --staged```" dimana dapat dilihat pada gambar berikut ini:
        ![img-16](/img/level-1/img-16.png) <br>
    - Reset <br>
        Reset adalah mengembalikan kita ke suatu commit tertentu dan mengubah commit setelah commit yang kita pilih kedalam fase unstaged. Kita dapat menggunakan code "```git reset <commit_ID_target>```", sehingga kita akan kembali lagi ke commit tersebut dan memasukkan commit setelahnya kedalam fase unstaged. Contohnya pada gambar berikut ini: <br>
        ![img-17](/img/level-1/img-17.png) <br>
        ![img-18](/img/level-1/img-18.png) <br>
    - Restore <br>
        Restore adalah perintah untuk mengembalikan isi file ke commit sebelumnya jika kita berada pada fase staged. Contohnya pada gambar Reset terdapat "Uncommited Changes (1)" dimana kita dapat menghilangkan ini dengan cara melakukan restore, bisa secara spesifik pada suatu file. Saya lupa untuk melakukan SS bagian ini sehingga tidak dapat melakukan SS, jadi saya akan melakukan pada repository lain (test) milik saya. <br>
        Misalkan seperti gambar berikut ini terdapat 2 file yang saya ubah namun belum saya commit <br>
        ![img-19](/img/level-1/img-19.png) <br>
        Saya akan melakukan restore dengan code "```git restore <lokasi_file>```", ataupun bisa kita lihat pada gambar tersebut lokasi spesifik yang saya ubah adalah pada src/development.txt dan src/feture.txt <br>
        ![img-20](/img/level-1/img-20.png) <br>
        namun pastikan terlebih dahulum bahwa file yang akan direstore tidak berada pada fase staged. Bila pada fase staged kita dapat lakukan reset ke commit paling akhir sebelum kita masukkan kedalam fase staged atau pada lokasi spesifik yang kita inginkan. 
    - Stash <br>
        Stash adalah perintah untuk menyimpan perubahan sementara yang kita buat di working directory. Dengan stasing ini kita dapat melakukan perpindahan branch tanpa harus melakuakn commit terlebih dahulu. Untuk perintah stash sendiri dapat dilakukan dengan code ini "```git stash save <comment>```". Beirikut adalah perintah dan hasil git graph setelah stashing saya: <br>
        ![img-21](/img/level-1/img-21.png) <br>
        ![img-22](/img/level-1/img-22.png) <br>
        Pada gambar git graph tersebut bisa kita lihat akan terdapat stash untuk featureA.
    - Merge <br>
        Merge adalah perintah untuk menggabungkan perubahan yang telah kita lakukan dari branch satu ke branch lainnya. Caranya adalah kita harus memindahkan branch kerja tujuan merging kita, kemudian melakukan merge dengan perintah berikut ini "```git merge <branch_name_yang_akan_dimerge>```". Ini akan melakukan merging dari file tujuan kita ke branch tempat kita bekerja. Misalkan kita sedang berada di branch master, kemudian kita melakuakn "git merge development" artinya kita melakukan merging dari development ke master. Berikut ini adalah contohnya: <br>
        ![img-23](/img/level-1/img-23.png) <br>
        Pada gambar tersebut saya sedang berada pada branch featureA dan ingin melakukan merging dari featureB. Namun pada saat merging saya mengalami conflict. Conflit ini akan dibahas pada nomor berikutnya.

**4. Conflict** <br>
        Conflict akan terjadi ketika kita akan melakukan merge pada dua buah branch, namun kedua branch tersebut teradapat perubahan pada lokasi yang sama. Berikut ini adalah contohnya yagn saya dapatkan dari merging featureA dan featureB saya sebelumnya : <br>
        ![img-24](/img/level-1/img-24.png) <br>
        Pada gambar tesebut backgroud hijau adalah perubahan pada featureA dan biru adalah perubahan pada featureB. Untuk mengatasi hal ini kita cukup melakuakn edit lagi dapat menggunakan salah satunya atau kita dapat membuat yang baru. Kali ini saya memilih untuk membaut yang baru yakni seperti berikut ini: <br>
        ![img-25](/img/level-1/img-25.png) <br>
        Setelah melakukan edit lagi, kita harus melakukan staging dan commiting lagi agar perubahan yang terlah kita perbaiki tersimpan kembali. Berikut ini adalah kondisi git graph saya setelah melakukan perbaikan pada conflict tersebut. <br>
        ![img-26](/img/level-1/img-26.png) <br>
        Dapat kita lihat bahwa git graph yang ditunjukan akan melakukan merging featureA dengan featureB.

**5. Merge no fast forward** <br>
        Merge ini maksudnya adalah melakukan merge dengan menyimpan juga history commit yang sudah kita lakukan pada branch-branch yang akan digabungkan. Sedangkan kebalikannya adalah merge fast forward dimana merging ini tidak akan menyimpan history commit, jadi yang terlihat adalah bahwa graphnya langsung bergabung tanpa tanpa terlihat apa yang sebelumnya dilakuakn sebelum menggabungkannya. Berikut ini adalah contohnya dalam git graph repository ini : <br>
        ![img-27](/img/level-1/img-27.png) <br>
        ![img-28](/img/level-1/img-28.png) <br>
        Dapat kita lihat bahwa featureA masih memilki history commit apa saja semisal disitu tedapat edit untuk "sytle: change the header name" dari sini kita ketahui ini adalah history commitnya. <br> <br>
        Sedangkan untuk fast forward sendiri saya buatkan contohnya pada repository (test) saya lain, adapun kelihatannya adalah seperti berikut ini: <br>
        ![img-29](/img/level-1/img-29.png) <br>
        ![img-30](/img/level-1/img-30.png) <br>
        Bisa kita lihat perbedaan fast forward dan no fast forward, dimana pada gambar tersebut line orange akan menjadi satu dimana itu merupakan graph untuk fast forward. Pada gambar ini saya melakukan perubahan yang sama terhadap noff dan ff yakni sebanyak 3 kali dan untuk branch testnya sendiri saya tidak melakuakn perubahan sama sekali. Bisa kita lihat Branch ff dan testff akan menyatu, sedangkan untuk branch noff dan testnoff akan terpisah menjadi 2 line ayng berbeda dan dapat kita liat bahwa kita hanya melakuakn edit pada noff sedangkan pada ff kita tidak dapat membedakan perubahan milik siapa itu.

**6. Kendala dan Kesulitan** <br>
     Kendala dan kesulitan yang saya alami dalam level satu ini ada untuk memastikan graphnya dalam bentuk yang rapi dan mudah dipahami. Saya mendapatkan bentuk graph akhir yang cukup rumit karena saya lupa untuk menyamakan ini pada local dengan origin dan melakukan commit. Namun pada akhirnya saya tetap bisa menyelesaikan segalanya namun dengan hasil akhir graph yang rumit.
    </div>