export default function useGlobalCssProps({
  grid = false,
  row = false,
  nopadding = false,
  main = false,
  colorAlt = false,
  divider = false,
  alt = false,
  form = false,
  large = false,
  disabled = false,
  nav = false,
}) {
  const cssVariables = {
    sectionCss: {
      "--section_display": grid ? "grid" : "flex",
      "--section_flex-direction": row ? "row" : "column",
      "--section_padding1": nopadding ? "0" : "32px 48px 0",
      "--section_padding2": nopadding ? "0" : "16px 16px 0",
    },

    sectionTitleCss: {
      "--section-title_font-size1": main ? "65px" : "56px",
      "--section-title_font-size2": main ? "56px" : "48px",
      "--section-title_font-size3": main ? "28px" : "32px",
      "--section-title_line-height1": main ? "72px" : "56px",
      "--section-title_line-height2": main ? "56px" : "48px",
      "--section-title_line-height3": main ? "32px" : "40px",
      "--section-title_padding1": main ? "58px 0 16px" : 0,
      "--section-title_padding2": main ? "16px 0 8px" : 0,
      "--section-title_padding3": main ? "0px 0 12px" : 0,
    },

    sectionDividerCss: {
      "--section-divider_background": colorAlt
        ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
        : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)",
      "--section-divider_margin": divider ? "4rem 0" : "",
    },

    buttonBackCss: {
      "--button-back_width1": alt ? "150px" : "262px",
      "--button-back_width2": alt ? "150px" : "184px",
      "--button-back_height1": alt ? "52px" : "64px",
      "--button-back_height2": alt ? "52px" : "48px",
      "--button-back_font-size1": alt ? "20px" : "24px",
      "--button-back_font-size2": alt ? "20px" : "16px",
      "--button-back_opacity": disabled ? ".5" : "1",
      "--button-back_background": alt
        ? "linear-gradient(270deg, #ff622e 0%, #B133FF 100%)"
        : "linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)",
      "--button-back_margin": alt || form ? "0" : "0 0 80px",
      "--button-back_margin-bottom1": alt ? "0" : "64px",
      "--button-back_margin-bottom2": alt ? "0" : "32px",
    },

    buttonFrontCss: {
      "--button-front_background": alt
        ? "linear-gradient(270deg, #F46737 0%, #945DD6 100%)"
        : "linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)",
      "--button-front_opacity": disabled ? ".5" : "1",
      "--button-front_font-size1": alt ? "20px" : "24px",
      "--button-front_font-size2": alt ? "20px" : "16px",
      "--button-front_box-shadow": disabled
        ? "inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)"
        : "none",
    },

    linkContainerCss: {
      "--link-container_margin-left1": large ? "24px" : "16px",
      "--link-container_margin-left2": large ? "16px" : "8px",
      "--link-container_margin-left3": large ? "0" : "8px",
    },

    linkIconImageCss: {
      "--link-icon-img_height1": large ? "32px" : "24px",
      "--link-icon-img_height2": nav ? "16px" : "24px",
      "--link-icon-img_height3": large ? "32px" : "16px",
    },
  };
  return cssVariables;
}
