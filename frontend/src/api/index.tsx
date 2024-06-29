const BEANSTALK_URL =
  "http://chatter-env.eba-gxgabbz2.eu-north-1.elasticbeanstalk.com";
export const LOCAL_URL = "http://localhost:8000";

export const BASE_URL = BEANSTALK_URL;
export const WEBSOCKET_URL = BEANSTALK_URL.replace("http", "wss");
