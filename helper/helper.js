module.exports = {
   format_date:function(date){
      return  (new Date(date)).toLocaleDateString();
   },
   get_secteur_by_id:function(id){
      switch (parseInt(id)) {
         case 1:
               return 'Education';
            break;
         case 2:
            return 'Agriculture';
            break;
         case 3:
               return 'Pêche et élévage';
            break;
         case 4:
            return 'Construction';
            break;
         case 5:
            return 'Formation';
            break;
         case 6:
               return 'Agroalimentaire';
            break;
         case 7:
            return 'Industrielle';
            break;
         case 8:
            return 'Environnement';
            break;
         case 9:
            return 'Autre';
            break;
      }
   },
   format_number:function(id){
      return ((id).toString()).padStart(4,'0');
   },
   reduce_text:function(value){
      let text ='';
      if(value == null)
          return '';

      let splitword = value.split(' ');
      let currentWordIndex=0;

      if(splitword.length <= 3){
          return value;
      }else{
          for(currentWordIndex;
              currentWordIndex <= splitword.length;
              currentWordIndex++){
                  if(typeof splitword[currentWordIndex] !='undefined'){
                      text+=splitword[currentWordIndex]+'<br/>';
                  }else{
                      continue;
                  }
          }

          return text;
      }
   },
   determine_sexe:function(sexe_id){
      if(parseInt(sexe_id) == 1){
         return 'Masculin';
      }

      if(parseInt(sexe_id) == 2){
         return 'Féminin';
      }
   },
   determine_nationalite:function(nationalite_id){
      if(parseInt(nationalite_id) == 1){
         return 'Congolaise';
      }

      if(parseInt(nationalite_id) == 2){
         // return 'Féminin';
      }
   },
   determine_etat_civil:function(etat_civil){
      if(parseInt(etat_civil) == 1){
         return 'Célibataire';
      }

      if(parseInt(etat_civil) == 2){
         return 'Marié(e)';
      }

      if(parseInt(etat_civil) == 3){
         return 'Veuf(ve)';
      }

      if(parseInt(etat_civil) == 4){
         return 'Divorcé(e)';
      }
   },
   determine_profession:function(profession_id){
      if(parseInt(profession_id) == 1){
         return 'Fonctionnaire';
      }

      if(parseInt(profession_id) == 2){
         return 'Etutiant(e)';
      }

      if(parseInt(profession_id) == 3){
         return 'Entrepreneur';
      }

      if(parseInt(profession_id) == 4){
         return 'Commerçant(e)';
      }
   },
   determine_forme:function(forme_id){
      if(parseInt(forme_id) == 1){
         return 'Etablissement';
      }

      if(parseInt(profession_id) == 2){
         return 'Organisation';
      }

      if(parseInt(profession_id) == 3){
         return 'Société';
      }

      if(parseInt(profession_id) == 4){
         return 'Individuel';
      }
   },
   determine_piece:function(type_piece_id){
      if(parseInt(type_piece_id) == 1){
         return "Carté d'électeur";
      }

      if(parseInt(type_piece_id) == 2){
         return "Carte d'identité";
      }

      if(parseInt(type_piece_id) == 3){
         return "Passeport";
      }

      if(parseInt(type_piece_id) == 4){
         return "Permis de conduire";
      }

      if(parseInt(type_piece_id) == 5){
         return "Attestation de perte de pièce";
      }
   },
   determine_fonction:function(fonction_id){
      if(parseInt(fonction_id) == 1){
         return 'Préposé(e) de compte';
      }

      if(parseInt(fonction_id) == 2){
         return 'Agent Cash';
      }

      if(parseInt(fonction_id) == 3){
         return 'Gestionnaire de crédits';
      }
   },
   determine_role:function(role_id){
      if(role_id == null){
         return 'Admin. Général';
      }

      if(parseInt(role_id) == 1){
         return 'Admin. Organisation';
      }

      if(parseInt(role_id) == 2){
         return 'Admin. Agence';
      }

      if(parseInt(role_id) == 3){
         return 'Agent Terrain';
      }

      if(parseInt(role_id) == 4){
         return 'Persdonnel';
      }
   },
   determine_etat:function(etat){
      if(parseInt(etat) == 0){
         return 'Actif';
      }

      if(parseInt(etat) == 1){
         return 'Bloqué';
      }
   },
   determine_compte:function(type_compte){
      if(parseInt(type_compte) == 1){
         return 'Courant';
      }

      if(parseInt(type_compte) == 2){
         return 'Epargne';
      }

      if(parseInt(type_compte) == 3){
         return 'Credit';
      }
   },
   determine_devise:function(devise_id){
      if(parseInt(devise_id) == 1){
         return 'USD';
      }

      if(parseInt(devise_id) == 2){
         return 'CDF';
      }
   }
}