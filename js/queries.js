var ele;
$.get('http://localhost/catalog.php', function (e) {
    let html = '';
    ele = JSON.parse(e);
    JSON.parse(e).items.forEach(el => {
        html += '<div class="ta-c" data-item="' + el.name + '" data-id="' + el.id + '"><img class="category-img" src="http://localhost/' + el.img + '"></div>';
    });
    $('#category').html(html);
});