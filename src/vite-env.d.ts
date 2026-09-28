/// <reference types="vite/client" />

declare module 'swiper' {
  import Swiper from 'swiper/types/swiper-class';
  import { SwiperModule } from 'swiper/types/shared';

  export const Navigation: SwiperModule;
  export const Pagination: SwiperModule;
  export const Autoplay: SwiperModule;
  export const EffectFade: SwiperModule;
  export const EffectCube: SwiperModule;
  export const EffectFlip: SwiperModule;
  export const EffectCoverflow: SwiperModule;
  export const EffectCreative: SwiperModule;
  export const EffectCards: SwiperModule;
  export const Scrollbar: SwiperModule;
  export const Thumbs: SwiperModule;
  export const Virtual: SwiperModule;
  export const Keyboard: SwiperModule;
  export const Mousewheel: SwiperModule;
  export const FreeMode: SwiperModule;
  export const Grid: SwiperModule;
  export const Manipulation: SwiperModule;
  export const Controller: SwiperModule;
  export const A11y: SwiperModule;
  export const History: SwiperModule;
  export const HashNavigation: SwiperModule;

  export default Swiper;
  export { Swiper };
  export * from 'swiper/types';
}

declare module 'swiper/css';
declare module 'swiper/css/*';
