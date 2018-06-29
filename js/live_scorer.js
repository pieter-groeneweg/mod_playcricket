//http://derbyscountylge.new_uat-ecbplay-cricket.com:3000/website/third_party_widgets/live_scorer
var lsw_reference;
jQueryCode = function(){
  // your jQuery code
  loadScoreView();
}

if(window.jQuery){
  jQueryCode();
} else{   
  var script = document.createElement('script'); 
  document.head.appendChild(script);  
  script.type = 'text/javascript';
  script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js";
  script.onload = jQueryCode;
}

function loadScoreView() {
  //console.log(typeof jQuery == 'undefined')
  jQuery( ".lsw" ).each(function(index, value ) {
    var id = value.id.slice(9);
    var arr = value.href.split("/")
    var domain = arr[0] + "//" + arr[2]
    jQuery.ajax({
      type: 'GET',
      url: value.href,
      dataType: "json",
      success: function(data){
        if (data.matches.length > 0){
          buildLiveScorerView(id, data,domain)
          if (lsw_reference == undefined){
            lsw_reference = setInterval(function () { updateLiveScorerView(); }, 180000);
          }
        }
      }
    });
  });
}

function buildLiveScorerView(div_id, data, domain){
  //console.log(data)
  jQuery("#lsw_container_"+div_id).html("")
  jQuery.each(data.matches, function( index, value ) {
    //console.log(value)
    str=""
      str+="<div class='lsw-col-3 lsw-col-s-3 lsw-left'>"
        str+="<div class='lsw_outer_div'>"
          str+="<div class='lsw-col-12'>"
            str+="<div class='lsw-header'>"
              if(value.competition_type == "Friendly"){
                str+="Friendly"+"-"
              }else{
                if (value.league_name == ""){
                  str+=value.competition_name
                }else{
                  str+="<div>"+value.league_name+"</div>"
                  str+="<div>"+value.competition_name+"</div>"
                }
              }
            str+="</div>"
          str+="</div>"
          str+="<div class='lsw-col-12'>"
            str+="<div class='lsw-body'>"
              str+="<div>"+value.home_club_name+" "+value.home_team_name+"</div>"
              str+="<div class='lsw-score-section'>"
                str+="<div>"+value.home_team_score
                  if(value.home_team_id == value.toss_won_by_team_id){
                    str+="<img src="+domain+"/coin.png height='20' width='20'>"
                  }
                  if(value.home_team_id == value.batted_first){
                    str+="<img src="+domain+"/batball.png height='20' width='20'>"
                  }
                str+="</div>"
              str+="</div>"

              str+="<div>"+value.away_club_name+" "+value.away_team_name+"</div>"
              str+="<div class='lsw-score-section'>"
                str+="<div>"+value.away_team_score
                  if(value.away_team_id == value.toss_won_by_team_id){
                    str+="<img src="+domain+"/coin.png height='20' width='20'>"
                  }
                  if(value.away_team_id == value.batted_first){
                    str+="<img src="+domain+"/batball.png height='20' width='20'>"
                  }
                str+="</div>"
              str+="</div>"
            str+="</div>"
          str+="</div>"
          str+="<div class='lsw-col-12'>" 
            str+="<div class='lsw-footer'><a href="+domain+"/website/results/"+value.fixture_id+" target='_blank'><div class='lsw-left lsw-scorecard'>Scorecard</div><div class='lsw-right lsw-live-btn'>Live</div><div class='clearfix'></div></a></div>"
            //console.log(data.live_scorer_is_live)
            if(!data.live_scorer_is_live){
              var time = new Date(); 
              str+="<div class='lsw-left'>Last Updated "+ (time.getHours() < 10 ? '0' : '') + time.getHours() + (time.getMinutes() < 10 ? ':0' : ':') + time.getMinutes()+"</div><div class='lsw-right' onClick='updateLiveScorerView();return false;'>Refresh</div>"
              clearInterval(lsw_reference)
            }
          str+="</div>"
          str+="<div class='clearfix'></div>"
        str+="</div>"
      str+="</div>"
    jQuery("#lsw_container_"+div_id).append(str);
    //console.log('ssss'+lsw_reference)
  });
}

function updateLiveScorerView(){
  jQuery( ".lsw" ).each(function(index, value ) {
    var id = value.id.slice(9);
    var arr = value.href.split("/")
    var domain = arr[0] + "//" + arr[2]
    jQuery.ajax({
      type: 'GET',
      url: value.href,
      dataType: "json",
      success: function(data){
        buildLiveScorerView(id, data,domain)
      }
    });
  });
}


