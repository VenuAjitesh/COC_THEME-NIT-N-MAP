function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 25.787701417735136, lng:93.77430542067601 },
        zoom: 18,
        mapId: '1f4a1c6bd45c834c'
        });
        new google.maps.Marker({
            position: {lat: 25.787902537814187, lng:93.77445567493866 },
            map,
            title: "Admin Building",
            icon:{
                url:"222-2222661_clash-of-clans-town-hall-hd-png-download-removebg-preview.png",
                scaledSize: new google.maps.Size(70,70)
            }
          });
        new google.maps.Marker({
            position: {lat: 25.78844161906883, lng:93.77278964613214 },
            map,
            title: "Canteen",
            icon:{
                url:"kisspng-clash-of-clans-elixir-of-life-clash-royale-video-g-5afbf0eb2fd882.288738151526460651196-removebg-preview.png",
                scaledSize: new google.maps.Size(90,60)
            }
          });
        new google.maps.Marker({
            position: {lat: 25.78970277233612, lng:93.77595086299449 },
            map,
            title: "NBH 2",
            icon:{
                url:"Barracks15.webp",
                scaledSize: new google.maps.Size(55,60)
            }
          });
        new google.maps.Marker({
            position: {lat: 25.789335683736045, lng: 93.77535541259822},
            map,
            title: "NBH 1",
            icon:{
                url:"barrack-5-removebg-preview.png",
                scaledSize: new google.maps.Size(55,60)
            }
          });
        new google.maps.Marker({
            position: {lat: 25.787539395660225, lng: 93.77454894360665},
            map,
            title: "Class Rooms",
            icon:{
                url:"troop-housing-7-removebg-preview.png",
                scaledSize: new google.maps.Size(45,45)
            }
          });
        new google.maps.Marker({
            position: {lat: 25.78717003498626, lng: 93.77437448576202},
            map,
            title: "Class Rooms",
            icon:{
                url:"troop-housing-7-removebg-preview.png",
                scaledSize: new google.maps.Size(45,45)
            }
          });
        new google.maps.Marker({
            position: {lat: 25.78781959954204, lng: 93.7740397153034},
            map,
            title: "Class Rooms",
            icon:{
                url:"troop-housing-7-removebg-preview.png",
                scaledSize: new google.maps.Size(45,45)
            }
          });
          
        new google.maps.Marker({
            position: {lat:25.787547886696682, lng:93.77400670976522},
            map,
            title: "Class Rooms",
            icon:{
                url:"troop-housing-7-removebg-preview.png",
                scaledSize: new google.maps.Size(45,45)
            }
          });
          ///---------
        new google.maps.Marker({
            position: {lat:25.788416075395855, lng: 93.77377392267603},
            map,
            title: "Girls Hostels",
            icon:{
                url:"image-removebg-preview.png",
                scaledSize: new google.maps.Size(45,45)
            }
          });
        new google.maps.Marker({
            position: {lat:25.78890875049997, lng:93.77476097559608},
            map,
            title: "Girls Hostels",
            icon:{
                url:"image-removebg-preview.png",
                scaledSize: new google.maps.Size(45,45)
            }
          });
}