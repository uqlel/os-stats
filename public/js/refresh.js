function odswiezenie(){
    $("html").load('/');
    setTimeout(odswiezenie, 100)
}
odswiezenie()
