!function(e){"use strict";var t,n,a=e,r=a.document,i=r.getElementsByTagName("body")[0],l="__rntMetaChecker-modalBg",s=r.getElementById(l),d="__rntMetaChecker-container",c=r.getElementById(d),o=r.createElement("div"),m=function(){e.removeEventListener("resize",u,!1),e.addEventListener("resize",u,!1),s||c?(i.removeChild(s),i.removeChild(c)):(t=r.getElementsByTagName("meta"),n=r.getElementsByTagName("title"),h())},u=function(){},h=function(){var e=r.createDocumentFragment(),a=o.cloneNode(),m=o.cloneNode();a.className="subject",m.className="content",s=o.cloneNode(),s.setAttribute("id",l),c=o.cloneNode(),c.setAttribute("id",d),i.appendChild(s),i.appendChild(c),a.innerHTML="title",m.innerHTML=n[0].innerHTML,e.appendChild(a),e.appendChild(m);for(var u=0,h=t.length;h>u;u++)for(var p=t[u].attributes,v=0,g=p.length;g>v;v++){var C,N=o.cloneNode();if("charset"===p[v].name&&(C=o.cloneNode(),C.className="subject",C.innerHTML="charset",e.appendChild(C)),N.className="content"===p[v].name||"value"===p[v].name||"charset"===p[v].name?"content":"subject",/(\.(png|jpg|gif))$/i.test(p[v].value)){var b=new Image;b.src=p[v].value,b.setAttribute("class","meta-image"),e.appendChild(b)}if(/^https?:\/\//.test(p[v].value)){var f=r.createElement("a");f.setAttribute("href",p[v].value),f.setAttribute("target","_blank"),f.setAttribute("class","meta-anchor"),f.innerHTML=p[v].value,N.appendChild(f)}else N.innerHTML=p[v].value;e.appendChild(N)}c.appendChild(e)};m()}(window);