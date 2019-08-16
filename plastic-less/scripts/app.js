//Acces aux différentes pages
$('.page-list').each(function(){
    var $this  = $(this);
    var $page  = $this.find('li.active');
    var $link  = $page.find('a');
    var $panel = $($link.attr('href'));

    $this.on('click', '.page-control', function(e) {
        e.preventDefault();
        var $link = $(this);
        var id = this.hash; //récupérer href page cliquée
        
        if(id && !$link.is('.active')){
            $panel.removeClass('active');
            $page.removeClass('active');
            $('.page--bienvenue').removeClass('active');
            $panel = $(id).addClass('active');
            $page  = $link.parent().addClass('active');
        } 
    });
});

// ----------- SLIDER

$('.slider').each(function() {              
  var $this   = $(this);                   
  var $group  = $this.find('.slide-group'); 
  var $slides = $this.find('.slide');      
  var buttonArray  = [];                   
  var currentIndex = 0;                     

  function move(newIndex) {          
   
    var animateLeft, slideLeft;      
    if ($group.is(':animated') || currentIndex === newIndex) {  
      return;
    }

    buttonArray[currentIndex].removeClass('active'); 
    buttonArray[newIndex].addClass('active'); 
    
    if (newIndex > currentIndex) {   
      slideLeft = '100%';            
      animateLeft = '-100%';         
    } else {                        
      slideLeft = '-100%';        
      animateLeft = '100%';         
    }
    
    $slides.eq(newIndex).css( {left: slideLeft, display: 'block'} );

    $group.animate( {left: animateLeft}, function() {    
      $slides.eq(currentIndex).css( {display: 'none'} ); 
      $slides.eq(newIndex).css( {left: 0} ); 
      $group.css( {left: 0} );               
      currentIndex = newIndex;               
    });
  }
   
  $.each($slides, function(index) {
     
    var $button = $('<li class="slide-btn"><span class="slide-dot" ></span></li>');
   
    if (index === currentIndex) {    // If index is the current item
      $button.addClass('active');    // Add the active class
    }
         
    $button.on('click', function() { // Create event handler for the button
      move(index);                   // It calls the move() function
    }).appendTo('.slide-buttons');   // Add to the buttons holder
    buttonArray.push($button);       // Add it to the button array
      
    });                       
});
 



// ------ POP-UP 

$('.astuces__liste').each(function(){
    var $this  = $(this);
    var $popup  = $this.find('li.active');  
    var $link  = $popup.find('a');         
    var $panel = $($link.attr('href'));   
    var $close = $('.popup-close');

    $this.on('click', '.open', function(e) {  // Quand click sur un popup
        e.preventDefault();
        var $link = $(this); // Récup le lien 
        var id = this.hash; // Récup href page cliquée
        
        if(id && !$link.is('.active')){
            $panel.removeClass('active');
            $popup.removeClass('active');
            $panel = $(id).addClass('active');
            $popup  = $link.parent().addClass('active');
        }
    $close.on('click', function(e) { 
        e.preventDefault();
        $panel.removeClass('active');
        $popup.removeClass('active');
    })        
    });   
});

$('.recettes__liste').each(function(){
    var $this  = $(this);
    var $popup  = $this.find('li.active');  
    var $link  = $popup.find('a');         
    var $panel = $($link.attr('href'));   
    var $close = $('.popup-close');

    $this.on('click', '.open', function(e) {  // Quand click sur un popup
        e.preventDefault();
        var $link = $(this); // Récup le lien 
        var id = this.hash; // Récup href page cliquée
        
        if(id && !$link.is('.active')){
            $panel.removeClass('active');
            $popup.removeClass('active');
            $panel = $(id).addClass('active');
            $popup  = $link.parent().addClass('active');
        }
    $close.on('click', function(e) { 
        e.preventDefault();
        $panel.removeClass('active');
        $popup.removeClass('active');
    })        
    });   
});


//# sourceMappingURL=app.js.map
