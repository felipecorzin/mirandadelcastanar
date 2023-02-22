"use strict";(self.webpackChunkmirandadelcastanar=self.webpackChunkmirandadelcastanar||[]).push([[428],{5428:(Y,_,d)=>{d.r(_),d.d(_,{AuthModule:()=>m});var c=d(6895),r=d(433),g=d(1869),e=d(1571),f=d(6518);function v(n,o){1&n&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function Z(n,o){1&n&&(e.TgZ(0,"div"),e._uU(1," Email must be a valid email address "),e.qZA())}function h(n,o){if(1&n&&(e.TgZ(0,"div",17),e.YNc(1,v,2,0,"div",18),e.YNc(2,Z,2,0,"div",18),e.qZA()),2&n){e.oxw();const t=e.MAs(11);e.xp6(1),e.Q6J("ngIf",t.errors.required),e.xp6(1),e.Q6J("ngIf",t.errors.email)}}function x(n,o){1&n&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function b(n,o){1&n&&(e.TgZ(0,"div"),e._uU(1," Password must be at least 6 characters "),e.qZA())}function T(n,o){if(1&n&&(e.TgZ(0,"div",19),e.YNc(1,x,2,0,"div",18),e.YNc(2,b,2,0,"div",18),e.qZA()),2&n){e.oxw();const t=e.MAs(17);e.xp6(1),e.Q6J("ngIf",t.errors.required),e.xp6(1),e.Q6J("ngIf",t.errors.minlength)}}class u{constructor(o,t){this.router=o,this.authService=t,this.form={email:null,password:null},this.errorMessage=""}ngOnInit(){}onSubmit(){const{email:o,password:t}=this.form;this.authService.login(o,t).subscribe(a=>{!0===a&&this.router.navigateByUrl("/miranda")})}}function M(n,o){1&n&&(e.TgZ(0,"div"),e._uU(1,"Username is required"),e.qZA())}function C(n,o){1&n&&(e.TgZ(0,"div"),e._uU(1," Username must be at least 3 characters "),e.qZA())}function A(n,o){1&n&&(e.TgZ(0,"div"),e._uU(1," Username must be at most 20 characters "),e.qZA())}function q(n,o){if(1&n&&(e.TgZ(0,"div",19),e.YNc(1,M,2,0,"div",20),e.YNc(2,C,2,0,"div",20),e.YNc(3,A,2,0,"div",20),e.qZA()),2&n){e.oxw();const t=e.MAs(11);e.xp6(1),e.Q6J("ngIf",t.errors.required),e.xp6(1),e.Q6J("ngIf",t.errors.minlength),e.xp6(1),e.Q6J("ngIf",t.errors.maxlength)}}function J(n,o){1&n&&(e.TgZ(0,"div"),e._uU(1,"Email is required"),e.qZA())}function w(n,o){1&n&&(e.TgZ(0,"div"),e._uU(1," Email must be a valid email address "),e.qZA())}function U(n,o){if(1&n&&(e.TgZ(0,"div",19),e.YNc(1,J,2,0,"div",20),e.YNc(2,w,2,0,"div",20),e.qZA()),2&n){e.oxw();const t=e.MAs(17);e.xp6(1),e.Q6J("ngIf",t.errors.required),e.xp6(1),e.Q6J("ngIf",t.errors.email)}}function y(n,o){1&n&&(e.TgZ(0,"div"),e._uU(1,"Password is required"),e.qZA())}function N(n,o){1&n&&(e.TgZ(0,"div"),e._uU(1," Password must be at least 6 characters "),e.qZA())}function R(n,o){if(1&n&&(e.TgZ(0,"div",19),e.YNc(1,y,2,0,"div",20),e.YNc(2,N,2,0,"div",20),e.qZA()),2&n){e.oxw();const t=e.MAs(23);e.xp6(1),e.Q6J("ngIf",t.errors.required),e.xp6(1),e.Q6J("ngIf",t.errors.minlength)}}u.\u0275fac=function(o){return new(o||u)(e.Y36(g.F0),e.Y36(f.e))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-login"]],decls:28,vars:4,consts:[[1,"col-md-12"],[1,"card","card-container"],["name","form","novalidate","",3,"ngSubmit"],["f","ngForm"],[1,"form-group"],["for","email"],["type","email","name","email","required","","email","",1,"form-control",3,"ngModel","ngModelChange"],["email","ngModel"],["class","alert-danger",4,"ngIf"],["for","password"],["type","password","name","password","required","","minlength","6",1,"form-control",3,"ngModel","ngModelChange"],["password","ngModel"],["class","alert alert-danger","role","alert",4,"ngIf"],[1,"loginBoton"],["type","button",1,"btn","btn-primary","btn-lg",3,"click"],[1,"text"],["type","button","routerLink","/auth/register",1,"btn","btn-primary","btn-lg"],[1,"alert-danger"],[4,"ngIf"],["role","alert",1,"alert","alert-danger"]],template:function(o,t){if(1&o){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h2")(3,"b"),e._uU(4,"Login"),e.qZA()(),e.TgZ(5,"form",2,3),e.NdJ("ngSubmit",function(){e.CHM(a);const i=e.MAs(6);return e.KtG(i.form.valid&&t.onSubmit())}),e.TgZ(7,"div",4)(8,"label",5),e._uU(9,"Email"),e.qZA(),e.TgZ(10,"input",6,7),e.NdJ("ngModelChange",function(i){return t.form.email=i}),e.qZA(),e.YNc(12,h,3,2,"div",8),e.qZA(),e.TgZ(13,"div",4)(14,"label",9),e._uU(15,"Password"),e.qZA(),e.TgZ(16,"input",10,11),e.NdJ("ngModelChange",function(i){return t.form.password=i}),e.qZA(),e.YNc(18,T,3,2,"div",12),e.qZA(),e.TgZ(19,"div",13)(20,"button",14),e.NdJ("click",function(){return t.onSubmit()}),e._uU(21," Login "),e.qZA()(),e.TgZ(22,"div",15)(23,"h5")(24,"b"),e._uU(25,"Reg\xedstrate gratis y podr\xe1s acceder a todos los servicios de la app TheLandonHotel"),e.qZA()()()(),e.TgZ(26,"button",16),e._uU(27," Registrate "),e.qZA()()()}if(2&o){const a=e.MAs(6),s=e.MAs(11),i=e.MAs(17);e.xp6(10),e.Q6J("ngModel",t.form.email),e.xp6(2),e.Q6J("ngIf",s.errors&&a.submitted),e.xp6(4),e.Q6J("ngModel",t.form.password),e.xp6(2),e.Q6J("ngIf",i.errors&&a.submitted)}},dependencies:[c.O5,g.rH,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.wO,r.on,r.On,r.F],styles:["label[_ngcontent-%COMP%]{display:block;margin-top:10px}.card-container.card[_ngcontent-%COMP%]{max-width:400px!important;padding:40px}.card[_ngcontent-%COMP%]{background-color:#f7f7f7;padding:20px 25px 30px;margin:50px auto 25px;border-radius:10px;box-shadow:0 2px 2px #0000004d}h2[_ngcontent-%COMP%]{text-align:center}.loginBoton[_ngcontent-%COMP%]{margin-top:10px;text-align:center}.text[_ngcontent-%COMP%]{background:#fff;border-radius:10px}"]});class p{constructor(o,t){this.router=o,this.authService=t,this.form={name:null,email:null,password:null},this.errorMessage=""}ngOnInit(){}onSubmit(){const{avatar:o,name:t,email:a,password:s}=this.form;this.authService.registro(o,t,a,s).subscribe(i=>{!0===i&&this.router.navigateByUrl("/miranda")})}}p.\u0275fac=function(o){return new(o||p)(e.Y36(g.F0),e.Y36(f.e))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-register"]],decls:38,vars:6,consts:[[1,"col-md-12"],[1,"card","card-container"],["name","form","novalidate","",3,"ngSubmit"],["f","ngForm"],[1,"form-group"],["for","name"],["type","text","name","name","required","","minlength","3","maxlength","20",1,"form-control",3,"ngModel","ngModelChange"],["name","ngModel"],["class","alert-danger",4,"ngIf"],["for","email"],["type","email","name","email","required","","email","",1,"form-control",3,"ngModel","ngModelChange"],["email","ngModel"],["for","password"],["type","password","name","password","required","","minlength","6",1,"form-control",3,"ngModel","ngModelChange"],["password","ngModel"],[1,"loginBoton"],["type","button",1,"btn","btn-primary","btn-lg",3,"click"],[1,"text"],["type","button","routerLink","/auth/login",1,"btn","btn-primary","btn-lg"],[1,"alert-danger"],[4,"ngIf"]],template:function(o,t){if(1&o){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h2")(3,"b"),e._uU(4,"Registrate"),e.qZA()(),e.TgZ(5,"form",2,3),e.NdJ("ngSubmit",function(){e.CHM(a);const i=e.MAs(6);return e.KtG(i.form.valid&&t.onSubmit())}),e.TgZ(7,"div",4)(8,"label",5),e._uU(9,"Name"),e.qZA(),e.TgZ(10,"input",6,7),e.NdJ("ngModelChange",function(i){return t.form.name=i}),e.qZA(),e.YNc(12,q,4,3,"div",8),e.qZA(),e.TgZ(13,"div",4)(14,"label",9),e._uU(15,"Email"),e.qZA(),e.TgZ(16,"input",10,11),e.NdJ("ngModelChange",function(i){return t.form.email=i}),e.qZA(),e.YNc(18,U,3,2,"div",8),e.qZA(),e.TgZ(19,"div",4)(20,"label",12),e._uU(21,"Password"),e.qZA(),e.TgZ(22,"input",13,14),e.NdJ("ngModelChange",function(i){return t.form.password=i}),e.qZA(),e.YNc(24,R,3,2,"div",8),e.qZA(),e.TgZ(25,"div",15)(26,"button",16),e.NdJ("click",function(){return t.onSubmit()}),e._uU(27," Registrate "),e.qZA()(),e.TgZ(28,"div",17)(29,"h5")(30,"b"),e._uU(31,"Reg\xedstrate gratis y podr\xe1s acceder a todos los servicios de la app TheLandonHotel"),e.qZA()()(),e.TgZ(32,"div",17)(33,"h5")(34,"b"),e._uU(35,"\xbfYa tienes una cuenta?"),e.qZA()()()(),e.TgZ(36,"button",18),e._uU(37," Login "),e.qZA()()()}if(2&o){const a=e.MAs(6),s=e.MAs(11),i=e.MAs(17),Q=e.MAs(23);e.xp6(10),e.Q6J("ngModel",t.form.name),e.xp6(2),e.Q6J("ngIf",s.errors&&a.submitted),e.xp6(4),e.Q6J("ngModel",t.form.email),e.xp6(2),e.Q6J("ngIf",i.errors&&a.submitted),e.xp6(4),e.Q6J("ngModel",t.form.password),e.xp6(2),e.Q6J("ngIf",Q.errors&&a.submitted)}},dependencies:[c.O5,g.rH,r._Y,r.Fj,r.JJ,r.JL,r.Q7,r.wO,r.nD,r.on,r.On,r.F],styles:["label[_ngcontent-%COMP%]{display:block;margin-top:10px}.card-container.card[_ngcontent-%COMP%]{max-width:400px!important;padding:40px}.card[_ngcontent-%COMP%]{background-color:#f7f7f7;padding:20px 25px 30px;margin:50px auto 25px;border-radius:10px;box-shadow:0 2px 2px #0000004d}h2[_ngcontent-%COMP%]{text-align:center}.loginBoton[_ngcontent-%COMP%]{margin-top:10px;text-align:center}.text[_ngcontent-%COMP%]{background:#fff;border-radius:10px}"]});const I=[{path:"login",component:u},{path:"register",component:p},{path:"**",redirectTo:"login"}];class l{}l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[g.Bz.forChild(I),g.Bz]});class m{}m.\u0275fac=function(o){return new(o||m)},m.\u0275mod=e.oAB({type:m}),m.\u0275inj=e.cJS({imports:[c.ez,l,r.u5]})}}]);