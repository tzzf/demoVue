export const IsPC = () : boolean => {
  const userAgentInfo: any = navigator.userAgent;
  const Agents: any = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  let flag: any = true;  
  for (let v = 0; v < Agents.length; v++) {  
      if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }  
  }  
  return flag;
}

//判断是否在微信中  
export const isWechat = () : boolean => {
  const ua: any = window.navigator.userAgent.toLowerCase();
  if (ua.match(/micromessenger/i) == 'micromessenger') {
      return true;
  } else {
      return false;
  }
}

/**
 * 补全文件地址
 * @param src
 */ 
export const prefixFile = (src?: string): string => {
  if (!src) return '';
  if (src.includes('||')) [src] = src.split('||');
  if (src.includes('http')) return src;
  return `${process.env.VUE_APP_GLOBAL_request}${src}`;
}