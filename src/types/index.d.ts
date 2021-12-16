export interface ResponseData {
  api_code: number;
  data?: any;
  message: string;
}

export interface AjaxParams {
  api: string;
  method?: 'get' | 'post';
  data?: any;
}