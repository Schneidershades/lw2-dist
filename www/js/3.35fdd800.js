(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"114b":function(e,s,t){},"1f4e":function(e,s,t){"use strict";var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"dd"},[e._m(0),e.allClasses?t("div",{staticClass:"row"},e._l(e.allClasses,(function(s){return t("div",{key:s.id,staticClass:"col-md-3 q-ma-sm",staticStyle:{width:"400px"}},[t("q-card",{staticClass:"my-card bg-grey-1",attrs:{flat:"",bordered:""}},[t("q-card-section",[t("div",{staticClass:"row items-center no-wrap"},[t("div",{staticClass:"col"},[t("div",{staticClass:"text-h6"},[e._v(e._s(s.name))]),t("div",{staticClass:"text-subtitle2"},[e._v(e._s(s.excerpt))])])])]),t("q-card-section",[e._v("\n\t\t        "+e._s(s.description)+"\n\t\t      ")]),t("q-separator"),t("q-card-actions",[e.user?t("q-btn",{attrs:{flat:""},on:{click:function(t){return e.classDetailsBtn(s)}}},[e._v("View Class Details")]):t("q-btn",{attrs:{flat:""}},[e._v("Sign In to Take Quiz")]),"Instructor"==e.user.role?[e.$can("show","score")?t("q-btn",{attrs:{flat:""},on:{click:function(t){return e.viewScheduleScoresBtn(s)}}},[e._v("View Scores")]):e._e()]:e._e()],2)],1)],1)})),0):e._e()])},n=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"q-pa-sm row items-start q-gutter-md"},[t("h4",{staticClass:"header-text"},[e._v("Take Classes ")])])}],i=t("ded3"),r=t.n(i),l=t("2f62"),o={data:function(){return{}},computed:r()({},Object(l["c"])({allClasses:"schedule/allClasses",user:"auth/user"})),methods:r()(r()({},Object(l["b"])({getClasses:"schedule/getClasses",selectedClass:"schedule/selectedClass"})),{},{classDetailsBtn:function(e){this.selectedClass(e),this.$router.push({name:"classDetails"})},viewScheduleScoresBtn:function(e){this.selectedClass(e),this.$router.push({name:"classScheduleScores"})}}),mounted:function(){this.getClasses()}},c=o,d=(t("afc1"),t("2877")),u=Object(d["a"])(c,a,n,!1,null,"dc08d7d4",null);s["a"]=u.exports},"2ccc":function(e,s,t){"use strict";var a=t("f78d"),n=t.n(a);n.a},"311a":function(e,s,t){"use strict";var a=t("5d82"),n=t.n(a);n.a},"31f8":function(e,s,t){e.exports=t.p+"img/parkit_icon_logo.3086d82f.png"},"5d82":function(e,s,t){},"73f1":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("q-page",[a("q-carousel",{attrs:{arrows:"",animated:"",height:"550px"},model:{value:e.slide,callback:function(s){e.slide=s},expression:"slide"}},[a("q-carousel-slide",{staticClass:"column no-wrap flex-center",attrs:{name:"first","img-src":t("dafa")}},[a("SliderComponent")],1)],1),a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"q-px-lg"},[a("schedule")],1)])],1)},n=[],i=t("ded3"),r=t.n(i),l=t("1f4e"),o=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"absolute-bottom custom-caption"},[t("q-dialog",{model:{value:e.signInModal,callback:function(s){e.signInModal=s},expression:"signInModal"}},[t("SignIn")],1),t("q-dialog",{model:{value:e.signUpModal,callback:function(s){e.signUpModal=s},expression:"signUpModal"}},[t("SignUp")],1)],1)},c=[],d=t("a2d2"),u=t("8885"),m=t("2f62"),p={data:function(){return{slide:"first",tab:"mails",signInModal:!1,signUpModal:!1}},components:{SignUp:d["a"],SignIn:u["a"]},computed:r()({},Object(m["c"])({user:"auth/user"}))},f=p,g=(t("311a"),t("2877")),b=Object(g["a"])(f,o,c,!1,null,"8da99dd0",null),w=b.exports,v={data:function(){return{slide:"first",tab:"mails"}},components:{Schedule:l["a"],SliderComponent:w},computed:r()({},Object(m["c"])({allClasses:"schedule/allClasses",user:"auth/user"})),methods:r()({},Object(m["b"])({getClasses:"schedule/getClasses"})),mounted:function(){this.getClasses()}},h=v,C=(t("2ccc"),Object(g["a"])(h,a,n,!1,null,"6d4801b0",null));s["default"]=C.exports},8885:function(e,s,t){"use strict";var a=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("q-card",{staticClass:"q-pa-md",staticStyle:{width:"500px","max-width":"80vw"},attrs:{flat:""}},[a("q-card-section",[a("q-card",{staticClass:"my-card",attrs:{flat:""}},[a("q-card-section",[a("q-card-actions",{attrs:{align:"center"}},[a("img",{attrs:{src:t("c3ba"),align:"center",alt:"Parkit Home service",width:"200"}})]),e.message?a("q-banner",{staticClass:"q-my-lg text-white bg-red",attrs:{dense:"",rounded:"","inline-actions":""}},[e._v("\n                    "+e._s(e.message)+"\n                ")]):e._e()],1),a("q-form",{ref:"form",staticClass:"q-gutter-md",on:{submit:e.loginEmailUser}},[a("q-input",{attrs:{filled:"",type:"email",label:"Email Address","unmasked-value":"","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type in your email address"}]},model:{value:e.emailForm.email,callback:function(s){e.$set(e.emailForm,"email",s)},expression:"emailForm.email"}}),a("q-input",{attrs:{filled:"",type:e.isPwd?"password":"text",label:"Password","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type in your password"}]},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(s){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.emailForm.password,callback:function(s){e.$set(e.emailForm,"password",s)},expression:"emailForm.password"}}),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{staticClass:"full-width",attrs:{type:"submit",unelevated:"",color:"primary",size:"lg",label:"Login",disable:e.disable}})],1)],1)],1)],1)],1)},n=[],i=t("ded3"),r=t.n(i),l=(t("a18c"),t("2f62")),o=t("b178"),c={data:function(){return{emailForm:{email:"",password:""},isPwd:!0,tab:"one",disable:!1}},computed:r()({},Object(l["c"])({message:"message"})),methods:r()(r()({},Object(l["b"])({login:"auth/login"})),{},{loginEmailUser:function(){var e=this;this.disable=!0,this.login(this.emailForm).then((function(s){return e.positiveNotification("Welcome!! you are now logged in"),e.disable=!1,e.$router.push({name:"userDashboard"})})).catch((function(s){e.disable=!1,e.errorMessages=s,s&&e.negativeNotification(s.error)}))},positiveNotification:function(e){o["b"].create({type:"positive",color:"positive",timeout:3e3,position:"center",message:e})},negativeNotification:function(e){o["b"].create({type:"negative",color:"negative",timeout:3e3,position:"center",message:e})}})},d=c,u=t("2877"),m=Object(u["a"])(d,a,n,!1,null,null,null);s["a"]=m.exports},a2d2:function(e,s,t){"use strict";var a=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("q-card",{staticClass:"q-pa-sm",staticStyle:{width:"800px","max-width":"80vw"}},[a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"80vh"}},[a("div",{staticClass:"text-h6 text-center"},[e._v("Sign Up")]),a("q-card-actions",{attrs:{align:"center"}},[a("img",{attrs:{src:t("31f8"),align:"center",alt:"Parkit Home service",width:"300"}})]),e.message?[e.message.email||e.message.phone?a("q-banner",{staticClass:"text-white bg-red",attrs:{dense:"",rounded:"","inline-actions":""}},[e._v("\n                "+e._s(e.message.email?e.message.email[0]:null)+" "+e._s(e.message.phone?e.message.phone[0]:null)+"\n            ")]):a("q-banner",{staticClass:"text-white bg-green",attrs:{dense:"",rounded:"","inline-actions":""}},[e._v("\n                "+e._s(e.message)+"\n            ")])]:e._e(),a("q-form",{on:{submit:e.submitNewUser}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-12 col-xm-12 col-md-12 q-pa-md text-center"},[e._v("\n                    I am a/an "),a("br"),a("br"),a("q-radio",{staticClass:"q-pr-sm",attrs:{dense:"",val:"Student",label:"Student"},model:{value:e.newUser.role,callback:function(s){e.$set(e.newUser,"role",s)},expression:"newUser.role"}}),a("q-radio",{attrs:{dense:"",val:"Instructor",label:"Instructor"},model:{value:e.newUser.role,callback:function(s){e.$set(e.newUser,"role",s)},expression:"newUser.role"}})],1),a("div",{staticClass:"col-lg-6 col-xm-12 col-md-6 q-pl-sm"},[a("q-input",{ref:"name",attrs:{filled:"",label:"Your First Name *","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please insert your first name"}]},model:{value:e.newUser.first_name,callback:function(s){e.$set(e.newUser,"first_name",s)},expression:"newUser.first_name"}})],1),a("div",{staticClass:"col-lg-6 col-xm-12 col-md-6 q-pl-sm"},[a("q-input",{ref:"name",attrs:{filled:"",label:"Your Last Name *","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please insert your last name"}]},model:{value:e.newUser.last_name,callback:function(s){e.$set(e.newUser,"last_name",s)},expression:"newUser.last_name"}})],1),a("div",{staticClass:"col-lg-6 col-xm-12 col-md-6 q-pl-sm"},[a("q-input",{ref:"name",attrs:{filled:"",label:"Your Email *","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please insert your email"}]},model:{value:e.newUser.email,callback:function(s){e.$set(e.newUser,"email",s)},expression:"newUser.email"}})],1),a("div",{staticClass:"col-lg-6 col-xm-12 col-md-6 q-pl-sm"},[a("q-input",{ref:"fldPasswordChange",attrs:{filled:"",label:"Create a password",type:e.isPwd?"password":"","lazy-rules":"",rules:e.Required},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(s){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.newUser.password,callback:function(s){e.$set(e.newUser,"password",s)},expression:"newUser.password"}})],1),a("div",{staticClass:"col-lg-6 col-xm-12 col-md-6 q-pl-sm"},[a("q-input",{ref:"fldPasswordChangeConfirm",attrs:{filled:"",label:"Confirm your password",type:e.isPwd?"password":"","lazy-rules":"",rules:e.ConfirmPWD},scopedSlots:e._u([{key:"append",fn:function(){return[a("q-icon",{staticClass:"cursor-pointer",attrs:{name:e.isPwd?"visibility_off":"visibility"},on:{click:function(s){e.isPwd=!e.isPwd}}})]},proxy:!0}]),model:{value:e.newUser.password_confirmation,callback:function(s){e.$set(e.newUser,"password_confirmation",s)},expression:"newUser.password_confirmation"}})],1)]),e.message?[e.message.email||e.message.phone?a("q-banner",{staticClass:"text-white bg-red",attrs:{dense:"",rounded:"","inline-actions":""}},[e._v("\n                    "+e._s(e.message.email?e.message.email[0]:null)+" "+e._s(e.message.phone?e.message.phone[0]:null)+"\n                ")]):a("q-banner",{staticClass:"text-white bg-green",attrs:{dense:"",rounded:"","inline-actions":""}},[e._v("\n                    "+e._s(e.message)+"\n                ")])]:e._e(),a("q-stepper-navigation",[a("q-btn",{attrs:{color:"primary",type:"submit",label:"Register",disable:e.disable}})],1)],2)],2),a("q-separator"),a("q-card-actions",{attrs:{align:"right"}},[a("q-btn",{attrs:{flat:"",label:"Reset",color:"white","text-color":"primary"},on:{click:function(s){e.step=1}}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Close",color:"primary"}})],1)],1)},n=[],i=t("ded3"),r=t.n(i),l=t("2f62"),o=t("b178"),c={data:function(){return{newUser:{role:"Student",first_name:"",last_name:"",email:"",password:"",password_confirmation:""},otpCode:"",errorMessages:[],error:"",form:{phone:""},password_confirmation:"",step:1,dense:!1,isPwd:!0,disable:!1}},computed:r()(r()({},Object(l["c"])({message:"errorbag/message",errorMessage:"errorbag/errorMessage",newPhoneNumber:"auth/phone"})),{},{ConfirmPWD:function(){var e=this;return[function(e){return!!e||"Choose a password"},function(s){return s==e.$refs.fldPasswordChange.value||"Password does not match"}]},Required:function(){return[function(e){return!!e||"Choose a password"}]}}),methods:r()(r()({},Object(l["b"])({register:"auth/register"})),{},{submitNewUser:function(){var e=this;this.disable=!0,this.register(this.newUser).then((function(s){return e.positiveNotification("Welcome!! you are now logged in"),e.disable=!1,e.$router.push({name:"userDashboard"})})).catch((function(s){console.log(s),e.disable=!1,e.errorMessages=s,s&&e.negativeNotification(s.error)}))},positiveNotification:function(e){o["b"].create({type:"positive",color:"positive",timeout:6e3,position:"center",message:e})},negativeNotification:function(e){o["b"].create({type:"negative",color:"negative",timeout:6e3,position:"center",message:e})}})},d=c,u=t("2877"),m=Object(u["a"])(d,a,n,!1,null,null,null);s["a"]=m.exports},afc1:function(e,s,t){"use strict";var a=t("114b"),n=t.n(a);n.a},c3ba:function(e,s,t){e.exports=t.p+"img/parkit_logo.15a8f9ed.png"},dafa:function(e,s,t){e.exports=t.p+"img/slider1.75404f3b.jpg"},f78d:function(e,s,t){}}]);