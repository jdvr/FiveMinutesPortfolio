var ProjectPreview = (function (img, id) {
    var html = '<div class="col-sm-4 portfolio-item">' +
        '<a href="#portfolioModal' + id + ' "  class="portfolio-link" data-toggle="modal">' +
        '<div class="caption">' +
        '<div class="caption-content">' +
        '<i class="fa fa-search-plus fa-3x"></i>' +
        '</div>' +
        '</div>' +
        '<img src="img/portfolio/' + img + '"  class="img-responsive" alt="">' +
        '</a>' +
        '</div>';

    return {
        html: function () {
            return html;
        }
    };
});

var ProjectModal = (function (id, title, img, description, link) {

    var projecModalHtm = '<div class="portfolio-modal modal fade" id="portfolioModal' + id + '" tabindex="-1" role="dialog" aria-hidden="true">' +
        '<div class="modal-content"> <div class="close-modal" data-dismiss="modal"> <div class="lr"> <div class="rl"> </div> </div> </div> <div class="container"> <div class="row"> <div class="col-lg-8 col-lg-offset-2"> <div class="modal-body">' +
        '<h2>' + title + '</h2>' +
        '<hr class="star-primary">' +
        '<img src="img/portfolio/' + img + '" class="img-responsive img-centered" alt="">' +
        '<p>' + description + '</p>' +
        '<ul class="list-inline item-details">' +
        '<li>More:' +
        '<strong><a href="' + link + '">'+ title +'</a>' +
        '</strong>  </li> </ul> </div> </div> </div> </div> </div> </div>';

    return {
        html: function () {
            return projecModalHtm;
        }
    };
});


function loadProjectsPreviewFromConfig() {
    var res = [];
    for (var i = 1; i <= projects.size; i++) {
        res.push(new ProjectPreview(projects[i].img, i));
    }
    return res;
}

function loadProjectsModelFromConfig() {
    var res = [];
    for (var i = 1; i <= projects.size; i++) {
        var project = projects[i];
        res.push(new ProjectModal(i, project.title, project.img, project.description, project.link));
    }
    return res;
}
var ProjectsLoader = (function () {
    var porfolioHtml = '';
    var modalsHtml = '';

    return {
        loadProjectsPreview: function () {
            loadProjectsPreviewFromConfig().forEach(function (project) {
                porfolioHtml += project.html();
            });
            $('#portfolio-content').html(porfolioHtml);
        },

        loadProjectsModal: function () {
            loadProjectsModelFromConfig().forEach(function (project) {
                modalsHtml += project.html();
            });
            $('#porfolio-modals-content').html(modalsHtml);
        }

    };

}());


$(function () {
    ProjectsLoader.loadProjectsPreview();
    ProjectsLoader.loadProjectsModal();
});
