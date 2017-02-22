/* 
* Created by oneplusuniverse. 
* This is file without style.
* to add style use css(scss) file from the project
* Just load it and go on! 
* oneplusuniverse@gmail.com
*/
Object.prototype.setCtxMenu = function(options) {
  this.addEventListener('contextmenu', event => {
    event.preventDefault();
    this._target = event.target || event.srcElement;
    this._targetid = this._target.getAttribute("id");
    this._myContextMenu = new menuObject(options, this._targetid, this._setStyle(this._target));
    this._myContextMenu._showMenu(event.clientX, event.clientY);
  });

  this._setStyle = function(target) {
    this._customcss = '';
    if (options.settings) {
      if (options.settings.font) {
        this._customcss += '.opu-ctxMenu #opu-' + this._targetid + ' *, .opu-revCtxMenu #opu-' + this._targetid + ' *{font-family: ' + options.settings.font + ';}';
      }
      if (options.settings.hasOwnProperty('marker')) { //marker
        if (!options.settings.marker) {
          this._customcss += '.opu-ctxMenu #opu-' + this._targetid + ' ul li:hover:before, .opu-revCtxMenu #opu-' + this._targetid + ' ul li:hover:before {visibility:hidden;}';
        }
      }
      if (options.settings.hovercolor) { //hover-color
        this._customcss += '.opu-ctxMenu #opu-' + this._targetid + ' ul li:hover, .opu-revCtxMenu #opu-' + this._targetid + ' ul li:hover {background: ' + options.settings.hovercolor + '}' +
          '.opu-ctxMenu #opu-' + this._targetid + ' ul .opu-divider:hover, .opu-revCtxMenu #opu-' + this._targetid + ' ul .opu-divider:hover{background: rgba(255, 255, 255, 0);}';
      }
      if (options.settings.backgroundcolor) { //background-color
        this._customcss += '.opu-ctxMenu #opu-' + this._targetid + ', .opu-revCtxMenu #opu-' + this._targetid + ' {background: ' + options.settings.backgroundcolor + '} .opu-ctxMenu #opu-' + this._targetid + ' div, .opu-revCtxMenu #opu-' + this._targetid + 'div {background: ' + options.settings.backgroundcolor + '}';
      }
      if (options.settings.itemHeight) { //itemHeight
        this._customcss += '.opu-ctxMenu #opu-' + this._targetid + ' ul li, .opu-revCtxMenu #opu-' + this._targetid + ' ul li {height: ' + options.settings.itemHeight + '; line-height: ' + options.settings.itemHeight + ';} .opu-ctxMenu #opu-' + this._targetid + ' ul .opu-divider, .opu-revCtxMenu #opu-' + this._targetid + ' ul .opu-divider {height:8px}';
      }
      if (options.settings.textcolor) { //textcolor
        this._customcss += '.opu-ctxMenu #opu-' + this._targetid + ' ul li, .opu-revCtxMenu #opu-' + this._targetid + ' ul li {color: ' + options.settings.textcolor + ';}';
      }
      if (options.settings.submenutextcolor) { //submenutextcolor
        this._customcss += '.opu-ctxMenu #opu-' + this._targetid + ' .opu-subItem , .opu-revCtxMenu #opu-' + this._targetid + ' .opu-subItem {color: ' + options.settings.submenutextcolor + ';} .opu-ctxMenu #opu-' + this._targetid + ' .opu-subItem:after , .opu-revCtxMenu #opu-' + this._targetid + ' .opu-subItem:after { border-top: 1px solid ' + options.settings.submenutextcolor + '; border-right: 1px solid ' + options.settings.submenutextcolor + ';}';
      }
      if (options.settings.hovertextcolor) { //hovertextcolor
        this._customcss += '.opu-ctxMenu #opu-' + this._targetid + ' ul li:hover, .opu-revCtxMenu #opu-' + this._targetid + ' ul li:hover {color: ' + options.settings.hovertextcolor + ';}';
      }
      if (options.settings.dividercolor) { //dividercolor
        this._customcss += '.opu-ctxMenu #opu-' + this._targetid + ' ul .opu-divider:before, .opu-revCtxMenu #opu-' + this._targetid + ' ul .opu-divider:before {background-color:' + options.settings.dividercolor + ';} .opu-ctxMenu #opu-' + this._targetid + ' ul .opu-divider:hover:before, .opu-revCtxMenu #opu-' + this._targetid + ' ul opu-divider:hover:before {background-color:' + options.settings.dividercolor + ' !important; visibility: visible;}';
      }
      if (options.settings.headercolor) { //headercolor
        this._customcss += '.opu-ctxMenu #opu-' + this._targetid + ' ul .opu-header, .opu-revCtxMenu #opu-' + this._targetid + ' ul .opu-header, .opu-ctxMenu #opu-' + this._targetid + ' ul .opu-header:hover, .opu-revCtxMenu #opu-' + this._targetid + ' ul .opu-header:hover {background:' + options.settings.headercolor + ';}';
      }
      if (options.settings.headertextcolor) { //headertextcolor
        this._customcss += '.opu-ctxMenu #opu-' + this._targetid + ' ul .opu-header, .opu-revCtxMenu #opu-' + this._targetid + ' ul .opu-header, .opu-ctxMenu #opu-' + this._targetid + ' ul .opu-header:hover, .opu-revCtxMenu #opu-' + this._targetid + ' ul .opu-header:hover {color:' + options.settings.headertextcolor + ';}';
      }
    }
    var style = document.createElement('style');
    if (style.styleSheet) {
      style.styleSheet.cssText = this._customcss;
    } else {
      style.appendChild(document.createTextNode(this._customcss));
    }
    return style;
  };
};

