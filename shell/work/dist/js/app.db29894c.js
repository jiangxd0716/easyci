(function(e){function t(t){for(var o,i,l=t[0],n=t[1],c=t[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],o=!0,l=1;l<s.length;l++){var n=s[l];0!==r[n]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=s[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var s=o[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=o,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(s,o,function(t){return e[t]}.bind(null,o));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=n;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var o=s("64a9"),r=s.n(o);r.a},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var o=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},a=[],i=s("cb60"),l={name:"app",components:{Easyci:i["default"]}},n=l,c=(s("034f"),s("2877")),u=Object(c["a"])(n,r,a,!1,null,null,null),d=u.exports,p=s("5c96"),f=s.n(p),m=(s("0fae"),s("bc3a")),g=s.n(m),h=s("4328"),b=s.n(h);g.a.defaults.timeout=24e5,g.a.defaults.headers={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},g.a.interceptors.request.use((function(e){return"post"===e.method&&(e.data=b.a.stringify(e.data)),e}),(function(e){return Promise.reject(e)})),g.a.interceptors.response.use((function(e){return e.data.success?e:Promise.resolve(e)}),(function(e){return Promise.reject(e)}));var v=g.a,w=s("74d1"),k=s.n(w),y=s("cc7d"),x=s.n(y),A=s("8c4f"),L=new A["a"]({routes:[{path:"/",name:"Easyci",component:function(){return Promise.resolve().then(s.bind(null,"cb60"))}}]}),D=L;o["default"].use(A["a"]),o["default"].use(f.a),o["default"].config.productionTip=!1,o["default"].prototype.axios=v,o["default"].prototype.Stomp=k.a,o["default"].prototype.SockJS=x.a,o["default"].prototype.Loading=p["Loading"],o["default"].prototype.$message=f.a.Message,new o["default"]({router:D,render:function(e){return e(d)}}).$mount("#app")},"64a9":function(e,t,s){},"70ca":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAGP0lEQVR4Ae2XA7DsQBqFT3ecmYuZ52uubdu2bdu2bdu2bTytn681esMY+6crqc3OzkNpfaq+6vSf1JzTvHUZ/sXi//MBZOKiNXOjF+msaFzB1NUbGaZ20/mJXdMFXVNPrdcqtUb3147jfZt57CCACi5SbP4Wr8WFdPo7T2OXvftbnnnDq8w+5VpXmi6WRguGZmjo2AEsN0JBUxD4ATqdXrC0Vu18/Sd/Plite/cC0LhggIlbvgHnkyJZ09MT+774+Pte/zJmUdcqrR7iOCYAP4zhBjGFiNFLGVI5LrXfiD//7YPbR45tPgHA584bYOGOr8O5pCnSw25yzYVX3e2WV9q10+4BCKHKDJwBUQx4ZO74ZOzE6BJtO0LbCmHbLq4wPYxus9n7xNcP/qS807wDgAADxCdaXQzCD8JL3/Gml3/NbW96xV0r9RYUKcSoyVEqMJSKohX9IYOjqDOYGoOhMuiqBEmW8KvjNaw2o8Kj7nn9m6+NFl9HYBB8UPFHey4jXXJm7xdufK1LltbrbZgqIxOOYZNMCxxlglrRH8qbKwyqAiiyJNhpOji20ZVvd/3LPCBw/SsT6IcPKl6Wbb324fe4zsLpShuaDPHDhgghRo1yUbTUzxnLiTGDIjFIEgfnHBJnOLHRwuT43tLMxO5P7a6UFQJ5eH8hgjR/uxte9kGdgMtBQD0OyFLy46AwDAUyLdHoCzRqTRgi+UaYkTd4AmfUMjBOAPj2b1dwt1teea453nkZgTy8v6Cr7LZXvsx0ab1mIQYgSB+SJoqAgIiSfkqm7FHUcwXLCVBpuvLE3uHbE8jD+wsFU7+lpCgIo1gQhIBPeAFgezE6ToRGNxKt7ceiTu/pO/E9AUTimEaizaDrAbPj5dKPJzY5gQzRyTM3Xp6rdz14qambHTWXTO0YzV6MsxSAWnH0LI/eE26QhqE2pNQBJQmJKCGKsF7pYGZ8V2H6t8YlCWTwfGfmR9Cnx3eVtuoWXF8Yw04vmA6ZtewIZ3s0A0STaFlJqEi8twj6XgTxfQqQkAvS7LoYHjaLHLgOgQyZ52+lojm5p1TUNlo2wCVYsio+YCwZBRcXT/4i8gOks0NkIdwQrufD8wOBT/xNnHFZuiJykqmATKfVqTOrW3V7dN/+0WrHowwcDLIwo5GQWbLrYwqE9CqGCGV5aQgnhON4cF1f4HkiBBIxsTlpLvzgZ8iJUwEZs70z4Zm1er1cVGHZHizLRcf2xVQ3iXT6qY1F28wtRdcKYNkuLMeFTSEcV4AoSU/aPWqA/mJ2gODXBDLk/it6Zavx52FduhyZU+JYbKAgUOB6MhRFgsQhzji9ErveDyIxymTEDmEnIQjb9sQMZJqkE7a0Ue9d80qLK8hJpgLy+u0fVr7ped7dLdthiXmYGqiKDFlOAvB0PpMAYoOJdXY9EUKMPiOvqX1D+NofTtbQJ3l5vY684LJv/OzgyepV5sf3/uZ4lUYYQvVp9HISQFyxYOkmiMQ9IXa7GK3riVkQQfLaPWJA47FTOWu9B33iVESeWGOV3/5x/XkjOneKmoRu10anQ3QttDs2YeWhuo2Mbs/pNxcb9tbXmsanvnHwaGlIeweBPLyvICgP6+/97LcO//ZW15gU00s//vfm7f4wtpjyZDn6dYMrTuDXR09XKl3rrgT64YOKhz7xeL59/Ff3/+Evj1XufuNLwNBkMc1ijW1PbDJCTDddOmKzDtK1LnMAw2rs/vxXv3/t2lee2SI4gTwM/yiVKBDG3ivf+9qXveoN3nLXW11j/6+P7fC/rDRwMRotarjdtWfx+78st777o19/bO2Hr30jAJuwiB7hI1V/AJaam1krG6XRyRs85nl3u+31blAul82Dx3ewWeuK49e/1ntGTCxOljC71wg/8ZVfrB37yaee217/zcmccb6NM8N+mYMoX/pWV7/stW7zlEvPj49MHdit64auhGBwvRDJZvUp0Xat4ZxZrTiHDh789vqv3vMhBEFiZudMM+z8iAfJSI2NFD1Fk8zS8NDEVS5l7F680nD5wBVNQzerle2TdmPlUG/r98ec2qltAG6KQ9gDwIUCZO+0NICaPivps5TCs2ueiIiQCAif8FJcwk6f4wEmFy2emsqC8wYQhKJ2Af3/v+O/Auk3Y1J9MJzeAAAAAElFTkSuQmCC"},a081:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEpElEQVR4AWL8//8/w0ACkhww6oDExERA+9UAK9kWBM9YT/Pe2vtt27Zt27at4Nte27Zt23jWGPurkumkk8H9ireTylx21e3TOOMNhUJH+P3+s7xe77nt2rXr7PP53Nu3b6+sr6+f3dzcPDqdTs8bMGBA5f8qwAa76667XjzyyCOfOeKII4rKysp8MBOLxUwikTAej8fE43EDAclt27Y1TZs2bV5tbe1Nffr0qf3PAq699trOHTt2HHjjjTceUlJS4mlsbDR8h8DXmlQqZSiCSCaTBtExwWBwz4gRI3atWLHiiZ49e/b71wLuvPPO+4477riPzj///Ap8HQmNw+EwYiQnqQhgFAg+17ZtW1NZWRkaPnz4lLVr114xceLEZC4Oez7ym2666eCzzjrrk3PPPbcC4TQ0hprA+suxcbvdhHG5XMbpdIpAs3XrVh4Hbr311vM7der0mXJtLeCGG25wIOwDTjzxxCDJ6VyISC4QASQWcsJutzNvTFNTk4lEIs7TTz/9juuuu+7ovyuA6/gp1n6/mpoacUoCkkkE9FcTJNXkAlNVVWUOOeSQYJcuXXo9+OCDLksBV1999b5QfBcOnVxjOqFTISApBfBXE2pimv7dsGGDufLKK/dBNN6zEsCvv/Swww4Loq6zIqOzX871vTzGBOU7zpYtW15uKSAQCFzIMAuRgNEgmOXRaJS/co335Xn+CrQww/Lt0KFD8O2337YXFIDutg8JxLEuNZKy+fA+f3nOe4R+XgRoUAASO7B48eID8wpgq23fvn2Q2SvEQk4IuUCL4H0RoqMnAvh8eXl5EaJ7iuZ06hMQd6yoqPAgWfgyHTK5JJR0LskmjSirE+olESFiSFwbqufIfALofMOOHTsi+++/fxmjICaOREDGspaIkGsClZyMWAqRmJZ3CTA8UphsNUhEcSCh1+HPOpahpInVEkh1sTU3QezsvBGg7d69ewVCdRicZJWernd9XSDkAh1+DDKzbNmyUP/+/TcXFID1H4kvux4ObCRgs+GvJhezEqGttLTUILrVVn2A4Rwxc+bMKpSjVEFWNQh09mtocgl/OByOYq78YCmAuxmE6jVEIsqWq8mIfMcCHXZpxZgDZtCgQYu6dev2jaUAGh78EXN8LsYoQyxkQphTlM54ZWw+BjukSoT/WstpqFTblyxZcvuECRMqDzroIE47OrdKtCxDU2NviWFJPx0yZEgD/GbxOXOQuzkSZsyYkcDvI1i3LzAh22A026urmUPWxqXbZ599zOzZsxuwE+oG8oHMQ8AF/yF8TEJvyTS5jeSAX36Li4vLLrrootcuu+yyM+DUv2vXLm4+JdH0u0w2tltWTqpv375bx44d+ypG8VrcDgMh/bsHpgVoRyTPAnbEx5955pnP7LfffqXIDS/q2oW2Ks2GWZ5GF41u3rw5OmfOnNHjxo37DflBsogiJ0geyRkBJcKXIeYv4c3Ag68s6dq160Eo06Mw34/0w9C81oJ8PvaBq9DtdrGaM4hSgIaQFxKgl8OTEeDOHLsyx44M7ACfo5M0kAKSQAKIZxAjMY8l7JYC8lVGhtRJWAggUvCd3vvn1Mr+AjvpIeogJTHYAAAAAElFTkSuQmCC"},a875:function(e,t,s){},cb60:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticStyle:{width:"80%",margin:"0 auto"}},[o("div",{staticClass:"demo_container"},[o("el-select",{staticClass:"demo",staticStyle:{width:"10%"},attrs:{placeholder:"请选择服务器"},model:{value:e.serverid,callback:function(t){e.serverid=t},expression:"serverid"}},e._l(e.searchServerList,(function(e){return o("el-option",{key:e.id,attrs:{label:e.server_ip,value:e.id}})})),1),o("el-row",{staticClass:"button"},[o("el-button",{on:{click:function(t){return e.add()}}},[e._v("新增")])],1),o("el-row",{staticClass:"button"},[o("el-button",{on:{click:function(t){return e.getOnePs()}}},[e._v("查看")])],1),o("el-row",{staticClass:"button"},[o("el-button",{on:{click:function(t){return e.resetPs()}}},[e._v("重置")])],1),o("el-row",{staticClass:"button"},[o("el-button",{on:{click:function(t){return e.autoFresh()}}},[e._v(e._s(e.isAutoFresh?"关闭自动刷新":"开启自动刷新"))])],1)],1),o("div",{staticClass:"demo_container"},[o("el-select",{staticClass:"select",attrs:{filterable:"",placeholder:"构建项目",value:""},model:{value:e.giturl,callback:function(t){e.giturl=t},expression:"giturl"}},e._l(e.gitlabPro,(function(t){return o("el-option",{key:t.http_url_to_repo,attrs:{label:t.name,value:t.http_url_to_repo}},[o("span",{staticStyle:{float:"left"}},[e._v(e._s(t.name))]),o("span",{staticStyle:{float:"right",color:"#8492a6","font-size":"13px"}},[e._v(e._s(t.http_url_to_repo))])])})),1),o("el-input",{staticClass:"demo",staticStyle:{width:"10%"},attrs:{placeholder:"端口5000:5000"},model:{value:e.ports,callback:function(t){e.ports=t},expression:"ports"}}),o("el-select",{staticClass:"select",attrs:{placeholder:"项目语言",value:""},model:{value:e.langu,callback:function(t){e.langu=t},expression:"langu"}},e._l(e.langopt,(function(e){return o("el-option",{key:e.label,attrs:{label:e.label,value:e.label}})})),1),o("el-input",{staticClass:"demo",attrs:{placeholder:"请输入收件人邮箱"},model:{value:e.maillist,callback:function(t){e.maillist=t},expression:"maillist"}}),o("el-select",{staticClass:"select",attrs:{placeholder:"部署方式",value:""},model:{value:e.deploy_way,callback:function(t){e.deploy_way=t},expression:"deploy_way"}},e._l(e.deployServerList,(function(e){return o("el-option",{key:e.server_ip,attrs:{label:e.server_ip,value:e.server_ip}})})),1),o("el-row",{staticClass:"button"},[o("el-button",{on:{click:function(t){return e.deploy()}}},[e._v("部署")])],1),o("el-dialog",{staticStyle:{padding:"50px"},attrs:{title:"部署日志",visible:e.dialogVisible,"close-on-click-modal":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:function(t){return e.reflashPage()}}},[o("el-input",{attrs:{id:"textarea_id",type:"textarea",rows:20,placeholder:"这是日志",readonly:""},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),o("el-dialog",{staticStyle:{padding:"50px"},attrs:{title:"实时日志",visible:e.dockerlogVisible,"close-on-click-modal":!1,width:"80%"},on:{"update:visible":function(t){e.dockerlogVisible=t},close:function(t){e.closeWebSocket(),e.closeSocket()}}},[o("div",{staticStyle:{"text-align":"left",height:"450px","overflow-y":"scroll",background:"#333",color:"#aaa",padding:"50px"},attrs:{id:"log-container"},domProps:{innerHTML:e._s(e.deployLog)}})]),o("el-dialog",{attrs:{title:"添加服务器",visible:e.showInsertServe,"close-on-click-modal":!1,width:"40%"},on:{"update:visible":function(t){e.showInsertServe=t}}},[o("el-form",{attrs:{model:e.form}},[o("el-form-item",{attrs:{label:"服务器IP地址：","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.server,callback:function(t){e.$set(e.form,"server",t)},expression:"form.server"}})],1),o("el-form-item",{attrs:{label:"服务器端口：","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.port,callback:function(t){e.$set(e.form,"port",t)},expression:"form.port"}})],1),o("el-form-item",{attrs:{label:"用户名：","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),o("el-form-item",{attrs:{label:"密码：","label-width":e.formLabelWidth}},[o("el-input",{attrs:{"auto-complete":"off"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.addserver()}}},[e._v("添加")])],1)],1),o("el-dialog",{staticStyle:{padding:"50px"},attrs:{title:"设置系统配置","show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,visible:e.isLoginGitLabVisible,width:"80%"},on:{"update:visible":function(t){e.isLoginGitLabVisible=t}}},[o("el-form",{ref:"loginForm",staticClass:"login-box",attrs:{model:e.loginform,rules:e.rules,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"gitlab",prop:"githost"}},[o("el-input",{attrs:{type:"text",placeholder:"请输入gitlab地址"},model:{value:e.loginform.githost,callback:function(t){e.$set(e.loginform,"githost",t)},expression:"loginform.githost"}})],1),o("el-form-item",{attrs:{label:"账号",prop:"username"}},[o("el-input",{attrs:{type:"text",placeholder:"请输入账号"},model:{value:e.loginform.username,callback:function(t){e.$set(e.loginform,"username",t)},expression:"loginform.username"}})],1),o("el-form-item",{attrs:{label:"密码",prop:"password"}},[o("el-input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.loginform.password,callback:function(t){e.$set(e.loginform,"password",t)},expression:"loginform.password"}})],1),o("el-form-item",[o("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.onSubmit("loginForm")}}},[e._v("登录")])],1)],1),o("el-dialog",{attrs:{title:"温馨提示",visible:e.loginmessage,width:"30%"},on:{"update:visible":function(t){e.loginmessage=t}}},[o("span",[e._v("请输入账号和密码、git地址")]),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{attrs:{type:"primary"},on:{click:function(t){e.loginmessage=!1}}},[e._v("确 定")])],1)])],1)],1),e._m(0),o("el-table",{attrs:{data:e.localtableData,border:""}},[o("el-table-column",{attrs:{prop:"container_id",label:"容器id",width:"115"}}),o("el-table-column",{attrs:{prop:"image_name",label:"镜像名称",width:"335"}}),o("el-table-column",{attrs:{label:"状态",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return["Up"===t.row.status?o("img",{staticClass:"head_pic",attrs:{src:s("70ca"),width:"30",height:"30"}}):"Exited"===t.row.status?o("img",{staticClass:"head_pic",attrs:{src:s("a081"),width:"30",height:"30"}}):e._e()]}}])}),o("el-table-column",{attrs:{prop:"created",label:"创建时间",width:"120"}}),o("el-table-column",{attrs:{prop:"ports",label:"端口映射",width:"320"}}),o("el-table-column",{attrs:{prop:"container_name",label:"容器名称",width:"155"}}),o("el-table-column",{attrs:{prop:"server_ip",label:"服务器",width:"110"}}),o("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.startDocker(t.row)}}},[e._v("启动")]),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.stopDocker(t.row)}}},[e._v("停止")]),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.restartDocker(t.row)}}},[e._v("重启")]),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.destroyDocker(t.row)}}},[e._v("销毁")])]}}])})],1),e._m(1),o("el-table",{attrs:{data:e.tableData,border:""}},[o("el-table-column",{attrs:{prop:"container_id",label:"容器id",width:"115"}}),o("el-table-column",{attrs:{prop:"image_name",label:"镜像名称",width:"335"}}),o("el-table-column",{attrs:{label:"状态",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return["Up"===t.row.status?o("img",{staticClass:"head_pic",attrs:{src:s("70ca"),width:"30",height:"30"}}):"Exited"===t.row.status?o("img",{staticClass:"head_pic",attrs:{src:s("a081"),width:"30",height:"30"}}):e._e()]}}])}),o("el-table-column",{attrs:{prop:"created",label:"创建时间",width:"120"}}),o("el-table-column",{attrs:{prop:"ports",label:"端口映射",width:"320"}}),o("el-table-column",{attrs:{prop:"container_name",label:"容器名称",width:"155"}}),o("el-table-column",{attrs:{prop:"server_ip",label:"服务器",width:"110"}}),o("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.startDocker(t.row)}}},[e._v("启动")]),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.stopDocker(t.row)}}},[e._v("停止")]),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.restartDocker(t.row)}}},[e._v("重启")]),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.destroyDocker(t.row)}}},[e._v("销毁")]),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(s){return e.dockerLogs(t.row)}}},[e._v("日志")])]}}])})],1)],1)])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h4",[s("p",{attrs:{align:"left"}},[e._v("本机容器列表")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h4",[s("p",{attrs:{align:"left"}},[e._v("服务器容器列表")])])}],a={name:"easyci",props:{msg:String},data:function(){return{params:{username:"",password:""},dialogTableVisible:!1,tableData:[],localtableData:[],langopt:[{label:"java"},{label:"vue"}],langu:"",serverid:"",deployopt:[],gitlabPro:[],deploy_way:"",searchServerList:[],deployServerList:[],showInsertServe:!1,form:{server:"",port:"",username:"",password:"",islocal:0},giturl:"",ports:"",maillist:"",textarea:"",start:0,status:!0,dialogVisible:!1,websocket:null,stompClient:null,deployLog:"",deploying_project:"",dockerlogVisible:!1,img:"",isDockerPsOne:!1,isReSet:!1,isAutoFresh:!1,isLoginGitLabVisible:!1,formLabelWidth:"120px",freshnum:0,container_name:"",server_ip:"",loginmessage:!1,loginform:{username:"",password:"",githost:""},random:"",rules:{githost:[{required:!0,message:"地址不可为空",trigger:"blur"}],username:[{required:!0,message:"账号不可为空",trigger:"blur"}],password:[{required:!0,message:"密码不可为空",trigger:"blur"}]}}},mounted:function(){window.onbeforeunload=function(){var e=this;e.websocket.close(),e.stompClient.disconnect(),e.websocket=null,e.stompClient=null},this.IsSetSystemSetting()},methods:{getProjects:function(){var e=this;this.axios.post("/api/gitlab/projects",{}).then((function(t){t.data.status?e.gitlabPro=t.data.list:e.$message.error(t.data.errorDesc)})).catch((function(e){console.log(e)}))},onSubmit:function(e){var t=this;this.axios.post("/api/gitlab/login",{username:t.loginform.username,password:t.loginform.password,githost:t.loginform.githost}).then((function(e){e.data.status?(t.$message.success(e.data.errorDesc),t.isLoginGitLabVisible=!1,t.getSearchServerList(),t.getDeployServerList(),t.getProjects(),t.getDockerPs(),t.getLocalPs()):t.$message.error(e.data.errorDesc)})).catch((function(e){console.log(e)}))},IsSetSystemSetting:function(){var e=this;this.axios.post("/api/gitlab/isSet",{}).then((function(t){t.data.status?(e.isLoginGitLabVisible=!1,e.getSearchServerList(),e.getDeployServerList(),e.getProjects(),e.getDockerPs(),e.getLocalPs()):(e.isLoginGitLabVisible=!0,e.$message.error(t.data.errorDesc))})).catch((function(e){console.log(e)}))},getDockerPs:function(){var e=this;this.axios.post("/api/docker/allps",{}).then((function(t){t.data.status?("Up"===t.data.list.status?e.img=s("70ca"):e.img=s("a081"),e.tableData=t.data.list):(e.showInsertServe=!0,e.$message.error("请添加服务器"))})).catch((function(e){console.log(e)}))},getSearchServerList:function(){var e=this;this.axios.get("/api/server/searchServerList",{}).then((function(t){e.searchServerList=t.data.list})).catch((function(e){console.log(e)}))},getDeployServerList:function(){var e=this;this.axios.get("/api/server/deployServerList",{}).then((function(t){e.deployServerList=t.data.list})).catch((function(e){console.log(e)}))},autoFresh:function(){var e=this,t=this;t.freshnum=0,t.isAutoFresh=!t.isAutoFresh;var s=setInterval((function(){t.isAutoFresh?(0===t.freshnum&&t.$message("开启自动刷新"),!t.isReSet&&t.isDockerPsOne?(e.getOnePs(),e.getLocalPs(),t.freshnum+=1):(t.freshnum+=1,e.getDockerPs(),e.getLocalPs())):(clearInterval(s),t.$message("关闭自动刷新"))}),1e3)},resetPs:function(){var e=this;e.serverid="",e.isReSet=!0,this.getDockerPs(),this.getLocalPs()},getLocalPs:function(){var e=this;this.axios.post("/api/docker/localps",{}).then((function(t){"Up"===t.data.list.status?e.img=s("70ca"):e.img=s("a081"),e.localtableData=t.data.list})).catch((function(e){console.log(e)}))},getOnePs:function(){var e=this;if(null==this.serverid||""===this.serverid)return e.$message.warning("请选择服务器ip"),!1;this.axios.post("/api/docker/oneps",{serverid:this.serverid}).then((function(t){e.tableData=t.data.list,e.isDockerPsOne=t.data.status,e.isReSet=!t.data.status})).catch((function(e){console.log(e)}))},add:function(){this.showInsertServe=!this.showInsertServe},addserver:function(){var e=this;this.axios.post("/api/server/add",{server_ip:this.form.server,server_port:this.form.port,server_username:this.form.username,server_password:this.form.password,is_local:this.form.islocal}).then((function(t){t.data.status?(e.$message.success(t.data.errorDesc),e.showInsertServe=!1,e.reflashPage()):e.$message.error(t.data.errorDesc)}))},deploy:function(){var e=this;e.status=!0,e.dialogVisible=!0,e.textarea="",this.axios.post("/api/docker/build",{giturl:this.giturl,ports:this.ports,language:this.langu,mails:this.maillist,deploy_way:this.deploy_way}).then((function(t){e.status=t.data.status,t.data.status?(e.$message.success(t.data.errorDesc),e.isDockerPsOne?(e.getOnePs(),e.getLocalPs()):(e.getDockerPs(),e.getLocalPs())):(e.dialogVisible=t.data.status,e.$message.error(t.data.errorDesc)),setTimeout((function(){e.logs()}),2e3)}))},logs:function(){this.start=0,this.deployLogs()},deployLogs:function(){var e=this;this.axios.post("/api/docker/deployLogs",{giturl:this.giturl,deploy_way:this.deploy_way,start:this.start}).then((function(t){if("…"===t.data.list.log)e.textarea="",e.deployLogs();else if(e.textarea+=t.data.list.log,e.start=t.data.list.start,0!==t.data.list.endsign){e.deployLogs();var s=document.getElementById("textarea_id");s.scrollTop=s.scrollHeight}}))},dockerLogs:function(e){var t=this;t.dockerlogVisible=!0,t.deployLog="",t.random=Math.floor(20*Math.random()),t.container_name=e.container_name,t.server_ip=e.server_ip;var s=e.container_name+"|"+t.random+"|"+e.server_ip;"WebSocket"in window?this.websocket=new WebSocket("ws://"+location.hostname+":9875/websocket/"+s):alert("Not support websocket"),t.dockerlogVisible?t.openSocket():(t.closeWebSocket(),t.closeSocket())},killDockerLogs:function(e){var t=this;this.axios.post("/api/docker/killLogs",{container_name:t.container_name,server_ip:t.server_ip}).then((function(e){e.data.status&&t.$message("关闭实时日志")}))},killBuild:function(){var e=this;this.axios.post("/api/docker/killbuild",{giturl:e.giturl}).then((function(t){t.data.status&&(e.$message("关闭构建"),e.status=!1)}))},startDocker:function(e){var t=this;this.axios.post("/api/docker/dockerExec",{container_name:e.container_name,server_ip:e.server_ip,cmd:"start"}).then((function(e){e.data.status?(t.$message.success(e.data.errorDesc),t.isDockerPsOne?(t.getOnePs(),t.getLocalPs()):(t.getDockerPs(),t.getLocalPs())):t.$message.error(e.data.errorDesc)}))},stopDocker:function(e){var t=this;this.axios.post("/api/docker/dockerExec",{container_name:e.container_name,server_ip:e.server_ip,cmd:"stop"}).then((function(e){e.data.status?(t.$message.success(e.data.errorDesc),t.isDockerPsOne?(t.getOnePs(),t.getLocalPs()):(t.getDockerPs(),t.getLocalPs())):t.$message.error(e.data.errorDesc)}))},restartDocker:function(e){var t=this;this.axios.post("/api/docker/dockerExec",{container_name:e.container_name,server_ip:e.server_ip,cmd:"restart"}).then((function(e){e.data.status?(t.$message.success(e.data.errorDesc),t.isDockerPsOne?(t.getOnePs(),t.getLocalPs()):(t.getDockerPs(),t.getLocalPs())):t.$message.error(e.data.errorDesc)}))},destroyDocker:function(e){var t=this;if("Up"===e.status)return t.$message.warning("请先停止容器！"),!1;this.axios.post("/api/docker/dockerExec",{container_name:e.container_name,server_ip:e.server_ip,cmd:"rm"}).then((function(e){e.data.status?(t.$message.success(e.data.errorDesc),t.isDockerPsOne?(t.getOnePs(),t.getLocalPs()):(t.getDockerPs(),t.getLocalPs())):t.$message.error(e.data.errorDesc)}))},closeWebSocket:function(){var e=this;null!=this.websocket&&this.websocket.close(),e.dockerlogVisible=!1},openSocket:function(){var e=this;if(null==this.stompClient){var t=new this.SockJS("http://"+location.hostname+":9875/websocket");this.stompClient=this.Stomp.over(t),this.stompClient.connect({},(function(){e.stompClient.subscribe("/topic/"+e.container_name+e.random,(function(t){e.deployLog+=t.body+"</br>";var s=document.getElementById("log-container");s.scrollTop=s.scrollHeight}),{token:"kltoen"})}))}},closeSocket:function(){var e=this;null!=this.stompClient&&(this.stompClient.disconnect(),this.stompClient=null,e.dockerlogVisible=!1)},reflashPage:function(){var e="_empty?time="+(new Date).getTime()/500;this.$router.push(e),this.$router.go(-1)}}},i=a,l=(s("f1bc"),s("2877")),n=Object(l["a"])(i,o,r,!1,null,"98e33326",null);t["default"]=n.exports},f1bc:function(e,t,s){"use strict";var o=s("a875"),r=s.n(o);r.a}});
//# sourceMappingURL=app.db29894c.js.map