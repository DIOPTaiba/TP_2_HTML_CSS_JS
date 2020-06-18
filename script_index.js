
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
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if (champ.value != "")
   {
   		if(!regex.test(champ.value))
   		{
     		 controle_champ(champ, true);
      		return false;
   		}
   }
   
   else
   {
      controle_champ(champ, false);
      return true;
   }
}

function verifie_profession(champ)
{
   if (champ.value != "")
   {
   		if(champ.value.length < 2 )
	    {
	       controle_champ(champ, true);
	       return false;
	    }
   }
   else
   {
      controle_champ(champ, false);
      return true;
   }
}

function verifie_salaire(champ)
{
   var salaire = parseInt(champ.value);
   if(isNaN(salaire))
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


function verifie_adresse_entreprise(champ)
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

function verifie_nom_employeur(champ)
{
	if (champ.value != "")
	{
		if(champ.value.length < 2 )
	    {
	       controle_champ(champ, true);
	       return false;
	 	}
	}
   else
   {
      controle_champ(champ, false);
      return true;
   }
}

var type_compte = document.getElementById('type_compte');
var erreur_selection = document.getElementById('erreur_selection');

duree_blocage.innerText = "";

function verifie_selection(champ)
{
   if(type_compte.selectedIndex == 0)
   {
      erreur_selection.innerText = "Sélectionnez un type de compte";
      erreur_selection.style.color = 'red';
   }
   else
   	{
   		erreur_selection.innerText = "";
   	}
   	
}

/*var duree_blocage = document.getElementById('duree_blocage');

if(type_compte.selectedIndex == 3)
{
	erreur_selection.innerText = "Sélectionnez";
}
*/


function verifie_formulaire(f)
{
   var nomOk = verifie_nom(f.nom);
   var prenomOk = verifie_prenom(f.prenom);
   var adresseOk = verifie_adresse(f.adresse);
   var telephoneOk = verifie_telephone(f.telephone);
   var mailOk = verifie_email(f.email);
   var salaireOk = verifie_salaire(f.salaire);
   var nom_entrepriseOk = verifie_nom_entreprise(f.nom_entreprise);
   var adresse_entrepriseOk = verifie_adresse_entreprise(f.adresse_entreprise);
   
   if(nomOk && prenomOK && adresseOk && telephoneOk && mailOk && salaireOk && nom_entrepriseOk && adresse_entrepriseOk)
      return false;
   else
   {
      alert("Veuillez remplir correctement tous les champs");
      return false;
   }
}


