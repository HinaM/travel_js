
dataUrl = "https://www.gjlmotea.com/travel_wp/wp-json/wp/v2/posts/72?acf_format=standard";

var html = "<div class='col-lg-4 col-md-6 d-flex align-items-stretch mt-4'><div class='course-item'><img src='{{img_url}}' class='img-fluid' alt='...'><div class='course-content'><h3><a href='course-details.html'>{{title}}</a></h3><div class='trainer d-flex justify-content-between align-items-center'><div class='d-flex justify-content-between align-items-center'><h4>{{tag1}}</h4>&emsp;<h4>{{tag2}}</h4>&emsp;<h4>{{tag3}}</h4></div></div></div></div></div>";

$.ajax({
    url: dataUrl,
    method: 'GET',
    dataType: 'json',
    data: '',
    async: true,

    success: res => {

        var tag1 = res.tags[0];
        var tag2 = res.tags[1];
        var tag3 = res.tags[2];
        

       
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