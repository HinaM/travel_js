const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('id');

dataUrl = "https://www.gjlmotea.com/travel_wp/wp-json/wp/v2/posts/72?acf_format=standard";
var link_html = '<a href="{{link}}" class="get-started-btn">我要報名</a>';

var slide = '<div class="carousel-item"><img src="{{img_src}}" class="d-block w-100" alt="..." height="400px" width="800px" style="object-fit: cover;"></div>';
var slide_active = '<div class="carousel-item active"><img src="{{img_src}}" class="d-block w-100" alt="..." height="400px" width="800px" style="object-fit: cover;"></div>';

$.ajax({
    url: dataUrl,
    method: 'GET',
    dataType: 'json',
    data: '',
    async: true,

    success: res => {
        if (res.id == myParam){
            $("#the_title").text(res.title.rendered);
            $("#the_price").text(res.acf.price);
            var desc = document.getElementById("the_desc");
            desc.innerHTML = res.content.rendered;
            $("#the_time").text(res.acf.time);
            $("#the_org").text(res.acf.organizer);
            $("#the_location").text(res.acf.location);
            $("#the_phone").text(res.acf.phone);

            var link_current_btn = link_html.replace("{{link}}",res.acf.link);
            $("#link_btn").append(link_current_btn);

            /*
            var size = Object.keys(res.acf.images).length;
            console.log(size);
            */

            if (res.acf.images.image2 == false){
                var slide_curr_act = slide_active.replace("{{img_src}}",res.acf.images.image1);
                $("#carousel-inner").append(slide_curr_act);
            }else if(res.acf.images.image3 == false){
                var slide_curr_act = slide_active.replace("{{img_src}}",res.acf.images.image1);
                var slide2 = slide.replace("{{img_src}}",res.acf.images.image2);
                $("#carousel-inner").append(slide_curr_act);
                $("#carousel-inner").append(slide2);
            }else if(res.acf.images.image4 == false){
                var slide_curr_act = slide_active.replace("{{img_src}}",res.acf.images.image1);
                var slide2 = slide.replace("{{img_src}}",res.acf.images.image2);
                var slide3 = slide.replace("{{img_src}}",res.acf.images.image3);
                $("#carousel-inner").append(slide_curr_act);
                $("#carousel-inner").append(slide2);
                $("#carousel-inner").append(slide3);
            }else if(res.acf.images.image5 == false){
                var slide_curr_act = slide_active.replace("{{img_src}}",res.acf.images.image1);
                var slide2 = slide.replace("{{img_src}}",res.acf.images.image2);
                var slide3 = slide.replace("{{img_src}}",res.acf.images.image3);
                var slide4 = slide.replace("{{img_src}}",res.acf.images.image4);
                $("#carousel-inner").append(slide_curr_act);
                $("#carousel-inner").append(slide2);
                $("#carousel-inner").append(slide3);
                $("#carousel-inner").append(slide4);
            }else{
                var slide_curr_act = slide_active.replace("{{img_src}}",res.acf.images.image1);
                var slide2 = slide.replace("{{img_src}}",res.acf.images.image2);
                var slide3 = slide.replace("{{img_src}}",res.acf.images.image3);
                var slide4 = slide.replace("{{img_src}}",res.acf.images.image4);
                var slide5 = slide.replace("{{img_src}}",res.acf.images.image4);
                $("#carousel-inner").append(slide_curr_act);
                $("#carousel-inner").append(slide2);
                $("#carousel-inner").append(slide3);
                $("#carousel-inner").append(slide4);
                $("#carousel-inner").append(slide5);
            }

            
        }else{
            return ;
        }
    },
    error: err => {
        console.log(err);
    },
});