"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4729],{4729:(N,_,s)=>{s.r(_),s.d(_,{EventsPageModule:()=>H});var c=s(6895),g=s(433),a=s(5133),m=s(5017),p=s(655),h=s(1135),u=s(7846),v=s(4191),f=s(5819),E=s(8344),t=s(4650),Z=s(9846),C=s(9426);function x(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"ion-toolbar",9)(1,"ion-buttons",10)(2,"ion-button",11),t.NdJ("tap",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.backButtonClickEvent())}),t._UZ(3,"ion-icon",12),t.qZA(),t.TgZ(4,"div",13),t._uU(5),t.ALo(6,"async"),t.qZA()(),t.TgZ(7,"ion-title",14),t._uU(8," DeleteEvent "),t.qZA(),t.TgZ(9,"ion-buttons",15)(10,"ion-button",11),t.NdJ("tap",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.removeSelectedEvent())}),t._UZ(11,"ion-icon",16),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(5),t.Oqu(t.lcZ(6,1,e.eventItemCount))}}function b(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"ion-toolbar",17)(1,"ion-title"),t._UZ(2,"ion-img",18),t._uU(3," Events "),t.qZA(),t.TgZ(4,"ion-buttons",15)(5,"ion-button",19),t.NdJ("tap",function(o){t.CHM(e);const l=t.oxw();return t.KtG(l.menu(o))}),t._UZ(6,"ion-icon",20),t.qZA()()()}}const M=function(n){return{"selected-event":n}};function T(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item-sliding",21),t.NdJ("press",function(){const l=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.selectEvent(l.id))}),t.TgZ(1,"ion-item",22)(2,"ion-thumbnail",10),t._UZ(3,"ion-img",23),t.qZA(),t.TgZ(4,"ion-label",24)(5,"h2")(6,"b"),t._uU(7),t.qZA()(),t.TgZ(8,"h3")(9,"b"),t._uU(10),t.qZA()()()(),t.TgZ(11,"ion-item-options",15)(12,"ion-item-option",25),t.NdJ("tap",function(){const l=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.detailEvent(l))}),t._UZ(13,"ion-icon",26),t.qZA(),t.TgZ(14,"ion-item-option",27),t.NdJ("tap",function(){const l=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.updateEvent(l.id))}),t._UZ(15,"ion-icon",28),t.qZA(),t.TgZ(16,"ion-item-option",29),t.NdJ("tap",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.calendar())}),t._UZ(17,"ion-icon",30),t.qZA()()()}if(2&n){const e=r.$implicit,i=t.oxw();t.Q6J("ngClass",t.VKq(3,M,i.selectedEvent===e.id)),t.xp6(7),t.Oqu(e.title),t.xp6(3),t.Oqu(e.desc)}}function y(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"ion-datetime",43,44),t.NdJ("ionChange",function(){t.CHM(e);const o=t.MAs(1),l=t.oxw(2);return t.KtG(l.evento.start=l.formatDate(o.value))}),t.qZA()}2&n&&t.Q6J("showDefaultButtons",!0)}function P(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"ion-datetime",45,44),t.NdJ("ionChange",function(){t.CHM(e);const o=t.MAs(1),l=t.oxw(2);return t.KtG(l.evento.end=l.formatDate(o.value))}),t.qZA()}2&n&&t.Q6J("showDefaultButtons",!0)}function A(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar",17)(2,"ion-buttons",10)(3,"ion-button",11),t.NdJ("tap",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.cancel())}),t._UZ(4,"ion-icon",31),t.qZA()(),t.TgZ(5,"ion-title"),t._uU(6,"AddEvent"),t.qZA(),t.TgZ(7,"ion-buttons",15)(8,"ion-button",32),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.confirm())}),t._uU(9," Confirm "),t.qZA()()()(),t.TgZ(10,"ion-content",3)(11,"ion-list")(12,"ion-item",33)(13,"ion-label",34)(14,"b"),t._uU(15,"Title"),t.qZA()(),t.TgZ(16,"ion-input",35),t.NdJ("ngModelChange",function(o){t.CHM(e);const l=t.oxw();return t.KtG(l.evento.title=o)}),t.qZA()(),t.TgZ(17,"ion-item",33)(18,"ion-label",34)(19,"b"),t._uU(20,"Description"),t.qZA()(),t.TgZ(21,"ion-input",35),t.NdJ("ngModelChange",function(o){t.CHM(e);const l=t.oxw();return t.KtG(l.evento.desc=o)}),t.qZA()(),t.TgZ(22,"ion-item",33)(23,"ion-label")(24,"b"),t._uU(25,"AllDay?"),t.qZA()(),t.TgZ(26,"ion-toggle",36),t.NdJ("ngModelChange",function(o){t.CHM(e);const l=t.oxw();return t.KtG(l.evento.allDay=o)}),t.qZA()(),t.TgZ(27,"ion-item",33)(28,"ion-label")(29,"b"),t._uU(30,"Start:"),t.qZA()(),t.TgZ(31,"ion-input",37),t.NdJ("ngModelChange",function(o){t.CHM(e);const l=t.oxw();return t.KtG(l.evento.start=o)}),t.qZA(),t.TgZ(32,"ion-button",38),t._UZ(33,"ion-icon",39),t.qZA(),t.TgZ(34,"ion-popover",40),t.YNc(35,y,2,1,"ng-template"),t.qZA()(),t.TgZ(36,"ion-item",33)(37,"ion-label")(38,"b"),t._uU(39,"End:"),t.qZA()(),t.TgZ(40,"ion-input",37),t.NdJ("ngModelChange",function(o){t.CHM(e);const l=t.oxw();return t.KtG(l.evento.end=o)}),t.qZA(),t.TgZ(41,"ion-button",41),t._UZ(42,"ion-icon",39),t.qZA(),t.TgZ(43,"ion-popover",42),t.YNc(44,P,2,1,"ng-template"),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(8),t.Q6J("strong",!0),t.xp6(8),t.Q6J("ngModel",e.evento.title),t.xp6(5),t.Q6J("ngModel",e.evento.desc),t.xp6(5),t.Q6J("ngModel",e.evento.allDay),t.xp6(5),t.Q6J("ngModel",e.evento.start),t.xp6(9),t.Q6J("ngModel",e.evento.end)}}const w=[{path:"",component:(()=>{class n{constructor(e,i,o,l,d,q,G){this.datepipe=e,this.navCtrl=i,this.alertCtrl=o,this.modalCtrl=l,this.uiService=d,this.eventService=q,this.popoverCtrl=G,this.miranda=[],this.evento={title:"",desc:"",allDay:!0,start:this.datepipe.transform(new Date,"EEEE, dd/MMMM/YYYY HH:mm"),end:this.datepipe.transform(new Date,"EEEE, dd/MMMM/YYYY HH:mm")},this.deleteEvent=!1,this.eventItemCount=new h.X(0)}ngOnInit(){this.loadEvents()}menu(e){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.popoverCtrl.create({mode:"md",event:e,backdropDismiss:!0,component:f.M})).present()})}cancel(){this.modal.dismiss(null,"cancel")}confirm(){this.eventService.createEvent(this.evento).subscribe(e=>{console.log(this.evento),this.loadEvents(),this.modal.dismiss("confirm"),this.uiService.presentToast("Added event")},e=>{console.log(e)})}formatDate(e){return(0,u.Z)((0,v.Z)(e),"EEEE, dd/MMMM/yyyy HH:mm")}formatDateEnd(e){return(0,u.Z)((0,v.Z)(e),"EEEE, dd/MMMM/yyyy HH:mm")}updateEvent(e){this.navCtrl.navigateForward(`tabs/events/update-event/${e}`)}calendar(){this.navCtrl.navigateForward("tabs/events/calendar")}loadEvents(){this.eventService.getEvents().subscribe(e=>{this.events=e,console.log(e)},e=>{console.log(e)})}detailEvent(e){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.modalCtrl.create({mode:"md",breakpoints:[0,.5,.8],initialBreakpoint:.8,componentProps:{event:e},component:E.D})).present()})}clearEvent(){this.selectedEvent=null}selectEvent(e){this.deleteEvent=!0,this.selectedEvent===e?this.clearEvent():this.selectedEvent=e,this.eventToolbar(this.evento)}eventToolbar(e){let i=!1;for(let o of this.miranda)if(o.id===e.id){o.amount+=1,i=!0;break}i||(e.amount=1,this.miranda.push(e)),this.eventItemCount.next(this.eventItemCount.value+1)}removeSelectedEvent(){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.alertCtrl.create({header:"Warning!!!",message:"You want to delete the event??",buttons:[{text:"Cancel",role:"cancel",cssClass:"secondary",handler:i=>{console.log("Confirmado Cancelar: blah"),this.backButtonClickEvent()}},{text:"OK",handler:()=>{console.log("Confirmado Aceptar"),this.eventService.deleteEvent(this.selectedEvent).subscribe(i=>{this.clearEvent(),this.loadEvents(),this.backButtonClickEvent(),this.uiService.presentToast("Deleted message of the chat")},i=>{console.log(i)})}}]})).present()})}backButtonClickEvent(){this.clearEvent(),this.deleteEvent=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.uU),t.Y36(a.SH),t.Y36(a.Br),t.Y36(a.IN),t.Y36(Z.F),t.Y36(C.P),t.Y36(a.Dh))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-events"]],viewQuery:function(e,i){if(1&e&&t.Gf(a.ki,5),2&e){let o;t.iGM(o=t.CRH())&&(i.modal=o.first)}},decls:13,vars:3,consts:[[1,"ion-no-border"],["color","warning",4,"ngIf"],["color","primary",4,"ngIf"],[1,"ion-padding"],[3,"ngClass","press",4,"ngFor","ngForOf"],["vertical","bottom","horizontal","end","slot","fixed"],["id","open-modal-add-event"],["md","pencil-sharp","color","light"],["trigger","open-modal-add-event"],["color","warning"],["slot","start"],[3,"tap"],["color","dark","slot","icon-only","md","arrow-back-sharp"],[1,"miranda-imagen-length"],[1,"miTitulo"],["slot","end"],["color","dark","slot","icon-only","md","trash-sharp"],["color","primary"],["src","../../../assets/img/imagenLogo.png",1,"logo-header"],["fill","clear",3,"tap"],["md","ellipsis-vertical-sharp","slot","icon-only","color","light"],[3,"ngClass","press"],["button","","lines","none"],["src","../../../assets/img/notification.png"],[1,"ion-text-capitalize","ion-text-wrap"],["color","primary",3,"tap"],["md","eye-sharp","slot","icon-only","color","light"],["color","tertiary",3,"tap"],["md","create-sharp","slot","icon-only","color","light"],["color","secondary",3,"tap"],["md","calendar-sharp","slot","icon-only","color","light"],["md","arrow-back-sharp","slot","icon-only","color","light"],[1,"miBoton",3,"strong","click"],["lines","none"],["position","floating"],["tpye","text","clearInput","",3,"ngModel","ngModelChange"],["color","dark",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],["fill","clear","slot","end","id","open-date-start"],["md","calendar-sharp","slot","icon-only","color","dark"],["trigger","open-date-start","show-backdrop","true"],["fill","clear","slot","end","id","open-date-end"],["trigger","open-date-end","show-backdrop","true"],["id","datetimeStart","locale","es-ES",3,"showDefaultButtons","ionChange"],["ionmodalDatetime",""],["id","datetimeEnd","locale","es-ES",3,"showDefaultButtons","ionChange"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header",0),t.YNc(1,x,12,3,"ion-toolbar",1),t.YNc(2,b,7,0,"ion-toolbar",2),t.qZA(),t.TgZ(3,"ion-content",3)(4,"ion-list"),t.YNc(5,T,18,5,"ion-item-sliding",4),t.qZA(),t.TgZ(6,"ion-fab",5)(7,"ion-fab-button",6),t._UZ(8,"ion-icon",7),t.TgZ(9,"span"),t._uU(10,"AddEvent"),t.qZA()()(),t.TgZ(11,"ion-modal",8),t.YNc(12,A,45,6,"ng-template"),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngIf",i.deleteEvent),t.xp6(1),t.Q6J("ngIf",!i.deleteEvent),t.xp6(3),t.Q6J("ngForOf",i.events))},dependencies:[c.mk,c.sg,c.O5,g.JJ,g.On,a.YG,a.Sm,a.W2,a.x4,a.IJ,a.W4,a.Gu,a.gu,a.Xz,a.pK,a.Ie,a.u8,a.IK,a.td,a.Q$,a.q_,a.Bs,a.wd,a.ho,a.sr,a.ki,a.d8,a.w,a.QI,a.j9,c.Ov],styles:["ion-fab-button[_ngcontent-%COMP%]{width:140px;height:48px;--background: var(--ion-color-primary);--border-radius: 20px;--box-shadow: 5px 12px 30px -8px rgba(0,0,0,.53)}ion-fab-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px}ion-fab-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1.2em;font-weight:700;color:#fff}ion-fab-button[_ngcontent-%COMP%]::part(native){color:var(--ion-color-primary);font-weight:500;font-size:20px}ion-chip[_ngcontent-%COMP%]{font-size:1em;font-weight:700;--background: #000;--color: #fff}ion-popover[_ngcontent-%COMP%]{--color: var(--ion-color-primary);--background: var(--ion-color-dark)}"]}),n})()}];let J=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.Bz.forChild(w),m.Bz]}),n})();var U=s(5642);let H=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[c.uU],imports:[c.ez,g.u5,a.Pc,J,U.K]}),n})()}}]);