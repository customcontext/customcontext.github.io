var myCustomClBck = function(src) {
  alert('hello from '+src);
};

function ready(){
var demo = document.getElementById('demo');
var demo1 = document.getElementById('demo1');

demo.setCtxMenu({
  settings: {
    marker:false,
    itemHeight: '25px',
    dividercolor: '#2f2',
    hovercolor: 'linear-gradient(to bottom, rgba(30,87,153,1) 0%,rgba(41,137,216,1) 50%,rgba(32,124,202,1) 51%,rgba(125,185,232,1) 100%)',//'#4CB8C4',
    backgroundcolor: '#222',
    textcolor: '#ddd',
    hovertextcolor: '#f2f',
    submenutextcolor: '#f33',
    headercolor:'#5c3daa',
    headertextcolor:'#ffff30',
    font:'Barrio'
  },
  menu: {
    item1: {name: 'Header',header:true},
    item2: {name: 'First Item',onClick: e => {myCustomClBck('First Item');}},
    item3: {name: 'Second Item', onClick: e => {myCustomClBck('Second Item');} },
    item4: {name: 'Third Item' ,onClick: e => {myCustomClBck('Third Item');},divider: true},
    item5: {name: 'Fourth Item',onClick: e => {myCustomClBck('Fourth Item');}},
    item6: {name: 'Submenu' ,submenu:{
      menu:{item1:{name: 'Subheader',header:true},
            item2:{name:'First subitem',onClick:e=>{myCustomClBck('First subitem');}},
            item3:{name:'Second subitem',onClick:e=>{myCustomClBck('Second subitem');},divider: true},
            item4:{name:'Third subitem',onClick:e=>{myCustomClBck('Third subitem');}},
          }}},
    item7: {name: 'Sisth Item',onClick: e => {myCustomClBck('Sisth Item');}},
  }
});

demo1.setCtxMenu({
  menu: {
    item1: {name: 'Header 1',header:true},
    item2: {name: 'First Item' ,onClick:e=>{myCustomClBck('First Item');}},
    item3: {name: 'Second Item',onClick: e => {myCustomClBck('Second Item');},divider: true},
    item4: {name: 'Submenu',submenu:{
                    menu:{
                      item1:{name: 'Header 2',header:true},
                      item2:{name:'First SubItem',onClick:e=>{myCustomClBck('First SubItem');}},
                      item3:{name:'Second SubItem',onClick:e=>{myCustomClBck('Second SubItem');}},
                      item4:{name:'SubSubmenu',submenu:{
                        menu:{item1:{name: 'Header 3',header:true},
                              item2:{name:'First SubSubItem',onClick:e=>{myCustomClBck('First SubSubItem');}},
                              item3:{name:'SubSubSubMenu',submenu:{
                                menu:{item1:{name: 'Header 4',header:true},
                                      item2:{name:'First SubSubSubItem',onClick:e=>{myCustomClBck('First SubSubSubItem');}},
                                      item3:{name:'Second SubSubSubItem',onClick:e=>{myCustomClBck('Second SubSubSubItem');}},
                                      item4:{name:'Third SubSubSubItem',onClick:e=>{myCustomClBck('Third SubSubSubItem');}},
                                    }}
                                    },
                              item4:{name:'Third SubSubItem',onClick:e=>{myCustomClBck('Third SubSubItem');}},
                            }}},
                    }
                  }
    },
    item5: {name: 'Fourth Item',onClick: e => {myCustomClBck('Fourth Item');}},
  }
});
}
document.addEventListener("DOMContentLoaded", ready);