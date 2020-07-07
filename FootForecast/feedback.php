<?php
// Connexion à la base de données
try
{
	$bdd = new PDO('mysql:host=localhost;dbname=footforecast;charset=utf8', 'root', '');
}
catch(Exception $e)
{
        die('Erreur : '.$e->getMessage());
}

// Insertion du message à l'aide d'une requête préparée
$req = $bdd->prepare('INSERT INTO feedback (idmatch, awayteam, hometeam, feedbacklike, feedbackdislike) VALUES(?, ?, ?, ?, ?)');

if($_POST['feedback'] == "like"){
	$req->execute(array($_POST['idmatch'], $_POST['awayteam'], $_POST['hometeam'], 1, 0));
}
elseif($_POST['feedback'] == "dislike"){
	$req->execute(array($_POST['idmatch'], $_POST['awayteam'], $_POST['hometeam'], 0, 1));
}

// Redirection du visiteur vers la page 
$url=$_POST['url'];
header("refresh:0;url=$url");
?>