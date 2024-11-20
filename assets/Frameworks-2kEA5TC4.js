import{S as V}from"./Sidebar-NAxYSlPT.js";import{B as S}from"./Back-Bp6Tgv2i.js";import{_ as w,c as d,b as v,a as s,w as I,d as i,i as g,j as c,k as a,l as U,e as m,m as x,n as R,t as q,v as u,o as p,r as f}from"./index-Dsej9PJs.js";import{_ as E,a as C,b as D}from"./langchain-icon-D5kr9sac.js";const M={name:"Dockerfile",components:{Back:S,Sidebar:V},data(){return{baseImage:"",dependencies:"",envVars:"",startupScript:"",gpuSupport:!1,errorMessage:"",isSubmitting:!1}},methods:{async submitForm(){if(!this.baseImage){this.errorMessage="Por favor escolha uma imagem base";return}const t=localStorage.getItem("token"),e={baseImage:this.baseImage,framework:this.framework,dependencies:this.dependencies,gpuSupport:this.gpuSupport,envVars:this.envVars,ports:this.ports,startupScript:this.startupScript,useRequirements:this.useRequeriments};fetch("https://api-fad.onrender.com/createDockerfile",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify(e)}).then(l=>l.blob()).then(l=>{const n=document.createElement("a");n.href=URL.createObjectURL(l),n.download="Dockerfile",n.click()}).catch(l=>{console.error("Erro ao criar Dockerfile:",l)})}}},B={class:"dockerfile-page"},h={class:"container"},N={class:"checkbox"},A={class:"input-base-image"},P={class:"top"},T={key:0,class:"mid"},j={class:"mid"},z={class:"bottom"},F={key:1,class:"error-message"},O={class:"input-config"},L={class:"input-framework-or-library"},G={class:"top"},H=["value"],J={class:"mid"},Y=["value"],K={class:"bottom"},Q={class:"input-dependencies"},W={class:"checkbox"},X={class:"input-env"},Z={class:"input-ports"},_={class:"input-startup-script"};function $(t,e,l,n,r,b){const k=f("Sidebar"),y=f("Back");return p(),d("div",B,[v(k),s("div",h,[v(y),s("form",{class:"interface",onSubmit:e[13]||(e[13]=I((...o)=>b.submitForm&&b.submitForm(...o),["prevent"]))},[e[31]||(e[31]=s("h1",null,"Crie seu dockerfile",-1)),s("div",N,[i(s("input",{type:"checkbox",id:"gpuCheckbox","onUpdate:modelValue":e[0]||(e[0]=o=>r.gpuSupport=o)},null,512),[[g,r.gpuSupport]]),e[14]||(e[14]=s("label",{class:"labelCheckbox",for:"gpuCheckbox"},"Você está utilizando GPU em seu modelo?",-1))]),e[32]||(e[32]=s("h2",null,"Escolha a imagem base",-1)),s("div",A,[s("div",P,[e[15]||(e[15]=s("img",{class:"base-logo",src:c},null,-1)),e[16]||(e[16]=s("label",{for:"rad1"},"Python",-1)),i(s("input",{type:"radio",name:"base-image",class:"radio",id:"rad1",value:"python:latest","onUpdate:modelValue":e[1]||(e[1]=o=>r.baseImage=o)},null,512),[[a,r.baseImage]])]),r.gpuSupport?m("",!0):(p(),d("div",T,[e[17]||(e[17]=s("img",{class:"base-logo",src:U},null,-1)),e[18]||(e[18]=s("label",{for:"rad4"},"Nvidia CUDA",-1)),i(s("input",{type:"radio",name:"base-image",class:"radio",id:"rad4",value:"nvidia/cuda:11.8-cudnn8-devel-ubuntu20.04","onUpdate:modelValue":e[2]||(e[2]=o=>r.baseImage=o)},null,512),[[a,r.baseImage]])])),s("div",j,[e[19]||(e[19]=s("img",{class:"base-logo",src:x},null,-1)),e[20]||(e[20]=s("label",{for:"rad4"},"Ubuntu",-1)),i(s("input",{type:"radio",name:"base-image",class:"radio",id:"rad2",value:"ubuntu:latest","onUpdate:modelValue":e[3]||(e[3]=o=>r.baseImage=o)},null,512),[[a,r.baseImage]])]),s("div",z,[e[21]||(e[21]=s("img",{class:"base-logo",src:R},null,-1)),e[22]||(e[22]=s("label",{for:"rad4"},"Debian",-1)),i(s("input",{type:"radio",name:"base-image",class:"radio",id:"rad3",value:"debian:latest","onUpdate:modelValue":e[4]||(e[4]=o=>r.baseImage=o)},null,512),[[a,r.baseImage]])]),r.errorMessage?(p(),d("div",F,q(r.errorMessage),1)):m("",!0)]),s("div",O,[e[29]||(e[29]=s("h2",null,"Escolha o framework/biblioteca que você está utilizando",-1)),s("div",L,[s("div",G,[e[23]||(e[23]=s("img",{class:"base-logo",src:E},null,-1)),e[24]||(e[24]=s("label",{for:"rad1"},"Pytorch",-1)),i(s("input",{type:"radio",name:"framework",class:"radio",id:"rad5",value:r.gpuSupport?"torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cuda/11.8":"torch torchvision torchaudio","onUpdate:modelValue":e[5]||(e[5]=o=>t.framework=o)},null,8,H),[[a,t.framework]])]),s("div",J,[e[25]||(e[25]=s("img",{class:"base-logo",src:C},null,-1)),e[26]||(e[26]=s("label",{for:"rad4"},"Tensorflow",-1)),i(s("input",{type:"radio",name:"framework",class:"radio",id:"rad6",value:r.gpuSupport?"tensorflow-gpu":"tensorflow","onUpdate:modelValue":e[6]||(e[6]=o=>t.framework=o)},null,8,Y),[[a,t.framework]])]),s("div",K,[e[27]||(e[27]=s("img",{class:"base-logo",src:D},null,-1)),e[28]||(e[28]=s("label",{for:"rad4"},"Langchain",-1)),i(s("input",{type:"radio",name:"framework",class:"radio",id:"rad7",value:"pip install langchain[all]","onUpdate:modelValue":e[7]||(e[7]=o=>t.framework=o)},null,512),[[a,t.framework]])])])]),e[33]||(e[33]=s("h2",null,"Escolha o método de inserir as dependências",-1)),s("div",Q,[s("div",W,[i(s("input",{type:"checkbox",id:"useRequeriments","onUpdate:modelValue":e[8]||(e[8]=o=>t.useRequeriments=o)},null,512),[[g,t.useRequeriments]]),e[30]||(e[30]=s("label",{class:"labelCheckbox",for:"useRequeriments"},"Deseja utilizar requeriments.txt?",-1))]),t.useRequeriments?m("",!0):i((p(),d("input",{key:0,class:"dependencies",type:"text",placeholder:"Insira as dependências (Exemplo: numpy seaborn matplotlib)","onUpdate:modelValue":e[9]||(e[9]=o=>r.dependencies=o)},null,512)),[[u,r.dependencies]])]),e[34]||(e[34]=s("h2",null,"Insira as váriaveis de ambiente",-1)),s("div",X,[i(s("input",{class:"envVars",type:"text",placeholder:"Insira as váriaveis de ambiente (Exemplo: MY_ENV_VAR=value1,ANOTHER_VAR=value2)","onUpdate:modelValue":e[10]||(e[10]=o=>r.envVars=o)},null,512),[[u,r.envVars]])]),e[35]||(e[35]=s("h2",null,"Insira as portas que seu modelo vai rodar",-1)),s("div",Z,[i(s("input",{class:"ports",type:"text",placeholder:"Insira a porta que o container vai rodar (Exemplo: 8080,9090)","onUpdate:modelValue":e[11]||(e[11]=o=>t.ports=o)},null,512),[[u,t.ports]])]),e[36]||(e[36]=s("h2",null,"Insira o comando para rodar seu modelo",-1)),s("div",_,[i(s("input",{class:"startupScript",type:"text",placeholder:"Insira o comando que vai rodar sua aplicação (Exemplo: python app.py)","onUpdate:modelValue":e[12]||(e[12]=o=>r.startupScript=o)},null,512),[[u,r.startupScript]])]),e[37]||(e[37]=s("div",{class:"input-submit"},[s("input",{class:"submit",type:"submit",value:"Criar dockerfile"})],-1))],32)])])}const te=w(M,[["render",$],["__scopeId","data-v-9da4ab0b"]]);export{te as default};
