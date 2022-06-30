function FeedSingleCat(index) {
    var cover_img = document.getElementById("cover" + index);
    cover_img.style.zIndex = "100";
    setTimeout(function () {
        cover_img.style.zIndex = "-100";
    }, 1500);
}
function FeedAllCat() {
    var cover_imgs = new Array();
    var i = 0;
    for (i = 0; i < 5; i++) {
        cover_imgs[i] = document.getElementById("cover" + (i + 1));
    }
    cover_imgs[0].style.zIndex = "100";
    cover_imgs[1].style.zIndex = "100";
    cover_imgs[2].style.zIndex = "100";
    cover_imgs[3].style.zIndex = "100";
    cover_imgs[4].style.zIndex = "100";
    setTimeout(function () {
        cover_imgs[0].style.zIndex = "-100";
        cover_imgs[1].style.zIndex = "-100";
        cover_imgs[2].style.zIndex = "-100";
        cover_imgs[3].style.zIndex = "-100";
        cover_imgs[4].style.zIndex = "-100";
    }, 3000);
}
function FeedFunction() {
    var selectedIndex = -1;
    var form1 = document.getElementById("action_area");
    var i = 0;
    // if(form1.breed.value===""){
    //     console.log("null");
    // }
    // else{
    //     console.log(form1.breed.value);
    // }
    for (i = 0; i < form1.feeding_cat.length; i++) {
        if (form1.feeding_cat[5].checked) {
            selectedIndex = 6;
            FeedAllCat();
            return;
        }
        else if (form1.feeding_cat[i].checked) {
            selectedIndex = i + 1;
            // FeedSingleCat(selectedIndex);
            break;
        }
    }
    if (form1.breed.value === "Big_cat") {
        if (selectedIndex === 1 || selectedIndex === 3) {
            FeedSingleCat(1);
            FeedSingleCat(3);
        }
        else {
            FeedSingleCat(1);
            FeedSingleCat(3);
            FeedSingleCat(selectedIndex);
        }
    }
    else if (form1.breed.value === "Middle_cat") {
        if (selectedIndex === 4) {
            FeedSingleCat(4);
        }
        else {
            FeedSingleCat(4);
            FeedSingleCat(selectedIndex);
        }
    }
    else if (form1.breed.value === "Small_cat") {
        if (selectedIndex === 2 || selectedIndex === 5) {
            FeedSingleCat(2);
            FeedSingleCat(5);
        }
        else {
            FeedSingleCat(2);
            FeedSingleCat(5);
            FeedSingleCat(selectedIndex);
        }
    }
    else if (selectedIndex > 0) {
        FeedSingleCat(selectedIndex);
    }
    if (selectedIndex < 0 && form1.breed.value === "") {
        alert("Your choice is to feed nothing");
    }
}
