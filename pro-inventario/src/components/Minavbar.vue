<template>
    <nav>
        <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/insertarStock">Registrar inventario</router-link></li>
            <li><router-link to="/insertarProduct">Registrar Producto</router-link></li>
            <li><router-link to="/consultar">Consultar</router-link></li>
            <li><router-link to="/borrar">Borrar</router-link></li>
            <li><router-link to="/actualizar">Actualizar</router-link></li>
            <li><router-link to="/productStock">Historial</router-link></li>
        </ul>
    </nav>


</template>

<style>

/* Estilo general del navbar
#EC7B24 -> Naranja
#4DB79E -> Verde
#706F6F -> Gris
*/
nav {
    background-color: #cccccc; /* Color de fondo */
    padding: 10px 20px;
    border-radius: 0px; /* Bordes redondeados */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra */
}

/* Lista del navbar */
nav ul {
    list-style: none; /* Eliminar puntos de la lista */
    display: flex; /* Organizar elementos en línea */
    justify-content: center; /* Centrar elementos horizontalmente */
    margin: 0;
    padding: 0;
}

/* Elementos de la lista */
nav ul li {
    margin: 0 15px; /* Espaciado entre enlaces */
}

/* Enlaces del navbar */
nav ul li a {
    text-decoration: none; /* Sin subrayado */
    color: #000000; /* Color del texto */
    font-weight: bold;
    font-size: 16px;
    padding: 8px 12px;
    border-radius: 4px; /* Bordes redondeados */
    transition: background-color 0.3s ease, color 0.3s ease; /* Animación */
}

/* Hover sobre enlaces */
nav ul li a:hover {
    background-color: #c5c8c7; /* Fondo al pasar el cursor */
    color: #000; /* Texto destacado */
}

/* Navegación activa */
nav ul li a.router-link-active {
    background-color: #008584; /* Fondo del enlace activo */
    color: #ffffff; /* Texto blanco */
}

/* Responsividad */
@media (max-width: 768px) {
    nav ul {
        flex-direction: column; /* En vertical en pantallas pequeñas */
        align-items: center;
    }

    nav ul li {
        margin: 10px 0; /* Espaciado vertical */
    }
}

</style>