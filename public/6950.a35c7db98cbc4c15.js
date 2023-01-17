"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6950],{6950:(v,h,i)=>{i.r(h),i.d(h,{AccountDetailPageModule:()=>C});var s=i(6895),g=i(433),a=i(5133),p=i(5017),u=i(4464),t=i(4650),r=i(9846),d=i(3071);let f=(()=>{class o{constructor(n,e){this.renderer=n,this.domCtrl=e}onContentScroll(n){const e=n.detail.scrollTop;e>0?(this.moveImage=e/1.6,this.scaleImage=1):(this.scaleImage=-e/200+1,this.moveImage=e/1.6),this.domCtrl.write(()=>{this.renderer.setStyle(this.imageEl,"webkitTransform","translate3d(0,"+this.moveImage+"px,0) scale("+this.scaleImage+","+this.scaleImage+")")})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(t.Qsj),t.Y36(a.Cb))},o.\u0275dir=t.lG2({type:o,selectors:[["","appParallax",""]],hostBindings:function(n,e){1&n&&t.NdJ("ionScroll",function(m){return e.onContentScroll(m)})},inputs:{imageEl:["appParallax","imageEl"]}}),o})();const Z=[{path:"",component:(()=>{class o{constructor(n,e,c,m,D,U){this.route=n,this.navCtrl=e,this.alertCtrl=c,this.uiService=m,this.userService=D,this.document=U,this.user={id:"",avatar:"",name:"",email:"",phone:""},this.showLocationDetail=!1}ngOnInit(){this.loadUser(this.route.snapshot.params.id);const n=(0,u.n$)("pwa")?44:56;this.document.documentElement.style.setProperty("--header-position",`calc(env(safe-area-inset-top) + ${n}px)`)}onScroll(n){this.showLocationDetail=n.detail.scrollTop>40}loadUser(n){this.userService.getUser(n).subscribe(e=>{this.user=e,console.log(e)})}regresar(){this.navCtrl.navigateBack("/tabs/account")}accountUpdate(n){this.navCtrl.navigateForward(`/tabs/account/account-update/${n}`)}accountLocation(){this.navCtrl.navigateForward("/tabs/account/account-location")}dasherize(n){return n.replace(/[A-Z]/g,function(e,c){return(0!==c?"-":"")+e.toLowerCase()})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(p.gz),t.Y36(a.SH),t.Y36(a.Br),t.Y36(r.F),t.Y36(d.K),t.Y36(s.K0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-account-detail"]],decls:59,vars:13,consts:[[1,"ion-no-border"],["slot","start"],["fill","solid","color","dark","shape","round",3,"tap"],["md","arrow-back-sharp","slot","icon-only","color","light"],["slot","end"],["md","pencil-sharp","slot","icon-only","color","light"],["scrollEvents","true",3,"fullscreen","appParallax","ionScroll"],[1,"header-image"],["img",""],[1,"main"],["size","3"],["fill","clear"],["md","call-sharp","slot","icon-only","color","dark"],["md","chatbox-sharp","slot","icon-only","color","dark"],["md","mail-sharp","slot","icon-only","color","danger"],["fill","clear",3,"tap"],["md","map-sharp","slot","icon-only","color","primary"],["lines","none"],["md","mail-sharp","slot","icon-only","color","primary"],["fill","clear","slot","start"],["md","call-sharp","slot","icon-only","color","primary"],[1,"ion-text-center"],["fill","clear","slot","end"],["md","logo-whatsapp","slot","icon-only","color","success"]],template:function(n,e){if(1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",2),t.NdJ("tap",function(){return e.regresar()}),t._UZ(4,"ion-icon",3),t.qZA()(),t.TgZ(5,"ion-buttons",4)(6,"ion-button",2),t.NdJ("tap",function(){return e.accountUpdate(e.user.id)}),t._UZ(7,"ion-icon",5),t.qZA()()()(),t.TgZ(8,"ion-content",6),t.NdJ("ionScroll",function(m){return e.onScroll(m)}),t._UZ(9,"div",7,8),t.TgZ(11,"div",9)(12,"ion-row")(13,"ion-col",10)(14,"ion-button",11),t._UZ(15,"ion-icon",12),t.qZA()(),t.TgZ(16,"ion-col",10)(17,"ion-button",11),t._UZ(18,"ion-icon",13),t.qZA()(),t.TgZ(19,"ion-col",10)(20,"ion-button",11),t._UZ(21,"ion-icon",14),t.qZA()(),t.TgZ(22,"ion-col",10)(23,"ion-button",15),t.NdJ("tap",function(){return e.accountLocation()}),t._UZ(24,"ion-icon",16),t.qZA()()()(),t.TgZ(25,"ion-list")(26,"ion-list-header")(27,"ion-label")(28,"h2")(29,"b"),t._uU(30,"Name: "),t.qZA(),t._uU(31),t.qZA(),t.TgZ(32,"h3")(33,"b"),t._uU(34,"Email: "),t.qZA(),t._uU(35),t.qZA(),t.TgZ(36,"h3")(37,"b"),t._uU(38,"City: "),t.qZA(),t._uU(39),t.qZA(),t.TgZ(40,"h3")(41,"b"),t._uU(42,"Created: "),t.qZA(),t._uU(43),t.ALo(44,"date"),t.qZA()()(),t.TgZ(45,"ion-item",17)(46,"ion-label")(47,"b"),t._uU(48),t.qZA()(),t.TgZ(49,"ion-button",11),t._UZ(50,"ion-icon",18),t.qZA()(),t.TgZ(51,"ion-item",17)(52,"ion-button",19),t._UZ(53,"ion-icon",20),t.qZA(),t.TgZ(54,"ion-label",21)(55,"b"),t._uU(56),t.qZA()(),t.TgZ(57,"ion-button",22),t._UZ(58,"ion-icon",23),t.qZA()()()()),2&n){const c=t.MAs(10);t.xp6(8),t.Q6J("fullscreen",!0)("appParallax",c),t.xp6(1),t.Udp("background-image","url("+e.user.avatar+")"),t.xp6(22),t.Oqu(e.user.name),t.xp6(4),t.Oqu(e.user.email),t.xp6(4),t.Oqu(e.user.city),t.xp6(4),t.Oqu(t.xi3(44,10,e.user.created,"short")),t.xp6(5),t.Oqu(e.user.email),t.xp6(8),t.Oqu(e.user.phone)}},dependencies:[a.YG,a.Sm,a.wI,a.W2,a.Gu,a.gu,a.Ie,a.Q$,a.q_,a.yh,a.Nd,a.sr,f,s.uU],styles:["ion-toolbar[_ngcontent-%COMP%]{--background: transparent}ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:25px}ion-content[_ngcontent-%COMP%]{position:absolute;--background: #f1f1f1;--padding-bottom: 50px}.light-bg[_ngcontent-%COMP%]{background:#ffffff;z-index:10}.header-image[_ngcontent-%COMP%]{background-repeat:no-repeat;background-position:center;background-size:cover;height:50vh;will-change:transform}ion-row[_ngcontent-%COMP%]{position:relative;border-radius:5px;background:#ffffff;border:2px solid #000}ion-list-header[_ngcontent-%COMP%]{--background: #f1f1f1}.main[_ngcontent-%COMP%]{z-index:10;background:linear-gradient(var(--custombg) 20%,var(--ion-color-light) 30%)}"]}),o})()}];let A=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(Z),p.Bz]}),o})();var P=i(5503);let y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez]}),o})(),C=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,g.u5,a.Pc,A,P.D,y]}),o})()},9846:(v,h,i)=>{i.d(h,{F:()=>p});var s=i(655),g=i(4650),a=i(5133);let p=(()=>{class u{constructor(r,d){this.alertController=r,this.toastController=d}alertaInformativaLogin(r,d,f){return(0,s.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({header:r,subHeader:d,message:f,buttons:["OK"]})).present()})}alertaInformativa(r){return(0,s.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({message:r,buttons:["OK"]})).present()})}presentToast(r){return(0,s.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:r,duration:1500,position:"bottom",cssClass:"miToast"})).present()})}}return u.\u0275fac=function(r){return new(r||u)(g.LFG(a.Br),g.LFG(a.yF))},u.\u0275prov=g.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);