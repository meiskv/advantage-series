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

        $(Social_Influencers)
        .on( "mouseenter", function() {
            TweenMax.set([The_Media,Government],{autoAlpha:0})
            TweenMax.fromTo([Social_Influencers],0.7,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
            TweenMax.to('.social',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})

            // TweenMax.set('.base',{autoAlpha:0})
        })
        .on( "mouseleave", function() {
            TweenMax.set([The_Media,Government],{autoAlpha:1})
            TweenMax.set('.social',{zIndex:0, opacity: 0})
            // TweenMax.set('.base',{autoAlpha:1})
        });

        $(Special_Interest_Groups)
        .on( "mouseenter", function() {
            TweenMax.set([Social_Influencers,The_Media],{autoAlpha:0})
            TweenMax.fromTo([Special_Interest_Groups],0.7,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
            TweenMax.to('.sig',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
            
        })
        .on( "mouseleave", function() {
            TweenMax.set([Social_Influencers,The_Media],{autoAlpha:1})
            TweenMax.set('.sig',{zIndex:0, opacity: 0})
            
        });

        $(City_Dwellers)
        .on( "mouseenter", function() {
            TweenMax.set([Social_Influencers,The_Media,Special_Interest_Groups],{autoAlpha:0})
            TweenMax.fromTo([City_Dwellers],0.5,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
            TweenMax.to('.city',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
        })
        .on( "mouseleave", function() {
            TweenMax.set([Social_Influencers,The_Media,Special_Interest_Groups],{autoAlpha:1})
            TweenMax.set('.city',{zIndex:0, opacity: 0})
        });

        $(The_Media)
        .on( "mouseenter", function() {
            TweenMax.fromTo([The_Media],0.5,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
            TweenMax.to('.media',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
        })
        .on( "mouseleave", function() {
            
            TweenMax.set('.media',{zIndex:0, opacity: 0})
            
        });

        // NAVIGATION

        $('.media_nav')
        .on( "mouseenter", function() {
            TweenMax.fromTo([The_Media],0.5,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
            TweenMax.to('.media',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
            $('.media_nav_img').attr('src','https://as.gcreativelab.com/wp-content/themes/advantage-series/assets/images/as/media_hover.svg')
        })
        .on( "mouseleave", function() {
            TweenMax.set('.media',{zIndex:0, opacity: 0}) 
            $('.media_nav_img').attr('src','https://as.gcreativelab.com/wp-content/themes/advantage-series/assets/images/as/media.svg')
        });

        $('.interest_nav')
        .on( "mouseenter", function() {
            TweenMax.set([Social_Influencers,The_Media],{autoAlpha:0})
            TweenMax.fromTo([Special_Interest_Groups],0.5,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
            TweenMax.to('.sig',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
            $('.interest_nav_img').attr('src','https://as.gcreativelab.com/wp-content/themes/advantage-series/assets/images/as/interest_hover.svg')
            
        })
        .on( "mouseleave", function() {
            TweenMax.set([Social_Influencers,The_Media],{autoAlpha:1})
            TweenMax.set('.sig',{zIndex:0, opacity: 0})
            $('.interest_nav_img').attr('src','https://as.gcreativelab.com/wp-content/themes/advantage-series/assets/images/as/interest.svg')
        });

        $('.influencers_nav')
        .on( "mouseenter", function() {
            TweenMax.set([The_Media,Government],{autoAlpha:0})
            TweenMax.fromTo([Social_Influencers],0.5,{y:30,repeat: 0,autoAlpha: 0},{y:0,ease:Back.easeOut,repeat: 0,autoAlpha:1})
            TweenMax.to('.social',1,{zIndex:1,autoAlpha:1, ease:Expo.easeInOut})
            $('.influencer_nav_img').attr('src','https://as.gcreativelab.com/wp-content/themes/advantage-series/assets/images/as/influencers_hover.svg')
        })
        .on( "mouseleave", function() {
            TweenMax.set([The_Media,Government],{autoAlpha:1})
            TweenMax.set('.social',{zIndex:0, opacity: 0})
            $('.influencer_nav_img').attr('src','https://as.gcreativelab.com/wp-content/themes/advantage-series/assets/images/as/influencers.svg')
        });

        $('.government_nav')
        .on( "mouseenter", function() {
            $('.government_nav_img').attr('src','https://as.gcreativelab.com/wp-content/themes/advantage-series/assets/images/as/government_hover.svg')
        })
        .on( "mouseleave", function() {
            $('.government_nav_img').attr('src','https://as.gcreativelab.com/wp-content/themes/advantage-series/assets/images/as/government.svg')
        });



          $(Social_Influencers).click(function(e){
            e.preventDefault();
            console.log('sample');
          });



    
    
    })( jQuery );


