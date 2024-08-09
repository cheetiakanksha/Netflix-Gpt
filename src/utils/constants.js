export const bgImg="https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/98533523-112a-488c-a711-d0517920cdb5/US-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_31571788-f022-43e9-904f-9ad7e6d57bde_medium.jpg";
export const logo="https://static.wikia.nocookie.net/925fa2de-087e-47f4-8aed-4f5487f0a78c/scale-to-width/755";
export const cLogo="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,
    },
  };
export const SUPPORTED_LANGUAGES=[{identifier:"en", name:"English"},{identifier:"hindi", name:"Hindi"},{identifier:"spanish", name:"Spanish"}]
export const IMG_CDN="https://image.tmdb.org/t/p/w500";
export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY;