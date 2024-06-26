export const API_URL = "https://api.renews.alexisvelazquez.tech/api";
//export const API_URL = "http://localhost:8080/api";

export const SPA_PATH = {
    LOGIN: 'LOGIN',
    HOME: 'HOME',
    FEED: 'FEED',
    PROFILE : 'PROFILE',
    PENDING: 'PENDING',
}

export const PLACEHOLDER_TEXT_PROPS = {
    card_title : 'Título del post',
    card_description : 'Descripción del post',
}

export const TEXT_PROPS = {
    home_card_title_1: 'Experiencia Rápida y Fluida',
    home_card_description_1: 'Disfruta de una experiencia de usuario excepcional con nuestro enfoque SPA llevado a cabo con React. La navegación es rápida y sin interrupciones, permitiéndote acceder a las noticias más recientes sin tiempos de carga molestos.',
    home_card_title_2: 'Funcionalidades Esenciales',
    home_card_description_2: 'En ReNews, hemos priorizado la simplicidad y la eficiencia. Hemos mantenido solo las funcionalidades más necesarias para asegurar que nuestra plataforma sea rápida y ligera. Navega con facilidad y encuentra lo que necesitas sin distracciones innecesarias.',
    home_card_title_3: 'Contenido Actualizado y Relevante',
    home_card_description_3: 'Mantente al día con las últimas novedades del mundo informático. Nuestros posts están cuidadosamente seleccionados y actualizados regularmente para ofrecerte las noticias más importantes, análisis detallados y tendencias emergentes en tecnología.',
    release_card_title_1: 'Update 0.2.8 | Renews (Mayo 2024)',
    release_card_description_1: 'Actualizamos nuestro diseño con Bootstrap 5.3 y estilos CSS creados unicamente para nuestra libreria de componentes, Estamos investigando un problema conocido el cual hace que los usuarios de iOS tengan problemas al cargar la pagina, estamos trabajando en ello.',
    release_card_title_2: 'Update 0.2.7 | Renews (Diciembre 2023)',
    release_card_description_2: 'Dadas las fechas son pocas las actualizaciones que se han realizado, pero el equipo de ReNews sigue trabajando en mejorar la experiencia de usuario y la velocidad de carga de la pagina, se han corregido algunos errores menores y se ha mejorado la estabilidad de la pagina.',
    release_card_title_3: 'Update 0.2.6 | Renews (Septiembre 2023)',
    release_card_description_3: 'Se ha finalizado la migracion a code igniter 4 por lo que el funcionamiento de la pagina deberia volver a ser el esperado a la brevedad, para aquellos usuarios que sigan encontrando problemas no duden en comunicarse con el equipo de desarrollo.',

}

export const IMG_PROPS = {
    home_card_img_1: './thunder-svgrepo-com.svg',
    home_card_img_2: './wrench-svgrepo-com.svg',
    home_card_img_3: './tech-laptop-svgrepo-com.svg',
    release_img: './releases.jpeg',
}

export const LOGIN_DATA_INITIAL_STATE = {
    email: "",
    password: "",
    name: "",
    lastname: "",
    username: "",
    password_repeat: "",
    profileImage: "",
    isAdmin: "0",
    usernameOrEmail: "",
}

export const POST_DATA_INITIAL_STATE = { ownerId: "", username: "", title: "", body: "", tags: [], date: ""}

export const COMMENT_DATA_INITIAL_STATE = { postId: "", ownerId: "", body: "", date: "" }

export const TAG_DATA_INITIAL_STATE = { name: "" }

export const PROFILE_DATA_INITIAL_STATE = {
    name: "",
    surname: "",
    username: "",
    profile_image: "",
}

export const ALERT_INITIAL_STATE = {
    visible: false,
    isError: false,
    message: "",
}

export const VALIDATION_REGISTER_FORM_INITIAL_STATE = {
    email: {message: null},
    password: {message: null},
    password_repeat: {message: null},
    username: {message: null},
    name: {message: null},
    lastname: {message: null},
}

export const VALIDATION_LOGIN_FORM_INITIAL_STATE = {
    usernameOrEmail: {message: null},
    password: {message: null},
}

export const VALIDATION_FEED_FORM_INITIAL_STATE = {
    search: {message: null},
}

export const VALIDATION_NEW_POST_FORM_INITIAL_STATE = {
    title: {message: null},
    body: {message: null},
    minimumTagLimit: {message: null},
    maximumTagLimit: {message: null},
}

export const VALIDATION_NEW_COMMENT_FORM_INITIAL_STATE = {
    body: {message: null},
}

export const VALIDATION_NEW_TAG_FORM_INITIAL_STATE = {
    name: {message: null},
}

export const VALIDATION_PROFILE_INFO_FORM_INITIAL_STATE = {
    name: {message: null},
    lastname: {message: null},
    username: {message: null},
}

