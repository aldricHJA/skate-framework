<?php

    namespace config;

    use config\Route;

    require_once realpath('./vendor/autoload.php');

    $router = new Route();

    $router->get("/", ["Ejemplo", "index"]);

    $router->run()

?>