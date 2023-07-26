
dataUrl = "https://www.gjlmotea.com/travel_wp/wp-json/wp/v2/posts/72?acf_format=standard";

var html = "<div class='col-lg-4 col-md-6 d-flex align-items-stretch mt-4'><div class='course-item'><img src='{{img_url}}' class='img-fluid' alt='...'><div class='course-content'><h3><a href='course-details.html'>{{title}}</a></h3><div class='trainer d-flex justify-content-between align-items-center'><div class='d-flex justify-content-between align-items-center'>{{tag1}}{{tag2}}{{tag3}}</div></div></div></div></div>";

$.ajax({
    url: dataUrl,
    method: 'GET',
    dataType: 'json',
    data: '',
    async: true,

    success: res => {

        var tag1 = res.tags[0];
        if(tag1 == 4){
            tag1 = "<h4>一日遊</h4>&emsp;";
        }else if(tag1 == 5){
            tag1 = "<h4>兩日遊</h4>&emsp;";
        }else if(tag1 == 7){
            tag1 = "<h4>半日遊</h4>&emsp;";
        }else{
            tag1 = "";
        }

        var tag2 = res.tags[1];
        if(tag2 == 9){
            tag2 = "<h4>山野</h4>&emsp;";
        }else if(tag2 == 10){
            tag2 = "<h4>村城</h4>&emsp;";
        }else if(tag2 == 11){
            tag2 = "<h4>海濱</h4>&emsp;";
        }else{
            tag2 = "";
        }

        var tag3 = res.tags[2];
        if(tag3 == 6){
            tag3 = "<h4>動手做</h4>&emsp;";
        }else if(tag3 == 8){
            tag3 = "<h4>呷美味</h4>&emsp;";
        }else if(tag3 == 12){
            tag3 = "<h4>聽故事</h4>&emsp;";
        }else if(tag3 == 13){
            tag3 = "<h4>遊秘境</h4>&emsp;";
        }else{
            tag3 = "";
        }

       
        var now_data = html.replace("{{title}}",res.title.rendered)
                            .replace("{{img_url}}",res.acf.images.image2)
                            .replace("{{tag1}}",tag1)
                            .replace("{{tag2}}",tag2)
                            .replace("{{tag3}}",tag3);
                                    
        $("#allitems").append(now_data);

        
        console.log(tag1);
    },
    error: err => {
        console.log(err);
    },
});