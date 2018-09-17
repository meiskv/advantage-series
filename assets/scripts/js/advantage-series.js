(function( $ ) {
    

    // let Base_Layer = $('#Base_Layer');
    // let Media__x3E__Social = $('#Media__x3E__Social');
    // let Media__x3E__GOV = $('#Media__x3E__GOV');
    // let Media__x3E__SIG = $('#Media__x3E__SIG');
    // let Media__x3E__City = $('#Media__x3E__City');
    // let Social__x3E__City = $('#Social__x3E__City');
    // let Social__x3E__SIG = $('#Social__x3E__SIG');
    // let SIG__x3E__GOV = $('#SIG__x3E__GOV');
    // let SIG__x3E__City = $('#SIG__x3E__City');
    // let City__x3E__GOV = $('#City__x3E__GOV');
    let Environment = $('#Environment');
    let City_Dwellers = $('#City_Dwellers');
    let Government = $('#Government');
    let Social_Influencers = $('#Social_Influencers');
    let The_Media = $('#The_Media');
    let Special_Interest_Groups = $('#Special_Interest_Groups');
    

        // $(Social_Influencers).hover(
        //     function() {
        //       TweenMax.to('.social',0.5,{zIndex:5})
        //     }, function() {
        //         // TweenMax.to('.social',0.5,{zIndex:0})
        //     }
        //   );

        var clickVal = false;
        var windowWidth = window.innerWidth;

        if(windowWidth<=414){
            $(Social_Influencers).click(function(event) {
                if(clickVal!=true){
                    clickVal = true;
                    TweenMax.set([The_Media,Government,City_Dwellers,Special_Interest_Groups],{autoAlpha:0})
                    TweenMax.fromTo([Social_Influencers],0.7,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
                    TweenMax.to('.social',1,{zIndex:2,autoAlpha:1, ease:Expo.easeInOut})
                }else if(clickVal===true){
                    clickVal = false;
                    TweenMax.set([The_Media,Government,City_Dwellers,Special_Interest_Groups],{autoAlpha:1})
                    TweenMax.set('.social',{zIndex:0, opacity: 0})
                }
            });
            //  SOCIAL INFLUENCERS ===================
    
    
            $(Special_Interest_Groups).click(function(event) {
                if(clickVal!=true){
                    clickVal = true;
                    TweenMax.set([Social_Influencers,The_Media,Government],{autoAlpha:0})
                    TweenMax.fromTo([Special_Interest_Groups],0.7,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
                    TweenMax.to('.sig',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
                }else if(clickVal===true){
                    clickVal = false;
                    TweenMax.set([Social_Influencers,The_Media,Government],{autoAlpha:1})
                    TweenMax.set('.sig',{zIndex:0, opacity: 0})
                }
            });
            //  Special Interest ===================
    
            $(City_Dwellers).click(function(event) {
                if(clickVal!=true){
                    clickVal = true;
                    TweenMax.set([Social_Influencers,The_Media,Special_Interest_Groups,Government,City_Dwellers],{autoAlpha:0})
                    TweenMax.fromTo([City_Dwellers],0.5,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
                    TweenMax.to('.city',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
                }else if(clickVal===true){
                    clickVal = false;
                    TweenMax.set([Social_Influencers,The_Media,Special_Interest_Groups,Government,City_Dwellers],{autoAlpha:1})
                    TweenMax.set('.city',{zIndex:0, opacity: 0})
                }
            });
            //  City Dwellers ===================
    
            $(The_Media).click(function(event) {
                if(clickVal!=true){
                    clickVal = true;
                    TweenMax.set([Social_Influencers,Special_Interest_Groups,Government,City_Dwellers],{autoAlpha:0})
                    TweenMax.fromTo([The_Media],0.5,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
                    TweenMax.to('.media',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
                }else if(clickVal===true){
                    clickVal = false;
                    TweenMax.set([Social_Influencers,Special_Interest_Groups,Government,City_Dwellers],{autoAlpha:1})
                    TweenMax.set('.media',{zIndex:0, opacity: 0})
                }
            });
            //  The Media ===================

            $(The_Media).click(function(event) {
                if(clickVal!=true){
                    clickVal = true;
                    TweenMax.set([The_Media,Social_Influencers,Special_Interest_Groups,City_Dwellers],{autoAlpha:0})
                    TweenMax.fromTo([Government],0.5,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
                    TweenMax.to('.government',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
                }else if(clickVal===true){
                    clickVal = false;
                    TweenMax.set([The_Media,Social_Influencers,Special_Interest_Groups,City_Dwellers],{autoAlpha:1})
                    TweenMax.set('.government',{zIndex:0, opacity: 0})
                }
            });
            //  City Government ===================
        }else{
            $(Social_Influencers)
            .on( "mouseenter", function() {
                TweenMax.set([The_Media,Government,City_Dwellers,Special_Interest_Groups],{autoAlpha:0})
                TweenMax.fromTo([Social_Influencers],0.7,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
                TweenMax.to('.social',1,{zIndex:2,autoAlpha:1, ease:Expo.easeInOut})
    
                // TweenMax.set('.base',{autoAlpha:0})
            })
            .on( "mouseleave", function() {
                TweenMax.set([The_Media,Government,City_Dwellers,Special_Interest_Groups],{autoAlpha:1})
                TweenMax.set('.social',{zIndex:0, opacity: 0})
                // TweenMax.set('.base',{autoAlpha:1})
            });
            $(Special_Interest_Groups)
            .on( "mouseenter", function() {
                TweenMax.set([Social_Influencers,The_Media,Government],{autoAlpha:0})
                TweenMax.fromTo([Special_Interest_Groups],0.7,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
                TweenMax.to('.sig',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
            })
            .on( "mouseleave", function() {
                TweenMax.set([Social_Influencers,The_Media,Government],{autoAlpha:1})
                TweenMax.set('.sig',{zIndex:0, opacity: 0})
                
            });
            $(City_Dwellers)
            .on( "mouseenter", function() {
                TweenMax.set([Social_Influencers,The_Media,Special_Interest_Groups,Government,City_Dwellers],{autoAlpha:0})
                TweenMax.fromTo([City_Dwellers],0.5,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
                TweenMax.to('.city',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
            })
            .on( "mouseleave", function() {
                TweenMax.set([Social_Influencers,The_Media,Special_Interest_Groups,Government,City_Dwellers],{autoAlpha:1})
                TweenMax.set('.city',{zIndex:0, opacity: 0})
            });
            $(The_Media)
            .on( "mouseenter", function() {
                TweenMax.set([Social_Influencers,Special_Interest_Groups,Government,City_Dwellers],{autoAlpha:0})
                TweenMax.fromTo([The_Media],0.5,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
                TweenMax.to('.media',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
            })
            .on( "mouseleave", function() {
                TweenMax.set([Social_Influencers,Special_Interest_Groups,Government,City_Dwellers],{autoAlpha:1})
                TweenMax.set('.media',{zIndex:0, opacity: 0})
                
            });
            $(Government)
            .on( "mouseenter", function() {
                TweenMax.set([The_Media,Social_Influencers,Special_Interest_Groups,City_Dwellers],{autoAlpha:0})
                TweenMax.fromTo([Government],0.5,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
                TweenMax.to('.government',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
            })
            .on( "mouseleave", function() {
                TweenMax.set([The_Media,Social_Influencers,Special_Interest_Groups,City_Dwellers],{autoAlpha:1})
                TweenMax.set('.government',{zIndex:0, opacity: 0})
                
            });
        }







        // NAVIGATION

        $('.media_nav')
        .on( "mouseenter", function() {
            TweenMax.fromTo([The_Media],0.5,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
            TweenMax.to('.media',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
            $('.media_nav_img').attr('src','https://as.grayling.com/wp-content/themes/advantage-series/assets/images/as/media_hover.svg')
        })
        .on( "mouseleave", function() {
            TweenMax.set('.media',{zIndex:0, opacity: 0}) 
            $('.media_nav_img').attr('src','https://as.grayling.com/wp-content/themes/advantage-series/assets/images/as/media.svg')
        });

        $('.interest_nav')
        .on( "mouseenter", function() {
            TweenMax.set([Social_Influencers,The_Media],{autoAlpha:0})
            TweenMax.fromTo([Special_Interest_Groups],0.5,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
            TweenMax.to('.sig',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
            $('.interest_nav_img').attr('src','https://as.grayling.com/wp-content/themes/advantage-series/assets/images/as/interest_hover.svg')
            
        })
        .on( "mouseleave", function() {
            TweenMax.set([Social_Influencers,The_Media],{autoAlpha:1})
            TweenMax.set('.sig',{zIndex:0, opacity: 0})
            $('.interest_nav_img').attr('src','https://as.grayling.com/wp-content/themes/advantage-series/assets/images/as/interest.svg')
        });

        $('.influencers_nav')
        .on( "mouseenter", function() {
            TweenMax.set([The_Media,Government],{autoAlpha:0})
            TweenMax.fromTo([Social_Influencers],0.5,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
            TweenMax.to('.social',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
            $('.influencer_nav_img').attr('src','https://as.grayling.com/wp-content/themes/advantage-series/assets/images/as/influencers_hover.svg')
        })
        .on( "mouseleave", function() {
            TweenMax.set([The_Media,Government],{autoAlpha:1})
            TweenMax.set('.social',{zIndex:0, opacity: 0})
            $('.influencer_nav_img').attr('src','https://as.grayling.com/wp-content/themes/advantage-series/assets/images/as/influencers.svg')
        });

        $('.government_nav')
        .on( "mouseenter", function() {
            $('.government_nav_img').attr('src','https://as.grayling.com/wp-content/themes/advantage-series/assets/images/as/government_hover.svg')
        })
        .on( "mouseleave", function() {
            $('.government_nav_img').attr('src','https://as.grayling.com/wp-content/themes/advantage-series/assets/images/as/government.svg')
        });

        $('.home_nav')
        .on( "mouseenter", function() {
            $('.home_nav_img').attr('src','https://as.grayling.com/wp-content/themes/advantage-series/assets/images/as/home_hover.svg')
        })
        .on( "mouseleave", function() {
            $('.home_nav_img').attr('src','https://as.grayling.com/wp-content/themes/advantage-series/assets/images/as/home.svg')
        });

        $('.conclusion_nav')
        .on( "mouseenter", function() {
            $('.conclusion_nav_img').attr('src','https://as.grayling.com/wp-content/themes/advantage-series/assets/images/as/conclusion_hover.svg')
        })
        .on( "mouseleave", function() {
            $('.conclusion_nav_img').attr('src','https://as.grayling.com/wp-content/themes/advantage-series/assets/images/as/conclusion.svg')
        });



          $(Social_Influencers).click(function(e){
            e.preventDefault();
            console.log('sample');
          });


          $(".scrolltop").on("click", function() {
                console.log('clicked')
                var header = $(".header");
                $('html,body').animate({scrollTop: header.offset().top},'slow');
                
          });

          $(".animScroll").on("click", function() {
            console.log('clicked')
            var animScroll = $("#animation");
            $('html,body').animate({scrollTop: animScroll.offset().top},'slow');
            
      });
    
    
    })( jQuery );


