const icon = document.getElementById("icon")

//*dark/light mod ayarı
icon.addEventListener("click", ()=>{
    //*body'classını değiştiriyoruz ki dark/light mode tıklama veriyoruz için
    document.body.classList.toggle('dark-theme')
    //*eğer dark mod ise light modun iconunu alacağız
    if(document.body.classList.contains('dark-theme')){ //*contains ile var mı yok mu diye sorgulama olur!
        icon.classList = "fa-solid fa-sun fa-2x"
    }else{
        icon.classList="fa-solid fa-moon fa-2x" //* bu saatede icon ay renginden güneş rengine dönecek
    }

    //*theme mızı set edeceğiz setItem ile ve document ile localstorage atıoruz
    localStorage.setItem("theme", document.body.classList)
    localStorage.setItem("icon", icon.classList) //*iconumuzu alıyoruz aynı işlemi iconada yapyoruz
    //! bunları kullanabilmek için dışarıya if içine atmalıyız
})
//*localStorage.getItem theme ise işlemi gerçekleştir diyoruz
if(localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"))
    //*aynı işlemi icon için yapacağız classListimizi icona eşitliyorz
    icon.classList = localStorage.getItem("icon")
}