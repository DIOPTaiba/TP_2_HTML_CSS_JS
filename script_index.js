
function controle_champ(champ, erreur)
{

   if(erreur)
   {
   		champ.style.backgroundColor = "#fba";
   		champ.placeholder = "Veillez remplir ce champ correctement"
   }

   else
      champ.style.backgroundColor = "";
}

function verifie_nom(champ)
{
   if(champ.value.length < 2 )
   {
      controle_champ(champ, true);
      return false;
   }
   else
   {
      controle_champ(champ, false);
      return true;
   }
}

function verifie_prenom(champ)
{
   if(champ.value.length < 2 )
   {
      controle_champ(champ, true);
      return false;
   }
   else
   {
      controle_champ(champ, false);
      return true;
   }
}

function verifie_adresse(champ)
{
   if(champ.value.length < 2 )
   {
      controle_champ(champ, true);
      return false;
   }
   else
   {
      controle_champ(champ, false);
      return true;
   }
}

function verifie_telephone(champ)
{
   if(champ.value.length < 9 )
   {
      controle_champ(champ, true);
      return false;
   }
   else
   {
      controle_champ(champ, false);
      return true;
   }
}

function verifie_email(champ)
{
	/* regex doit contenir des lettres majuscules minuscule, des chiffres suivi de @ suivi minimum de 2 caractères minuscules ou 
	de chiffres, de (. - _)  suivi de . suivi de 2 minuscules minimum et 4 maximum*/
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;

   if (champ.value != "" && !regex.test(champ.value))
   {
   		controle_champ(champ, true);
      	return false;
   }
   
   else
   {
      controle_champ(champ, false);
      return true;
   }
}

function verifie_profession(champ)
{
 	if(champ.value != "" && champ.value.length < 3 )
	{
	    controle_champ(champ, true);
	    return false;
	}

   else
   {
      controle_champ(champ, false);
      return true;
   }
}

function verifie_salaire(champ)
{
   /*var salaire = parseInt(champ.value);*/
   if(isNaN(champ.value) || champ.value == "")
   {
      controle_champ(champ, true);
      return false;
   }
   else
   {
      controle_champ(champ, false);
      return true;
   }
}


function verifie_nom_entreprise(champ)
{
   if(champ.value.length < 3 )
   {
      controle_champ(champ, true);
      return false;
   }
   else
   {
      controle_champ(champ, false);
      return true;
   }
}


function verifie_adresse_entreprise(champ)
{
   if(champ.value.length < 3 )
   {
      controle_champ(champ, true);
      return false;
   }
   else
   {
      controle_champ(champ, false);
      return true;
   }
}

function verifie_nom_employeur(champ)
{
	if(champ.value != "" && champ.value.length < 3 )
	{
	    controle_champ(champ, true);
	    return false;
	}

   else
   {
      controle_champ(champ, false);
      return true;
   }
}

var erreur_selection = document.getElementById('erreur_selection');

function verifie_type_compte(champ)
{
   if(champ.selectedIndex == 0)
   {
      erreur_selection.innerText = "Sélectionnez un type de compte";
      erreur_selection.style.color = 'red';
      champ.style.border = 'solid #fba';

      return false;
   }
   else if (champ.selectedIndex != 3)
   {
   		duree_blocage.style.visibility ="hidden";
   		erreur_selection.innerText = "";
	    champ.style.border = "";
	    return true;
   }
  
	else
	{
		duree_blocage.style.visibility ="visible";
		erreur_selection.innerText = "";
	    champ.style.border = "";
	    return true;
	}

   	
}

var type_compte = document.getElementById('type_compte');
var temps_blocage = document.getElementById('temps_blocage');
var erreur_duree = document.getElementsById('erreur_duree');

function verification()
{
	/* si le type de compte sélectionné est bloqué on affiche le champs durée sinon il reste caché*/
	if(type_compte.selectedIndex == 3)
   	{
    	
    	
		if(isNaN(temps_blocage.value) || temps_blocage.value == "" || (parseInt(temps_blocage.value) < 12) )
		{
		    controle_champ(temps_blocage, true);
		    /*erreur_duree.style.backgroundColor = "#fba";*/
   			/*erreur_duree.contentText = "Veillez remplir ce champ correctement";
   			erreur_duree.style.color = 'red';*/
		    return false;
		}
	   else
	   {
	      controle_champ(temps_blocage, false);
	      return true;
	   }
		
   	}
   	else
   	{
   		return true;
   	}
   	/*avec visiblité = hidden l'espace occupé par l'élément est conservé mais supprimé avec display = (none ou block)*/
} 
var test = verification();
alert("oui test "+test);


function verifie_formulaire_salarie(f)
{
   var nomOk = verifie_nom(f.nom);
   var prenomOk = verifie_prenom(f.prenom);
   var adresseOk = verifie_adresse(f.adresse);
   var telephoneOk = verifie_telephone(f.telephone);
   var mailOk = verifie_email(f.email);
   var professionOk = verifie_profession(f.profession);
   var salaireOk = verifie_salaire(f.salaire);
   var nom_entrepriseOk = verifie_nom_entreprise(f.nom_entreprise);
   var adresse_entrepriseOk = verifie_adresse_entreprise(f.adresse_entreprise);
   var nom_employeurOK = verifie_nom_employeur(f.nom_employeur);
   var type_compteOk = verifie_type_compte(f.type_compte);
   var dureeOk = verification();

   if(nomOk && prenomOk && adresseOk  &&  telephoneOk && mailOk && professionOk && salaireOk && nom_entrepriseOk 
   	&& adresse_entrepriseOk && nom_employeurOK && type_compteOk && dureeOk)
   {
      return true;
   }
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}


/*verification formulaire non salarié*/
function verifie_formulaire_non_salarie(f)
{
   
   var nomOk = verifie_nom(f.nom);
   var prenomOk = verifie_prenom(f.prenom);
   var adresseOk = verifie_adresse(f.adresse);
   var telephoneOk = verifie_telephone(f.telephone);
   var mailOk = verifie_email(f.email);
   var type_compteOk = verifie_type_compte(f.type_compte);
   var dureeOk = verification();

   if(nomOk && prenomOk && adresseOk  &&  telephoneOk && mailOk && type_compteOk && dureeOk)
   {
      return true;
   }
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}


/*verification formulaire entreprise*/
function verifie_formulaire_entreprise(f)
{
   
   var nom_entrepriseOk = verifie_nom_entreprise(f.nom_entreprise);
   var adresse_entrepriseOk = verifie_adresse_entreprise(f.adresse_entreprise);
   var telephoneOk = verifie_telephone(f.telephone);
   var mailOk = verifie_email(f.email);
   var nom_employeurOK = verifie_nom_employeur(f.nom_employeur);
   var type_compteOk = verifie_type_compte(f.type_compte);
   var dureeOk = verification();

   if(nom_entrepriseOk && adresse_entrepriseOk && telephoneOk && mailOk && nom_employeurOK && type_compteOk && dureeOk)
   {
      return true;
   }
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}