
export const onStopScroll = showCart => {
  showCart
  ? document.body.style.overflow = 'hidden'
  : document.body.style.overflow = ''
}