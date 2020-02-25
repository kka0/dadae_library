    $(function(){
        var search_list = function(){
            timer = setTimeout(function(){
                $('#search_list li:first').animate( {marginTop: '-35px'}, 1000, function()
                {
                    $(this).detach().appendTo('ul#search_list').removeAttr('style');
                });
                search_list();
            }, 2000);         
        };

        $(document).on('click','.search_prev',function(){
            $('#search_list li:last').hide().prependTo($('#search_list')).slideDown();
            clearTimeout(timer);
            search_list();
            if($('#search_pause').text() == 'Unsearch_pause'){
            $('#search_pause').text('search_pause');
            };
        }); 
    
        $(document).on('click','.search_next',function(){
                $('#search_list li:first').animate( {marginTop:'-35px'}, 600, function(){
                            $(this).detach().appendTo('ul#search_list').removeAttr('style');
                        });
                clearTimeout(timer);
                search_list();
                
                if($('#search_pause').text() == 'Unsearch_pause'){
                $('#search_pause').text('search_pause');
                }; 
        }); 

        var search_listover = function(){
            $('#search_list').mouseover(function(){
            clearTimeout(timer);
            });
            $('#search_list').mouseout(function(){
            search_list();
            });  
        };

        search_listover();
            search_list();
        });


////////////////////////////// board //////////////////////////////
    $(function(){
        
        var eleWidth=$(".board_frame>ul>li").width();
        var state=false;
        var board_playOn=false;
        var direction="left";
        var board_bannerAuto; 
    
    
        function board_play(){
            if(!board_playOn){
                board_playOn=true;
                board_bannerAuto=setInterval(function(){
                    if(direction="left"){
                        $(".board_left").click();
                    }else{
                        $(".board_right").click();
                    }
                },3000);
            }
        } 
    
        function board_stop(){
            if(board_playOn){
                board_playOn=false;
                clearInterval(board_bannerAuto);
            }
        } 
    
        function board_left(){
            board_stop();
            direction="board_left";
            $(".board_frame>ul").animate({
                left:eleWidth*-1
            },500,function(){
                $(this).children("li:first").insertAfter($(this).children("li:last"));
                $(this).css("left",0); 
                state=false;
                board_play();
            });
        }
    
        function board_right(){
            board_stop();
            direction="board_right";
            $(".board_frame>ul>li:last").insertBefore($(".board_frame>ul>li:first"));
            $(".board_frame>ul").css("left",eleWidth*-1);
            $(".board_frame>ul").animate({left:0},500,
                function(){
                    state=false;
                    board_play();
                });
        } 
    
        $(".board_left").click(function(){
            if(!state){
                state=true;
                board_left();
            }
        });
    
        $(".board_right").click(function(){
            if(!state){
                state=true;
                board_right();
            }
        });
    
    
        $(".board_play").click(function(){
            board_play();
        });
    
        $(".board_stop").click(function(){
            board_stop();
        });
    
        $(".board_play").click();
    
    });
////////////////////////////// board //////////////////////////////