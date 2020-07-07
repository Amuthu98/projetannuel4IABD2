<?php

function getfeedbackdislike()
{
	// Connexion à la base de données
	try
	{
		$bdd = new PDO('mysql:host=localhost;dbname=footforecast;charset=utf8', 'root', '');
	}
	catch(Exception $e)
	{
			die('Erreur : '.$e->getMessage());
	}

	$req = $bdd->prepare('SELECT count(feedbackdislike) FROM feedback WHERE feedbackdislike = 1 AND idmatch = ?');
	$req->execute(array($_POST['id']));
	
	$resultat = $req->fetch();
	
	echo $resultat[0];
}
 
getfeedbackdislike();
?>