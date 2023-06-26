import { css } from 'lit-element';

 const phoneStyle = css`
.iphone-wrapper{
  position: relative;
  border: 14px #f2f2f2 solid;
    border-radius: 56px;
}
.speaker {
  display: block;
  width: 50px;
  height: 5px;
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #f2f2f2;
  border-radius: 10px;
}
.speaker::after {
content: "";
display: block;
width: 10px;
height: 10px;
position: absolute;
top: -2px;
left: 110%;
background: #f2f2f2;
border-radius: 50%;
}
.left-buttons{
  position: absolute;
  left:-20px;
}
.right-buttons{
  position: absolute;
  left:20px;
}
  /* The device with borders */
  .smartphone {
    position: relative;
    width: 320px;
    height: 700px;
    margin: auto;
    border: 12px #cccccc solid;
    border-radius: 40px;
    overflow:hidden;
  }


 

  .smartphone:before {
    content: "";
    display: block;
    width: 180px;
    height: 40px;
    position: absolute;
    top: 5px;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #cccccc;
    border-radius: 20px;
}
  }

  /* The circle on the bottom of the device */
  .smartphone:after {
    content: '';
    display: block;
    width: 35px;
    height: 35px;
    position: absolute;
    left: 50%;
    bottom: -75px;
    transform: translate(-50%, -50%);
    background: #333;
    border-radius: 50%;
  }

  /* The screen (or content) of the device */
  .smartphone .content {
    width: 360px;
    height: 680px;
    background: white;
  }
`;
class DynamicPhoneStyle{
     mobilePhoneStyle(){
        return new Promise((resolve, reject)=>{
             if(phoneStyle){
                 resolve(phoneStyle);
             }else{
                 reject('Not found style');
             }
         })
     }
}

export const dynamicPhoneStyle=new DynamicPhoneStyle();