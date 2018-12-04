$(function () {

    // $('#monTable').addClass('hide'); // cacher un element
    var 

 = $('#nom'),
        couleur = $('#nom'),
        form = $('#form'),
        sexe=$('input:radio:checked');
        langage = $('input[type=checkbox]'); //declaration de variables 

    // capture l'evenement de soummission de formulaire
    $(form).on('submit', function () {

        $('.alert').remove();

        //    alert(e); // affiche un message 
        if ($(nom).val() == "") {
            $(form).before("<div class='alert alert-danger'>indiquer votre nom </div>");
            return false;
        } else if ($(nom).val().length <= 3) {
            $(form).before("<div class='alert alert-danger'>Le nom doit contenir 3 caractères au minimaum </div>");
            return false;

        }
        
        if ($(couleur).val()=="0") {
            $(form).before("<div class='alert alert-danger'>indiquer le couleur </div>");
            return false;
        }
        if (!$(langage).is(':checked')) {
            $(form).before("<div class='alert alert-danger'>indiquer la langue </div>");
            return false;
        }

        if (!$(sexe)) {
            $(form).before("<div class='alert alert-danger'>indiquer votre sexe </div>");
            return false;
        }


    });

    $("#Lister").click(function(){
    $.ajax({
        type: "GET",
        url: "readinformations.php",
        dataType: "html",
        success: function (result) {
            // alert(result);
            $('#MyBody').html(result);
            $("#monTable").show();
        }
    });


    });

});
