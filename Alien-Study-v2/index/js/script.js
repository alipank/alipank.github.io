//PENGURUS KELAS
$("#toggle1").click(function(){
    if($('#toggle-hide1:hidden').length)
        $('#toggle1').animate({
            width:'100%',
            borderRadius: 0
        }),
        $('#toggle-indicator1').css({
            transform: 'rotate(270deg)'
        })
    else
        $('#toggle1').animate({
            width:'60%',
            borderRadius: 40
        }),
        $('#toggle-indicator1').css({
            transform: 'rotate(90deg)'
        });
    $('#toggle-hide1').fadeToggle(600);
    // Show/hide bintang-bintang
    if($('#toggle-hide1:hidden').length) // kalo misalnya pengurus kelas nya belum dibuka
        $('#container-bintang-hide-kiri, #container-bintang-hide-kanan').css({ //bintang bintang untuk anggota kelas akan naik
            top:500
        })
    else
        $('#container-bintang-hide-kiri, #container-bintang-hide-kanan').css({
            top:1450
        })
    $('#bintang-hide-kiri1,#bintang-hide-kanan1').fadeToggle(300);
})

//ANGGOTA KELAS
$("#toggle2").click(function(){
    if($('#toggle-hide2:hidden').length)
        $('#toggle2').animate({
            width:'100%',
            borderRadius: 0
        }),
        $('#toggle-indicator2').css({
            transform: 'rotate(270deg)'
        });
    else
        $('#toggle2').animate({
            width:'60%',
            borderRadius: 40
        }),
        $('#toggle-indicator2').css({
            transform: 'rotate(90deg)'
        });
    $('#toggle-hide2').fadeToggle(600);
    // Show/hide bintang-bintang
    if($('#toggle-hide1:hidden').length) // kalo misalnya pengurus kelas nya belum dibuka
        $('#container-bintang-hide-kiri, #container-bintang-hide-kanan').css({ //bintang bintang untuk anggota kelas akan naik
            top:500
        })  
    else
        $('#container-bintang-hide-kiri, #container-bintang-hide-kanan').css({
            top:1450
        })
    $('#bintang-hide-kiri2,#bintang-hide-kanan2').fadeToggle(300);
})

//LOAD MORE ANGGOTA KELAS
$('#load-more').click(function(){
    $('#load-more-hide').fadeIn(300),
    $(this).hide()
})
$('#load-less').click(function(){
    $('#load-more-hide').fadeOut(300),
    $('#load-more').show(100)
})

//SHOW/HIDE BINTANG BINTANG
 
