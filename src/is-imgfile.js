export function isImageFile(anything) {
  return new RegExp(/^.*\.(jpg|JPG|png|PNG|gif|GIF|bmp|BMP|webp|WEBP)$/).test(anything);
}