var menuObject = function(options, targetid, customstyle) {
  this._removeCtxMenu = function(e) {
    if (document.getElementsByClassName('opu-ctxMenu')[0]) {
      document.body.removeChild(document.getElementsByClassName('opu-ctxMenu')[0]);
    }
  };

  this._options = options;
  this._menuStructure = this._options.menu;
  this._settings = this._options.settings;

  (function(instance) {
    window.onresize = function(e) {
      instance._removeCtxMenu();
    };
    instance.detectClick = function(e) {
      switch (e.target.className) {
        case ('opu-switch-label'):
          break;
        case ('opu-divider'):
          break;
        case ('opu-header'):
          break;
        default:
          instance._removeCtxMenu();
          break;
      }
    };
    document.addEventListener("click", instance.detectClick, false);
  })(this);
  this._content = '';
  this._subs = {};
  this._zindex = 100;
  this._createMenu = function(tempOptions) {
    var topItemsCntt = 0;
    var topDividersCntt = 0;
    this._zindex++;
    var tempContent = '<div style="z-index:' + this._zindex + '"><ul>';
    for (var key in tempOptions) {
      if (tempOptions.hasOwnProperty(key)) {
        if (tempOptions[key].onClick) {
          tempContent += '<li id="opu-' + key + '" ' +
            'onclick="(' + tempOptions[key].onClick + ')()' +
            '">' + tempOptions[key].name + '</li>';
        } else if (tempOptions[key].submenu) {
          tempContent += '<li id="opu-' + key + '" class="opu-subItem" onmouseover="' + this._submenuPosition + '">' +
            tempOptions[key].name + '</li>' + this._createMenu(tempOptions[key].submenu.menu).content;
          this._subs['opu-' + key] = this._createMenu(tempOptions[key].submenu.menu).content;
        } else if (tempOptions[key].header) {
          tempContent += '<li id="opu-' + key + '" class="opu-header">' + tempOptions[key].name + '</li>';
        } else {
          tempContent += '<li id="opu-' + key + '">' + tempOptions[key].name + '</li>';
        }
        if (tempOptions[key].divider) {
          tempContent += '<li id="opu-divider-' + key + '" class="opu-divider"></li>';
        }
        topItemsCntt++;
      }
    }
    tempContent += '</ul></div>';
    return {
      content: tempContent,
      topItemsCntt: topItemsCntt
    };
  };

  this._lineheight = '40';
  if (this._settings) {
    if (this._settings.itemHeight) {
      this._lineheight = this._settings.itemHeight.replace(/[^0-9.]/g, "");
    }
  }

  this._submenuPosition = 'javascript:' +
    'var submenu=this.nextElementSibling;' +
    'var rect=submenu.getBoundingClientRect();' +
    'var lirect=this.getBoundingClientRect();' +
    'submenu.style.left =\'100%\';' +
    'var top = this.offsetTop;' +
    'submenu.style.top = top+\'px\';' +
    'rect=submenu.getBoundingClientRect();' +
    'if(rect.right>window.innerWidth){' +
    'submenu.style.left = ((-1) * (lirect.width-10))+\'px\';' +
    '}' +
    'rect=submenu.getBoundingClientRect();' +
    'if((rect.right>window.innerWidth)||(rect.left<0)){' +
    'submenu.style.left = ((-1) * (lirect.left-5))+\'px\';' +
    '}' +
    'if(rect.bottom>window.innerHeight){' +
    'console.log(top - rect.height);' +
    'submenu.style.top = top-(rect.height-lirect.height)+\'px\';' +
    '};';

  this._menu = this._createMenu(this._menuStructure);
  this._content = this._menu.content;

  this._showMenu = function(mouseX, mouseY) {
    this._curX = mouseX;
    this._curY = mouseY;
    this._removeCtxMenu();
    this._menu = document.createElement('div');

    this._menu.innerHTML =
      '<div id="opu-' + targetid + '">' +
      this._content +
      '</div>';
    this._menu.classList.add("opu-ctxMenu");
    document.body.appendChild(this._menu);

    for (var key in this._toggles) {
      if (this._toggles.hasOwnProperty(key)) {
        document.getElementById(key).checked = this._toggles[key];
      }
    }

    this._menu.appendChild(customstyle);

    this._itemHeight = 40;
    this._menuWidth = this._menu.offsetWidth;
    this._menuHeight = this._menu.offsetHeight;

    if (mouseY < this._menuHeight) {
      this._curY = mouseY;
    } else {
      this._curY = mouseY - this._menuHeight;
    }
    if ((window.innerWidth - mouseX) < this._menuWidth) {
      this._curX = mouseX - this._menuWidth;
      this._menu.classList.add("opu-revCtxMenu");
    } else {
      this._curX = mouseX;
    }
    this._menu.style.top = this._curY + 'px';
    this._menu.style.left = this._curX + 'px';
  };
};