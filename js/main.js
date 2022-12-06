console.log('Starting up');

$(document).ready(initPage)

function initPage() {
    renderPortfolioItem()
}

function renderPortfolioItem() {
    const projs = getProjs()
    const strHTML = projs.map(proj => {
        return ` <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" onclick="renderModal('${proj.id}')" href="#portfolioModal">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fa fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
            </a>
            <div class="portfolio-caption">
              <h4>${proj.name}</h4>
              <p class="text-muted">${proj.title}</p>
            </div>
        </div> `
    })
    $('.portfolio-container').html(strHTML.join(''))
}

function renderModal(projId) {
    const proj = getProjById(projId)
    const strHTML =
        `<h2>${proj.name}</h2>
    <p class="item-intro text-muted">${proj.title}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.jpg" alt="">
    <p>${proj.desc}</p>
    <ul class="list-inline">
      <li>Date: ${getDate(proj.publishedAt)}</li>
      <li>Category: ${proj.labels.join(', ')}</li>
    </ul>
    <a class="btn btn-primary" target="_blank" rel="noopener" href="${proj.url}">Open Project</a>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
    <i class="fa fa-times"></i>
    Close</button>`

    $('.modal-body').html(strHTML)
}

function getDate(millisecondsDate) {
    const date = new Date(millisecondsDate)
    return `${date.getMonth() + 1} / ${date.getDate()} / ${date.getFullYear()}`
}

function onSubmit(event, elSelector) {
    event.preventDefault()
    const email = $(elSelector).children('.mail-div').children('.mail').val()
    const subject = $(elSelector).children('.subject-div').children('.subject').val()
    const body = `${email}${$(elSelector).children('.body-div').children('.message-body').val()}`
    if (!email || !subject || !body) return
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=ofek301156@gmail.com&su=${subject}&body=${body}`
}