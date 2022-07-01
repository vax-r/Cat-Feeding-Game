
var feedTimes: number[]=[0,0,0,0,0];
const feedLimit: number[]=[3,1,3,2,1];
const fulled: boolean[]=[false, false, false, false, false];

function Reset(): void{
    var i: number;
    var cover_img: any;
    for(i=0;i<5;i++){
        feedTimes[i]=0;
        fulled[i]=false;
        cover_img = document.getElementById("cat_pic"+(i+1));
        cover_img.src = "./static/img/cat_img/貓咪_正常/cat"+(i+1)+".jpg";
    }
}

function Check(): void{
    var i: number;
    var cover_img: any;
    for(i=0;i<5;i++){
        if(feedTimes[i]==feedLimit[i]){
            fulled[i]=true;
            cover_img = document.getElementById("cat_pic"+(i+1));
            cover_img.src = "./static/img/cat_img/貓咪_變更/cat"+(i+1)+"_inverse.jpg";
        }
    }

}

function FeedSingleCat(index: number): void{
    var cover_img: any = document.getElementById("cover"+index);
    cover_img.style.zIndex="100";
    setTimeout(()=>{
        cover_img.style.zIndex="-100";
    },1500);
    feedTimes[index-1]+=1;
}

function FeedAllCat(): void{
    const cover_imgs: any[]=new Array();
    var i: number = 0;
    for(i=0 ;i<5;i++){
        cover_imgs[i]=document.getElementById("cover"+(i+1));
        feedTimes[i]+=1;
    }
    cover_imgs[0].style.zIndex="100";
    cover_imgs[1].style.zIndex="100";
    cover_imgs[2].style.zIndex="100";
    cover_imgs[3].style.zIndex="100";
    cover_imgs[4].style.zIndex="100";
    setTimeout(()=>{
        cover_imgs[0].style.zIndex="-100";
        cover_imgs[1].style.zIndex="-100";
        cover_imgs[2].style.zIndex="-100";
        cover_imgs[3].style.zIndex="-100";
        cover_imgs[4].style.zIndex="-100";
    },1500);
}

function FeedFunction(): void{

    var selectedIndex: number = -1;
    var form1: any = document.getElementById("action_area");
    var i: number = 0;
    var allow: boolean = true;
    for(i=0; i < form1.feeding_cat.length ; i++){
        if(form1.feeding_cat[5].checked){
            selectedIndex=6;
            var j: number;
            for(j=0;j<5;j++){
                if(fulled[j]){allow=false;break;}
            }
            if(allow){
                FeedAllCat();
                Check();
            }
            else{
                alert("You can't feed fulled cat!!!");
            }
            return;
        }
        else if(form1.feeding_cat[i].checked){
            selectedIndex = i+1;
            break;
        }
    }

    if(form1.breed.value === "Big_cat"){
        if(fulled[selectedIndex-1] || fulled[0] || fulled[2]){alert("You can't feed fulled cat!!!");}
        else if(selectedIndex === 1 || selectedIndex === 3){
            FeedSingleCat(1);
            FeedSingleCat(3);
        }
        else{
            FeedSingleCat(1);
            FeedSingleCat(3);
            FeedSingleCat(selectedIndex);
        }
    }
    else if(form1.breed.value === "Middle_cat"){
        if(fulled[selectedIndex-1] || fulled[3]){alert("You can't feed fulled cat!!!");}
        else if(selectedIndex === 4){
            FeedSingleCat(4);
        }
        else{
            FeedSingleCat(4);
            FeedSingleCat(selectedIndex);
        }
    }
    else if(form1.breed.value === "Small_cat"){
        if(fulled[selectedIndex-1] || fulled[1] || fulled[4]){alert("You can't feed fulled cat!!!");}
        else if(selectedIndex === 2 || selectedIndex === 5){
            FeedSingleCat(2);
            FeedSingleCat(5);
        }
        else{
            FeedSingleCat(2);
            FeedSingleCat(5);
            FeedSingleCat(selectedIndex);
        }
    }
    else if(selectedIndex>0){
        if(fulled[selectedIndex-1]){alert("You can't feed fulled cat!!!");}
        else{
            FeedSingleCat(selectedIndex);
        }
    }
    else if(selectedIndex<0 && form1.breed.value === ""){
        alert("Your choice is to feed nothing");
    }
    else{
        alert("Invalid choice(Breed doesn't exist)")
    }
    Check();
}

function playAudio(text: any, lang: any){
    var audio = new Audio();
    audio.src = "https://translate.google.com.vn/translate_tts?ie=UTF-8&q="+text+"&tl="+lang+"&client=tw-ob";
    audio.addEventListener('ended', function(){ this.currentTime = 0; }, false);
    audio.play();
}