//This variaprofessionalismall dawhereverelong to user
var profile = {
    name: "Juan David Vega",
    title: "Juan David Vega | Software Craftsmanship Apprentice",
    nav_title: "Juan D. Vega",
    skills_subtitle: "Software Craftsmanship Apprentice - Java Developer",
    about_left_column: "Amante de lo sencillo, desde que descrubí la programación me comprometí a toda una vida de aprendizaje y mejora continua siempre intentando dar lo mejor de mi, me encanta esta profesión, y más concretamente la comunidad alrededor de ella, es un placer enseñar y aprender de otros desarrolladores",
    about_right_column: "Graduado en Ing. Software, la universidad es sólo una pequeña parte de mi formación. Soy una persona muy autodidacta y paso gran parte de mi tiempo libre aprendiendo o mejorando. "
};

//You must configure here your projects, imgs have to be store in "img/portfolio" and must be 512x512
var projects = {
    size: 4,
    1: {
        title: "Lactamás",
        description: "Android App with instructions for first-time mothers",
        link: "https://play.google.com/store/apps/details?id=com.androidcanario.lactamas&hl=en",
        img: "lactmas.png"
    },
    2: {
        title: "La Villarona Minibuses",
        description: "Web page for road transport passenger company.",
        link: "http://www.taxibusreservasgrancanaria.com/",
        img: "lavill.png"
    },
    3: {
        title: "Psocial Psoriasis",
        description: "On-line community for people that suffer psoriasis. <br> I created and maneged this wed during almost one year before it close because of I do not have time to support the web, go to interviews and contunie the development",
        link: "https://es-es.facebook.com/PsocialPsoriasis/",
        img: "pp.jpg"
    },
    4: {
        title: "Golfway",
        description: "Multiplatform app for golf player, create match, connect with friends, join to groups, ect. <br> I develop this app as developer in SingularFactory",
        link: "http://www.golfwayapp.com/en/",
        img: "golfway.jpg"
    }
};

//DO NOT modify the keys use simple text as title and html for the content
var footer = {
    left: {
        title: "Localización",
        content:'<p>Madrid, España</p>'
    },
    middle: {
        title: "En las redes",
        content:'<ul class="list-inline"> <li> <a href="https://github.com/jdvr" class="btn-social btn-outline"><i class="fa fa-fw fa-github"></i></a> </li> <li>  <a href="https://twitter.com/juandvegarguez" class="btn-social btn-outline"><i class="fa fa-fw fa-twitter"></i></a> </li> <li> <a href="https://es.linkedin.com/in/juandavidvegarguez" class="btn-social btn-outline"><i class="fa fa-fw fa-linkedin"></i></a> </li> </ul>'

    },
    right: {
        title: "Más sobre mí",
        content: '<p>Me encanta asistir a los eventos y conocer nuevos desarrolladores</p>' +
                 '<p>Passion, profesionalism and Proud</p>'
    }
};

var Book = (function(title, status){
    return {
        title: function(){
            return title;
        },
        status: function(){
            return status;
        }
    }
});

var books = [
    new Book("Diseño Ágil con TDD", "done"),
    new Book("Software Craftsmanship", "done"),
    new Book("Apprenticeship Patterns", "done"),
    new Book("Extreme Programming Explained: Embrace Change", "done"),
    new Book("Practical Object Oriented Design with Ruby (Reading)", "inprogress"),
    new Book("Clean Code", "todo"),
    new Book("Implementation Patterns", "todo"),
    new Book("Refactoring to Patterns", "todo"),
    new Book("Design Patterns: Elements of Reusable Object-Oriented Software GoF", "todo"),
    new Book("Growing object oriented guided by tests", "todo"),
    new Book("Domain Driven Design", "todo"),
    new Book("Continuous Delivery", "todo"),
    new Book("Patterns of Enterprise Application Architecture", "todo"),
    new Book("Implementing Domain Driven Design", "todo"),
    new Book("The Clean Coder", "todo"),
    new Book("Effective Unit Testing", "todo")
];


