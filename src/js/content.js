;(function(window){
  "use strict";

  // =======================================
  // variables
  // 
  var win = window,
      document = win.document,
      imgsLength = 0,
      $body = document.getElementsByTagName("body")[0],

      modalBgName ="__rntMetaChecker-modalBg",
      $modalBg = document.getElementById( modalBgName ),

      containerName = "__rntMetaChecker-container",
      $imgContainer = document.getElementById( containerName ),

      tempDiv = document.createElement("div"),

      urlReg = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/ig,

      $meta,
      $title;
      
  // =======================================
  // functions
  // 
  var init = function(){
    window.removeEventListener("resize", onWindowResize, false);
    window.addEventListener("resize", onWindowResize, false);
    
    if( $modalBg || $imgContainer ){
      $body.removeChild( $modalBg );
      $body.removeChild( $imgContainer );
    } else {
      $meta = document.getElementsByTagName("meta");
      $title = document.getElementsByTagName("title");

      setContainer();
    }
  };

  var onWindowResize = function(){
    
  };

  var setContainer = function(){

    var fragment = document.createDocumentFragment();

    var $subject = tempDiv.cloneNode();
    var $txt = tempDiv.cloneNode();
    $subject.className = "subject";
    $txt.className = "content";
    
    $modalBg = tempDiv.cloneNode();
    $modalBg.setAttribute("id", modalBgName);

    $imgContainer = tempDiv.cloneNode();
    $imgContainer.setAttribute("id", containerName);

    $body.appendChild( $modalBg );
    $body.appendChild( $imgContainer );

    $subject.innerHTML = "title";
    $txt.innerHTML = $title[0].innerHTML;

    fragment.appendChild( $subject );
    fragment.appendChild( $txt );

    for(var i = 0, len = $meta.length; i < len; i ++){
      var attr = $meta[i].attributes;

      for(var j = 0, attrLen = attr.length; j < attrLen; j ++){
        var metaVal = tempDiv.cloneNode(),
            metaSub;
        if( attr[j].name === "charset" ){
          metaSub = tempDiv.cloneNode();
          metaSub.className = "subject";
          metaSub.innerHTML = "charset";
          fragment.appendChild( metaSub );
        }

        if( attr[j].name === "content" || attr[j].name === "value" || attr[j].name === "charset" ){
          metaVal.className = "content";
        } else {
          metaVal.className = "subject";
        }

        if( /(\.(png|jpg|gif))$/i.test( attr[j].value ) ){
          var img = new Image();
          img.src = attr[j].value;
          img.setAttribute("class", "meta-image")
          fragment.appendChild( img );
        }

        if( /^https?:\/\//.test( attr[j].value ) ){
          var anchor = document.createElement("a");
          anchor.setAttribute("href", attr[j].value);
          anchor.setAttribute("target", "_blank");
          anchor.setAttribute("class", "meta-anchor");
          anchor.innerHTML = attr[j].value;
          metaVal.appendChild(anchor);
        } else {
          metaVal.innerHTML = attr[j].value;
        }

        fragment.appendChild( metaVal );
      }
    }

    $imgContainer.appendChild( fragment );


    
    
  };

  init();

})(window);