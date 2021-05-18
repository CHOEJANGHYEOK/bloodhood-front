const defaultFontSize = 16

export const toRem = (px: number) => {
  return `${(px / defaultFontSize).toFixed(4)}rem`
}