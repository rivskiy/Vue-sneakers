
export const onStopScroll = isShow => {
  isShow
  ? document.body.style.overflow = 'hidden'
  : document.body.style.overflow = ''
}