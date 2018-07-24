var section = document.querySelector('section');

        //var requestURL = 'https://dsantosmt.github.io/assignments/lesson-14/data/services.json';
        var requestURL = 'data/services.json';
        var request = new XMLHttpRequest();   
        request.open('GET', requestURL);
        request.responseType = 'text';
        request.send();

        request.onload = function() {
        var getText = request.response; // get the string from the response
        var v_object = JSON.parse(getText); // convert it to an object
        showValues(v_object);
        }



    function showValues(jsonObj) {
      var values = jsonObj['services'];

      for(var i = 0; i < values.length; i++) {
        var myElement = document.createElement('article');
        var header = document.createElement('h2');
        var item1 = document.createElement('p')
        var item2 = document.createElement('p');
        var item3 = document.createElement('p');
        var myList = document.createElement('ul');

        header.textContent = values[i].name;
        item1.textContent = values[i].price;
        item2.textContent = values[i].desc;
        item3.textContent = 'Repair: ';

        var subValues = values[i].repair;
        for(var j = 0; j < subValues.length; j++) {
          var listItem = document.createElement('li');
            
          listItem.textContent = subValues[j];
          myList.appendChild(listItem);
        }

        myElement.appendChild(header);
        myElement.appendChild(item1);
        myElement.appendChild(item2);
        myElement.appendChild(item3);
        myElement.appendChild(myList);

        section.appendChild(myElement);
      }
    }