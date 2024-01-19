//$(function(){
  //$('.box1').mouseover(function(){
    //$('.box1').addClass('box1-ext');
  //});
  //$('.box1').mouseout(function(){
    //$('.box1').removeClass('box1-ext');
  //});
//});
//イベントの記述
//('.セレクタ名').イベント名(function()){
  //イベント発生時に行われる処理
//});

//マウスクリックイベントの記述
//$('セレクタ名').on('click', function(){
  //イベント発生時に行われる処理
//});

$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});

