      //JavaScript Document

      let counter
      let timerIndex
      windowonLoad = function(){
          counter = 5;
          timerIndex = 0;
      }

      function onClickChange(){
          if(timerIndex == 0) {
              timerIndex =  setInterval(homePage,500);
          }
      }

      function homePage(){
          counter--;
          if(counter <= 0){
              window.open("file:///C:/Users/AABBCC2123/Desktop/visual%20studio%20code/sport3/gallery.html", "_self");
              clearInterval(timerIndex);
              timerIndex = 0;
              counter = 0;
              }
          id_h2.innerHTML = counter;
      }

        function checkChooseUser(){
            let player = id_input.value
            switch(player){
                case "כריסטיאנו רונאלדו":
                    id_span.innerHTML = " כריסטיאנו רונאלדו";
                    break;
                case "ליונל מסי":
                    id_span.innerHTML = " ליונל מסי";
                    break;
                case "ארלינג הלאנד":
                    id_span.innerHTML = " ארלינג הלאנד";
                    break;
                case "רוברט לבנדובסקי":
                    id_span.innerHTML = " רוברט לבנדובסקי";
                    break;  
                case "קיליאן אמבפה":
                    id_span.innerHTML = " קיליאן אמבפה";
                    break;  
                case "הונג מין סון":
                    id_span.innerHTML = " הונג מין סון";
                    break;  
                case "הארי קיין":
                    id_span.innerHTML = " הארי קיין";
                    break; 
                case "אנסו פאטי":
                    id_span.innerHTML = " אנסו פאטי";
                    break;   
          }
      }
      let cristianoRonaldo  = {
            name: "Cristiano Ronaldo",
            age: 35,
            leagueGoals: 14,
            leagueAsists: 2,
            championsLeagueGoals: 4,
            championsLeagueGoals: 1,
      }
