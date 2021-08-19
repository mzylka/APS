<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <title>APS Serwis - Autoryzowane Centrum Serwisowe. Naprawy gwarancyjne i pogwarancyjne ekspresów Philips i Saeco.</title>
    <meta name="description" content="Kontakt">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="images/icon.png" type="image/x-icon">
</head>
<body>
    <header class="header">
        <div class="container header__content">
            <div class="header__top">
                <div class="header__logo-box">
                    <a class="header__logo-link" href="#">
                        <img class="header__logo" src="images/logo.png" alt="logo APS Serwis">
                    </a>
                </div>
                <div class="hamburger">
                    <div class="hamburger__icon"></div>
                </div>
            </div>
                <nav class="header__navigation">
                    <ul class="header__list">
                        <li class="header__list-item"><a class="header__link" href="#O-nas">O nas</a></li>
                        <li class="header__list-item"><a class="header__link" href="#Serwis">Serwis</a></li>
                        <li class="header__list-item"><a class="header__link" href="#Kontakt">Kontakt</a></li>
                    </ul>
                </nav>
        </div>
    </header>
    <main>
        <div class="contact">
            <div class="container">
                <?php
                if(isset($_POST["userName"]) && isset($_POST["userEmail"]) && isset($_POST["userMessage"])){
                    $from = trim($_POST["userName"]);
                    $mail = filter_var(trim($_POST["userEmail"]), FILTER_SANITIZE_EMAIL);
                    $userMessage = trim($_POST["userMessage"]);

                    $to = "serwis@localhost";
                    $header = "From:" . $mail ."\r\n";
                    $header .= "MIME-Version: 1.0\r\n";
                    $header .= "Content-type: text/plain\r\n";

                    $message = "Wiadomość od $from, e-mail: $mail \r\n";
                    $message .= "------------------------------------------------- \r\n \r\n";
                    $message .= $userMessage;

                    $s = mail($to, $from, $message, $header);

                    if($s == true){
                        http_response_code(200);
                        echo "Wysłano wiadomość. Za moment nastąpi powrót na stronę główną.";
                        header("refresh:3;url=index.html");
                    }
                    else{
                        http_response_code(500);
                        echo "Wystąpił problem z wysłaniem wiadomości. Za moment nastąpi powrót na stronę główną.";
                        header("refresh:3;url=index.html#Kontakt");
                    }
                }
                else{
                    http_response_code(403);
                    echo "Nieprawidłowe dane, spróbuj ponownie! Za moment nastąpi powrót na stronę główną.";
                    header("refresh:3;url=index.html#Kontakt");
                }
                ?>
            </div>
        </div>
    </main>
    <footer id="footer" class="footer u-padding-top-med">
        <div class="container">
            <div class="row">
                <div class="column-1-3">
                    <div class="footer__info">
                        <div class="footer__info-img-box">
                            <img class="footer__info-img" src="images/logo.png" alt="Logo">
                        </div>
                        <div class="footer__info-txt u-margin-top-small">
                            <p class="paragraph">
                                APS Serwis. Autoryzowane Centrum Serwisowe. Naprawy gwarancyjne i pogwarancyjne ekspresów Philips i Saeco.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column-1-3">
                    <div class="footer__contact">
                        <h4 class="heading-quaternary">Kontakt</h4>
                        <ul class="list">
                            <li><b>APS Serwis</b></li>
                            <li>Ul. Stefana Czarnieckiego 13 </li>
                            <li>Wrocław 53-650 </li>
                            <li>Tel: +48 713 741 521</li>
                            <li>E-mail: serwis@apsserwis.pl</li>
                            <li>Godziny otwarcia: 8:00 - 17:00</li>
                        </ul>
                    </div>
                </div>
                <div class="column-1-3">
                    <div class="footer__map">
                        <h4 class="heading-quaternary">Mapa</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1252.294196968475!2d17.007855!3d51.116054000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5639329371855fb2!2sAPS%20Serwis%20s.c.!5e0!3m2!1spl!2spl!4v1603199131295!5m2!1spl!2spl" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__copyrights u-center-text">
            <p>© APS Serwis. Wszelkie prawa zastrzeżone.</p>
        </div>
    </footer>
    <div class="modal">
        <div class="modal__container">
            <div class="modal__title heading-quaternary">
                <h3 id="modalH3"></h3>
            </div>
            <div class="modal__description">
                <p id="modalP"></p>
            </div>
            <div class="modal__list">
                <ul id="modalList">
                </ul>
            </div>
            <div class="modal__close"></div>
        </div>
    </div>
    <script type="text/javascript" src="bundle.js"></script>
</body>
</html>
