document.forms.kinopoisk.onsubmit = function() {
    var kinoid = this.kinoid.value;
    window.myVar = kinoid;
    document.write('<iframe src="https://743434534688564.svetacdn.in/LJhCWDnh9cxv?kp_id=' + window.myVar + '" width="640" height="480" frameborder="0" allowfullscreen></iframe>');
    document.write('<form action="index.html"> <button>back</button></form>')
    return false;
};

document.forms.name_en.onsubmit = function() {
    var name = this.name.value;
    window.myVar = name;
    document.write('<iframe src="https://743434534688564.svetacdn.in/LJhCWDnh9cxv?name_eng=' + window.myVar + '" width="640" height="480" frameborder="0" allowfullscreen></iframe>');
    document.write('<form action="index.html"> <button>back</button></form>')
    return false;
};