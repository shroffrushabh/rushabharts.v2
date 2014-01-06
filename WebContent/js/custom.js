var app = {
    intIndex:0,
    theWidth:0,
    timerObj:null,
    numberOfImages:0,
    nextBtnWidth:35,
    serverLocation:"127.0.0.1:5000",
    previousGalleryClick:"Thali",
    addlogoAccToScreen:function(){
        jQuery(".addlogoacctoscreen").append('<div class="pagetitle"><span class="customfont" style="font-size:90px">Rushabh Arts</span></div>');
        jQuery(".addlogoacctoscreen").append('<div class="pagetitle"><span class="customfont" style="font-size:40px">Please increase your screen resolution...</span></div>');
        jQuery(".addlogoacctoscreenMainPage").append('<div class="pagetitle"><span class="customfont" style="font-size:40px">Please increase your screen resolution...</span></div>');

    },
    removeLogoAccToScreen:function(){
        jQuery(".addlogoacctoscreen").empty();
        jQuery(".addlogoacctoscreenMainPage").empty();
    },

    createImgTags:function(arr, ulElement, imageWidth, imageHeight){
        numberOfImages=arr.length;
        res="";
        for(var i=0;i<arr.length;i++){
            res+="<li><img src='"+arr[i]+"' id='gallery"+(i+1)+"'></li>";
        }
        $('#gallery-container').css('width',imageWidth);
        app.numberOfImages = arr.length;
        app.theWidth = imageWidth;
        var totalWidth = arr.length * imageWidth;
        $('ul#images').css({
            width: function() {
                return totalWidth;
            }
        });

        /*$("#next").css('top',imageHeight/2);
        $("#previous").css('top',imageHeight/2);
        //$("#next").css('left',imageWidth-7); // Small Hack - the 7 is obtained through
                                             // trial and error.        
        $("#next").css('left',imageWidth);
        $("#previous").css('left', 0);

        ulElement.append(res);
        // Small Hack to position the first gallery image correctly
        //$("img#gallery1").css({'position':'absolute','left':14});       
        $("#next").css('z-index',1);
        $("#previous").css('z-index',1);*/

        // Hack 

        $("#next").css('top',imageHeight/2);
        $("#previous").css('top',imageHeight/2);
        $("#next").css('left',imageWidth-6.5);        
        $("#previous").css('left', 0);

        $("#next").css('z-index',1);
        $("#previous").css('z-index',1);

        ulElement.append(res);

        jQuery(".gallery-container").css("height","525px");
        jQuery("#images").css({"position":"absolute","left":"-13px"});        
    },

    stopSlideShowTimer:function(){
        clearInterval(app.timerObj);
    },
    startSlideShow:function(){        
        var theWidth = app.theWidth;

        $('#next').click(function(event){
          event.preventDefault();  
          app.stopSlideShowTimer();    

          if((app.intIndex+1) >= app.numberOfImages) {
              $("#gallery"+app.intIndex).parent('li').parent('ul').animate({
                    "margin-left": 26
                }, 1000);
            app.intIndex = 0;
            app.startSlideShowTimer();          
            return;
        }

        app.intIndex++;
        $("#gallery"+app.intIndex).parent('li').parent('ul').animate({
                "margin-left": (-(app.intIndex) * theWidth + 26)
        }, 1000);

        app.startSlideShowTimer();          

        });
        $('#previous').click(function(event){
            event.preventDefault();
            app.stopSlideShowTimer();    
            
            if((app.intIndex ) < 1){
              app.intIndex = app.numberOfImages;
              $("#gallery"+app.intIndex).parent('li').parent('ul').animate({
                    "margin-left": (-(app.intIndex-1) * theWidth + 26)
                }, 1000);
                app.intIndex--;
                app.startSlideShowTimer();          
                return;
            }
            $("#gallery"+app.intIndex).parent('li').parent('ul').animate({
                  "margin-left": (-(app.intIndex-1) * theWidth + 26)
            }, 1000);
            app.intIndex--;
            app.startSlideShowTimer();          
        });
    },    
    bindNavBarButtons:function(){
        thalis=[];
        thalis[0] = "photos/thalis/thali1.jpg";
        thalis[1] = "photos/thalis/thali2.jpg";
        thalis[2] = "photos/thalis/thali3.jpg";
        thalis[3] = "photos/thalis/thali4.jpg";  
        thalis[4] = "photos/thalis/thali5.jpg";
        thalis[5] = "photos/thalis/thali6.jpg";
        thalis[6] = "photos/thalis/thali7.jpg";        
        thalis[7] = "photos/thalis/thali8.jpg";       
        thalis[8] = "photos/thalis/thali9.jpg";           

        diyas=[];
        diyas[0] = "photos/diyas/diya1.jpg";
        diyas[1] = "photos/diyas/diya2.jpg";
        diyas[2] = "photos/diyas/diya3.jpg";
        diyas[3] = "photos/diyas/diya4.jpg";
        diyas[4] = "photos/diyas/diya5.jpg";

        rangolis=[];
        rangolis[0] = "photos/rangolis/rang1.jpg";
        rangolis[1] = "photos/rangolis/rang2.jpg";
        rangolis[2] = "photos/rangolis/rang3.jpg";
        rangolis[3] = "photos/rangolis/rang4.jpg";
        rangolis[4] = "photos/rangolis/rang5.jpg";
        rangolis[5] = "photos/rangolis/rang6.jpg";

        env=[];
        env[0] = "photos/envelopes/env1.jpg";
        env[1] = "photos/envelopes/env2.jpg";
        env[2] = "photos/envelopes/env3.jpg";
        env[3] = "photos/envelopes/env4.jpg";
        env[4] = "photos/envelopes/env5.jpg";
        env[5] = "photos/envelopes/env6.jpg";
        env[6] = "photos/envelopes/env7.jpg";        
        env[7] = "photos/envelopes/env8.jpg";       
        env[8] = "photos/envelopes/env9.jpg";           
        
        others=[];
        others[0] = "photos/others/others1.jpg";
        others[1] = "photos/others/others2.jpg";

        jQuery("#Thali").bind('click',function(event){
            if(!app.checkIfSameBtnClicked("Thali"))
                app.removeSlideShowImagesAndReinstantiate(thalis);
        });        

        jQuery("#Rangoli").live('click',function(event){
            if(!app.checkIfSameBtnClicked("Rangoli"))
                app.removeSlideShowImagesAndReinstantiate(rangolis);          
        });        

        jQuery("#Diya").live('click',function(event){
            if(!app.checkIfSameBtnClicked("Diya"))
                app.removeSlideShowImagesAndReinstantiate(diyas);         
        });         
        
        jQuery("#Envelopes").live('click',function(event){
            if(!app.checkIfSameBtnClicked("Envelopes"))
                app.removeSlideShowImagesAndReinstantiate(env);         
        });                       
        
        jQuery("#Others").live('click',function(event){
            if(!app.checkIfSameBtnClicked("Others"))
                app.removeSlideShowImagesAndReinstantiate(others);         
        });                       
    },
    checkIfSameBtnClicked:function(btnName){
        flag = btnName == app.previousGalleryClick;
        app.previousGalleryClick=btnName;
        return flag;
    },

    startSlideShowTimer:function(){
          app.timerObj=setInterval(function() {

          if((app.intIndex+1) >= app.numberOfImages) {
            $("#gallery"+app.intIndex).parent('li').parent('ul').animate({
                    "margin-left": 26
            }, 1000);
            app.intIndex = 0;
            return;
        }

        app.intIndex++;
        $("#gallery"+app.intIndex).parent('li').parent('ul').animate({
                "margin-left": (-(app.intIndex) * app.theWidth + 26)
        }, 1000);

        },3000);
    },
    checkScreenResolution:function(){
        if (window.innerWidth < 1050) {
          //jQuery("#everything").css("display","none");
          jQuery(".list-container").css("display","none");
          jQuery(".about-container").css("display","none");
          jQuery("#navcontainer").css("display","none");
          jQuery(".gallery-container").css("display","none");
          jQuery("#inquirycontainer").css("display","none");
          jQuery(".pagetitle").css("display","none");
          app.addlogoAccToScreen();
        } else {
          jQuery(".list-container").css("display","block");
          jQuery(".about-container").css("display","block");
          jQuery("#navcontainer").css("display","block");
          jQuery(".gallery-container").css("display","block");
          jQuery("#inquirycontainer").css("display","block");
          jQuery(".pagetitle").css("display","block");
          app.removeLogoAccToScreen();
        }        
    },

    removeSlideShowImagesAndReinstantiate:function(arr){
        jQuery("#next").unbind( "click" );
        jQuery( "#previous").unbind( "click" );        
        app.stopSlideShowTimer();
        
        jQuery( "#images" ).fadeOut( 600, "linear", function(){
            jQuery("#images").remove();
            jQuery(".gallery-container").append('<ul id="images"></ul>');
            app.intIndex=0;
            app.createImgTags(arr, $("#images"), 700, 525);
            app.startSlideShow();
            app.startSlideShowTimer();    
        });    
    },

    validateFields:function(){
        var valid = true;
        var validationMessage = 'Please correct the following errors:\r\n';
        if (jQuery('#firstName').val().length == 0) {
            validationMessage = validationMessage + '  - First name is missing\r\n';
            valid = false;
        }
        if (jQuery('#lastName').val().length == 0) {
            validationMessage = validationMessage + '  - Last name is missing\r\n';
            valid = false;
        }
        if (jQuery('#emailId').val().length == 0) {
            validationMessage = validationMessage + '  - Email is missing\r\n';
            valid = false;
        }
        if (jQuery('#country').val().length == 0) {
            validationMessage = validationMessage + '  - Country is missing\r\n';
            valid = false;
        }
        if (jQuery('#city').val().length == 0) {
            validationMessage = validationMessage + '  - City is missing\r\n';
            valid = false;
        }
        if (jQuery('#mobile').val().length == 0) {
            validationMessage = validationMessage + '  - Mobile is missing\r\n';
            valid = false;
        }
        if (!app.isEmail(jQuery('#emailId').val())) {
            validationMessage = validationMessage + '  - Incorrect email id\r\n';
            valid = false;
        }
        if (valid == false)
        {
            alert(validationMessage);
        }
        return valid;
    },

    isEmail:function(email){
        return /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(email);
    },
    validateCaptcha:function(data) {     	
		$.ajax({
		  type: "POST",
		  url: "http://localhost:8080/RushabhArts/Verifier",
		  data: data,
		  success: app.successCallBack,
		  error: app.errorCallBack,
		  dataType: "json"
		});
     },
     successCallBack:function(msg){
         jQuery("#spinner").empty();
         jQuery("#spinner").append('<span class="customfont">Thank you for your inquiry, you will surely be called by one of our associates.</span>');
     },
     errorCallBack:function(msg){
         jQuery("#spinner").css("display","none");
    	 app.showTable();
    	 jQuery("#errormsg").css("display","block"); 
    	 Recaptcha.reload();    	 
    	 setTimeout(function() {
        	 jQuery("#errormsg").css("display","none"); 
    	 }, 3000);

     },
     showRecaptcha:function(element) {
	 // rushabharts key - 6LefiewSAAAAAMs2un7_czLmb_OARojuSTccB_o-
   	 // 6LdOmewSAAAAAARDl1nfhDLT9hYa7GQgcF86AnDZ
         Recaptcha.create("6LdOmewSAAAAAARDl1nfhDLT9hYa7GQgcF86AnDZ", element, {
           theme: "red",
           callback: Recaptcha.focus_response_field});
     },
     bindSubmit:function(){
    	 jQuery("#submit").click(function(e){
    		 e.preventDefault();
    		 if(app.validateFields()){
    			 var res={};
    	    	 res['inquiry']=jQuery('#inquiryText').val();
    	    	 res['firstName']=jQuery('#firstName').val();
    	    	 res['lastName']=jQuery('#lastName').val();
    	    	 res['emailId']=jQuery('#emailId').val();
    	    	 res['country']=jQuery('#country').val();
    	    	 res['city']=jQuery('#city').val();
    	    	 res['mobile']=jQuery('#mobile').val();
    	    	 res['res']=jQuery('[name="recaptcha_response_field"]').val();
    	    	 res['chal']=jQuery('[name="recaptcha_challenge_field"]').val();
    			 app.validateCaptcha(res);
    		 }
    	 });
     },
     hideTable:function(){
    	 jQuery("#table").css("display","none");
     },
     showTable:function(){
    	 jQuery("#table").css("display","block");
     }
};

$(window).load(function() {
    thalis=[];
    thalis[0] = "photos/thalis/thali1.jpg";
    thalis[1] = "photos/thalis/thali2.jpg";
    thalis[2] = "photos/thalis/thali3.jpg"; 
    thalis[3] = "photos/thalis/thali4.jpg";  
    thalis[4] = "photos/thalis/thali5.jpg";
    thalis[5] = "photos/thalis/thali6.jpg";
    thalis[6] = "photos/thalis/thali7.jpg";        
    thalis[7] = "photos/thalis/thali8.jpg";       
    thalis[8] = "photos/thalis/thali9.jpg";           

    app.createImgTags(thalis, $("#images"), 700, 525);
    app.startSlideShow();
    app.startSlideShowTimer();    
    app.bindNavBarButtons();    
    jQuery("#spinner").css("display","none");
    jQuery("#errormsg").css("display","none");    

    jQuery( document ).ajaxStart(function() {
    	app.hideTable();
        jQuery("#spinner").css("display","block");
    });

});

