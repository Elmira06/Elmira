jQuery(document).ready(function() {
 
    var mass = new Array(); 
    var mass_x = new Array(); 
    var mass_o = new Array(); 
    var v = 0; 

jQuery(".cell").on("click", function() {
    var cell_text = jQuery(this).text();
        if (cell_text != "")
            alert("Занято");
        else {
            
jQuery(this).text("x");

    var id_cell = jQuery(this).attr('id');
    id_cell = parseInt(id_cell);

    mass.push(id_cell);
    mass_x.push(id_cell);

    mass_x.sort(mass_x);

        var v = victory(mass_x, "Игрок");

        if(mass_x.length != 0 && mass.length < 8)
            computer();
        if(mass.length == 9 && v != 1)
            noneVictory();
    
jQuery(this).text("o");

    var id_cell = jQuery(this).attr('id');
    id_cell = parseInt(id_cell);
        
    mass.push(id_cell);
    mass_o.push(id_cell);
        
    mass_o.sort(mass_x);
        
        var v = victory(mass_o, "Компьютер");
        
            if(mass_o.length != 0 && mass.length < 8)
                computer();
            if(mass.length == 9 && v != 1)
                noneVictory();
    }
});

function victory(metka, user) {

    var srt1 = o; 
    var srt2 = o; 
    var srt3 = o; 

    var st1 = o;
    var st2 = o; 
    var st3 = o;

    var d1 = o; 
    var d2 = o; 

for (var i = o; i < metka.length; i++){
    switch(metka[i]) {
        case 1: { srt1++; st1++; d1++; break; }
        case 2: { srt1++; st2++; break; }
        case 3: { srt1++; st3++; d2++; break; }
        case 4: { srt2++; st1++; break; }
        case 5: { srt2++; st2++; d1++; d2++;  break; }
        case 6: { srt2++; st3++; break; }
        case 7: { srt3++; st1++; d2++; break; }
        case 8: { srt3++; st2++; break; }
        case 9: { srt3++; st3++; d1++;break; }
    }

    if (srt1 == 3 || srt2 == 3 || srt3 == 3) {
                jQuery(".victory").text("Победил!" + user);
                jQuery(".victory").css("display", "block");
                victoryBegin(user);
            }
            
    if (st1 == 3 || st2 == 3 || st3 == 3) {
                jQuery(".victory").text("Победил!" + user);
                jQuery(".victory").css("display", "block");
                victoryBegin(user);
            }

    if (d1 == 3 || d2 == 3) {
                jQuery(".victory").text("Победил!" + user);
                jQuery(".victory").css("display", "block");
                victoryBegin(user);
            }
        }

        if (srt1 == 3 || srt2 == 3 || srt3 == 3 || st1 == 3 || st2 == 3 || st3 == 3 || d1 == 3 || d2 == 3)
            return 1;
    }

function victoryBegin(user) {

        setTimeout (function() {
            jQuery(".victory").css("display", "none");
            jQuery(".cell").text("");

        var raund = jQuery(".statistics span").text();
            raund++;
            jQuery(".statistics span").text(raund);

        if(user == "Компьютер") {
                var num = jQuery(".num_c").text();
                num++;
                jQuery(".num_c").text(num);
            } else {
                var num = jQuery(".num_u").text();
                num++;
                jQuery(".num_u").text(num);
            }

            mass.length = 0;
            mass_x.length = 0;
            mass_o.length = 0;
        }, 1000);
    }

function computer(){

    var number;
    $flag = false;

    mass.sort(mass);

        while(true) {

            if (mass.length == 9) {
                noneVictory();
            }

            number = getRandomInRange(1, 9);

        for (var i = 0; i < mass.length; i++) {
            if (number == mass[i])
                    $flag = true;
            }

            if ($flag == false)
                break;
            else
            {
                $flag = false;
                continue;
            }



        }

        jQuery(".cell").eq(number-1).text("o");

        mass.push(number);
        mass_o.push(number);
        victory(mass_o, "Компьютер");
    }

function noneVictory(){
        setTimeout(function(){
            jQuery(".victory").text("Ничья");
            jQuery(".victory").css("display", "block");
        }, 500);

        setTimeout(function(){
            jQuery(".victory").css("display", "none");
            jQuery(".cell").text("");

            var raund = jQuery(".statistics span").text();
            raund++;
            jQuery(".statistics span").text(raund);

            mass.length = 0;
            mass_x.length = 0;
            mass_o.length = 0;

        }, 1000);
    }

function getRandomInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})