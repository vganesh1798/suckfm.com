
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Suckfest 2020</title>
        <link rel="stylesheet" href="{{ url_for('static', filename='styles/root.css') }}">
        <link rel="stylesheet" href="{{ url_for('static', filename='styles/suckfest.css') }}">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">

    </head>
    <body onload="initPage()">
        <header>
            <h1>SuckFest 2020</h1>
            <nav>
                <ul>
                    <li><a href="{{ url_for('home') }}">Home</a></li>
                    <li><a href="{{ url_for('suckfest') }}">Suckfest 2020</a></li>
                    <li><a href="{{ url_for('artists') }}">Artists</a></li>
                    <li><a href="events.html">Events</a></li>
                    <li><a href="{{url_for('about')}}">About</a></li>
                    <li><a href="{{url_for('contact')}}">Contact</a></li>
                </ul>
            </nav>
        </header>
        <?php

        if($_POST["submit"]) {
            $recipient="mailto:suckfmsubmissions@gmail.com";
            $subject="Form to email message";
            $sender=$_POST["sender"];
            $senderEmail=$_POST["senderEmail"];
            $message=$_POST["message"];

            $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

            mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

            echo "<p>Your message has been sent. Thank you!</p>";
        }

        ?>
    </body>
</html>
