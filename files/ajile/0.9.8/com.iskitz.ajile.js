/**----------------------------------------------------------------------------+
| Product:  Ajile [com.iskitz.ajile]
| @version  0.9.8
|+-----------------------------------------------------------------------------+
| @author   Michael A. I. Lee [ http://ajile.iskitz.com/ ]
|
| Created:  Tuesday,   November   4, 2003    [2003.11.04]
| Modified: Tuesday,   September  4, 2007    [2007.09.04 -  5:54:05 AM EDT]
|+-----------------------------------------------------------------------------+
|
| [Ajile] - Advanced JavaScript Importing & Loading Extension is a JavaScript
|           module that adds namespacing and importing capabilities to the
|           JavaScript Language.
|
|           Visit http://ajile.iskitz.com/ to start creating
|
|                  "Smart scripts that play nice!"
|
|           Copyright (c) 2003-2007 Michael A. I. Lee, iSkitz.com
|
|+-----------------------------------------------------------------------------+
|
| ***** BEGIN LICENSE BLOCK *****
| Version: MPL 1.1/GPL 2.0/LGPL 2.1
|
| The contents of this file are subject to the Mozilla Public License Version
| 1.1 (the "License"); you may not use this file except in compliance with
| the License. You may obtain a copy of the License at
| http://www.mozilla.org/MPL/
|
| Software distributed under the License is distributed on an "AS IS" basis,
| WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
| for the specific language governing rights and limitations under the
| License.
|
| The Original Code is Ajile.
|
| The Initial Developer of the Original Code is Michael A. I. Lee
|
| Portions created by the Initial Developer are Copyright (C) 2003-2007
| the Initial Developer. All Rights Reserved.
|
| Contributor(s): Michael A. I. Lee [ http://ajile.iskitz.com/ ]
|
| Alternatively, the contents of this file may be used under the terms of
| either the GNU General Public License Version 2 or later (the "GPL"), or
| the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
| in which case the provisions of the GPL or the LGPL are applicable instead
| of those above. If you wish to allow use of your version of this file only
| under the terms of either the GPL or the LGPL, and not to allow others to
| use your version of this file under the terms of the MPL, indicate your
| decision by deleting the provisions above and replace them with the notice
| and other provisions required by the GPL or the LGPL. If you do not delete
| the provisions above, a recipient may use your version of this file under
| the terms of any one of the MPL, the GPL or the LGPL.
|
| ***** END LICENSE BLOCK *****
*-----------------------------------------------------------------------------*/
new function(){var Ap,B,Z,X;var A1=true,AY=false,e=false,b=true,AR=true,i=false,Q=false;var v="Ajile",Aj="Powered by ",Ac="index",L=".js",D="<*>",Ar="com.iskitz.ajile",f="/",m=[v,"Import","ImportAs","Include","Load","Namespace","JSBasePath","JSImport","JSPackage","JSPackaging","JSPacked","JSPath","NamespaceException","Package","PackageException"];var Ak,AS,A2="__LOADED__",Aq,s="",AN;var H=["*","|",":","\"","<",">","?","[","{","(",")","}","]","\\","&","@","#","$","%","!",";","'","=","+","~",",","^","_"," ","`","-","/","."];var d=(/(cloakoff|cloak)/),M=(/(debugoff|debug)/),Ag=(/(legacyoff|legacy)/),k=(/(mvcoff|mvc)/),AI=(/(mvcshareoff|mvcshare)/),AL=(/(overrideoff|override)/),I=(/(refreshoff|refresh)/),K=(/(.*\/)[^\/]+/),AC=(/(.*)\.[^\.]+/),R=(/(\/\.\/)|(\/[^\/]*\/\.\.\/)/),n=(/:\/\x2f/);function AZ(A6){if(A()){return }Ax();Y((AN=A6));Am();AS=new w(r(Ar));F=Ar;if(!Ap){((AS.fullName=Ar),(AS.path="../lib/"),(AS.shortName=v))}AH(AN);AT.add(Ar,v);Af.add(Ar,v);At(v,Ar,AN);Aw();o(Ar);j()}function Am(A6){if(!(B&&(A6=document.createElement("meta")))){return }A6.httpEquiv=Aj+v;Aj=Ar.split(".").reverse().join(".");A6.content=Aj+" :: Smart scripts that play nice ";AB(window.document).appendChild(A6)}function Ax(){if(B){A3=new Function("element","container","if(container){  try { container.removeChild(element); }catch(e){}  return;}try { document.getElementsByTagName(\"head\")[0].removeChild(element); }catch(e){try { document.body.removeChild(element);}catch(e){}}")}A4=Z?z:B?A3:function(){}}function Av(A6){if(A6&&A6!=Ar){AA(A6);return }u.clear();l.clear();C.clear();c.clear();AT.clear();Af.clear();AO.clear();j(false);J(false);o();Aq=null;delete S;delete q;delete Au;delete W;delete AX;delete AN;delete window[v];delete window.Import;delete window.ImportAs;delete window.Include;delete window.Load;delete window.Namespace;t(Ar)}function E(A8,A6){if(A8==F){return }var A7=u.get(F);if(!A7){u.add(F,(A7=new AM()))}A7.add(A8,A6)}function AW(A6,A9){j();if(!A9||!Al(A9)){if(Al(A6)){A9=A6;A6=null}else{return false}}else{if(A6&&!Ay(A6)){return false}}if(A6==D&&this==window[v]){return false}if(!A6&&this!=window[v]){A6=D}var A8=A9;if(A6&&(Af.has(A6)||AQ(A6))){return window.setTimeout(function(){A8(A6)},62.25)}if(!A6){if(Af.getSize()>0||AT.getSize()==0){for(var BA in Af.getAll()){window.setTimeout(function(){A8(BA)},62.25)}}}var A7=l.get((A6=(A6||"")));if(!A7){l.add(A6,(A7=new AM()))}A7.add(Math.random(),A8);return true}function AV(A6){if(A6==F){return }var A7=AO.get(A6);if(!A7){AO.add(A6,(A7=new AM()))}A7.add(F)}function o(A7){if(A7&&!Ay(A7)){return }A7=A7||"";var BB=AQ(A7);if(BB){Y((Al(BB)?BB:BB.constructor))}if(!B){return }var A8=Ah(A7);var BA=(A8&&A8.hasOption("cloak"));for(var A9,A6,BE,BD=Ae(),BC=BD.length;--BC>=0;){if(!BD[BC]){continue}if(((A9=BD[BC].title)&&A7&&(A9!=A7))){continue}A6=BD[BC].src;BE=(A6&&(A6.indexOf(Ar)>=0))||(A9&&(A9.indexOf(Ar)==0));if(BE||(!A6&&A9)||BA||A1){A4(BD[BC])}}}function A3(A7,A6){}function z(A7,A6){if((A6=A6||A7.parentNode)){A6.removeChild(A7)}}function Y(A8){if(!A8||typeof A8.toString=="undefined"){return }var A6=(/(function\s*.*\s*\(.*\))/).exec(A8.toString())||[""],A7=A6.length>1?A6[1]:A6[0];if(typeof A8.prototype=="undefined"){return }A8.prototype.constructor.toString=function(A9){return(AY&&!A1)?A7:A8.prototype.toString()}}function AG(A7,A6){return A7-A6}function O(BA){var A9,A7;if(!(Ay(BA)&&AT.has(BA))){A7=AT.getAllArray()}else{if(AQ(BA)){A7=[[BA,AT.get(BA)]]}}if(!A7){return }for(var A6,A8=A7.length;--A8>=0;){BA=A7[A8][0];if(!(AT.has(BA)&&(A9=AQ(BA)))){continue}U((A6=A7[A8][1]),BA,arguments);if(A6=="*"){A6=null}At(A6,BA,A9);p(BA)}}function y(A6){return v+".GetPathFor("+A6+") is not supported. Namespace paths are protected."}function Az(A6){this.name="DEPRECATED: "+Ar+".NamespaceException";this.message="DEPRECATED: Invalid _namespace name ["+A6+"]";this.toString=A7;function A7(){return"[ "+this.name+" ] :: "+this.message}}function T(A6){if(Ay(A6)){AS.path=A6}}function t(BA){if(!BA){return }var A9={},A7=BA.split("."),A8=window[A7[0]];for(var A6=1;typeof A7[A6]!="undefined";A6++){if(typeof A8[A7[A6]]=="undefined"){break}A9[A7[A6-1]]=[A6,true];A8=A8[A7[A6]];for(var BB in A8){if("undefined"==typeof Object.prototype[BB]){if(BB!=A7[A6]){A9[A7[A6-1]][1]=false;break}}}}for(A8 in A9){if("undefined"==typeof Object.prototype[A8]){if(A9[A8][1]){AA(A7.slice(0,A9[A8][0]+1).join("."))}}}}function AA(A8){var A6;if(A8){if(!Ay(A8)){if((A8=Ah(A8))){A8=A8.fullName;A6=A8.shortName}}if(!A6&&A8){A6=A8.substring(A8.lastIndexOf(".")+1)}A8=AC.exec(A8);A8=A8?A8[1]:null}var A7=AQ(A8);if(A7&&A6){if(A6=="*"||typeof (A7[A6])!="undefined"){if(A6!="*"){if(A7[A6]==window[A6]){window[A6]=null}delete A7[A6]}else{for(var A9 in A7){if("undefined"==typeof Object.prototype[A9]){delete A7[A9]}}t(A8)}}}o(A8)}function AK(BA){var A6=BA;var BB=AT.getAllArray();for(var A8,A9=0,A7=BB.length;A9<A7;++A9){if(Af.has((A8=BB[A9][0]))){continue}if("*"!=BB[A9][1]){A6=AC.exec(A8)}if(!(A6&&(BA==A6[1]))){continue}Af.add((F=A8));return }F=Ac}function j(A7,A9){A9=typeof A9!="undefined"?A9:!(A7==false);var A6=(A7=A7||window||this).onload;function A8(BA){if(BA==true){return(A6||null)}AW(o);O();o();if(Al(A6)&&A8.toString()!=A6.toString()){A6(BA)}return A6}if(Al(A6)&&A8.toString()==A6.toString()){if(!A9){A7.onload=A6(true)}return }A7.onload=A8}function AE(A6){if(!A6){return window.document}if(typeof A6.write=="undefined"){if(typeof A6.document!="undefined"){A6=A6.document}else{if(typeof A6.parentNode!="undefined"){return AE(A6.parentNode)}else{return window.document}}}return A6}function A5(A6,BB){if(!BB){return null}var BA=BB.split(".");var A7;for(var A9=0,A8=BA.length;A9<A8;A9++){if(isNaN(BA[A9])){continue}BB=BA.slice(0,A9).join(".");A6=A6||BA.slice(A9-1,A9)[0];A7=BA.slice(A9).join(".");break}if(!A7){return null}return[A6,BB,A7]}function Ae(A7){if(!(A7=AE(A7))){return null}var A6=(typeof A7.scripts!="undefined"&&typeof A7.scripts.length!="undefined"&&A7.scripts.length>0)?A7.scripts:(typeof A7.getElementsByTagName!="undefined")?(A7.getElementsByTagName("script")||[]):[];return A6}function AB(A6){if(A6){if((!Aq||Z)&&!B){if((Aq&&X&&A6!=Aq.ownerDocument)||!Aq||!X&&Z){if(A6.lastChild&&A6.lastChild.firstChild){Aq=A6.lastChild.firstChild}}}else{if(!Aq&&B){Aq=Ak}}}return Aq}function V(A8){Aa(A8);if(!A8||!Ay(A8)){return[]}var A7=L?A8.lastIndexOf(L):A8.lastIndexOf(".");if(A7<A8.length&&A7>=0){var A9=A8.slice(A7,A7+L.length);var A6=A8.substring(0,A7);if(A6&&isNaN(A6.charAt(0))){A6=""}}return[A6,A9]}function AQ(BA,A6){if(!Ay(BA)){return null}var A9=A6||window;BA=BA.split(".");for(var A8=0,A7=BA.length;A8<A7;A8++){if(typeof A9[BA[A8]]!="undefined"){A9=A9[BA[A8]]}else{return null}}return A9}function Ah(A8){if(!A8){return new w(AS)}var A6=Ay(A8);for(var A7 in c){if("undefined"==typeof Object.prototype[A7]){if((A6&&A8==A7)||(!A6&&A8==AQ(A7))){return c[A7]}}}return null}function r(BN,BD){BN=BN||Ar;if(BN==Ar&&AS&&AS.path){return AS}var BF=c[BN];if(BF){return BF}var BP=x(BN,BD);if((BF=g(BN,BP))){return(c[BN]=BF)}var A6=Ae();if(!(A6&&BP)){return null}var BM;for(var BE=false,BH,BJ,BL=0,BK=A6.length;BL<BK;BL++){BH=unescape(A6[BL].src);if(BH&&BH.search(n)==-1){BH=unescape(window.location.href);if(BH.charAt(BH.length-1)!=f){if((BJ=K.exec(BH))!=null){if(BJ[1].length>BH.search(n)+3){BH=BJ[1]}}}BH+=unescape(A6[BL].src)}if(typeof BH=="undefined"||BH==null){continue}while(R.test(BH)){BH=BH.replace(R,"/")}if(C.has(BH)){continue}C.add(BH);if(BE){continue}var A8;for(var A9 in BP){if(typeof Object.prototype[A9]!="undefined"){continue}A8=BP[A9];var BO,BQ,BB=[];for(var BI=A8.length;--BI>=0;){BO=A8[BI];BQ=BH.lastIndexOf(BO)+1;if(BQ<=0||BQ==BB[0]){continue}BB[BB.length]=BQ;G("FOUND :: Path [ "+BH+" ]",arguments)}if(BB.length==0){continue}BB.sort(AG);BQ=BB[BB.length-1];BD=(BQ==(BH.lastIndexOf(BO)+1))?A9:null;BM=BH.substring(0,BQ);BE=true;if(BN==Ar&&A6[BL].title!=Ar){A6[BL].title=Ar}var A7=BQ+BO.length-2;var BG=V(BH.substring(A7+1));var BC=BG[1];var BA=BG[0];break}}if(!BM){return null}BF=new w(BM,BD,BN,null,BA,BC);c[BN]=BF;return BF}function g(BM,BN){var BE=Number.MAX_VALUE;var BG;var A7=[];var BH;var BA=0;BN=BN||x(BM);var BC=[];var BK=C.getAll();BK:for(var BI in BK){if(typeof Object.prototype[BI]!="undefined"){continue}for(var A9 in BN){if(typeof Object.prototype[A9]!="undefined"){continue}BC[BC.length]=A9;for(var A8=BN[A9],BL=A8.length;--BL>=0;){if(0<(BH=BI.lastIndexOf(A8[BL]))){BG=BI.length-(BH+A8[BL].length);if(BG<BE){BE=BG;BA=A7.length}A7[A7.length]=BH+1;var A6=(BH+1)+A8[BL].length-2;var BJ=V(BI.substring(A6+1));var BD=BJ[1];var BB=BJ[0];G("FOUND :: Cached Path [ "+BI+" ]",arguments);break BK}if(BL==0){delete BC[--BC.length]}}}}if(!A7||A7.length==0){return null}BI=BI.substring(0,A7[BA]);var BF=new w(BI,BC[BA],BM,null,BB,BD);if(BF.path){c[BM]=BF}return BF}function x(A8,BA){var BB=As();var A6=typeof BA=="undefined"?H:[BA];var A9={};for(var A7=A6.length;--A7>=0;){BA=A6[A7];A9[BA]=[];A9[BA][2]=BB+A8.replace(/\x2e/g,BA);A9[BA][0]=A9[BA][2]+BA;A9[BA][1]=A9[BA][2]+BB;A9[BA][2]=A9[BA][2]+"."}return A9}function h(){return[(A1?"cloak":"cloakoff"),(AY?"debug":"debugoff"),(e?"legacy":"legacyoff"),(b?"mvc":"mvcoff"),(AR?"mvcshare":"mvcshareoff"),(i?"override":"overrideoff"),(Q?"refresh":"refreshoff")].join(",")}function As(){var A8=unescape(window.location.href);var A6=A8.lastIndexOf("\\")+1;var A7=A8.lastIndexOf("/")+1;f=(A6>A7?"\\":"/");return f}function Ab(BG,BA,A6,BF,BD,A8,A7){var BB=BA+(BG=="*"?".*":"");var BE=BB;var A9;do{if((BB=AC.exec(BB))){BB=BB[1]}else{break}if(BB==BE){break}BE=BB;A9=r(BB)}while(!A9);if(!Ay(A6)){A6=(typeof A9!="undefined"&&A9!=null&&typeof A9.path!="undefined")?A9.path:(AS.path||"")}if(A6.lastIndexOf("/")!=(A6.length-1)){A6+="/"}if(e){if(BF==false){BF="/"}else{if(BF==true){BF="."}}}if(BF==null||typeof BF=="undefined"){BF=A9?typeof A9.notation=="undefined"?AS.notation:A9.notation:AS.notation}A6+=escape(BA.replace(/\x2e/g,BF));E(BA,(BG=="*"?BA:BG));AV(BA);if(AT.add(BA,BG)){if(BG=="*"){((BG=A2),G("...\t:: Import (\""+BA+".*\")",arguments))}else{if(BG==BA){G("...\t:: Include (\""+BG+"\")",arguments)}else{G("...\t:: ImportAs (\""+BG+"\", \""+BA+"\")",arguments)}}if(BD){A6+="."+BD}A6+=L;if(A9&&A9.hasOption("refresh")){A6=AF(A6)}var BC=W(A6,AE((A7||window||this)),"ImportAs(\""+BG+"\", \""+BA+"\");",false,BA);if(!BC){return A8}(new a(BA)).start()}return A8}function At(BB,A8,A7,A6){A6=A6||window||this;if(!A7){return A7}if((BB!=A2)&&An(BB,A8,A6)){AT.remove(A8);return A7}if(!Ad(A8,BB)){return null}var BC=[];var BE=AT.get(A8);var BA=BB==A8||BE==A8;if(BB&&BB!=A2&&(!BE||(BE!="*"&&BE!=A2))){if(BA){BC[0]="SUCCESS :: Include (\""+A8+"\")"}else{((A6[BB]=A7),(BC[0]="SUCCESS :: ImportAs (\""+BB+"\", \""+A8+"\")"))}AT.remove(A8);Af.add(A8,BB)}else{if(BE=="*"){BC[BC.length]=" ";if(!BA){var BD;for(var A9 in A7){if(typeof Object.prototype[A9]!="undefined"){continue}BD=A8+"."+A9;if(c[BD]||An(A9,BD,A6)){continue}A6[A9]=A7[A9];BC[BC.length]="SUCCESS :: ImportAs (\""+A9+"\", \""+BD+"\")"}}AT.remove(A8);if(BB!=A2){AT.add(A8,A2)}}else{if(BE!="*"&&(BE==A2||BB==A2)){BC[0]="SUCCESS :: "+(BA?"Include":"Import")+" (\""+A8+".*\")";AT.remove(A8);Af.add(A8,"*")}}}if(BC.length>0){G(BC.join("\r\n"),arguments)}AD(A8);return A7}function An(A7,A9,A6){A6=A6||window||this;if(i||(A9==A7&&!AQ(A7))||(typeof A6[A7]=="undefined")||(AQ(A9)==A6[A7])){return false}var A8="\nWARNING: There is a naming conflict, "+A7+" already exists.\nConsider using the override load-time option, "+v+".EnableOverride(),\nor ImportAs with an alias; for example:\n\n\tImportAs (\""+A7+"1\", \""+A9+"\");";if(A7==A9){A8+="\n\nThe module is currently inaccessible.\n"}else{A8+="\n\nThe module can currently be accessed using its fully-qualified name:\n\n\t"+A9+".\n"}G(A8,arguments,AY);return true}function S(A9,A7,A8,A6){return q(null,A9,A7,A8,A6)}function q(BH,BA,A6,BF,A7){j();if(!BA||BA=="*"){G("ERROR :: ImportAs (\""+BH+"\", \""+BA+"\")");return null}var BG,BE;if(!Ay(BH)){BH=""}if((BG=A5(BH,BA))){BA=BG[1];BH=(BH!=A2)?BG[0]:A2;BE=BG[2]}else{if(!BH){BH=BA.substring(BA.lastIndexOf(".")+1)}}A7=A7||window||this;if(BH=="*"){BA=AC.exec(BA)[1]}else{if(typeof A7[BH]!="undefined"&&BH!=BA){for(var BI=m.length;--BI>=0;){if(BH!=m[BI]){continue}G("ERROR :: ImportAs (\""+BH+"\", \""+BA+"\")! "+BH+" is restricted.",arguments);return A7[BH]}}}var A8=A7;var BD="";for(var A9=BA.split("."),BC=0,BB=A9.length;BC<BB;BC++){if(typeof A8[A9[BC]]!="undefined"){A8=A8[A9[BC]];BD+=A9[BC]+"."}else{break}}if((BC>=BB&&BH!="*")){if(AT.has(BA)||!Af.has(BA)){A8=At(BH,BA,A8,A7);p(BA)}return A8}if(AT.has(BA)){if(BH=="*"||BH==A2){BH=BA}E(BA,BH);AV(BA);return null}return Ab(BH,BA,A6,BF,BE,A8,A7)}function a(BA,A8,A6){var A9,BE,BC=0;function BB(BF){A6=A6||500;A8=A8||60000;A9=window.setInterval(BD,A8);BF.start=A7;BF.stop=BD;return BF}function A7(){if(BC>=A6){BD();return }if(AQ(BA)){O()}else{BE=window.setTimeout(A7,0)}}function BD(){if(typeof BE!="undefined"){window.clearTimeout(BE)}if(typeof A9!="undefined"){window.clearInterval(A9)}}if(this.constructor!=a){if(!this.constructor||this.constructor.toString()!=a.toString()){return new a(BA,A8,A6)}}return BB(this)}function Au(A9,A7,A8,A6){return q(A9,A9,A7,A8,A6)}function Al(A6){return((A6!=null&&typeof A6!="undefined")&&(Function==A6.constructor||typeof A6=="function"))}function A(){if(typeof document=="undefined"){return false}var A6="undefined"!=typeof document.write&&"undefined"!=typeof document.writeln;Ap=A6&&"undefined"!=typeof document.createElement;B=Ap&&"undefined"!=typeof document.createTextNode&&"undefined"!=typeof document.getElementsByTagName&&"undefined"!=typeof (Ak=document.getElementsByTagName("head")[0]).appendChild&&"undefined"!=typeof Ak.removeChild;Z=B&&"undefined"!=typeof document.firstChild&&"undefined"!=typeof document.lastChild&&"undefined"!=typeof document.parentNode;X=Z&&"undefined"!=typeof document.ownerDocument;return !(A6||Ap||B||Z||X)}function Ay(A6){return A6!=null&&typeof A6!="undefined"&&(A6.constructor==String||typeof A6=="string")}function Ad(BC,A6){var A9=(BC==F);var A7=AT.has(BC);var A8=u.get(BC);function BA(){if(A9||Ad(F)||A7){return true}AT.add(BC,A6);(new a(BC)).start();return false}if(!A8||!(A8=A8.getAll())){return BA()}for(var BB in A8){if("undefined"==typeof Object.prototype[BB]){if(!AQ(A8[BB])){return false}}}return BA()}function W(A8,A6,BA,BC,BB,A9,BD){j();if(!(A6=AE(A6))){G("ERROR :: Container not found. Unable to load:\n\n["+A8+"]",arguments);return false}if(A8){C.add(unescape(A8));if(Q){A8=AF(A8)}}if(!(A9||BD)){BD="JavaScript";A9="text/javascript"}if(typeof BC=="undefined"){BC=false}var A7;if(Ap){A7=A6.createElement("script")}if(!A7){if(BA){BA="window.setTimeout('"+BA+"',0);"}P(A8,A6,BA,BC,BB,A9,BD);return false}if(BC){A7.defer=BC}if(BD){A7.language=BD}if(BB){A7.title=BB}if(A9){A7.type=A9}if(A8){G("...\t:: Load [ "+A8+" ]",arguments);if(AJ||!N){A7.src=A8}AB(A6).appendChild(A7);if(A0||N){A7.src=A8}G("DONE\t:: Load [ "+A8+" ]",arguments)}if(!BA){return true}if(A8){W(null,A6,BA,BC,BB,A9,BD);return true}if(typeof (A7.canHaveChildren)=="undefined"||A7.canHaveChildren){A7.appendChild(A6.createTextNode(BA))}else{if(!A7.canHaveChildren){A7.text=BA}}AB(A6).appendChild(A7);return false}function Aw(){if(!(b||AR)){return }if(AR){W(AS.path+Ac+L,null,null,null,Ac)}if(!b){return }var A7=unescape(document.location.href);var A6=A7.lastIndexOf(f);A7=A7.substring(++A6);A6=A7.lastIndexOf(".");A6=(A6==-1)?0:A6;if(""!=(A7=A7.substring(0,A6))){Ac=A7}W(Ac+L,null,null,null,Ac)}function Aa(A7){if(!A7||!Ay(A7)){return }var A8=A7.lastIndexOf("?")+1;A7=A7.substring(A8).toLowerCase();if(A7.length==0){return }var A6;if((A6=d.exec(A7))){A1=A6[1]=="cloak"}if((A6=M.exec(A7))){AY=A6[1]=="debug"}if((A6=Ag.exec(A7))){J(A6[1]=="legacy")}if((A6=k.exec(A7))){b=A6[1]=="mvc"}if((A6=AI.exec(A7))){AR=A6[1]=="mvcshare"}if((A6=AL.exec(A7))){i=A6[1]=="override"}if((A6=I.exec(A7))){Q=A6[1]=="refresh"}}function P(A6,A8,A9,A7,BE,BD,BC){if(!(A8=AE(A8))){return }var BB;if(A6){G("...\t:: LoadSimple [ "+A6+" ]",arguments);if(A9){BB=A9;A9=null}}var BA="<script"+(A7?" defer=\"defer\"":"")+(BC?(" language=\""+BC+"\""):"")+(BE?(" title=\""+BE+"\""):"")+(BD?(" type=\""+BD+"\""):"")+(A6?(" src=\""+A6+"\">"):">")+(A9?(A9+";"):"")+"</script>\n";A8.write(BA);if(A6){G("DONE\t:: LoadSimple [ "+A6+" ]",arguments)}if(!(A9=A9||BB)){return }if(A6){P(null,A8,A9,A7,BE,BD,BC)}}function G(BA,BB,A9){if(!AY&&!A9){return }var A8,BC=1<((A8=(/function\s*(\w*)\(/).exec(BB.callee))||["("]).length?A8[1]:"";if(typeof BA!="undefined"){var A7=s;var A6=new Date();s=[A6.getFullYear(),A6.getMonth()+1,A6.getDate()].join(".")+","+[A6.getHours(),A6.getMinutes(),A6.getSeconds(),A6.getMilliseconds()].join(":")+"\t:: "+F+" :: "+BC+"\r\n"+BA+"\r\n\r\n";if(typeof console!="undefined"){if(Al(console.info)){console.info(s)}}if(typeof YAHOO!="undefined"){if(Al(YAHOO.log)){YAHOO.log(s)}}if(typeof MochiKit!="undefined"){if(Al(MochiKit.log)){MochiKit.log(s)}}s+=A7}if(A9){AU()}}function U(A6,A9,A8){var A7=(A6=="*"||A6==A2)?("Import   (\""+A9+".*\")"):(A6==A9)?("Include  (\""+A9+"\")"):("ImportAs (\""+A6+"\", \""+A9+"\")");G(("CHECKING :: "+A7+"..."),A8)}function AX(A7,BE,BC,A6){j();A7=A7||"<default>";G("Namespace (\""+A7+"\")",arguments);var BD=A6||window;if(A7=="<default>"){AS.update(BE,BC);G(AS,arguments);return BD}AK(A7);var A8=A7.split(".");for(var BB=0,BA=A8.length;BB<BA;BB++){if(typeof BD[A8[BB]]!="undefined"){BD=BD[A8[BB]]}else{BD=BD[A8[BB]]={}}}var A9=c[A7];if(A9){A9.update(BE,BC);G(A9,arguments);return BD}if(!BE){A9=r(A7,BC)}if(BE||!A9){A9=new w(BE,BC,A7)}if(A9&&!c[A7]){c[A7]=A9}G(A9,arguments);return BD}function w(BG,BD,A7,BE,BA,BF,BH){function BB(BI){BC();BI.hasOption=A9;BI.toString=A6;BI.update=A8;BI.update(BG,BD,A7,BE,BA,BF,BH);return BI}function BC(){if(!(BG&&BG.constructor==w)){return }var BI=BG;BF=BI.extension;A7=BI.fullName;BD=BI.notation;BH=BI.options;BG=BI.path;BE=BI.shortName;BA=BI.version}function A9(BI){BH=BH||this.options;if(!(BH&&BI&&(BH.indexOf(BI)>=0))){return false}var BJ=(new RegExp(BI,"g")).exec(BH);return BJ&&(typeof BJ[1]!="undefined")&&BJ[1]==BI}function A6(){return"NamespaceInfo\r\n[ fullName: "+this.fullName+"\r\n, shortName: "+this.shortName+"\r\n, version: "+this.version+"\r\n, notation: "+this.notation+"\r\n, options: "+this.options+"\r\n, path: "+this.path+"\r\n, uri: "+this.uri+"\r\n]"}function A8(BM,BL,BN,BI,BJ,BO,BK){this.extension=BO||this.extension||L;this.fullName=BN||this.fullName||"";this.shortName=BI||this.shortName||"";this.notation=Ay(BL)?BL:(this.notation||((AS&&Ay(AS.notation))?AS.notation:"."));this.options=Ay(BK)?BK:(this.options||h());this.path=Ay(BM)?BM:(this.path||((AS&&Ay(AS.path))?AS.path:""));this.uri=this.path+this.fullName.replace(/\x2e/g,this.notation);this.version=""+(BJ||this.version||"");if(!this.uri){return }this.uri+=(this.version?("."+this.version):"")+this.extension}if(this.constructor!=w){if(!this.constructor||this.constructor.toString()!=w.toString()){return new w(BG,BD,A7,BE,BA,BF,BH)}}return BB(this)}function AD(A9){var BB=[l.get(""),l.get(A9),l.get(D)];if(!BB[0]&&!BB[1]&&!BB[2]){return }var A6=(BB[0]&&(BB[0].getSize()>0))||(BB[1]&&(BB[1].getSize()>0));if(AY&&A6){G(("NOTIFY :: Import Listeners for "+A9+"..."),arguments)}for(var A8,A7=BB.length;--A7>=0;){if(!BB[A7]){continue}A8=BB[A7].getAll();for(var BA in A8){if("undefined"==typeof Object.prototype[BA]){A8[BA](A9)}}}if(AY&&A6){G(("NOTIFY :: Import Listeners for "+A9+"...DONE!"),arguments)}}function AH(A6){AX(Ar);Y(window.Import=S);Y(window.ImportAs=q);Y(window.Include=Au);Y(window.Load=W);Y(window.Namespace=AX);Y(A6.AddImportListener=AW);Y(A6.EnableLegacy=J);Y(A6.GetVersion=function(){return AS.version});Y(A6.RemoveImportListener=Ai);Y(A6.SetOption=AP);Y(A6.ShowLog=AU);Y(A6.Unload=Av);Ao(A6,"Cloak");Ao(A6,"Debug");Ao(A6,"Override");Ao(A6,"Refresh");J(e||false)}function Ao(A7,A6){if(!A6||!Ay(A6)){return }Y(A7["Enable"+A6]=function(A8){AP(A6,A8)})}function Ai(A6,BA){j();if(!BA||!Al(BA)){if(Al(A6)){BA=A6;A6=null}else{return false}}else{if(A6&&!Ay(A6)){return false}}var BC=[l.get(""),l.get(A6),l.get(D)];if(!BC[0]&&!BC[1]&&!BC[2]){return false}var A9=false;for(var A8,A7=BC.length;--A7>=0;){if(!BC[A7]){continue}A8=BC[A7].getAll();for(var BB in A8){if("undefined"==typeof Object.prototype[BB]){if(A8[BB]==BA){BC[A7].remove(BB);A9=true;break}}}}return A9}function J(A6){if(typeof A6=="undefined"){A6=true}e=A6;AN=AN||AQ(v);if(A6){AN.DIR_NAMESPACE=AN.USE_PATH="/";AN.DOT_NAMESPACE=AN.USE_NAME=".";Y(AN.CompleteImports=O);Y(AN.EnableDebugging=AN.EnableDebug);Y(AN.GetPathFor=y);Y(window.JSBasePath=window.JSPath=AN.SetBasePath=T);Y(window.JSImport=S);Y(window.JSLoad=W);Y(window.JSPackaging=AN);Y(window.JSPackage=window.Package=AX);Y(window.JSPacked=function(A7){AS.notation=A7});Y(window.NamespaceException=window.PackageException=Az)}if(A6||typeof window["JSPackaging"]=="undefined"){return }delete AN.DIR_NAMESPACE;delete AN.DOT_NAMESPACE;delete AN.CompleteImports;delete AN.EnableDebugging;delete AN.GetPathFor;delete AN.SetBasePath;delete AN.USE_NAME;delete AN.USE_PATH;delete window.JSBasePath;delete window.JSImport;delete window.JSLoad;delete window.JSPackaging;delete window.JSPackage;delete window.JSPacked;delete window.JSPath;delete window.Package;delete window.NamespaceException;delete window.PackageException}function AP(A6,A7){j();if(!A6||!Ay(A6)){return }A7=typeof A7=="undefined"?true:A7;A6=A6.toLowerCase();switch(A6){case"cloak":A1=A7;break;case"debug":AY=A7;break;case"legacy":J(A7);break;case"override":i=A7;break;case"refresh":Q=A7;break;default:break}}function AF(A6){if((/ajile.refresh/g).test(A6)){return A6}return A6+((/\?/g).test(A6)?"&":"?")+"ajile.refresh="+Math.random()}function AU(){j();if(!AY){s="\r\nTo enable debug logging, use <b>"+v+".EnableDebug()</b> from within any of your scripts or use "+v+"'s debug load-time option as follows:<br><br><pre><code>&lt;script src=\""+AS.uri+"?<b>debug</b>\" type=\"text/javascript\"&gt;&lt;/script&gt;</code></pre>"}var A8="<html><head><title>"+v+"'s Debug Log "+(!AY?":: DISABLED":"")+"</title>\r\n<style type=\"text/css\">*{background-color:#eee;color:#000;font-family:\"Tahoma\";font-size:12px;}</style>\r\n</head>\r\n<body>"+s.replace(/\r\n/g,"<br>")+"</body></html>";var A9=screen.width/1.5;var A6=screen.height/1.5;var A7=window.open("","__AJILELOG__","width="+A9+",height="+A6+",addressbar=0,directories=0,location=0,menubar=0,scrollbars=1,statusbar=0,toolbar=0,resizable=1");if(!A7){return }A7.document.writeln(A8);A7.document.close()}function AM(){var A8={},BG=0;function BA(BH){BH.add=BE;BH.clear=BC;BH.get=A7;BH.getAll=BB;BH.getAllArray=A6;BH.getSize=BF;BH.has=BD;BH.remove=A9;return BH}function BE(BH,BI){if(A7(BH)){return false}A8[BH]=BI;BG++;return true}function BC(){for(var BH in A8){if("undefined"==typeof Object.prototype[BH]){delete A8[BH]}}BG=0}function A7(BH){if("undefined"==typeof Object.prototype[BH]){if("undefined"==typeof A8[BH]){return null}else{return A8[BH]}}else{return null}}function BB(){return A8}function A6(){var BI=[];for(var BH in A8){if("undefined"==typeof Object.prototype[BH]){BI[BI.length]=[BH,A8[BH]]}}return BI}function BF(){return BG}function BD(BH){return typeof Object.prototype[BH]=="undefined"&&typeof A8[BH]!="undefined"}function A9(BH){if(!BD(BH)){return false}delete A8[BH];BG--;return true}if(this.constructor!=AM){if(!this.constructor||this.constructor.toString()!=AM.toString()){return new AM()}}return BA(this)}function p(A8){var A9=AO.get(A8);if(!A9){return }A9=A9.getAll();var A7;for(var A6 in A9){if("undefined"==typeof Object.prototype[A6]){if(AT.has(A6)&&(A7=AQ(A6))){if(At(AT.get(A6),A6,A7)){p(A6)}}}}}var A4,F=Ar,u=new AM(),l=new AM(),A0=(/MSIE/i).test(window.navigator.userAgent),N=(/Opera/i).test(window.navigator.userAgent),AJ=(/WebKit/i).test(window.navigator.userAgent),C=AM(),c={clear:function(){for(var A6 in this){if("undefined"==typeof Object.prototype[A6]){delete this[A6]}}}},AT=new AM(),Af=new AM(),AO=new AM();AZ(this)}